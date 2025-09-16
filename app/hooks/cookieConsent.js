import { useState, useEffect } from "react";

export const COOKIE_CATEGORIES = {
  NECESSARY: "necessary",
  FUNCTIONAL: "functional",
  ANALYTICS: "analytics",
  // MARKETING: "marketing",
};

export const DEFAULT_PREFERENCES = {
  [COOKIE_CATEGORIES.NECESSARY]: true,
  [COOKIE_CATEGORIES.FUNCTIONAL]: false,
  [COOKIE_CATEGORIES.ANALYTICS]: false,
  // [COOKIE_CATEGORIES.MARKETING]: false,
};

const COOKIE_CONSENT_NAME = "cookieConsent";
const COOKIE_CONSENT_DATE = "cookieConsentDate";

// Helper to set cookie with proper settings
function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure=${location.protocol === "https:"}`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to get from document.cookie first (server-readable)
    const cookieConsent = getCookie(COOKIE_CONSENT_NAME);

    if (cookieConsent) {
      try {
        setConsent(JSON.parse(cookieConsent));
      } catch (error) {
        console.error("Error parsing cookie consent from cookie:", error);
        // Fallback to localStorage
        const localStorageConsent = localStorage.getItem(COOKIE_CONSENT_NAME);
        if (localStorageConsent) {
          const parsed = JSON.parse(localStorageConsent);
          setConsent(parsed);
          // Sync to cookie
          setCookie(COOKIE_CONSENT_NAME, localStorageConsent);
        }
      }
    } else {
      // Fallback to localStorage for existing users
      const localStorageConsent = localStorage.getItem(COOKIE_CONSENT_NAME);
      if (localStorageConsent) {
        try {
          const parsed = JSON.parse(localStorageConsent);
          setConsent(parsed);
          // Sync to cookie for server access
          setCookie(COOKIE_CONSENT_NAME, localStorageConsent);
        } catch (error) {
          console.error("Error parsing localStorage consent:", error);
        }
      }
    }

    setIsLoading(false);
  }, []);

  const saveConsent = (preferences) => {
    try {
      const consentString = JSON.stringify(preferences);
      const dateString = new Date().toISOString();

      // Save to cookie (server-readable)
      setCookie(COOKIE_CONSENT_NAME, consentString);
      setCookie(COOKIE_CONSENT_DATE, dateString);

      // Also save to localStorage (backup)
      localStorage.setItem(COOKIE_CONSENT_NAME, consentString);
      localStorage.setItem(COOKIE_CONSENT_DATE, dateString);

      setConsent(preferences);
    } catch (error) {
      console.error("Error saving cookie consent:", error);
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      [COOKIE_CATEGORIES.NECESSARY]: true,
      [COOKIE_CATEGORIES.FUNCTIONAL]: true,
      [COOKIE_CATEGORIES.ANALYTICS]: true,
      // [COOKIE_CATEGORIES.MARKETING]: true,
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      [COOKIE_CATEGORIES.NECESSARY]: true,
      [COOKIE_CATEGORIES.FUNCTIONAL]: false,
      [COOKIE_CATEGORIES.ANALYTICS]: false,
      // [COOKIE_CATEGORIES.MARKETING]: false,
    };
    saveConsent(onlyNecessary);
  };

  const resetConsent = () => {
    // Clear cookie
    setCookie(COOKIE_CONSENT_NAME, "", -1);
    setCookie(COOKIE_CONSENT_DATE, "", -1);

    // Clear localStorage
    localStorage.removeItem(COOKIE_CONSENT_NAME);
    localStorage.removeItem(COOKIE_CONSENT_DATE);

    setConsent(null);
  };

  const hasConsent = () => {
    return consent !== null;
  };

  const isAllowed = (category) => {
    return consent && consent[category] === true;
  };

  return {
    consent,
    isLoading,
    hasConsent: hasConsent(),
    saveConsent,
    acceptAll,
    rejectAll,
    resetConsent,
    isAllowed,
  };
};
