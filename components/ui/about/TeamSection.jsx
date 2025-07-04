import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import imbiti from "@/public/imbiti.jpg";
const socials = [
  { name: "Facebook", icon: FaFacebook, link: "#" },
  { name: "XTwitter", icon: FaXTwitter, link: "#" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/leah-imbiti-/?originalSubdomain=ke",
  },
  { name: "WhatsApp", icon: FaWhatsapp, link: "#" },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/letirealtyltd/",
  },
];
const team = [
  { name: "", title: "", brief: "", socials: [], image: "" },
  { name: "", title: "", brief: "", socials: [], image: "" },
  { name: "", title: "", brief: "", socials: [], image: "" },
];
export default function Team() {
  return (
    <section
      id="team"
      className="flex justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full h-auto md:h-[650px] flex flex-col md:flex-row bg-gray-900 text-white rounded-2xl overflow-hidden shadow-xl">
        {/* Image Section - now properly constrained */}
        <div className="md:w-1/2 h-[550px] md:h-auto relative">
          <Image
            src={imbiti}
            alt="Portrait of Imbiti Leah"
            className="object-cover w-full h-full"
            width={800}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent md:bg-gradient-to-r md:from-gray-900/50 md:to-transparent md:via-gray-900/10" />
        </div>

        {/* Text Content - now properly constrained */}
        <div className="md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center">
          {/* Decorative quote icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-quote transform rotate-180 sroke-blue-50" // Added rotate-180
            style={{ transformOrigin: "center" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
          </svg>
          <blockquote className="relative z-10">
            <p className="text-lg md:text-xl font-light leading-relaxed md:leading-loose">
              "At the heart of every property is a story — and at Leti Realty,
              we’re here to help you write yours. As a woman-led agency, we
              bring integrity, intuition, and innovation to every client we
              serve. My mission is simple: to make real estate feel personal,
              transparent, and empowering for every buyer and seller."
            </p>
          </blockquote>

          <footer className="mt-8 md:mt-12">
            <p className="font-semibold text-white text-lg">Leah Imbiti</p>
            <p className="text-gray-300 text-base">CEO LETI Realty Ltd</p>
            <div className="flex justify-start gap-3 mt-3 text-slate-500 ">
              {socials.map((s, index) => (
                <Link key={index} href={s.link} target="_blank">
                  <s.icon
                    size={20}
                    className="hover:text-white cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
