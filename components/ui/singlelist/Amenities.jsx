import { useMemo } from "react";
import AmenityIcon from "./Icons";

export default function AmenitiesSection({ amenities = [] }) {
  const { availableAmenities, unavailableAmenities } = useMemo(() => {
    return {
      availableAmenities: amenities.filter((amenity) => amenity.available),
      unavailableAmenities: amenities.filter((amenity) => !amenity.available),
    };
  }, [amenities]);

  if (amenities.length === 0) {
    return null; // or return a message like "No amenities available"
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm space-y-6">
      <h2 className="text-xl text-blue-900 font-semibold">Amenities</h2>

      {availableAmenities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {availableAmenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <AmenityIcon iconName={amenity.icon} />
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No amenities available</p>
      )}

      {unavailableAmenities.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg text-blue-900 font-semibold">
            Not included in rent
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unavailableAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center gap-2 text-gray-400"
              >
                <AmenityIcon iconName={amenity.icon} />
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
