"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary"; // You'll need to create this

// Regular imports
import AboutIndoGlobal from "./AboutIndoGolbal";
import Events from "./Events";
import Hero from "./HeroSlider";
import Placements from "./Placements";
import Programs from "./Programs";
import RankSlider from "./RankSlider";
import NoPaperFormsWidget from "../../CRM/NoPaperFormsWidget";
import { X } from "lucide-react";

// Lazy loaded components with error handling
const Stats = lazy(() =>
  import("./Stats").catch((err) => {
    console.error("Error loading Stats:", err);
    return { default: () => <div>Failed to load Stats</div> };
  })
);

const Testimonials = lazy(() =>
  import("./testimonials/Testimonial").catch((error) => {
    console.error("Error loading Testimonials:", error);
    return {
      default: () => <div>Failed to load Testimonials</div>,
    };
  })
);

const LatestBlogsAndEvents = lazy(() =>
  import("./LatestBlogsAndEvents").catch((err) => {
    console.error("Error loading LatestBlogsAndEvents:", err);
    return { default: () => <div>Failed to load Latest Content</div> };
  })
);

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const LoadingFallback = () => (
  <div className="min-h-[400px] w-full flex items-center justify-center bg-gray-50">
    <div className="space-y-4 w-full max-w-3xl p-4">
      <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const Section = ({ children, inView, reference }) => (
  <motion.div
    ref={reference}
    variants={sectionVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="min-h-[400px]"
  >
    <ErrorBoundary
      fallback={
        <div className="p-4 text-red-500 bg-red-100 rounded">
          Something went wrong loading this section. Please try refreshing the
          page.
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  </motion.div>
);

const Landing = () => {
  const [mounted, setMounted] = useState(false);
  const [showWidget, setShowWidget] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Initialize widget state after mount
    setShowWidget(true);
  }, []);

  const defaultInViewOptions = {
    threshold: 0.1,
    triggerOnce: true,
  };

  const [heroRef, heroInView] = useInView(defaultInViewOptions);
  const [placementsRef, placementsInView] = useInView(defaultInViewOptions);
  const [statsRef, statsInView] = useInView(defaultInViewOptions);
  const [rankSliderRef, rankSliderInView] = useInView(defaultInViewOptions);
  const [programsRef, programsInView] = useInView(defaultInViewOptions);
  const [aboutRef, aboutInView] = useInView(defaultInViewOptions);
  const [eventsRef, eventsInView] = useInView(defaultInViewOptions);
  const [testimonialsRef, testimonialsInView] = useInView(defaultInViewOptions);
  const [blogsRef, blogsInView] = useInView(defaultInViewOptions);

  if (!mounted) {
    return <LoadingFallback />;
  }

  return (
    <div className="overflow-x-hidden relative">
      
      <button
        onClick={() => setShowWidget(!showWidget)}
        className={`fixed  top-[30%] -right-10 translate-y-1/2 z-[9998] bg-primary-color text-white px-4 py-2 rounded-tr-md rounded-tl-md shadow-lg hover:bg-primary-color/90 -rotate-90 ${
          showWidget ? "hidden" : ""
        }`}
      >
        Quick Enquiry
      </button>
      <X
        onClick={() => setShowWidget(false)}
        className={`fixed cursor-pointer top-[25%] sm:top-[31%] right-8 translate-y-1/2 z-[9998] bg-white text-secondary-color w-7 h-7  p-1 rounded-sm  shadow-lg hover:bg-white/90 -rotate-90 ${
          showWidget ? "" : "hidden"
        }`}
      />

      {showWidget && (
        <NoPaperFormsWidget className="fixed top-0 right-0 translate-y-1/2 z-[99]" />
      )}

      <Section reference={heroRef} inView={heroInView}>
        <Hero />
      </Section>

      <Section reference={placementsRef} inView={placementsInView}>
        <Placements />
      </Section>

      <Suspense fallback={<LoadingFallback />}>
        <Section reference={statsRef} inView={statsInView}>
          <Stats />
        </Section>
      </Suspense>

      <Section reference={rankSliderRef} inView={rankSliderInView}>
        <RankSlider />
      </Section>

      <Section reference={programsRef} inView={programsInView}>
        <Programs />
      </Section>

      <Section reference={aboutRef} inView={aboutInView}>
        <AboutIndoGlobal />
      </Section>

      <Section reference={eventsRef} inView={eventsInView}>
        <Events />
      </Section>

      <Suspense fallback={<LoadingFallback />}>
        <Section reference={testimonialsRef} inView={testimonialsInView}>
          <Testimonials />
        </Section>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Section reference={blogsRef} inView={blogsInView}>
          <LatestBlogsAndEvents />
        </Section>
      </Suspense>
    </div>
  );
};

export default Landing;
