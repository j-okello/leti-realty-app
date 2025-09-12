// special cases for things that don’t fit sentence case directly
const specialCases = {
  ONE_TO_THREE_MONTHS: "1-3 months",
  THREE_TO_SIX_MONTHS: "3-6 months",
};

// convert ENUM_VALUE → "Sentence Case" or special
function toSentenceCase(str) {
  if (specialCases[str]) return specialCases[str];
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// enums (these should match what you use in Zod/Prisma)
const reasonForSelling = [
  "INVESTMENT_SALE",
  "UPGRADING",
  "RELOCATION",
  "DOWNSIZING",
  "OTHER",
];

const timeline = [
  "ASAP",
  "ONE_TO_THREE_MONTHS",
  "THREE_TO_SIX_MONTHS",
  "FLEXIBLE",
];

const propertyType = [
  "APARTMENT",
  "BUNGALOW",
  "MAISONETTE",
  "STUDIO_APARTMENT",
  "SERVICED_APARTMENT",
  "PENTHOUSE",
  "TOWNHOUSE",
  "VILLA",
  "MANSION",
  "DUPLEX",
  "SINGLE_FAMILY_HOME",
  "MULTI_FAMILY_HOME",
  "OTHER",
];

// now map them into {value, label} objects
const propertyOptions = {
  selling: reasonForSelling.map((val) => ({
    value: val,
    label: toSentenceCase(val),
  })),
  timeline: timeline.map((val) => ({
    value: val,
    label: toSentenceCase(val),
  })),
  propertyType: propertyType.map((val) => ({
    value: val,
    label: toSentenceCase(val),
  })),
};

export { propertyOptions, toSentenceCase };
