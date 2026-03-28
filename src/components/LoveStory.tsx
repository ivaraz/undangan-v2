import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

const LoveStory: React.FC = () => {
  return (
    <section className="py-24 px-4 relative" id="lovestory">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${weddingData.coverImage})` }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Kisah Cinta</h2>
          <p className="section-subtitle">Perjalanan cinta kami hingga saat ini</p>
        </motion.div>

        <div className="space-y-12">
          {weddingData.loveStory?.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="glass-card p-8 md:p-10 relative overflow-hidden"
            >
              {/* Thin gold border top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                }}
              />

              <span 
                className="font-serif text-sm italic mb-3 block"
                style={{ color: '#D4AF37' }}
              >
                {story.date}
              </span>
              <h3 
                className="font-display text-3xl mb-4"
                style={{ color: 'rgba(245,240,232,0.9)' }}
              >
                {story.title}
              </h3>
              <p 
                className="font-sans text-sm leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.7)' }}
              >
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
