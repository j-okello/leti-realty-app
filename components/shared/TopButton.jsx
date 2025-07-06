"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton({
  targetId = "hero",
  threshold = 0.2,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Check if target is in view
      const rect = targetElement.getBoundingClientRect();
      const targetInView =
        rect.top >= 0 && rect.bottom <= window.innerHeight * (1 + threshold);

      // Check if user is at bottom of page
      const bottomOffset = 100;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - bottomOffset;

      setIsVisible(!targetInView);
      setIsAtBottom(nearBottom);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {}, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, [targetId, threshold]);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Base styles
  const baseStyles = {
    position: "fixed",
    right: "1.5rem",
    padding: "0.75rem",
    borderRadius: "9999px",
    background: "linear-gradient(to bottom, #2563eb, #3b82f6)",
    color: "white",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 300ms ease",
    outline: "none",
  };

  // Dynamic styles
  const dynamicStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(2.5rem)",
    bottom: isAtBottom ? "6rem" : "1.5rem",
  };

  return (
    <button
      onClick={scrollToTarget}
      style={{ ...baseStyles, ...dynamicStyles }}
      aria-label="Back to top"
      onMouseEnter={() => {
        dynamicStyles.transform = "scale(1.05)";
      }}
      onMouseLeave={() => {
        dynamicStyles.transform = isVisible
          ? "translateY(0)"
          : "translateY(2.5rem)";
      }}
      className="cursor-pointer"
    >
      <ArrowUp size={24} style={{ flexShrink: 0 }} />
    </button>
  );
}
