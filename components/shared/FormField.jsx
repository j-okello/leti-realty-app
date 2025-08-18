"use client";
import React from "react";

export default function InputField({
  title,
  label,
  min,
  required = false,
  type = "text",
  value,
  onChange,
  onBlur, // Added this
  options = [],
  placeholder = "",
  disabled = false,
  autoComplete = "off",
  className = "",
  errors = {},
  touched = {}, // Added this
  helperText = "",
  multiline = false,
  rows = 4,
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={title}
          className={`block text-sm font-semibold text-blue-900 ${
            disabled ? "text-gray-400" : ""
          }`}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div className="mt-1 relative">
        {multiline ? (
          <textarea
            id={title}
            name={title}
            rows={rows}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              errors[title] ? "ring-red-500 focus:ring-red-500" : ""
            } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
            aria-invalid={errors[title] ? "true" : "false"}
          />
        ) : options.length > 0 ? (
          <select
            id={title}
            name={title}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={`block w-full rounded-md border-0 px-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              errors[title] ? "ring-red-500 focus:ring-red-500" : ""
            } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
            aria-invalid={errors[title] ? "true" : "false"}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={title}
            name={title}
            type={type}
            value={value || ""}
            min={min}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete={autoComplete}
            className={`block w-full rounded-md border-0 px-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              errors[title] ? "ring-red-500 focus:ring-red-500" : ""
            } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
            aria-invalid={errors[title] ? "true" : "false"}
          />
        )}
      </div>

      {helperText && !errors[title] && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}

      {/* Show errors only if field has been touched or if there's an error */}
      {errors[title] && (touched[title] || errors[title]) && (
        <p className="mt-1 text-sm text-red-600">{errors[title]}</p>
      )}
    </div>
  );
}
