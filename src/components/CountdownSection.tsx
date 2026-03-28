import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { weddingData } from '../data/wedding';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(weddingData.weddingDate);

  const units = [
    { label: 'Hari', value: days },
    { label: 'Jam', value: hours },
    { label: 'Menit', value: minutes },
    { label: 'Detik', value: seconds },
  ];

  return (
    <section className="py-24 px-4 text-center" id="countdown">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title font-serif">Menuju Hari Bahagia</h2>
        <p className="section-subtitle">Hitung mundur pernikahan kami</p>

        <div className="flex justify-center gap-4 md:gap-8 mt-8 flex-wrap">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="glass-card relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center"
                style={{ animation: 'pulseGold 2s ease-in-out infinite' }}
              >
                {/* Corner ornaments */}
                <span className="absolute top-1 left-1 text-gold-500 opacity-40 text-xs">✦</span>
                <span className="absolute top-1 right-1 text-gold-500 opacity-40 text-xs">✦</span>
                <span className="absolute bottom-1 left-1 text-gold-500 opacity-40 text-xs">✦</span>
                <span className="absolute bottom-1 right-1 text-gold-500 opacity-40 text-xs">✦</span>

                <motion.span
                  key={unit.value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-3xl md:text-5xl font-light"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </div>
              <span
                className="font-sans text-xs tracking-widest uppercase mt-3"
                style={{ color: 'rgba(212, 175, 55, 0.6)' }}
              >
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Date display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <div className="divider-gold max-w-sm mx-auto">
            <span className="font-serif text-sm italic" style={{ color: 'rgba(212,175,55,0.8)' }}>
              {weddingData.weddingDate.toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
