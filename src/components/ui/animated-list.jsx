"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedList = React.memo(({ className, children, delay = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // State to track if the component is in view
  const ref = useRef(null); // Reference to the component
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger the animation when the component enters the viewport
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup on unmount
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isInView && index < childrenArray.length) {
      // Trigger the animation once when in view
      interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }

    return () => clearInterval(interval);
  }, [isInView, index, childrenArray.length, delay]);

  const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);

  return (
    <div ref={ref} className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={item.key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
