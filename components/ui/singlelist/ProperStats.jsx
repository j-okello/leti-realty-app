import AmenityIcon from "./Icons";
import {
  Heart,
  Share2,
  Play,
  Wifi,
  Car,
  Wind,
  Tv,
  Shield,
  Thermometer,
  MapPin,
  Bed,
  Bath,
  Dumbbell,
  WavesLadder,
  UsersRound,
  Shapes,
  Leaf,
  HousePlus,
  Fence,
  PawPrint,
  ThermometerSun,
  Cctv,
  Zap,
  Droplets,
  HousePlug,
  Globe,
  HouseWifi,
  Square,
  ArrowUp,
  WashingMachine,
  X,
  ChevronLeft,
  ChevronRight,
  CigaretteOff,
  Utensils,
  Shirt,
} from "lucide-react";
export default function PropertyStats({ property }) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
      {property.map((p, index) => (
        <div key={index} className="flex items-center gap-1">
          <span className="font-semibold">{p.name}</span>
          <span aria-label={p.title}></span>
        </div>
      ))}
    </div>
  );
}
