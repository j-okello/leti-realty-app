"use client";
import { useState, useCallback, useRef } from "react";
import { validateForm } from "../utils/forms/FormValidation";

// Helper function for phone validation (implement based on your needs)
const isPhone = (phoneData) => {
  if (!phoneData || typeof phoneData !== "object") return false;
  const { code, phoneCode, number } = phoneData;

  // Basic validation - customize based on your requirements
  if (!code || !phoneCode || !number) return false;

  // Check if number has at least 7 digits (adjust as needed)
  const cleanNumber = number.toString().replace(/\D/g, "");
  return cleanNumber.length >= 7;
};

// Helper function to check if value is empty
const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

const useFormValidation = (initialValues = {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store validationSchema in ref to avoid dependency issues
  const validationSchemaRef = useRef(validationSchema);
  validationSchemaRef.current = validationSchema;

  // Custom validation for phone field
  const validatePhone = useCallback((phoneData) => {
    if (!phoneData || typeof phoneData !== "object") {
      return "Phone number is required";
    }

    const { code, phoneCode, number } = phoneData;

    // Check if any required field is missing
    if (!code || !phoneCode || isEmpty(number)) {
      return "We'd love to get in touch don't forget your number";
    }

    // Validate phone format
    if (!isPhone(phoneData)) {
      return "Please enter a valid phone number";
    }

    return null; // No error
  }, []);

  const handlePhoneChange = useCallback((phoneData) => {
    //console.log("handlePhoneChange called with:", phoneData);
    setValues((prev) => ({ ...prev, phone: phoneData }));

    // Clear phone error when phone changes
    setErrors((prev) => ({ ...prev, phone: "" }));
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === "checkbox" ? checked : value;

      setValues((prev) => ({ ...prev, [name]: fieldValue }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Special handling for phone field
      if (name === "phone") {
        const phoneError = validatePhone(values.phone);
        setErrors((prev) => ({ ...prev, phone: phoneError || "" }));
      } else {
        // Standard field validation
        const fieldSchema = { [name]: validationSchemaRef.current[name] };
        const result = validateForm({ [name]: values[name] }, fieldSchema);
        setErrors((prev) => ({ ...prev, [name]: result.errors[name] || "" }));
      }
    },
    [values, validatePhone]
  );

  const validate = useCallback(() => {
    // First run the standard validation
    const result = validateForm(values, validationSchemaRef.current);
    const newErrors = { ...result.errors };

    // Add custom phone validation
    if (validationSchemaRef.current.phone) {
      const phoneError = validatePhone(values.phone);
      if (phoneError) {
        newErrors.phone = phoneError;
      }
    }

    // Update the result
    const finalResult = {
      ...result,
      errors: newErrors,
      isValid: Object.keys(newErrors).length === 0,
    };

    setErrors(finalResult.errors);
    return finalResult;
  }, [values, validatePhone]);

  const handleSubmit = useCallback(
    async (onSubmit) => {
      setIsSubmitting(true);
      const result = validate();

      if (result.isValid) {
        try {
          await onSubmit(values);
        } catch (error) {
          console.error("Form submission error:", error);
          setErrors((prev) => ({
            ...prev,
            form: error.message || "Submission failed",
          }));
        }
      }

      setIsSubmitting(false);
      return result;
    },
    [values, validate]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handlePhoneChange, // Make sure to return this
    handleBlur,
    handleSubmit,
    validate,
    reset,
    setValue,
    setValues,
    setErrors,
  };
};

export default useFormValidation;
