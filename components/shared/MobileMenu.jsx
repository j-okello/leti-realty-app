import React, { useEffect, useState, useRef } from "react";
import letiLogo from "@/public/letiLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";
import { User, Menu } from "lucide-react";
const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Property for Sale", path: "/sale" },
  { name: "Property for Rent", path: "/rent" },
];
export default function NavMobile({ isOpen, onClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className={`lg:hidden ${isOpen ? "hidden" : " transform transition-transform  duration-300 ease-in-out"}`}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      {/*Background backdrop, show/hide based on slide-over state.*/}
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-50 shadow-2xl border-l-2 border-blue-950 px-6 py-6 rounded-l-3xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Image src={letiLogo} alt="Leti Realty" className="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-blue-950 hover:text-red-500 cursor-pointer"
          >
            <span className="sr-only">Close menu</span>
            <RiCloseLargeFill size={20} />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-blue-950/10">
            <div className="space-y-2 py-6">
              {menu.map((m, index) => (
                <Link
                  key={index}
                  href={m.path}
                  className="-mx-3 block rounded-r-lg rounded-bl-lg px-3 py-2 text-base/7 font-semibold text-blue-950 hover:bg-blue-950  hover:text-red-500  active:text-red-500"
                >
                  {m.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href={"#"}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-blue-950 hover:text-red-500"
              >
                <div className="flex flex-col-1 items-center gap-2">
                  <User />
                  Sign In <span aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
