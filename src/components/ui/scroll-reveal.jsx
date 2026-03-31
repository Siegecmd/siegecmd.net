import { useRef, useState, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className = "",
  as = "div",
}) {
  const ref = useRef(null);
  const [initiallyVisible, setInitiallyVisible] = useState(false);
  const isInView = useInView(ref, { once, amount });

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport) {
        setInitiallyVisible(true);
      }
    }
  }, []);

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      initial={initiallyVisible ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant] || variants.fadeUp}
      transition={{
        duration: initiallyVisible ? 0 : duration,
        delay: initiallyVisible ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
