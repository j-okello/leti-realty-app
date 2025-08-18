//Utiliti checks
const isEmpty = (value) => !value || value.toString().trim() === "";

const isEmail = (value) => /^\S+@\S+\.\S+$/.test(value);
const isPhone = (phoneData) => {
  // If it's a string (legacy support), use regex
  if (typeof phoneData === "string") {
    return /^[\d\s\-\+\(\)]+$/.test(phoneData);
  }

  // If it's an object, validate the structure and number
  if (typeof phoneData === "object" && phoneData !== null) {
    const { code, phoneCode, number } = phoneData;

    // Check if required fields exist
    if (!code || !phoneCode || !number) {
      return false;
    }

    // Validate phone number format (digits only, minimum length)
    const cleanNumber = number.replace(/\D/g, "");
    return cleanNumber.length >= 7 && cleanNumber.length <= 15;
  }

  return false;
};
const isUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
const isNumeric = (value) => /^\d+$/.test(value);
const isAlpha = (value) => /^[a-zA-Z\s]+$/.test(value);
const isAlphaNumeric = (value) => /^[a-zA-Z0-9\s]+$/.test(value);

// Built-in validation rules
const validationRules = {
  required: (value, message = "This field is required") => {
    // Handle phone object structure
    if (typeof value === "object" && value !== null && "number" in value) {
      return isEmpty(value.number) ? message : null;
    }
    return isEmpty(value) ? message : null;
  },

  email: (value, message = "Please enter a valid email address") =>
    value && !isEmail(value) ? message : null,

  phone: (value, message = "Please enter a valid phone number") => {
    // Handle empty value
    if (!value) return null;

    // Handle phone object structure
    if (typeof value === "object" && value !== null) {
      if (!value.number || isEmpty(value.number)) {
        return null; // Don't validate empty phone numbers unless required
      }
      return !isPhone(value) ? message : null;
    }

    // Handle string phone numbers (legacy)
    return !isPhone(value) ? message : null;
  },

  url: (value, message = "Please enter a valid URL") =>
    value && !isUrl(value) ? message : null,

  minLength:
    (minLen) =>
    (value, message = `Minimum ${minLen} characters required`) =>
      value && value.length < minLen ? message : null,

  maxLength:
    (maxLen) =>
    (value, message = `Maximum ${maxLen} characters allowed`) =>
      value && value.length > maxLen ? message : null,

  min:
    (minVal) =>
    (value, message = `Value must be at least ${minVal}`) =>
      value && Number(value) < minVal ? message : null,

  max:
    (maxVal) =>
    (value, message = `Value must be at most ${maxVal}`) =>
      value && Number(value) > maxVal ? message : null,

  numeric: (value, message = "Please enter only numbers") =>
    value && !isNumeric(value) ? message : null,

  alpha: (value, message = "Please enter only letters") =>
    value && !isAlpha(value) ? message : null,

  alphaNumeric: (value, message = "Please enter only letters and numbers") =>
    value && !isAlphaNumeric(value) ? message : null,

  pattern:
    (regex) =>
    (value, message = "Invalid format") =>
      value && !regex.test(value) ? message : null,

  custom:
    (customFn) =>
    (value, message = "Invalid value") =>
      value && !customFn(value) ? message : null,

  confirmed:
    (confirmField) =>
    (value, message = "Fields do not match", formData) =>
      value && value !== formData[confirmField] ? message : null,

  boolean: (
    value,
    message = "Please confirm that you agree to our Privacy Policy."
  ) => (!value ? message : null),

  recaptcha: (value, message = "Please complete the reCAPTCHA verification") =>
    isEmpty(value) ? message : null,
};

const validateForm = (formData, validationSchema) => {
  const errors = {};

  Object.keys(validationSchema).forEach((fieldName) => {
    const fieldRules = validationSchema[fieldName];
    const fieldValue = formData[fieldName];

    const rules = Array.isArray(fieldRules) ? fieldRules : [fieldRules];

    for (const rule of rules) {
      let validationFn;
      let errorMessage;

      if (typeof rule === "string") {
        validationFn = validationRules[rule];
        errorMessage = undefined;
      } else if (typeof rule === "object") {
        const { type, message, ...params } = rule;

        if (validationRules[type]) {
          const ruleFunction = validationRules[type];
          if (typeof ruleFunction === "function" && ruleFunction.length > 2) {
            const paramKeys = Object.keys(params);
            if (paramKeys.length > 0) {
              validationFn = ruleFunction(params[paramKeys[0]]);
            } else {
              validationFn = ruleFunction();
            }
          } else {
            validationFn = ruleFunction;
          }
          errorMessage = message;
        }
      } else if (typeof rule === "function") {
        validationFn = rule;
      }

      if (validationFn) {
        const result = validationFn(fieldValue, errorMessage, formData);
        if (result) {
          errors[fieldName] = result;
          break;
        }
      }
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export { validateForm, validationRules };
