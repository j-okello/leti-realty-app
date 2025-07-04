import dynamic from "next/dynamic";

// Helper function for price formatting
function formatPrice(
  price,
  { currency = "USD", maxDigits = 0, locale = "en-US" } = {}
) {
  // Safely convert string prices to numbers
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.-]/g, ""))
      : Number(price);

  // Validate input
  if (isNaN(numericPrice)) {
    console.warn(`Invalid price value: ${price}`);
    return "Price unavailable";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDigits,
  }).format(numericPrice);
}
export function getDynamicIcon(IconName) {
  return dynamic(() =>
    import("lucide-react").then((mod) => mod[IconName] || mod["HelpCircle"])
  );
}
