function NormalizedPhoneNumber(phone) {
  // Remove all non-digit characters
  const digits = phone.replace(/\D+/g, "");

  // Convert to +254... if it starts with 0 or 254
  if (digits.startsWith("0")) {
    return `+254${digits.substring(1)}`; // 0712345678 → +254712345678
  }
  if (digits.startsWith("254")) {
    return `+${digits}`; // 254712345678 → +254712345678
  }

  // If already in +254... format, return as-is
  return phone;
}

export default NormalizedPhoneNumber;
