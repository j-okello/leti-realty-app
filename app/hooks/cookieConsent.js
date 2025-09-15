import { useState, useEffect } from "react";

export const COOKIE_CATEGORIES = {
  NECESSARY: "necessary",
  FUNCTIONAL: "functional",
  ANALYTICS: "analytics",
  // MARKETING: 'marketing'
};

export const DEFAULT_PREFERENCES = {
  [COOKIE_CATEGORIES.NECESSARY]: true,
  [COOKIE_CATEGORIES.FUNCTIONAL]: false,
  [COOKIE_CATEGORIES.ANALYTICS]: false,
  //[COOKIE_CATEGORIES.MARKETING]: false
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        setConsent(null);
      }
    }
    setIsLoading(false);
  }, []);

  const saveConsent = (preferences) => {
    try {
      localStorage.setItem("cookieConsent", JSON.stringify(preferences));
      localStorage.setItem("cookieConsentDate", new Date().toISOString());
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
      //[COOKIE_CATEGORIES.MARKETING]: true
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      [COOKIE_CATEGORIES.NECESSARY]: true,
      [COOKIE_CATEGORIES.FUNCTIONAL]: false,
      [COOKIE_CATEGORIES.ANALYTICS]: false,
      // [COOKIE_CATEGORIES.MARKETING]: false
    };
    saveConsent(onlyNecessary);
  };

  const resetConsent = () => {
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("cookieConsentDate");
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
