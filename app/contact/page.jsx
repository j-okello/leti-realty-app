"use client";

import React, { useEffect, useState } from "react";
import { submitContactForm } from "../actions/post-actions";
import handleFormSubmit from "../middleware/submitFormAction";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { MapPin, Phone, Mail } from "lucide-react";
import { Field } from "@headlessui/react";
import InputField from "@/components/shared/FormField";
import PhoneInput from "@/components/shared/PhoneSelect";
import PrivacyPolicySwitch from "@/components/shared/PolicyButton";
// import RecaptchaWidget from "@/components/shared/RecaptchaWidget";
import Submit from "@/components/shared/SubmitButton";
import useFormValidation from "../hooks/useFormValidation";

const breadcrumbItems = [{ label: "Contact us", href: "/contact" }];
const contactInfo = [
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
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const validationSchema = {
    firstName: [{ type: "required", message: "First name is required" }],
    lastName: [{ type: "required", message: "Last name is required" }],
    email: [
      {
        type: "required",
        message: "We’d love to stay in touch—your email is required.",
      },
    ],
    phone: true,
    message: [
      {
        type: "required",
        message: "We’d love to hear from you—don’t forget your message.",
      },
    ],
    agreeToPolicy: {
      type: "boolean",
      message: "Please confirm that you agree to our Privacy Policy.",
    },
  };

  const initialValues = {
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
  };

  const {
    values,
    errors,
    setErrors,
    isSubmitting,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    handleBlur,
    setValue,
    reset,
    touched,
  } = useFormValidation(initialValues, validationSchema);

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    let timeoutId;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const submitForm = async () => {
    await handleFormSubmit({
      formData: values,
      setSubmitStatus,
      serverSubmitAction: submitContactForm,
      setErrors,
      reset,
    });
  };

  return (
    <section id="contact">
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Contact Information */}
        {contactInfo.map((contact, index) => (
          <div key={index} className="p-4 md:p-8">
            <h1 className="md:text-5xl text-2xl font-light text-blue-900 mb-3">
              {contact.title}
            </h1>
            <p className="text-pretty font-light mb-5 text-slate-700">
              {contact.description}
            </p>
            <div className="space-y-3 text-pretty font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-900" />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-900" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-900" />
                <span>{contact.mail}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Contact Form */}
        <div className="p-4 md:p-8">
          <div className="bg-blue-50 h-full p-6 min-h-64 rounded-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submitForm);
              }}
              className="mx-auto max-w-xl"
            >
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <InputField
                  title="firstName"
                  label="First Name"
                  type="text"
                  required={true}
                  placeholder="Mary"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />

                <InputField
                  title="lastName"
                  label="Last Name"
                  type="text"
                  required={true}
                  placeholder="Doe"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />

                <div className="sm:col-span-2">
                  <InputField
                    title="email"
                    label="Email"
                    type="email"
                    required={true}
                    placeholder="marydoe@mail.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>

                <div className="sm:col-span-2">
                  <PhoneInput
                    required={true}
                    onPhoneChange={handlePhoneChange}
                    initialValue={values.phone}
                    errors={errors}
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    helperText="Select your country and enter your phone number"
                  />
                </div>

                <div className="sm:col-span-2">
                  <InputField
                    title="message"
                    label="Your Message"
                    multiline={true}
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Type your message here..."
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>

                <Field className="flex gap-x-4 sm:col-span-2">
                  <PrivacyPolicySwitch
                    checked={values.agreeToPolicy}
                    onChange={(checked) => setValue("agreeToPolicy", checked)}
                    errors={errors}
                    disabled={isSubmitting}
                    touched={touched}
                  />
                </Field>

                <div className="sm:col-span-2 mt-4">
                  <Submit disabled={isSubmitting} />

                  {/* Loading message */}
                  {isSubmitting && (
                    <p
                      className="mt-2 text-sm text-blue-600"
                      role="status"
                      aria-live="polite"
                    >
                      Submitting your message...
                    </p>
                  )}

                  {/* Success / error alert */}
                  {!isSubmitting && submitStatus.message && (
                    <div
                      className={`p-4 mt-4 rounded ${
                        submitStatus.success
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                      role="alert"
                      aria-live="polite"
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  {/* Form-level error */}
                  {errors.form && (
                    <p className="mt-2 text-sm text-red-600" role="alert">
                      {errors.form}
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

/*
   <div className="sm:col-span-2">
                  <RecaptchaWidget
                    ref={recaptchaRef}
                    siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    version="v2"
                    title="recaptchaToken"
                    errors={errors}
                    onSuccess={handleRecaptchaSuccess}
                    onError={handleRecaptchaError}
                    onExpired={handleRecaptchaExpired}
                  />
                  {errors.recaptchaToken && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.recaptchaToken}
                    </p>
                  )}
                </div>

*/
