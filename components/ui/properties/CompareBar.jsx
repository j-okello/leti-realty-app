"use client";
import React from "react";
import { ArrowRightLeft, X } from "lucide-react";
export default function CompareBar({
  compareList,
  onRemove,
  onCompare,
  onClear,
}) {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-800">
                Compare Properties ({compareList.length}/4)
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {compareList.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  <span className="text-sm text-gray-700 truncate max-w-32">
                    {property.title}
                  </span>
                  <button
                    onClick={() => onRemove(property.id)}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onCompare}
              disabled={compareList.length < 2}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Compare ({compareList.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
