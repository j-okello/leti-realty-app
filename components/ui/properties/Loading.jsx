"use client";
import { Loader2 } from "lucide-react";
export default function LoadingSpinner() {
  <div className="flex justify-center items-center py-20">
    <div className="text-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
      <p className="text-gray-600">Loading properties...</p>
    </div>
  </div>;
}
