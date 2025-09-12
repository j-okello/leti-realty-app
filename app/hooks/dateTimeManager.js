"use client";
import { useCallback, useMemo } from "react";

const useTimeOptions = ({ bookingDate }) => {
  // Business hours configuration
  const BUSINESS_HOURS = {
    start: 8,
    end: 17,
    timezone: "Africa/Nairobi", // Configurable timezone
  };

  // Helper function to generate time options
  const generateTimeOptions = useCallback(
    (selectedDate = new Date()) => {
      const now = new Date();
      const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
      const selected = new Date(
        selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
      );

      // Compare dates without time components
      const isToday = selected.toDateString() === today.toDateString();

      let startHour = BUSINESS_HOURS.start;
      if (isToday) {
        // Add 1-hour buffer for booking preparation
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();

        // If it's exactly the current hour, we need to add 1 hour
        startHour = Math.max(
          BUSINESS_HOURS.start,
          currentMinutes > 0 ? currentHour + 1 : currentHour
        );
      }

      const endHour = BUSINESS_HOURS.end;

      // No available slots if start time is beyond business hours
      if (startHour > endHour) return [];

      return Array.from({ length: endHour - startHour + 1 }, (_, i) => {
        const hour = startHour + i;
        const dateTimeValue = new Date(selectedDate);
        dateTimeValue.setHours(hour, 0, 0, 0);

        // Format for display (12-hour format with AM/PM)
        const displayTime = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(dateTimeValue);

        return {
          value: dateTimeValue.toISOString(),
          label: displayTime,
        };
      });
    },
    [BUSINESS_HOURS.start, BUSINESS_HOURS.end]
  );

  // Helper function to get today's date in local timezone
  const getTodayLocalDate = useCallback(() => {
    const today = new Date();
    return new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
  }, []);

  // Generate time slots dynamically
  const timeOptions = useMemo(() => {
    if (!bookingDate) return [];
    return generateTimeOptions(new Date(bookingDate));
  }, [bookingDate, generateTimeOptions]);

  // Get minimum date (today)
  const minDate = useMemo(() => getTodayLocalDate(), [getTodayLocalDate]);

  // Check if selected date has available time slots
  const hasAvailableSlots = useMemo(() => {
    return timeOptions.length > 0;
  }, [timeOptions]);

  // Get business hours info
  const businessHours = useMemo(
    () => ({
      start: BUSINESS_HOURS.start,
      end: BUSINESS_HOURS.end,
      timezone: BUSINESS_HOURS.timezone,
      // Fixed formatting to show AM/PM correctly
      formatted: `${BUSINESS_HOURS.start % 12 || 12}:00 ${BUSINESS_HOURS.start >= 12 ? "PM" : "AM"} - ${BUSINESS_HOURS.end % 12 || 12}:00 ${BUSINESS_HOURS.end >= 12 ? "PM" : "AM"}`,
    }),
    [BUSINESS_HOURS.start, BUSINESS_HOURS.end, BUSINESS_HOURS.timezone]
  );

  return {
    timeOptions,
    minDate,
    hasAvailableSlots,
    businessHours,
    generateTimeOptions,
  };
};

export default useTimeOptions;
