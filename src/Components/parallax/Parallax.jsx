import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradiant(180deg, #9e6324, #b5712a)"
            : "linear-gradiant(180deg, #9e6324, #eba050)",
      }}
    >
      <motion.h1
        style={{ y: yText, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
      >
        {type === "services" ? "Achievements?" : "My Work?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="lightning"
        style={{
          y: yBg,
          filter: type === "services" ? "none" : "hue-rotate(50deg)",
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
