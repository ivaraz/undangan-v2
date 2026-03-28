import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 text-center" style={{ background: '#0A0A0A', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="font-display mb-2"
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {weddingData.groomName} &amp; {weddingData.brideName}
        </h2>

        <p className="font-serif italic text-sm mb-6" style={{ color: 'rgba(245,240,232,0.4)' }}>
          {weddingData.weddingDate.toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric',
          })}
        </p>

        <div className="divider-gold max-w-xs mx-auto mb-6">
          <span style={{ color: 'rgba(212,175,55,0.6)', fontSize: '0.8rem' }}>✦</span>
        </div>

        <p className="font-sans text-xs" style={{ color: 'rgba(212,175,55,0.4)' }}>
          {weddingData.hashtag}
        </p>

        <p className="font-sans text-xs mt-4" style={{ color: 'rgba(245,240,232,0.2)' }}>
          Dibuat dengan ❤ untuk hari istimewa kami
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
