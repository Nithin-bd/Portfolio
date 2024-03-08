import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./model.scss";

const Modal = ({ isOpen, onClose, certificateContent }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={onClose} // Close modal if clicked on the background
        >
          <motion.div
            className="model"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
              overflow: "hidden",
              boxSizing: "border-box",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when modal content is clicked
          >
            <img className="cert" src={certificateContent} alt="Certificate" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
