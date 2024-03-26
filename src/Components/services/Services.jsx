import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "../model/Model";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentCertificate, setCurrentCertificate] = useState("");

  const openModal = (certificateContent) => {
    setCurrentCertificate(certificateContent);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          I'm passionate about building software <br />
          solutions for any given problem
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "lightgrey" }}>Unique</motion.b>{" "}
            Things
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "lightgrey" }}>About</motion.b> Me
          </h1>
          <motion.button
            whileHover={{ color: "black", background: "lightgrey" }}
          >
            ;)
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h1>Techninal Excellence Award</h1>
          <p>
            I was honored with the Technical Excellence Award for optimizing a
            critical workflow at TCS for a client, achieving an astounding
            99.92% efficiency improvement.
          </p>
          <button onClick={() => openModal("/technical_excellence_award.jpg")}>
            See Award
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h1>Dashing Debut Award</h1>
          <p>
            I earned the Dashing Debut Award for creating a monitoring web
            portal within a month of joining the company. Worked indepedently
            with limited resources.
          </p>
          <motion.button onClick={() => openModal("/Dashing_debut_award.jpg")}>
            See Award
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h1>Runner-up at EXPRO</h1>
          <p>
            EXPRO 2022 (Final Year Students’ Project Exhibition & Competition)
            was conducted at my university and out of 30+ teams my team was able
            to back the 2nd Place.
          </p>
          <button onClick={() => openModal("/EXPRO_award.jpg")}>
            See Award
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h1>KSCA Winners</h1>
          <p>
            Won the KSCA(Karnataka State Cricket Association) Mangalore Zone
            during the year 2014- 2015. My team won every game we played.
          </p>
          <button onClick={() => openModal("/KSCA_award.jpg")}>
            See Award
          </button>
        </motion.div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          certificateContent={currentCertificate}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;
