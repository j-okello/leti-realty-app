"use client";
import { useState, useCallback, useMemo } from "react";
import { z } from "zod";
import { submitBookingForm } from "@/app/actions/post-actions";
import handleFormSubmit from "@/app/middleware/submitFormAction";
import useTimeOptions from "@/app/hooks/dateTimeManager";
import InputField from "@/components/shared/FormField";
import useFormValidation from "@/app/hooks/useFormValidation";
import { Field } from "@headlessui/react";
import PhoneInput from "../../shared/PhoneSelect";
import PrivacyPolicySwitch from "@/components/shared/PolicyButton";
import {
  Calendar,
  X,
  clock,
  AlertCircle,
  CheckCircle,
  MapPin,
} from "lucide-react";
import RenderTimeSlotMessage from "./forms/TimeMessage";
import RenderStatusMessage from "./forms/StatusMessage";

// Helper function to format property name
const formatPropertyName = (property) => {
  if (!property) return "Property";
  return property.length > 50 ? `${property.substring(0, 50)}...` : property;
};

export default function ModalBooking({ setIsModalOpen, property }) {
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });
  const initialValues = {
    fullName: "",
    email: "",
    phone: {
      code: "",
      phoneCode: "",
      number: "",
    },
    bookingDateDate: "",
    bookingTimeTime: "",
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
    bookingDate: [
      { type: "required", message: "Which day should we book you in?" },
    ],
    bookingTime: [
      { type: "required", message: "Let’s lock in your perfect time" },
    ],
    agreeToPolicy: {
      type: "boolean",
      message: "Please confirm that you agree to our Privacy Policy.",
    },
  };

  const {
    values,
    errors,
    setErrors,
    isSubmitting,
    isFormValid,
    isDirty,
    handlePhoneChange,
    handleChange,
    handleSubmit,
    handleBlur,
    setValue,
    reset,
    touched,
  } = useFormValidation(initialValues, validationSchema);

  const { timeOptions, minDate, hasAvailableSlots, businessHours } =
    useTimeOptions({
      bookingDate: values.bookingDate, // Pass the selected date
    });

  // Format property name for display
  const displayPropertyName = useMemo(
    () => formatPropertyName(property),
    [property]
  );

  // Memoize form submission handler
  const submitForm = useCallback(async () => {
    try {
      await handleFormSubmit({
        formData: { ...values, property },
        setSubmitStatus,
        serverSubmitAction: submitBookingForm,
        setErrors,
        reset,
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  }, [values, property, setErrors, reset]);

  // Handle form reset
  const handleFormReset = useCallback(() => {
    reset();
    setSubmitStatus({ success: false, message: "" });
  }, [reset]);

  // Handle modal close with confirmation if form is dirty
  const handleCloseModal = useCallback(() => {
    if (isDirty && !submitStatus.success) {
      const confirmClose = window.confirm(
        "You have unsaved changes. Are you sure you want to close?"
      );
      if (!confirmClose) return;
    }
    setIsModalOpen(false);
  }, [isDirty, submitStatus.success, setIsModalOpen]);

  // Handle date change with time slot reset
  const handleDateChange = useCallback(
    (e) => {
      handleChange(e);
      // Reset time when date changes
      setValue("bookingTime", "");
    },
    [handleChange, setValue]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && !isSubmitting) {
        handleCloseModal();
      }
    },
    [handleCloseModal, isSubmitting]
  );

  return (
    <section>
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <div
          className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 pb-4 rounded-t-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h2
                  id="modal-title"
                  className="text-xl text-blue-900 font-semibold"
                >
                  <p className="text-sm text-gray-600 font-normal mb-1">
                    Book a viewing for:
                  </p>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <p
                      className="text-lg break-words leading-tight"
                      title={property}
                    >
                      {displayPropertyName}
                    </p>
                  </div>
                </h2>
                <p id="modal-description" className="sr-only">
                  Fill out the form below to book a property viewing
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="Close booking modal"
                disabled={isSubmitting}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Form Content */}
          <div className="p-6 pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submitForm);
              }}
              className="space-y-5"
            >
              {/* Personal Information */}
              <fieldset className="space-y-4">
                <legend className="text-sm font-medium text-gray-900 border-b border-gray-100 pb-2">
                  Personal Information
                </legend>
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
              </fieldset>
              {/* Booking Details */}
              <fieldset className="space-y-4">
                <legend className="text-sm font-medium text-gray-900 border-b border-gray-100 pb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Viewing Details
                </legend>

                <div>
                  <InputField
                    title="bookingDate"
                    label="Preferred Date"
                    type="date"
                    min={minDate}
                    placeholder="dd/mm/yyyy"
                    required={true}
                    value={values.bookingDate}
                    onChange={handleDateChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>

                <div>
                  {/* USE timeOptions FROM HOOK */}
                  <InputField
                    title="bookingTime"
                    label="Preferred Time"
                    type="select"
                    required={true}
                    placeholder="Select a time"
                    options={timeOptions}
                    value={values.bookingTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting || timeOptions.length === 0}
                    errors={errors}
                    touched={touched}
                    icon={<clock className="w-4 h-4" />}
                  />
                  {/*RENDER TIME SLOT MESSAGE */}
                  {
                    <RenderTimeSlotMessage
                      timeOptions={timeOptions}
                      BUSINESS_HOURS={businessHours}
                      values={values}
                    />
                  }
                </div>
              </fieldset>
              <Field className="flex gap-x-4 sm:col-span-2">
                <PrivacyPolicySwitch
                  checked={values.agreeToPolicy}
                  onChange={(checked) => setValue("agreeToPolicy", checked)}
                  errors={errors}
                  disabled={isSubmitting}
                  touched={touched}
                />
              </Field>

              {/* Success / error alert */}
              {!isSubmitting && submitStatus.message && (
                <RenderStatusMessage
                  submitStatus={submitStatus}
                  reset={handleFormReset}
                  onDismiss={() => setSubmitStatus(null)}
                />
              )}

              {/* Form Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !hasAvailableSlots}
                  className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
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
      </div>
    </section>
  );
}
