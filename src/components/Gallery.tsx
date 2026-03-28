import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/wedding';

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedImage = selected !== null ? galleryImages.find((img) => img.id === selected) : null;

  return (
    <section className="py-24 px-4" id="gallery" style={{ background: 'rgba(17,17,17,0.6)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-title">Galeri</h2>
        <p className="section-subtitle">Momen berharga kami bersama</p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(img.id)}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                height: i === 0 || i === 4 ? '300px' : '200px',
                border: '1px solid rgba(212,175,55,0.1)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <span className="text-gold-500 text-3xl">✦</span>
              </div>
              {/* Gold bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full"
              style={{ border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full max-h-[80vh] object-contain" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center glass-card text-gold-500 hover:bg-gold-500 hover:text-black transition-all"
              >
                ✕
              </button>

              {/* Nav buttons */}
              <button
                onClick={() => {
                  const idx = galleryImages.findIndex((img) => img.id === selected);
                  const prev = galleryImages[(idx - 1 + galleryImages.length) % galleryImages.length];
                  setSelected(prev.id);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center glass-card text-gold-500 hover:bg-gold-500 hover:text-black transition-all"
              >
                ‹
              </button>
              <button
                onClick={() => {
                  const idx = galleryImages.findIndex((img) => img.id === selected);
                  const next = galleryImages[(idx + 1) % galleryImages.length];
                  setSelected(next.id);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center glass-card text-gold-500 hover:bg-gold-500 hover:text-black transition-all"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
