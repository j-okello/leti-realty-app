"use client";

import { AlertCircle, RotateCw } from "lucide-react";
const ErrorState = ({ error, onRetry }) => (
  <section className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
    <div className="text-center p-8 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <div className="bg-red-50 rounded-full p-4 inline-flex items-center justify-center mb-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Error Loading Property
      </h2>
      <p className="text-gray-600 mb-6">{error}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition inline-flex items-center justify-center"
        >
          <RotateCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <a
          href="/catalog"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-flex items-center justify-center"
        >
          Browse Properties
        </a>
      </div>
    </div>
  </section>
);

export default ErrorState;
