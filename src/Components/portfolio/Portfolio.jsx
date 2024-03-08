import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Academic Certificate Generation and Validation",
    img: "/Cert.png",
    desc: "This project attempts to counteract fraudulent certificate generation by providing a standardized and decentralized approach to generate certificates. It is also capable of provding a quick and smooth verification process to any verifier.",
    code: "https://github.com/Nithin-bd/block-certify",
  },
  {
    id: 2,
    title: "AES File Encryption and Decryption",
    img: "/EnDe.png",
    desc: "A simple Jar application which performs file encryption and decryption using AES",
    code: "https://github.com/Nithin-bd/EnDe",
  },
  {
    id: 3,
    title: "AI Agent using RAG",
    img: "/ai-agent.png",
    desc: "This Streamlit application functions as an AI agent leveraging the RAG (Retrieval-Augmented Generation) model. It is designed to draw conclusions from both PDFs and CSV files.",
    code: "https://github.com/Nithin-bd/Ryan-bot",
  },
  {
    id: 4,
    title: "AirDrop Smart Contract",
    img: "/airdrop.png",
    desc: "AirDrop smart contract, facilitates the automated distribution of ERC-20 tokens to specified beneficiaries. The contract, owned by the deployer, allows for a bulk airdrop of tokens to multiple addresses, ensuring transparency and traceability through emitted events. Additionally, it includes a function to check the remaining token balance held by the contract.",
    code: "https://github.com/Nithin-bd/AirDrop-Token-SmartContract",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" width={"600px"} height={"400px"} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.code, "_blank")}>
              See code
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 10,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
