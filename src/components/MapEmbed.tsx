import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

const MapEmbed: React.FC = () => {
  return (
    <section className="py-24 px-4" id="location">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-title">Lokasi</h2>
        <p className="section-subtitle">Temukan kami di sini</p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Map container */}
          <div
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(212,175,55,0.2)' }}
          >
            {/* Gold corner decorations */}
            <div
              className="absolute top-0 left-0 w-6 h-6 z-10"
              style={{ borderTop: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' }}
            />
            <div
              className="absolute top-0 right-0 w-6 h-6 z-10"
              style={{ borderTop: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' }}
            />
            <div
              className="absolute bottom-0 left-0 w-6 h-6 z-10"
              style={{ borderBottom: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' }}
            />
            <div
              className="absolute bottom-0 right-0 w-6 h-6 z-10"
              style={{ borderBottom: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' }}
            />

            <iframe
              src={weddingData.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </div>

          {/* Venue info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <p className="font-sans text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(212,175,55,0.6)' }}>
                Venue
              </p>
              <p className="font-serif text-xl" style={{ color: 'rgba(245,240,232,0.9)' }}>
                {weddingData.venue}
              </p>
              <p className="font-sans text-sm mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
                {weddingData.venueAddress}
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(weddingData.venueAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold whitespace-nowrap"
              style={{ fontSize: '0.75rem' }}
            >
              Buka Maps ↗
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MapEmbed;
