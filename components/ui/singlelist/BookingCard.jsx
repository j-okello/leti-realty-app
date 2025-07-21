import { useCallback } from "react";
import PropertyBadges from "./PropertyBadges";
import DetailRow from "./DetailRow";
import Link from "next/link";
import { GoQuestion } from "react-icons/go";
export default function BookingCard({ property, onBookingClick, isMounted }) {
  const formatPrice = useCallback(
    (price) => {
      return `${property.currency}${price.toLocaleString()}`;
    },
    [property.currency]
  );

  const formatDate = useCallback(
    (dateString) => {
      if (!isMounted) return "";
      return new Date(dateString).toLocaleDateString();
    },
    [isMounted]
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6 space-y-6">
      <PropertyBadges verified={property.verified} isNew={property.isNew} />

      {/* Price */}
      <div>
        <span className="text-sm text-blue-900">Monthly rent:</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-red-600">
            {formatPrice(property.price)}
          </span>
          <span className="text-gray-600">{property.priceUnit}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="space-y-4">
        <h3 className="font-semibold text-blue-900">Property Details</h3>
        <div className="space-y-3 text-sm">
          <DetailRow label="Type:" value={property.type} />
          <DetailRow
            label="Apartment area:"
            value={`${property.area} ${property.areaUnit}`}
          />
          <DetailRow label="Built:" value={property.builtYear} />
          <DetailRow label="Bedrooms:" value={property.bedrooms} />
          <DetailRow label="Bathrooms:" value={property.bathrooms} />
          <DetailRow label="Parking places:" value={property.parkingSpaces} />
          <DetailRow label="Pets allowed:" value={property.petsAllowed} />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onBookingClick}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
      >
        Book a viewing
      </button>

      {/* FAQ Link */}
      <div className="text-center">
        <Link
          href="/about#faq"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <GoQuestion size={16} />
          <span>Frequently asked questions</span>
        </Link>
      </div>
    </div>
  );
}
