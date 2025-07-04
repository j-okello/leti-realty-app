"use client";
import React from "react";
import Link from "next/link";
import { Switch, Label } from "@headlessui/react";

export default function PrivacyPolicySwitch({
  checked = false,
  onChange,
  errors = {},
  required = true,
  link = "#",
  className = "",
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-6 items-center">
          <Switch
            checked={checked}
            onChange={onChange}
            className={`group relative inline-flex w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              checked ? "bg-blue-400" : "bg-blue-200"
            }`}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-blue-900 shadow-lg ring-0 transition duration-200 ease-in-out ${
                checked ? " translate-x-6" : "translate-x-1 "
              }`}
            />
          </Switch>
        </div>

        <Label className="text-sm text-gray-700">
          By selecting this, you agree to our{" "}
          <Link
            href={link}
            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </Link>
          {required && <span className="text-red-600">*</span>}
        </Label>
      </div>

      {errors.agreed && (
        <p className="mt-1 text-sm text-red-600">{errors.agreed}</p>
      )}
    </div>
  );
}
