"use client";
import HeroSection from "@/components/ui/home/SectionHero";
import CardContainer from "@/components/ui/home/Listings";
import properties from "@/app/lib/properties";
import NewPropertyCard from "@/components/ui/home/NewPropertyList";
import Description from "@/components/ui/home/Description";
import ActionButtons from "@/components/ui/home/SectionAction";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return [ref, isInView];
}

// Animated section wrapper component
function AnimatedSection({ children, delay = 0 }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
export default function Home() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* Hero Section - Immediate animation */}
      <motion.div variants={sectionVariants} transition={{ duration: 0.8 }}>
        <HeroSection />
      </motion.div>

      {/* New Property Cards - Scroll triggered */}
      <AnimatedSection delay={0.1}>
        <NewPropertyCard property={properties} />
      </AnimatedSection>

      {/* Property Cards Container - Scroll triggered */}
      <AnimatedSection delay={0.2}>
        <CardContainer property={properties} />
      </AnimatedSection>

      {/* Action Buttons - Scroll triggered */}
      <AnimatedSection delay={0.3}>
        <ActionButtons />
      </AnimatedSection>

      {/* Description - Scroll triggered */}
      <AnimatedSection delay={0.4}>
        <Description />
      </AnimatedSection>
    </motion.div>
  );
}
