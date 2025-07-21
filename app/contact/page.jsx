"use client";
import React, { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { MapPin, Phone, Mail } from "lucide-react";
import { Field } from "@headlessui/react";
import TextInput from "@/components/ui/contact/TextInput";
import PrivacyPolicySwitch from "@/components/ui/contact/Switch";
import Submit from "@/components/ui/contact/SubmitButton";
import PhoneInput from "@/components/ui/contact/PhoneSelect";
import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const breadcrumbItems = [{ label: "Contact us", href: "/contact" }];
const info = [
  {
    title: "Get in touch",
    description:
      "Have a question or ready to make your next move? We'd love to hear from you. Reach out today — your real estate journey starts here.",
    location: "West Park Towers, Westlands, Nairobi, Kenya",
    phone: "+254 123 456 789",
    mail: "info@letirealty.com",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: {
      code: "",
      phoneCode: "",
      number: "",
    },
    email: "",
    message: "",
    agreeToPolicy: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = useCallback((phoneData) => {
    console.log("handlePhoneChange called with:", phoneData);
    setFormData((prev) => ({ ...prev, phone: phoneData }));
    // Clear phone error when phone changes
    setErrors((prev) => ({ ...prev, phone: "" }));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.number) newErrors.phone = "Phone number is required";
    if (!formData.agreeToPolicy)
      newErrors.agreed = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Form submission started");
    console.log("Current formData:", formData);

    const isValid = validateForm();
    console.log("Form validation result:", isValid);

    if (!isValid) {
      console.log("Form validation failed");
      console.log("Current errors:", errors);
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form is valid, submitting to API...");

      // Format the phone number for submission
      let phoneData = formData.phone;
      if (formData.phone.number && formData.phone.code) {
        try {
          const phoneUtil = PhoneNumberUtil.getInstance();
          const phoneNumber = phoneUtil.parse(
            formData.phone.number,
            formData.phone.code
          );

          if (!phoneUtil.isValidNumber(phoneNumber)) {
            throw new Error("Invalid phone number");
          }

          phoneData = {
            ...formData.phone,
            e164: phoneUtil.format(phoneNumber, PhoneNumberFormat.E164),
            international: phoneUtil.format(
              phoneNumber,
              PhoneNumberFormat.INTERNATIONAL
            ),
            national: phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL),
          };
        } catch (error) {
          console.error("Error formatting phone number:", error);
          setErrors((prev) => ({
            ...prev,
            phone: "Invalid phone number format",
          }));
          setIsSubmitting(false);
          return;
        }
      }

      const submissionData = {
        ...formData,
        phone: phoneData,
      };

      console.log("Submitting formatted data:", submissionData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        setSubmitMessage("Thank you! Your message has been sent successfully.");

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: { code: "", phoneCode: "", number: "" },
          email: "",
          message: "",
          agreeToPolicy: false,
        });
        setErrors({});
      } else {
        console.error("API error:", result);
        setSubmitMessage(
          result.error || "An error occurred while submitting the form."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="mt-6 p-3  w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {info.map((i, index) => (
          <div key={index} className="p-4 md:p-8">
            <h1 className="md:text-5xl text-2xl font-light text-blue-900 mb-3">
              {i.title}
            </h1>
            <p className="text-pretty font-light mb-5 text-slate-700">
              {i.description}
            </p>
            <div className="space-y-3 text-pretty font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-900" />
                <span className="text-pretty">{i.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-900" />
                <span>{i.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-900" />
                <span>{i.mail}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 md:p-8">
          <div className="bg-blue-50 h-full p-6 min-h-64 rounded-lg">
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <TextInput
                  title="firstName"
                  label="First Name"
                  type="text"
                  required={true}
                  placeholder="Mary"
                  autoComplete="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  errors={errors}
                />

                <div>
                  <TextInput
                    title="lastName"
                    label="Last Name"
                    type="text"
                    required={true}
                    placeholder="Doe"
                    autoComplete="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    errors={errors}
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextInput
                    title="email"
                    label="Email"
                    type="email"
                    required={true}
                    placeholder="marydoe@mail.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    errors={errors}
                  />
                </div>
                <div className="sm:col-span-2">
                  <PhoneInput
                    onPhoneChange={handlePhoneChange}
                    initialValue={formData.phone}
                    errors={errors}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <TextInput
                      title="message"
                      label="Your Message"
                      multiline={true}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                  <PrivacyPolicySwitch
                    checked={formData.agreeToPolicy}
                    onChange={(checked) =>
                      setFormData({ ...formData, agreeToPolicy: checked })
                    }
                    errors={errors}
                    link="/privacy-policy"
                    disabled={isSubmitting}
                  />
                </Field>
                <div className="sm:col-span-2 mt-4">
                  <Submit disabled={isSubmitting} />
                  {isSubmitting && (
                    <p className="mt-2 text-sm text-blue-600">
                      Submitting your message...
                    </p>
                  )}
                  {submitMessage && (
                    <p
                      className={`mt-2 text-sm ${
                        submitMessage.includes("successfully")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
