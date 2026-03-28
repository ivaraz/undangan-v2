import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { weddingData } from '../data/wedding';

const CoupleSection: React.FC = () => {
  return (
    <section className="py-24 px-4" id="couple" style={{ background: 'rgba(17,17,17,0.8)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="section-title">Mempelai</h2>
        <p className="section-subtitle">Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami</p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <div className="w-48 h-64 md:w-64 md:h-80 mb-6 relative overflow-hidden rounded-t-full rounded-b-xl border-4 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <img 
              src={weddingData.groomPhoto} 
              alt={weddingData.groomName} 
              className="w-full h-full object-cover filter brightness-90 contrast-125"
            />
          </div>
          
          <h3
            className="font-display text-4xl mb-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {weddingData.groomName}
          </h3>
          <p className="font-serif italic text-sm mb-1" style={{ color: 'rgba(245,240,232,0.9)' }}>
            {weddingData.groomFullName}
          </p>
          <p className="font-sans text-xs mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Putra dari {weddingData.groomParents}
          </p>
          
          <a
            href={weddingData.groomInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 mt-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors font-sans text-xs"
          >
            <FaInstagram size={14} />
            <span>@{(weddingData.groomInstagram ?? '').split('/').pop() || 'Instagram'}</span>
          </a>
        </motion.div>

        {/* Separator / Ampersand */}
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 md:h-24 hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent)' }} />
          <span className="font-serif italic text-5xl" style={{ color: '#D4AF37' }}>&</span>
          <div className="w-px h-16 md:h-24 hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent)' }} />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <div className="w-48 h-64 md:w-64 md:h-80 mb-6 relative overflow-hidden rounded-t-full rounded-b-xl border-4 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <img 
              src={weddingData.bridePhoto} 
              alt={weddingData.brideName} 
              className="w-full h-full object-cover filter brightness-90 contrast-125"
            />
          </div>
          
          <h3
            className="font-display text-4xl mb-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {weddingData.brideName}
          </h3>
          <p className="font-serif italic text-sm mb-1" style={{ color: 'rgba(245,240,232,0.9)' }}>
            {weddingData.brideFullName}
          </p>
          <p className="font-sans text-xs mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Putri dari {weddingData.brideParents}
          </p>
          
          <a
            href={weddingData.brideInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 mt-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors font-sans text-xs"
          >
            <FaInstagram size={14} />
            <span>@{(weddingData.brideInstagram ?? '').split('/').pop() || 'Instagram'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
