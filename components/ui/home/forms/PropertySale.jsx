"use client";
import { submitPropertySaleRequestForm } from "@/app/actions/post-actions";
import handleFormSubmit from "@/app/middleware/submitFormAction";
import { propertyOptions } from "@/app/lib/ListSelect";
import { useEffect } from "react";
import InputField from "@/components/shared/FormField";
import PrivacyPolicySwitch from "@/components/shared/PolicyButton";
import useFormValidation from "@/app/hooks/useFormValidation";
import { useCookieConsent } from "@/app/hooks/cookieConsent";
import PhoneInput from "@/components/shared/PhoneSelect";
import { Field } from "@headlessui/react";
import { X } from "lucide-react";

const typeOfProperty = propertyOptions.propertyType;
const sellingOptions = propertyOptions.selling;
const timelineOptions = propertyOptions.timeline;

export default function PropertySaleRequest({
  handleDialogClick,
  toggleModal,
  submitStatus,
  setSubmitStatus,
}) {
  useEffect(() => {
    if (submitStatus.isRateLimit && submitStatus.retryAfter) {
      const timer = setInterval(() => {
        setSubmitStatus((prev) => ({
          ...prev,
          retryAfter: Math.max(0, prev.retryAfter - 1),
          message: `Too many submissions. Please try again in ${formatRetryTime(prev.retryAfter - 1)}.`,
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [submitStatus.isRateLimit, submitStatus.retryAfter, setSubmitStatus]);

  const initialValues = {
    fullName: "",
    phone: {
      code: "",
      phoneCode: "",
      number: "",
    },
    email: "",
    propertyAddress: "",
    propertyType: "",
    other: "",
    bedrooms: 0,
    bathrooms: 0,
    squareFootage: 0,
    reasonForSelling: "",
    timeline: "",
    additionalInfo: "",
    agreeToPolicy: false,
  };

  const validationSchema = {
    fullName: [{ type: "required", message: "Your name is required" }],
    phone: true,
    email: [
      {
        type: "required",
        message: "We'd love to stay in touch—your email is required.",
      },
    ],
    propertyAddress: [
      { type: "required", message: "Where is the property located" },
    ],
    propertyType: [{ type: "required", message: "What is the property type" }],
    bedrooms: [
      { type: "required", message: "How many bedrooms" },
      { type: "number", message: "Bedrooms must be a number" },
    ],
    bathrooms: [
      { type: "required", message: "How many bathrooms" },
      { type: "number", message: "Bathrooms must be a number" },
    ],
    squareFootage: [
      { type: "required", message: "What is the size of the property" },
      { type: "number", message: "SquareFootage must be a number" },
    ],
    reasonForSelling: [{ type: "required", message: "Why are you selling" }],
    timeline: [
      { type: "required", message: "Specify your timelines for selling" },
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
    handlePhoneChange,
    handleChange,
    handleSubmit,
    handleBlur,
    setValue,
    reset,
    touched,
  } = useFormValidation(initialValues, validationSchema);

  const submitForm = async () => {
    await handleFormSubmit({
      formData: values,
      setSubmitStatus,
      serverSubmitAction: submitPropertySaleRequestForm,
      setErrors,
      reset,
    });
  };

  return (
    <div
      onClick={handleDialogClick}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="flex justify-between items-center border-b p-4 bg-blue-900">
          <h2 className="text-xl font-bold text-white">
            Property Sale Request Form
          </h2>
          <div>
            <button
              onClick={toggleModal}
              className="text-blue-200 hover:text-white text-2xl cursor-pointer"
              aria-label="Close modal"
            >
              <X />
            </button>
          </div>
        </div>
        <div className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(submitForm);
            }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                Owner Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <InputField
                    title="fullName"
                    label="Full Name"
                    type="text"
                    required={true}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>
              <div>
                <PhoneInput
                  required={true}
                  onPhoneChange={handlePhoneChange}
                  initialValue={values.phone}
                  errors={errors}
                  disabled={isSubmitting}
                  onBlur={handleBlur}
                  touched={touched}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                Property Details
              </h3>
              <div>
                <InputField
                  title="propertyType"
                  label="Property Type"
                  required={true}
                  value={values.propertyType}
                  options={typeOfProperty}
                  placeholder="e.g. House, Apartment.."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />
              </div>
              {values.propertyType === "OTHER" && (
                <div>
                  <InputField
                    title="other"
                    label="Specify other"
                    type="text"
                    required={true}
                    value={values.other}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>
              )}
              <div>
                <InputField
                  title="propertyAddress"
                  label="Property Address"
                  type="text"
                  required={true}
                  placeholder="Paste a Google Maps link (use the share button to get link)"
                  value={values.propertyAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <InputField
                    title="bedrooms"
                    label="Bedrooms"
                    type="number"
                    placeholder="0"
                    required={true}
                    value={values.bedrooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div>
                  <InputField
                    title="bathrooms"
                    label="Bathrooms"
                    type="number"
                    placeholder="0"
                    required={true}
                    value={values.bathrooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div>
                  <InputField
                    title="squareFootage"
                    label="Sq. Ft."
                    type="number"
                    placeholder="0"
                    required={true}
                    value={values.squareFootage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>
              <div>
                <InputField
                  title="reasonForSelling"
                  label="Reason for selling"
                  required={true}
                  value={values.reasonForSelling}
                  placeholder="Select a reason for selling"
                  options={sellingOptions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                Additional Information
              </h3>
              <div>
                <InputField
                  label="Desired timeline"
                  title="timeline"
                  required={true}
                  value={values.timeline}
                  placeholder="Select an option"
                  options={timelineOptions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div>
                <InputField
                  title="additionalInfo"
                  label="Additional Information"
                  type="text"
                  multiline={true}
                  rows={4}
                  required={false}
                  value={values.additionalInfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 mb-4 rounded ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : submitStatus.isRateLimit
                      ? "bg-orange-100 text-orange-600"
                      : "bg-red-100 text-red-800"
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <p className="font-medium">
                      {submitStatus.isRateLimit
                        ? "Rate Limit Exceeded"
                        : submitStatus.success
                          ? "Success!"
                          : "Error"}
                    </p>
                    <p className="text-sm mt-1">{submitStatus.message}</p>
                    {submitStatus.retryAfter && (
                      <p className="text-xs mt-2">
                        You can try again in{" "}
                        {formatRetryTime(submitStatus.retryAfter)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <Field className="flex gap-x-4 sm:col-span-2">
              <PrivacyPolicySwitch
                checked={values.agreeToPolicy}
                onChange={(checked) => setValue("agreeToPolicy", checked)}
                errors={errors}
                disabled={isSubmitting}
                touched={touched}
              />
            </Field>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || submitStatus.isRateLimit}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting || submitStatus.isRateLimit
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting
                  ? "Submitting..."
                  : submitStatus.isRateLimit
                    ? "Rate Limited - Try Again Later"
                    : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
