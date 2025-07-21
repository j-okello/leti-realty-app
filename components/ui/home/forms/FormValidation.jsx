const validateForm = (formData) => {
  const newErrors = {};

  if (!formData?.fullName?.trim()) newErrors.fullName = "Full Name is required";

  if (!formData?.bedrooms) newErrors.bedrooms = "Bedrooms are required";
  if (!formData?.bathrooms) newErrors.bathrooms = "Bathrooms are required";
  if (!formData?.propertyType)
    newErrors.propertyType = "Property Type is required";
  if (!formData?.propertyAddress)
    newErrors.propertyAddress = "Property Address is required";
  if (!formData?.reasonForSelling)
    newErrors.reasonForSelling = "Reason for Selling is required";
  if (!formData?.squareFootage)
    newErrors.squareFootage = "Square Footage is required";
  if (!formData?.timeline) newErrors.timeline = "Timeline is required";
  if (!formData?.agreeToPolicy)
    newErrors.agreed = "You must agree to the privacy policy";

  if (!formData?.phone) {
    newErrors.phone = "Phone number is required";
  } else if (!/^(\+254|0)(7|1)\d{8}$/.test(formData.phone)) {
    newErrors.phone = "Please enter a valid Kenyan phone number";
  }

  if (!formData?.email?.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }

  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};

export default validateForm;
