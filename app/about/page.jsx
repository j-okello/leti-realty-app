"use client";

import Breadcrumb from "@/components/shared/Breadcrumb";
import ContentAbout from "@/components/ui/about/ContentAbout";
import ContentService from "@/components/ui/about/contentService";
import FAQ from "@/components/ui/about/FAQSection";
import Stats from "@/components/ui/about/Stats";
import Team from "@/components/ui/about/TeamSection";
const breadcrumbItems = [{ label: "About us", href: "/about" }];

export default function About() {
  return (
    <section>
      <div className="mt-6 p-3  w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ContentAbout />
      <Stats />
      <Team />
      <ContentService />
      <FAQ />
    </section>
  );
}
