"use client";
import { useState, useCallback, useRef, useMemo } from "react";
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
      if (isSubmitting) return; // Prevent double submission

      setIsSubmitting(true);

      try {
        const result = validate();

        if (result.isValid) {
          await onSubmit(values);
          // Clear form-level errors on successful submission
          setErrors((prev) => {
            const { form, ...otherErrors } = prev;
            return otherErrors;
          });
        } else {
          // Mark all schema fields as touched to show errors
          const schemaFields = Object.keys(validationSchemaRef.current);
          const allTouched = schemaFields.reduce(
            (acc, key) => {
              acc[key] = true;
              return acc;
            },
            { ...touched }
          );
          setTouched(allTouched);
        }

        return result;
      } catch (error) {
        console.error("Form submission error:", error);
        const errorMessage =
          error?.message || "Submission failed. Please try again.";
        setErrors((prev) => ({ ...prev, form: errorMessage }));

        return {
          isValid: false,
          errors: { form: errorMessage },
        };
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, isSubmitting, touched]
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

  // Utility function to check if a field has an error and is touched
  const getFieldError = useCallback(
    (fieldName) => {
      return touched[fieldName] ? errors[fieldName] : undefined;
    },
    [touched, errors]
  );

  // Utility function to check if form is valid
  const isFormValid = useMemo(() => {
    return Object.keys(errors).length === 0;
  }, [errors]);

  // Utility function to check if form has been modified
  const isDirty = useMemo(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }, [values, initialValues]);

  return {
    // State
    values,
    errors,
    touched,
    isSubmitting,
    isFormValid,
    isDirty,

    // Handlers
    handleChange,
    handlePhoneChange,
    handleBlur,
    handleSubmit,

    // Methods
    validate,
    reset,
    setValue,
    setValues,
    setErrors,

    // Utilities
    getFieldError,
  };
};

export default useFormValidation;
