"use client";
import HeroSection from "@/components/ui/home/SectionHero";
import CardContainer from "@/components/ui/home/Listings";
import properties from "@/app/lib/properties";
import NewPropertyCard from "@/components/ui/home/NewPropertyList";
import Description from "@/components/ui/home/Description";
import ActionButtons from "@/components/ui/home/SectionAction";
import CookieManager from "@/components/ui/cookie-tray/CookieManager";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PropertySaleRequestForm from "@/components/ui/home/Testimonials";
import PageLoader from "@/components/shared/PageLoader";

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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //wait for full page load
    const handleLoad = () => {
      setIsLoading(false);
    };
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return isLoading ? (
    <PageLoader />
  ) : (
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

      {
        <AnimatedSection delay={0.4}>
          <CookieManager
            popupProps={{
              showDelay: 2000,
              cookiePolicyUrl: "/legal/cookie-policy",
              allowClose: false,
            }}
            buttonProps={{
              position: "bottom-right",
              className: "bg-blue-600 hover:bg-blue-700",
            }}
          />
        </AnimatedSection>
      }
    </motion.div>
  );
}
