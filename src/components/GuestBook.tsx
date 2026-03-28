import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGuestBook } from '../hooks/useGuestBook';
import type { GuestMessage } from '../types';

const attendanceLabels: Record<GuestMessage['attendance'], string> = {
  hadir: '✓ Hadir',
  tidak_hadir: '✗ Tidak Hadir',
  mungkin: '? Mungkin',
};

const attendanceColors: Record<GuestMessage['attendance'], string> = {
  hadir:       'rgba(212,175,55,0.9)',
  tidak_hadir: 'rgba(180,80,80,0.9)',
  mungkin:     'rgba(180,180,80,0.9)',
};

const GuestBook: React.FC = () => {
  const { messages, addMessage, isSubmitting, submitSuccess } = useGuestBook();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<GuestMessage['attendance']>('hadir');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    addMessage(name.trim(), message.trim(), attendance);
    setName('');
    setMessage('');
    setAttendance('hadir');
  };

  return (
    <section className="py-24 px-4" id="guestbook">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="section-title">Buku Tamu</h2>
        <p className="section-subtitle">Sampaikan doa &amp; ucapan Anda</p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 mb-10 relative"
        >
          {/* Top gold line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />

          <div className="mb-5">
            <label className="block font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(212,175,55,0.7)' }}>
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              required
              className="w-full px-4 py-3 font-sans text-sm outline-none transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: '#F5F0E8',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)')}
            />
          </div>

          <div className="mb-5">
            <label className="block font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(212,175,55,0.7)' }}>
              Kehadiran
            </label>
            <div className="flex gap-3 flex-wrap">
              {(['hadir', 'tidak_hadir', 'mungkin'] as GuestMessage['attendance'][]).map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAttendance(a)}
                  className="px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    border: `1px solid ${attendance === a ? '#D4AF37' : 'rgba(212,175,55,0.2)'}`,
                    color: attendance === a ? '#D4AF37' : 'rgba(245,240,232,0.4)',
                    background: attendance === a ? 'rgba(212,175,55,0.1)' : 'transparent',
                  }}
                >
                  {attendanceLabels[a]}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(212,175,55,0.7)' }}>
              Ucapan &amp; Doa
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan dan doa terbaik Anda..."
              rows={4}
              required
              className="w-full px-4 py-3 font-sans text-sm outline-none resize-none transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: '#F5F0E8',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)')}
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-gold w-full disabled:opacity-50">
            {isSubmitting ? 'Mengirim...' : '✦ Kirim Ucapan'}
          </button>

          <AnimatePresence>
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center font-sans text-sm mt-4"
                style={{ color: '#D4AF37' }}
              >
                ✓ Ucapan berhasil terkirim!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Messages list */}
        <div className="space-y-4">
          <AnimatePresence>
            {messages.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-serif italic text-sm"
                style={{ color: 'rgba(245,240,232,0.3)' }}
              >
                Belum ada ucapan. Jadilah yang pertama!
              </motion.p>
            ) : (
              messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-5 relative"
                >
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 flex items-center justify-center font-serif text-sm flex-shrink-0"
                        style={{
                          background: 'rgba(212,175,55,0.1)',
                          border: '1px solid rgba(212,175,55,0.3)',
                          color: '#D4AF37',
                        }}
                      >
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-serif text-sm font-medium" style={{ color: 'rgba(245,240,232,0.9)' }}>
                          {msg.name}
                        </p>
                        <p className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.35)' }}>
                          {new Date(msg.timestamp).toLocaleDateString('id-ID', {
                            day: 'numeric', month: 'short', year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <span
                      className="font-sans text-xs px-2 py-1 flex-shrink-0"
                      style={{
                        color: attendanceColors[msg.attendance],
                        border: `1px solid ${attendanceColors[msg.attendance]}`,
                        background: `${attendanceColors[msg.attendance]}15`,
                      }}
                    >
                      {attendanceLabels[msg.attendance]}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {msg.message}
                  </p>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default GuestBook;
