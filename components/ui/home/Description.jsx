"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Hotel,
  House,
  Building2,
  Store,
  LandPlot,
  MapPinHouse,
  CalendarClock,
  UserCheck,
  Handshake,
} from "lucide-react";

const heading = ["Catalog"];
const menu = [
  { name: "Appartments", icon: Hotel },
  { name: "Houses", icon: House },
  { name: "Commercial", icon: Store },
  { name: "Off Plans", icon: LandPlot },
];
const features = [
  {
    name: "Discover the Perfect Match",
    description:
      "Browse verified listings tailored to your needs, budget, and lifestyle — from luxury apartments to family homes — all curated using smart AI filters for faster, smarter choices.",
    icon: MapPinHouse,
  },
  {
    name: "Schedule a Viewing",
    description:
      "Book property viewings at your convenience. Whether in-person or virtual, our agents ensure a seamless, informative experience so you can explore with confidence.",
    icon: CalendarClock,
  },
  {
    name: "Get Expert Guidance",
    description:
      "Receive personalized support from our trusted property advisors. From negotiations to paperwork, we help simplify every step of the buying or rental process.",
    icon: UserCheck,
  },
  {
    name: "Seal the Deal Securely",
    description:
      "Close with confidence. Our platform connects you with legal and financial experts to finalize your purchase or lease safely and transparently.",
    icon: Handshake,
  },
];

export default function Description() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="catalog"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="bg-white  sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header section with animation */}
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            variants={itemVariants}
          >
            <h2 className="text-base/7 font-semibold text-blue-950">
              How it works
            </h2>
            <motion.p
              className="mt-2 mb-3 text-4xl font-sans font-normal tracking-tight text-pretty text-blue-900 sm:text-5xl lg:text-balance"
              variants={itemVariants}
            >
              Your One-Stop Guide to Buying or Renting a Home
            </motion.p>
            <motion.p
              className=" text-lg/8 text-gray-600 "
              variants={itemVariants}
            >
              Navigate your property journey with confidence—from exclusive
              listings to expert insights—designed for discerning buyers and
              tenants seeking refined living in Kenya.
            </motion.p>
          </motion.div>

          {/* Features grid with staggered animations */}
          <motion.div
            className="mx-auto mt-10 max-w-2xl sm:mt-5 lg:mt-15 lg:max-w-4xl"
            variants={containerVariants}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="relative pl-16"
                  variants={itemVariants}
                  custom={index}
                >
                  <dt className="text-base/7 font-semibold text-blue-900">
                    <motion.div
                      className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-900 hover:bg-red-600"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
