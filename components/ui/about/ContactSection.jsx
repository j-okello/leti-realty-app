"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Field } from "@headlessui/react";
import TextInput from "@/components/shared/contact-form/TextInput";
import PrivacyPolicySwitch from "@/components/shared/contact-form/Switch";
import Submit from "@/components/shared/contact-form/SubmitButton";
import PhoneInput from "@/components/shared/contact-form/PhoneSelect";

const info = [
  {
    title: "Get in touch",
    description: "Proin volutpat consequat porttitor cras nullam gravida at",
    location: "West Park Towers, Westlands, Nairobi, Kenya",
    phone: "+254 123 456 789",
    mail: "info@letirealty.com",
  },
];

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: {
      countryCode: "",
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

  const handlePhoneChange = (phoneData) => {
    setFormData((prev) => ({ ...prev, phone: phoneData }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Format the final phone number
      const phoneUtil =
        require("google-libphonenumber").PhoneNumberUtil.getInstance();
      try {
        const phoneNumber = phoneUtil.parse(
          formData.phone.number,
          formData.phone.countryCode.toUpperCase()
        );

        const formattedData = {
          ...formData,
          phone: {
            e164: phoneUtil.format(
              phoneNumber,
              phoneUtil.PhoneNumberFormat.E164
            ),
            international: phoneUtil.format(
              phoneNumber,
              phoneUtil.PhoneNumberFormat.INTERNATIONAL
            ),
            countryCode: formData.phone.countryCode,
          },
        };
        console.log("Form submitted:", formattedData);
        // Submit to your API here
      } catch (error) {
        console.error("Error formatting phone number:", error);
        setErrors((prev) => ({
          ...prev,
          phone: "Invalid phone number format",
        }));
      }
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  disabled={false}
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
                    disabled={false}
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
                    disabled={false}
                    errors={errors}
                  />
                </div>
                <div className="sm:col-span-2">
                  <PhoneInput />
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
                  />
                </Field>
                <div className="sm:col-span-2 mt-4">
                  <Submit />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
