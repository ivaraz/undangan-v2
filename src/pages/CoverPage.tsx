import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { weddingData } from "../data/wedding";
import CoupleNames from "../components/CoupleNames";

const CoverPage: React.FC = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/invitation", { state: { autoPlay: true } });
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(10,10,10,0.8) 0%, rgba(26,20,8,0.7) 50%, rgba(10,10,10,0.9) 100%), url(${weddingData.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(212,175,55,0.3) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.2) 0%, transparent 60%)`,
        }}
      />

      {/* Ornament top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 flex justify-center pt-8"
      >
        <OrnamentSVG />
      </motion.div>

      {/* Ornament bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 rotate-180"
      >
        <OrnamentSVG />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        {/* Wedding invitation label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="font-sans text-xs uppercase mb-8"
          style={{ color: "rgba(212, 175, 55, 0.7)" }}
        >
          Undangan Pernikahan
        </motion.p>

        {/* Couple names */}
        <CoupleNames />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <p
            className="font-sans text-xs mb-6"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            Kepada Yth,
          </p>
          <p
            className="font-serif text-lg italic mb-8"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Bapak/Ibu/Saudara/i Tamu Undangan
          </p>

          <motion.button
            onClick={handleOpen}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold rounded-none cursor-pointer font-sans"
            style={{ animationDelay: "0.5s" }}
          >
            ✦ Buka Undangan ✦
          </motion.button>
        </motion.div>
      </div>

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold-500 opacity-20 select-none pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            fontSize: `${0.8 + (i % 3) * 0.4}rem`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
};

const OrnamentSVG: React.FC = () => (
  <svg
    width="300"
    height="60"
    viewBox="0 0 300 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0"
      y1="30"
      x2="120"
      y2="30"
      stroke="url(#goldGrad)"
      strokeWidth="0.5"
    />
    <circle cx="130" cy="30" r="3" fill="#D4AF37" opacity="0.6" />
    <circle
      cx="150"
      cy="30"
      r="6"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="0.8"
      opacity="0.8"
    />
    <circle cx="150" cy="30" r="2" fill="#D4AF37" opacity="0.6" />
    <circle cx="170" cy="30" r="3" fill="#D4AF37" opacity="0.6" />
    <line
      x1="180"
      y1="30"
      x2="300"
      y2="30"
      stroke="url(#goldGradReverse)"
      strokeWidth="0.5"
    />
    <defs>
      <linearGradient
        id="goldGrad"
        x1="0"
        y1="0"
        x2="120"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="goldGradReverse"
        x1="180"
        y1="0"
        x2="300"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default CoverPage;
