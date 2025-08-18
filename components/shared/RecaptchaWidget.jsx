"use client";
import React, { useEffect, forwardRef } from "react";
import useRecaptcha from "../../app/hooks/useRecaptcha";

const RecaptchaWidget = forwardRef(
  (
    {
      siteKey,
      theme = "light",
      size = "normal",
      onSuccess,
      onError,
      onExpired,
      className = "",
      errors = {},
      title = "recaptcha",
      ...props
    },
    ref
  ) => {
    const { widgetRef, isReady, error, render, execute, getResponse, reset } =
      useRecaptcha({
        siteKey,
        theme,
        size,
        onSuccess,
        onError,
        onExpired,
      });

    useEffect(() => {
      if (isReady) {
        render();
      }
    }, [isReady, render]);

    // Expose methods to parent component
    React.useImperativeHandle(
      ref,
      () => ({
        execute,
        getResponse,
        reset,
        isReady,
      }),
      [execute, getResponse, reset, isReady]
    );

    if (error) {
      return (
        <div className={`mb-4 ${className}`}>
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-800">reCAPTCHA Error: {error}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={`mb-4 ${className}`}>
        <div ref={widgetRef} className="recaptcha-widget" {...props} />
        {errors[title] && (
          <p className="mt-1 text-sm text-red-600">{errors[title]}</p>
        )}
      </div>
    );
  }
);

RecaptchaWidget.displayName = "RecaptchaWidget";

export default RecaptchaWidget;
