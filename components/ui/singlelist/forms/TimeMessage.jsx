import { Clock } from "lucide-react";
export default function RenderTimeSlotMessage({
  timeOptions,
  values,
  BUSINESS_HOURS,
}) {
  if (timeOptions.length > 0 || !values.bookingDate) return null;
  return (
    <div className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-md p-3 mt-2 flex items-start gap-2">
      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <p>
        No time slots available for this date. Our viewing hours are{" "}
        {BUSINESS_HOURS.start}:00 AM - {BUSINESS_HOURS.end}:00 PM. Please select
        a future date.
      </p>
    </div>
  );
}
