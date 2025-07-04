import { GrPrevious, GrNext } from "react-icons/gr";
export default function PrevButton() {
  <button
    onClick={"#"}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full z-30 shadow-lg cursor-pointer hover:bg-white transition-colors"
    aria-label="Previous slide"
  >
    <GrPrevious className="text-blue-900 hover:text-red-600 text-lg" />
  </button>;
}
