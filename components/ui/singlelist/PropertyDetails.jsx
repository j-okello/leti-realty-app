import AmenitiesSection from "./Amenities";
import { MapPin } from "lucide-react";
const PropertyDetails = ({ property, formatDate }) => (
  <>
    <div className="space-y-2">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
        {property.title}
      </h1>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
        <span className="truncate">{property.location}</span>
      </div>
    </div>

    <div className="space-y-4">
      <h2 className="text-xl text-blue-900 font-semibold">Overview</h2>
      <p className="text-gray-700 leading-relaxed">{property.description}</p>
    </div>

    <AmenitiesSection amenities={property.amenities || []} />

    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
      <span>Published: {formatDate(property.publishedDate)}</span>
      <span>Ad number: {property.adNumber}</span>
      <span>Views: {property.views?.toLocaleString() || 0}</span>
    </div>
  </>
);
export default PropertyDetails;
