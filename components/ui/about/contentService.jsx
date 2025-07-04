import Link from "next/link";
import {
  House,
  Presentation,
  TrendingUp,
  MapPinHouse,
  ScrollText,
  Mail,
} from "lucide-react";
const services = [
  {
    title: "Residential Sales & Purchases",
    description:
      " From first-time buyers to growing families, we match you with homes that fit your lifestyle, budget, and future aspirations.",
    icon: House,
  },
  {
    title: "Strategic Property Marketing",
    description:
      "Leveraging cutting-edge tools and targeted campaigns to showcase your property’s unique value and attract qualified buyers.",
    icon: Presentation,
  },
  {
    title: "Investment Advisory",
    description:
      "Data-driven insights and tailored guidance to help you identify high-potential opportunities and grow your real estate wealth.",
    icon: TrendingUp,
  },
  {
    title: "Relocation Assistance",
    description:
      "Smooth transitions for newcomers, including neighborhood tours, school district info, and local service connections.",
    icon: MapPinHouse,
  },
  {
    title: "Land Acquisition",
    description:
      "Expert guidance on zoning, development potential, and investment-ready plots for builders and investors.",
    icon: ScrollText,
  },
];
export default function ContentService() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-12 text-center">
          Our Services at Leti Realty
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 mb-10">
          <p className="text-center">
            We blend{" "}
            <span className="font-semibold text-blue-900">local expertise</span>{" "}
            with
            <span className="font-semibold"> tailored strategies</span> to
            deliver exceptional results— wherever you are in your real estate
            journey.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((s, index) => (
            <div
              key={index}
              className="hover:bg-white rounded-lg p-6 hover:shadow-md transition-shadow "
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <s.icon />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {s.title}
                </h3>
              </div>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
          {/* Card 6 (Secondary CTA) */}
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-200 p-3 rounded-full mr-4">
                <Mail />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                Custom Solutions
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Have unique needs? We tailor our services to match your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 
 *  {
    title: "Custom Solutions",
    description:
      "Have unique needs? We tailor our services to match your goals.",
    icon: Mail,
    link: "#",
  },
 */
