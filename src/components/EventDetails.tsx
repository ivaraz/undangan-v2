import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  venue: string;
  address: string;
  delay?: number;
}

const EventCard: React.FC<EventCardProps> = ({ title, time, date, venue, address, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    className="glass-card p-8 text-center relative overflow-hidden group"
  >
    {/* Top gold line */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
      }}
    />

    <div className="mb-4">
      <span
        className="font-sans text-xs tracking-[0.3em] uppercase"
        style={{ color: 'rgba(212,175,55,0.6)' }}
      >
        {title}
      </span>
    </div>

    <div className="divider-gold my-4" />

    <p
      className="font-serif text-3xl mb-2"
      style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 50%, #D4AF37 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {time}
    </p>

    <p className="font-sans text-sm mb-6" style={{ color: 'rgba(245,240,232,0.5)' }}>
      {date}
    </p>

    <div
      className="w-8 h-px mx-auto mb-6"
      style={{ background: 'rgba(212,175,55,0.4)' }}
    />

    <p className="font-serif text-lg mb-1" style={{ color: 'rgba(245,240,232,0.9)' }}>
      {venue}
    </p>
    <p className="font-sans text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.4)' }}>
      {address}
    </p>

    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.05), transparent 70%)' }}
    />
  </motion.div>
);

const EventDetails: React.FC = () => {
  const dateStr = weddingData.weddingDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="py-24 px-4" id="event" style={{ background: 'rgba(17,17,17,0.8)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-title">Detail Acara</h2>
        <p className="section-subtitle">Dengan penuh kebahagiaan kami mengundang Anda</p>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EventCard
            title="Akad Nikah"
            time="08.00 WIB"
            date={dateStr}
            venue={weddingData.venue}
            address={weddingData.venueAddress}
            delay={0.1}
          />
          <EventCard
            title="Resepsi"
            time="11.00 WIB"
            date={dateStr}
            venue={weddingData.venue}
            address={weddingData.venueAddress}
            delay={0.3}
          />
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="divider-gold max-w-xs mx-auto mb-6" />
          <p className="font-serif text-lg italic leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
            kepadanya."
          </p>
          <p className="font-sans text-xs mt-3 tracking-widest" style={{ color: 'rgba(212,175,55,0.5)' }}>
            — QS. Ar-Rum : 21
          </p>
          <div className="divider-gold max-w-xs mx-auto mt-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
