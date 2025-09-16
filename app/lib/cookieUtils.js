import { cookies } from "next/headers";

export const COOKIE_CONSENT_NAME = "cookieConsent";

// Server-side utility to get cookie consent
export function getCookieConsent() {
  try {
    const cookieStore = cookies();
    const consentCookie = cookieStore.get(COOKIE_CONSENT_NAME);

    if (consentCookie?.value) {
      return JSON.parse(consentCookie.value);
    }
    return null;
  } catch (error) {
    console.error("Error reading cookie consent:", error);
    return null;
  }
}

// Check if specific cookie category is allowed
export function isCookieCategoryAllowed(category) {
  const consent = getCookieConsent();
  return consent && consent[category] === true;
}

// Server action helper to track analytics events
export async function trackAnalyticsEvent(eventData) {
  "use server";

  if (!isCookieCategoryAllowed("analytics")) {
    console.log("Analytics tracking skipped - user consent not given");
    return false;
  }

  // Your analytics tracking logic here
  console.log("Tracking analytics event:", eventData);

  // Example: Send to your analytics service
  try {
    // await fetch('your-analytics-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(eventData)
    // });
    return true;
  } catch (error) {
    console.error("Analytics tracking failed:", error);
    return false;
  }
}

// Server action helper to store marketing data
export async function storeMarketingData(data) {
  "use server";

  if (!isCookieCategoryAllowed("marketing")) {
    console.log("Marketing data storage skipped - user consent not given");
    return false;
  }

  // Your marketing data storage logic here
  console.log("Storing marketing data:", data);
  return true;
}
