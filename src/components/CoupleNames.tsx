import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";

const CoupleNames: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <h1
        className="font-display leading-tight py-2 mb-2"
        style={{
          fontSize: "clamp(3.5rem, 15vw, 6rem)",
          background:
            "linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 20px rgba(212,175,55,0.3))",
        }}
      >
        {weddingData.groomName}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-serif text-cream text-6xl italic my-2"
        style={{ color: "rgba(245, 240, 232, 0.6)" }}
      >
        &amp;
      </motion.p>

      <h1
        className="font-display leading-tight py-2"
        style={{
          fontSize: "clamp(3.5rem, 15vw, 6rem)",
          background:
            "linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 20px rgba(212,175,55,0.3))",
        }}
      >
        {weddingData.brideName}
      </h1>
    </motion.div>
  );
};

export default CoupleNames;
