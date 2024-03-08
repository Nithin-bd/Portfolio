import { motion } from "framer-motion";

const variants = {
  open: { transition: { staggerChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const Links = () => {
  const items = ["Homepage", "Services", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      <motion.a href="#Homepage" variants={itemVariants}>
        Home
      </motion.a>
      <motion.a href="#Services" variants={itemVariants}>
        Awards
      </motion.a>
      <motion.a href="#Projects" variants={itemVariants}>
        Projects
      </motion.a>
      <motion.a href="#Contact" variants={itemVariants}>
        Contact
      </motion.a>
    </motion.div>
  );
};

export default Links;
