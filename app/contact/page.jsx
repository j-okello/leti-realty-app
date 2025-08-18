"use client";

import React, { useRef } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { MapPin, Phone, Mail } from "lucide-react";
import { Field } from "@headlessui/react";
import InputField from "@/components/shared/FormField";
import PhoneInput from "@/components/shared/PhoneSelect";
import PrivacyPolicySwitch from "@/components/shared/PolicyButton";
//import RecaptchaWidget from "@/components/shared/RecaptchaWidget";
import Submit from "@/components/shared/SubmitButton";
import useFormValidation from "../hooks/useFormValidation";

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
    isSubmitting,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    handleBlur,
    setValue,
    reset,
    touched,
  } = useFormValidation(initialValues, validationSchema);

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Submitting form data", formData);
      reset();
    } catch (error) {
      console.log("error submitting the form", error);
    }
  };
  return (
    <section id="contact">
      <div className="mt-6 p-3 w-full bg-blue-50">
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(handleFormSubmit);
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
                    link="/privacy-policy"
                    disabled={isSubmitting}
                    touched={touched}
                  />
                </Field>

                <div className="sm:col-span-2 mt-4">
                  <Submit disabled={isSubmitting} />
                  {isSubmitting && (
                    <p className="mt-2 text-sm text-blue-600">
                      Submitting your message...
                    </p>
                  )}
                  {errors.form && (
                    <p className="mt-2 text-sm text-red-600">{errors.form}</p>
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
