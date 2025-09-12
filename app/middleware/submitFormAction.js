import getClientIp from "./clientIP";

// Format retry time for display
const formatRetryTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "a little while";
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  }
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""}`;
};
const handleFormSubmit = async ({
  formData,
  setSubmitStatus,
  serverSubmitAction,
  setErrors,
  reset,
}) => {
  console.log("Form submission triggered");

  // Reset previous status
  setSubmitStatus({
    success: false,
    message: "",
    isRateLimit: false,
    retryAfter: null,
  });

  try {
    console.log("Submitting form data", formData);

    // Get client IP for headers if needed
    const clientIp = await getClientIp();
    const headers = {
      "X-Client-IP": clientIp,
      "User-Agent": navigator.userAgent,
      "X-Forwarded-For": clientIp,
    };

    // Call the server action
    const result = await serverSubmitAction(formData, headers);

    console.log("Server response:", result);

    // Handle different response types
    if (result.errors) {
      // Check if it's a rate limit error
      if (result.isRateLimit) {
        const retryTime = formatRetryTime(result.retryAfter);
        setSubmitStatus({
          success: false,
          message: `Too many submissions. Please try again in ${retryTime}.`,
          isRateLimit: true,
          retryAfter: result.retryAfter || 60,
        });
        return;
      }
      if (typeof result.errors === "object") {
        setErrors(result.errors);

        setSubmitStatus({
          success: false,
          message: "Please correct the highlighted errors and try again.",
          isRateLimit: false,
          retryAfter: null,
        });
        return;
      }
    }

    if (result.success) {
      // Handle successful submission
      setSubmitStatus({
        success: true,
        message:
          "Thank you for submitting your property details. Our team will review and reach out to you shortly.",
        isRateLimit: false,
        retryAfter: null,
      });

      // Reset form after successful submission
      setTimeout(() => {
        reset();
        setSubmitStatus({
          success: false,
          message: "",
          isRateLimit: false,
          retryAfter: null,
        });
      }, 3000);
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    setSubmitStatus({
      success: false,
      message:
        error.message || "Failed to submit the request. Please try again.",
      isRateLimit: false,
      retryAfter: null,
    });
  }
};

export default handleFormSubmit;
