// components/NavBarMenu.js
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { CiMenuFries } from "react-icons/ci";
import letiLogo from "@/public/letiLogo.svg";
import letiLogoInactive from "@/public/letiLogoInactive.svg";
import { RiCloseLargeFill } from "react-icons/ri";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Property for Sale", path: "/sale" },
  { name: "Property for Rent", path: "/rent" },
];

export default function NavBarMenu() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isHeroPage = pathname === "/";
  return (
    <nav
      className={`flex items-center justify-between mx-auto max-w-full md:px-4 sm:px-6 lg:px-8 fixed top-0 right-0 start-0 z-50 transition-all duration-300 ${
        isHeroPage
          ? scrolled
            ? "bg-white shadow-lg"
            : ""
          : "bg-white shadow-sm"
      }`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1 ">
        <Link href="/" className="-m-0.5 p-4">
          <span className="sr-only">LETI REALTY</span>
          <Image
            src={scrolled ? letiLogo : letiLogo}
            alt="Leti Realty"
            className="h-15 w-auto "
            width={120}
            height={40}
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="flex lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-5"
        >
          <span className="sr-only">Open main menu</span>
          <CiMenuFries
            className={`text-2xl ${isHeroPage ? (scrolled ? "text-blue-950" : "text-white") : "text-blue-900"} hover:text-red-500`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop */}
        <div
          className="fixed inset-0 bg-black/50 "
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src={letiLogo}
                alt="Leti Realty"
                className="h-8 w-auto"
                width={100}
                height={32}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-blue-900 cursor-pointer hover:text-red-600"
            >
              <span className="sr-only">Close menu</span>
              <RiCloseLargeFill size={20} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.map((m, index) => (
                  <Link
                    key={index}
                    href={m.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-blue-100 "
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900 hover:bg-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <User />
                    Sign In
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex lg:gap-x-12 px-4 py-3">
        {menu.map((m, index) => (
          <Link
            key={index}
            href={m.path}
            className={`text-md font-sans text-pretty font-medium hover:underline underline-offset-[20px] decoration-3 ${
              isHeroPage
                ? scrolled
                  ? "text-blue-950"
                  : "text-white"
                : "text-blue-900"
            }`}
          >
            {m.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-2">
        <User
          className={
            isHeroPage
              ? scrolled
                ? "text-blue-950"
                : "text-white"
              : "text-blue-900"
          }
        />
        <Link
          href="#"
          className={`text-sm font-semibold ${
            isHeroPage
              ? scrolled
                ? "text-blue-950"
                : "text-white"
              : "text-blue-900"
          }`}
        >
          Sign In <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  );
}
