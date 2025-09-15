import React, { useState, useEffect } from "react";
import {
  useCookieConsent,
  DEFAULT_PREFERENCES,
} from "@/app/hooks/cookieConsent";
import CookiePopupHeader from "./CookiePopupHeader";
import CookieBasicView from "./CookieBasicView";
import CookieSettingsView from "./CookieSettingsView";

const CookiePopup = ({
  showDelay = 1000,
  cookiePolicyUrl = "/[legal]/cookie-policy",
  allowClose = true,
}) => {
  const { hasConsent, acceptAll, rejectAll, saveConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, showDelay);
      return () => clearTimeout(timer);
    }
  }, [hasConsent, showDelay]);

  const handleClose = () => {
    if (allowClose) {
      setIsVisible(false);
    }
  };

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
  };

  const handleTogglePreference = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleBack = () => {
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={handleClose} />

      {/* Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:bottom-6 md:left-6 md:right-auto md:max-w-lg md:rounded-xl md:border">
        <div className="p-6">
          <CookiePopupHeader
            onClose={handleClose}
            showCloseButton={allowClose}
          />

          {!showSettings ? (
            <CookieBasicView
              onAcceptAll={handleAcceptAll}
              onRejectAll={handleRejectAll}
              onShowSettings={handleShowSettings}
              cookiePolicyUrl={cookiePolicyUrl}
            />
          ) : (
            <CookieSettingsView
              preferences={preferences}
              onTogglePreference={handleTogglePreference}
              onSavePreferences={handleSavePreferences}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CookiePopup;
