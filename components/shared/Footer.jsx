import Image from "next/image";
import Link from "next/link";
import letiLogo from "@/public/letiLogo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaRegPaperPlane,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GiOfficeChair } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { ImPhone, ImLocation } from "react-icons/im";
const menuQuick = [
  { name: "Buy Property", path: "/sale" },
  { name: "Rent Property", path: "/rent" },
  { name: "Sell Property", path: "/sell" },
];
const mainMenu = [
  { name: "What we do", path: "/" },
  { name: "Who we are", path: "/about" },
  { name: "Talk to Us", path: "/contact" },
  { name: "Advisory Services", path: "/services/advisory" },
];
const menuLegal = [
  { name: "Data Privacy Statement", path: "/legal/data-privacy" },
  { name: "Terms of Service", path: "/legal/terms-of-service" },
  { name: "Cookie Policy", path: "/legal/cookie-policy" },
  { name: "Disclaimer", path: "/legal/disclaimer" },
];
const phone = "#";
const message = encodeURIComponent("Hi, I’m interested in a property");
const whatsappLink = `https://wa.me/${phone}?text=${message}`;
const socials = [
  { name: "facebook", icon: FaFacebook, link: "#" },
  { name: "instagram", icon: FaInstagram, link: "#" },
  { name: "linkedin", icon: FaLinkedin, link: "#" },
  { name: "youtube", icon: FaYoutube, link: "#" },
  { name: "whatsapp", icon: FaWhatsapp, link: whatsappLink },
];
export default function Footer() {
  return (
    <div className="w-screen px-4 py-6  overflow-hidden bg-gray-50 border-blue-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-x-0.5 gap-y-6 overflow-x-hidden sm:p-4">
        <div className="md:col-span-2 space-y-2 md:space-x-2">
          <Link href="#" className=" p-4 ">
            <Image src={letiLogo} alt="Leti Realty" className="h-25 w-auto" />
          </Link>
          <p className="text-md text-blue-900">
            Let's connect and Help you find a place to call home.
          </p>
          <div className="flex items-center gap-1 mb-1 text-blue-900">
            <MdAlternateEmail />
            <span>info@letirealty.com</span>
          </div>
          <div className="flex items-center gap-1 mb-3 text-blue-900">
            <ImPhone />
            <span>+254 123 456 789</span>
          </div>
          <div className="flex items-center gap-1 mb-3 text-blue-900">
            <ImLocation />
            <span>West Park Towers, Westlands, Nairobi, Kenya</span>
          </div>
          <div className="flex gap-4 mt-2 text-blue-900 text-xl md:text-3xl">
            {socials.map((s, index) => (
              <Link
                href={s.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  s.name === "facebook"
                    ? "hover:text-blue-600"
                    : s.name === "instagram"
                      ? "hover:text-orange-500"
                      : s.name === "linkedin"
                        ? "hover:text-blue-950"
                        : s.name === "youtube"
                          ? "hover:text-red-600"
                          : "hover:text-green-600"
                }
              >
                <s.icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="p-3">
          <h4 className="text-blue-900 font-semibold mb-2 ">
            <FaRegPaperPlane />
            <span>Quick Links</span>
          </h4>

          <ul className="space-y-0.5 text-blue-900 text-md leading-7">
            {menuQuick.map((m, index) => (
              <Link href={m.path} key={index}>
                <li className="hover:text-red-500">{m.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <h4 className="text-blue-900 font-semibold mb-2 ">
            <GiOfficeChair />
            <span>Comapany</span>
          </h4>
          <ul className="space-y-0.5 text-blue-900 text-md leading-7">
            {mainMenu.map((n, index) => (
              <Link key={index} href={n.path}>
                <li className="hover:text-red-500">{n.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <h4 className="text-blue-900 font-semibold mb-2">
            <GoLaw />
            Legal
          </h4>
          <ul className="space-y-0.5 text-blue-900 text-md leading-7">
            {menuLegal.map((l, index) => (
              <Link key={index} href={l.path}>
                <li className="hover:text-red-500">{l.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
