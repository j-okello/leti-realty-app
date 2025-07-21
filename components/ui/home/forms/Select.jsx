import { useState } from "react";

export default function OptionSelect({
  label,
  title,
  listitems,
  helperText = "",
  value,
  onChange,
  placeholder,
  errors = {},
  disabled = false,
  required = false,
  className = "",
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

      <select
        label={label}
        title={title}
        listitems={listitems}
        value={value}
        onChange={(e) => onChange(title, e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
          errors[title] ? "ring-red-500 focus:ring-red-500" : ""
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
        aria-invalid={errors[title] ? "true" : "false"}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {listitems.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {helperText && !errors[title] && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}

      {errors[title] && (
        <p className="mt-1 text-sm text-red-600">{errors[title]}</p>
      )}
    </div>
  );
}
