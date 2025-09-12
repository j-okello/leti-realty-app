import { CheckCircle, AlertCircle, X } from "lucide-react";

export default function RenderStatusMessage({
  submitStatus,
  reset,
  onDismiss,
}) {
  if (!submitStatus) return null;

  const isSuccess = submitStatus.success;

  return (
    <div
      className={`p-4 mt-4 rounded-lg flex items-start gap-3 transition-all duration-200 relative ${
        isSuccess
          ? "bg-green-50 text-green-800 border border-green-200"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
      role="alert"
      aria-live="polite"
    >
      {/* Status Icon */}
      {isSuccess ? (
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-base">
          {isSuccess
            ? "Thank you — we’ve received your booking"
            : "Error submitting your booking"}
        </p>

        {submitStatus.message && (
          <p className="text-sm mt-1 leading-relaxed opacity-90">
            {submitStatus.message}
          </p>
        )}

        {/* Action Buttons */}
        {!isSuccess && reset && (
          <button
            onClick={reset}
            className="inline-flex items-center text-sm mt-3 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
            type="button"
            aria-label="Clear form and try again"
          >
            Clear form and try again
          </button>
        )}
      </div>

      {/* Dismiss Button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          className={`p-1 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            isSuccess
              ? "hover:bg-green-100 text-green-600 focus:ring-green-300"
              : "hover:bg-red-100 text-red-600 focus:ring-red-300"
          }`}
          type="button"
          aria-label="Dismiss message"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
