"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const useRecaptcha = (config = {}) => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);
  const widgetRef = useRef(null);
  const widgetId = useRef(null);

  const {
    siteKey,
    theme = "light",
    size = "normal",
    action = "submit",
    onSuccess,
    onError,
    onExpired,
  } = config;

  useEffect(() => {
    if (!siteKey) return;

    const loadRecaptchaScript = () => {
      return new Promise((resolve, reject) => {
        if (typeof window !== "undefined" && window.grecaptcha) {
          setIsReady(true);
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
        script.async = true;
        script.defer = true;

        window.onRecaptchaLoad = () => {
          setIsReady(true);
          resolve();
        };

        script.onerror = () => {
          setError("Failed to load reCAPTCHA script");
          reject(new Error("Failed to load reCAPTCHA script"));
        };

        document.head.appendChild(script);
      });
    };

    loadRecaptchaScript().catch((err) => {
      setError(err.message);
    });
  }, [siteKey]);

  const render = useCallback(() => {
    if (!isReady || !widgetRef.current) return;

    try {
      widgetId.current = window.grecaptcha.render(widgetRef.current, {
        sitekey: siteKey,
        theme,
        size: size === "invisible" ? "invisible" : size,
        callback: (token) => {
          onSuccess?.(token);
        },
        "expired-callback": () => {
          onExpired?.();
        },
        "error-callback": () => {
          onError?.();
        },
      });
    } catch (err) {
      setError(err.message);
    }
  }, [isReady, siteKey, theme, size, onSuccess, onExpired, onError]);

  const execute = useCallback(async () => {
    if (!isReady) throw new Error("reCAPTCHA not ready");

    try {
      if (size === "invisible" && widgetId.current !== null) {
        return new Promise((resolve) => {
          const originalCallback = onSuccess;
          const tempCallback = (token) => {
            originalCallback?.(token);
            resolve(token);
          };

          window.grecaptcha.execute(widgetId.current);
        });
      }
      return null;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [isReady, size, onSuccess]);

  const getResponse = useCallback(() => {
    if (!isReady || widgetId.current === null) return "";

    return window.grecaptcha.getResponse(widgetId.current);
  }, [isReady]);

  const reset = useCallback(() => {
    if (!isReady || widgetId.current === null) return;

    window.grecaptcha.reset(widgetId.current);
  }, [isReady]);

  return {
    widgetRef,
    isReady,
    error,
    render,
    execute,
    getResponse,
    reset,
  };
};

export default useRecaptcha;
