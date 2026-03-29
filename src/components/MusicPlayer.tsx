import React from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={onToggle}
        className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #F5E070 100%)",
          boxShadow: isPlaying
            ? "0 0 20px rgba(212,175,55,0.7), 0 0 40px rgba(212,175,55,0.3)"
            : "0 4px 15px rgba(0,0,0,0.5)",
        }}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Spinning ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: "rgba(255,255,255,0.8)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Icon */}
        <span className="text-black flex items-center justify-center">
          {isPlaying ? (
            <Pause size={20} fill="currentColor" strokeWidth={1} />
          ) : (
            <Play
              size={20}
              fill="currentColor"
              strokeWidth={1}
              className="ml-1"
            />
          )}
        </span>
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
