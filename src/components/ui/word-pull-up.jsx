"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },

  className,
}) {
  // Use the useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: false, // Remove triggerOnce to animate every time the component is in view
  });

  return (
    <motion.h1
      ref={ref} // Attach ref to the element to track its visibility
      variants={wrapperFramerProps}
      initial="hidden"
      animate={inView ? "show" : "hidden"} // Animate only if the component is in view
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
