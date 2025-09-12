{
  /* Form Debug Info (Development Only) */
}
{
  process.env.NODE_ENV === "development" && (
    <details className="mt-4 text-xs text-gray-500">
      <summary className="cursor-pointer hover:text-gray-700">
        Debug Info
      </summary>
      <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-40">
        {JSON.stringify(
          {
            isFormValid,
            isDirty,
            hasErrors: Object.keys(errors).some(
              (key) => errors[key] && errors[key] !== ""
            ),
            errorCount: Object.values(errors).filter(
              (error) => error && error !== ""
            ).length,
            canSubmit: !isSubmitting && isFormValid && hasAvailableSlots,

            touchedFields: Object.keys(touched).filter((key) => touched[key]),
            missingTouched: [
              "fullName",
              "email",
              "phone",
              "bookingDate",
              "bookingTime",
              "agreeToPolicy",
            ].filter((field) => !touched[field]),
            errors,
            touched,
            timeSlots: timeOptions.length,
            hasAvailableSlots,
            businessHours: businessHours.formatted,
            values: {
              ...values,
              property,
              phone: values.phone ? "***" : null, // Hide phone in debug
            },
          },
          null,
          2
        )}
      </pre>
    </details>
  );
}
