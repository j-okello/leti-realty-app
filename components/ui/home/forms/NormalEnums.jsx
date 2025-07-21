const mapPropertyType = (input) =>
  ({
    Apartment: "APARTMENT",
    Bungalow: "BUNGALOW",
    Maisonette: "MAISONETTE",
    "Studio Apartment": "STUDIO_APARTMENT",
    "Serviced Apartment": "SERVICED_APARTMENT",
    Penthouse: "PENTHOUSE",
    Townhouse: "TOWNHOUSE",
    Villa: "VILLA",
    Mansion: "MANSION",
    Duplex: "DUPLEX",
    "Single Family Home": "SINGLE_FAMILY_HOME",
    "Multi-Family Home": "MULTI_FAMILY_HOME",
    Other: "OTHER",
  })[input] || "OTHER";

const mapReasonForSelling = (input) =>
  ({
    "Investment Sale": "INVESTMENT_SALE",
    Upgrading: "UPGRADING",
    Relocation: "RELOCATION",
    Downsizing: "DOWNSIZING",
    Other: "OTHER",
  })[input] || "OTHER";

const mapTimeline = (input) =>
  ({
    ASAP: "ASAP",
    "1-3 months": "ONE_TO_THREE_MONTHS",
    "3-6 months": "THREE_TO_SIX_MONTHS",
    Flexible: "FLEXIBLE",
  })[input] || "FLEXIBLE";

export default { mapPropertyType, mapReasonForSelling, mapTimeline };
