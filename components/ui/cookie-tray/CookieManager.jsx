import React from "react";
import CookiePopup from "./CookiePopup";
import CookieSettingsButton from "./CookieSettingsButton";

const CookieManager = ({
  showSettingsButton = true,
  popupProps = {},
  buttonProps = {},
}) => {
  return (
    <>
      <CookiePopup {...popupProps} />
      {showSettingsButton && <CookieSettingsButton {...buttonProps} />}
    </>
  );
};

export default CookieManager;
