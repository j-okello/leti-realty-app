"use client";

import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Preamble, DataUsage, DataManagement } from "@/app/lib/Privacy";

const breadcrumbItems = [
  { label: "Legal", href: "/legal" },
  { label: "Data-Privacy" },
];

function formatDate() {
  const date = new Date("2025-09-12");
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function DataPrivacy() {
  const lastUpdated = Date.now();

  return (
    <section>
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-6xl md:text-center text-start mx-auto px-6 py-2 md:py-4 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-2">
          Leti Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Last updated {formatDate(lastUpdated)}
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-4 not-last-of-type:px-4 selection:bg-yellow-300">
        <Preamble />
        <DataUsage />
        <DataManagement date={formatDate(lastUpdated)} />
      </div>
    </section>
  );
}
