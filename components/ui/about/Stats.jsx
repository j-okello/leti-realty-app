"use client";
import Image from "next/image";
import Link from "next/link";
import part from "@/public/part.jpg";
const stats = [
  { id: 1, name: "Units every 24 months", value: "500+" },
  { id: 2, name: "Client Satisfaction Rate", value: "98%" },
  { id: 3, name: "Years of Industry Experience", value: "10+" },
];
export default function Stats() {
  return (
    <section id="cta">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
