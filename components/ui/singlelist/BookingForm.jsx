"use client";
import { useState } from "react";
import InputField from "@/components/shared/FormField";
import useFormValidation from "@/app/hooks/useFormValidation";
import { Field } from "@headlessui/react";
import PhoneInput from "../../shared/PhoneSelect";
import PrivacyPolicySwitch from "@/components/shared/PolicyButton";
import { Calendar, X } from "lucide-react";

// Generate time options for business hours (9 AM to 5 PM)
const timeOptions = Array.from({ length: 9 }, (_, i) => {
  const hour = 9 + i;
  const time = `${hour}:00`;
  let displayTime;

  if (hour === 12) {
    displayTime = "12:00 PM";
  } else if (hour > 12) {
    displayTime = `${hour - 12}:00 PM`;
  } else {
    displayTime = `${hour}:00 AM`;
  }

  return {
    value: time,
    label: displayTime,
  };
});
export default function ModalBooking({ setIsModalOpen }) {
  const initialValues = {
    fullName: "",
    email: "",
    phone: {
      code: "",
      phoneCode: "",
      number: "",
    },
    theDate: "",
    theTime: "",
    agreeToPolicy: false,
  };

  //Validation Schema
  const validationSchema = {
    fullName: [{ type: "required", message: "Your name is required" }],
    email: [
      {
        type: "required",
        message: "We'd love to stay in touch—your email is required.",
      },
    ],
    phone: true,
    theDate: [
      { type: "required", message: "Which day should we book you in?" },
    ],
    theTime: [{ type: "required", message: "Let’s lock in your perfect time" }],
    agreeToPolicy: {
      type: "boolean",
      message: "Please confirm that you agree to our Privacy Policy.",
    },
  };

  const {
    values,
    errors,
    isSubmitting,
    handlePhoneChange,
    handleChange,
    handleSubmit,
    handleBlur,
    setValue,
    reset,
    touched,
  } = useFormValidation(initialValues, validationSchema);
  const handleFormSubmit = async (formData) => {
    try {
      const bookingData = {
        ...formData,
        propertyId,
        //userId,
      };
      console.log("Submitting form data", bookingData);
      reset();
    } catch (error) {
      console.log("error submitting the form", error);
    }
  };
  return (
    <section>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-blue-900 font-semibold">
              Book a Viewing
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(handleFormSubmit);
            }}
            className="space-y-4"
          >
            <div>
              <InputField
                title="fullName"
                label="Full Name"
                type="text"
                required={true}
                placeholder="Your Full name"
                autoComplete="given-name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                errors={errors}
                touched={touched}
              />
            </div>

            <div>
              <InputField
                title="email"
                label="Email"
                type="email"
                required={true}
                value={values.email}
                placeholder="Enter your email"
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
              />
            </div>

            <div>
              <InputField
                title="theDate"
                label="Preferred Date"
                type="date"
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                placeholder="dd/mm/yyyy"
                required={true}
                value={values.theDate}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                errors={errors}
                touched={touched}
              />
            </div>

            <InputField
              title="theTime"
              label="Preferred Time"
              type="select"
              required={true}
              placeholder="Select a time"
              options={timeOptions}
              value={values.theTime}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              errors={errors}
              touched={touched}
            />
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
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    Book Viewing
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
