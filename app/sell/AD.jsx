"use client";
import { useState, useCallback, useRef, useMemo } from "react";
import { validateForm } from "../utils/forms/FormValidation";

// Helper function for phone validation
const isValidPhone = (phoneData) => {
  if (!phoneData || typeof phoneData !== "object") return false;
  const { code, phoneCode, number } = phoneData;

  // Basic validation
  if (!code || !phoneCode || !number) return false;

  // Check if number has at least 6 digits
  const cleanNumber = String(number).replace(/\D/g, "");
  return cleanNumber.length >= 6 && cleanNumber.length <= 15; // Added max length
};

// Helper function to check if value is empty
const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (typeof value === "object") {
    if (Array.isArray(value)) return value.length === 0;
    return Object.keys(value).length === 0;
  }
  return false;
};

// Helper to get field name from validation schema for better error messages
const getFieldLabel = (fieldName) => {
  return fieldName
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const useFormValidation = (initialValues = {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store validationSchema in ref to avoid dependency issues
  const validationSchemaRef = useRef(validationSchema);
  validationSchemaRef.current = validationSchema;

  // Memoize number fields to avoid recalculating on every render
  const numberFields = useMemo(
    () => ["bedrooms", "bathrooms", "squareFootage"],
    []
  );

  // Phone validation messages
  const phoneMessages = useMemo(
    () => ({
      required: "We'd love to get in touch - don't forget your number!",
      invalid: "Please enter a valid phone number",
      missingFields: "Please complete all phone number fields",
    }),
    []
  );

  // Custom validation for phone field
  const validatePhone = useCallback(
    (phoneData) => {
      const phoneSchema = validationSchemaRef.current.phone;
      if (!phoneSchema) return null; // No validation required

      // Check if phone is required
      const isRequired =
        phoneSchema === true ||
        (Array.isArray(phoneSchema) &&
          phoneSchema.some((r) => r.type === "required"));

      if (!phoneData || typeof phoneData !== "object") {
        return isRequired ? phoneMessages.required : null;
      }

      const { code, phoneCode, number } = phoneData;

      // Check if any required field is missing
      if (!code || !phoneCode || isEmpty(number)) {
        return isRequired ? phoneMessages.missingFields : null;
      }

      // Validate phone format
      if (!isValidPhone(phoneData)) {
        return phoneMessages.invalid;
      }

      return null; // No error
    },
    [phoneMessages]
  );

  const handlePhoneChange = useCallback(
    (phoneData) => {
      setValues((prev) => ({ ...prev, phone: phoneData }));

      // Validate phone immediately when it changes
      const phoneError = validatePhone(phoneData);
      setErrors((prev) => ({
        ...prev,
        phone: phoneError || undefined, // Use undefined instead of empty string
      }));
    },
    [validatePhone]
  );

  const convertFieldValue = useCallback(
    (name, value, type) => {
      if (type === "checkbox") {
        return Boolean(value);
      }

      if (numberFields.includes(name)) {
        if (value === "" || value === null || value === undefined) {
          return undefined;
        }
        const numValue = Number(value);
        return isNaN(numValue) ? value : numValue; // Keep original if invalid for validation to catch
      }

      return value;
    },
    [numberFields]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = convertFieldValue(
        name,
        type === "checkbox" ? checked : value,
        type
      );

      // Handle nested phone fields
      if (name.startsWith("phone.")) {
        const phoneField = name.split(".")[1];
        const updatedPhone = { ...values.phone, [phoneField]: fieldValue };
        setValues((prev) => ({ ...prev, phone: updatedPhone }));

        // Validate phone when its nested fields change
        const phoneError = validatePhone(updatedPhone);
        setErrors((prev) => ({ ...prev, phone: phoneError || undefined }));
        return;
      }

      // Standard field update
      setValues((prev) => ({ ...prev, [name]: fieldValue }));

      // Clear error when user starts typing (only if there was an error)
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors, values.phone, validatePhone, convertFieldValue]
  );

  const validateSingleField = useCallback((name, value) => {
    const fieldSchema = { [name]: validationSchemaRef.current[name] };
    const result = validateForm({ [name]: value }, fieldSchema);
    return result.errors[name] || null;
  }, []);

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Handle nested phone fields
      if (name.startsWith("phone.")) {
        const phoneError = validatePhone(values.phone);
        setErrors((prev) => ({ ...prev, phone: phoneError || undefined }));
        return;
      }

      // Standard field validation
      const fieldError = validateSingleField(name, values[name]);
      setErrors((prev) => ({ ...prev, [name]: fieldError || undefined }));
    },
    [values, validatePhone, validateSingleField]
  );

  const validate = useCallback(() => {
    try {
      // Run standard validation
      const result = validateForm(values, validationSchemaRef.current);
      const newErrors = { ...result.errors };

      // Add custom phone validation if phone field exists in schema
      if (validationSchemaRef.current.phone) {
        const phoneError = validatePhone(values.phone);
        if (phoneError) {
          newErrors.phone = phoneError;
        }
      }

      // Enhanced required field validation with better error messages
      Object.entries(validationSchemaRef.current).forEach(
        ([fieldName, fieldSchema]) => {
          const isRequired =
            fieldSchema === true ||
            (Array.isArray(fieldSchema) &&
              fieldSchema.some((r) => r.type === "required"));

          if (isRequired && isEmpty(values[fieldName])) {
            if (!newErrors[fieldName]) {
              // Don't override existing errors
              newErrors[fieldName] = `${getFieldLabel(fieldName)} is required`;
            }
          }
        }
      );

      // Filter out undefined/null errors
      const cleanErrors = Object.fromEntries(
        Object.entries(newErrors).filter(([_, error]) => error)
      );

      const finalResult = {
        ...result,
        errors: cleanErrors,
        isValid: Object.keys(cleanErrors).length === 0,
      };

      setErrors(cleanErrors);
      return finalResult;
    } catch (error) {
      console.error("Validation error:", error);
      const errorResult = {
        isValid: false,
        errors: { form: "Validation failed. Please check your input." },
      };
      setErrors(errorResult.errors);
      return errorResult;
    }
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

  const reset = useCallback(
    (newInitialValues) => {
      const resetValues = newInitialValues || initialValues;
      setValues(resetValues);
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
    },
    [initialValues]
  );

  const setValue = useCallback(
    (name, value, shouldValidate = true) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      if (!shouldValidate) return;

      // Validate the field after setting value
      if (name === "phone") {
        const phoneError = validatePhone(value);
        setErrors((prev) => ({ ...prev, phone: phoneError || undefined }));
      } else {
        const fieldError = validateSingleField(name, value);
        setErrors((prev) => ({ ...prev, [name]: fieldError || undefined }));
      }
    },
    [validatePhone, validateSingleField]
  );

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
