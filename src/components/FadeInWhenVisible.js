import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Reduce threshold to trigger earlier
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7 }} // Slightly longer duration
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 } // More pronounced movement
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible; 