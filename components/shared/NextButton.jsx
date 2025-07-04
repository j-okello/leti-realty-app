import { GrPrevious, GrNext } from "react-icons/gr";
export default function NextButton() {
  <button
    onClick={"#"}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full z-30 shadow-lg cursor-pointer hover:bg-white transition-colors"
    aria-label="Next slide"
  >
    <GrNext className="text-blue-900 hover:text-red-600" />
  </button>;
}
