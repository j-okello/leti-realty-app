"use client";
export default function FeaturesList({ property }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 h-full">
      <h4 className="font-semibold mb-3 text-gray-800">{property.title}</h4>
      <div className="space-y-2">
        {property.features?.length ? (
          property.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Check size={14} className="text-green-500 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500">No features listed</div>
        )}
      </div>
    </div>
  );
}
