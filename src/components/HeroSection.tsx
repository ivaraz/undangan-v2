import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import CoupleNames from "./CoupleNames";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%),
          url(${weddingData.coverImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="home"
    >
      {/* Background ornament */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5 }}
          className="font-sans text-xs uppercase mb-8"
          style={{ color: "rgba(212, 175, 55, 0.6)" }}
        >
          ✦ The Wedding of ✦
        </motion.p>

        {/* Couple names */}
        <CoupleNames />

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="max-w-xs mx-auto mb-8"
        >
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
          <div className="flex justify-center mt-2">
            <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "1rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {/* Date + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-xl italic mb-2"
          style={{ color: "rgba(245, 240, 232, 0.8)" }}
        >
          {weddingData.weddingDate.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-sans text-sm tracking-widest uppercase"
          style={{ color: "rgba(212, 175, 55, 0.5)" }}
        >
          {weddingData.venue}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="font-sans text-xs tracking-widest uppercase"
              style={{ color: "rgba(212,175,55,0.4)" }}
            >
              Scroll
            </span>
            <div
              className="w-px h-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(212,175,55,0.4), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
