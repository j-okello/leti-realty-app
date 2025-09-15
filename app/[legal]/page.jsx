"use client";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link"; // Assuming Next.js routing
import { Cookie, FolderLock, OctagonAlert, Handshake } from "lucide-react";

const breadcrumbItems = [{ label: "Legal", href: "/" }];

const pages = [
  { title: "Cookie Policy", path: "/legal/cookie-policy", icon: Cookie },
  { title: "Data Privacy", path: "/legal/data-privacy", icon: FolderLock },
  { title: "Disclaimer", path: "/legal/disclaimer", icon: OctagonAlert },
  {
    title: "Terms Of Service",
    path: "/legal/terms-of-service",
    icon: Handshake,
  },
];

export default function LegalPage() {
  return (
    <div>
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="max-w-6xl md:text-center text-start mx-auto px-6 py-2 md:py-4 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900">
          Legal Information & Policies
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mb-3">
        {pages.map((page, index) => {
          const IconComponent = page.icon;
          return (
            <Link
              key={index}
              href={page.path}
              className="group block transition-transform duration-200 hover:scale-105"
            >
              <div className="rounded-xl bg-white p-6  hover:shadow-lg hover:border hover:border-blue-300 transition-all duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200">
                    {page.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="max-w-6xl p-6 md:p-12 mx-auto text-lg text-gray-700 space-x-2">
        <div className="mb-3 ">
          <p className="text-gray-700 leading-relaxed">
            This website provides important information regarding its{" "}
            <strong className="text-gray-900">
              Cookie Policy, Data Privacy practices, Disclaimer, and Terms of
              Service.
            </strong>{" "}
            By accessing or using the website, you acknowledge that cookies and
            similar tracking technologies may be employed to optimize
            functionality, enhance user experience, and analyze site
            performance. Users have the option to control or disable cookies
            through their browser settings; however, certain features of the
            site may not operate as intended if cookies are restricted.
          </p>
        </div>
        <div className="mb-3">
          <p className="text-gray-700 leading-relaxed">
            With respect to{" "}
            <strong className="text-gray-900">Data Privacy</strong>, we are
            committed to collecting, storing, and processing personal
            information in compliance with{" "}
            <strong>Data Protection Act, 2019</strong>. Any personal data
            submitted through this website will be used solely for legitimate
            business purposes, such as providing services, responding to
            inquiries, or improving user engagement. Appropriate administrative,
            technical, and organizational safeguards are in place to protect
            such data against unauthorized access, misuse, or disclosure.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            The use of this website is further governed by our{" "}
            <strong className="text-gray-900">
              Disclaimer and Terms of Service.
            </strong>{" "}
            The Disclaimer clarifies that all content is provided for general
            informational purposes only and does not constitute professional,
            legal, financial, or other advice. By continuing to use the website,
            you agree to abide by the Terms of Service, which define permitted
            uses, limitations of liability, and the responsibilities of both the
            website operator and the user. We strongly encourage you to review
            these documents in full to understand your rights and obligations.
          </p>
        </div>
      </div>
    </div>
  );
}
