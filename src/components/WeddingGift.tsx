import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle2 } from 'lucide-react';
import { weddingData } from '../data/wedding';

const WeddingGift: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'transfer' | 'kado'>('transfer');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-24 px-4" id="gift" style={{ background: 'rgba(17,17,17,0.8)' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Wedding Gift</h2>
          <p className="section-subtitle">Doa restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
          <p className="font-sans text-sm max-w-lg mx-auto mt-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Namun jika Anda ingin memberikan tanda kasih untuk kami, Anda dapat memberikannya melalui:
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 space-x-4"
        >
          <button
            onClick={() => setActiveTab('transfer')}
            className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
              activeTab === 'transfer'
                ? 'text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-gold-500 hover:text-white'
            }`}
            style={{
               background: activeTab === 'transfer' ? 'linear-gradient(135deg, #D4AF37 0%, #F5E070 100%)' : 'rgba(26,20,8,0.5)',
               border: activeTab === 'transfer' ? '1px solid transparent' : '1px solid rgba(212,175,55,0.3)',
            }}
          >
            Digital Transfer
          </button>
          <button
            onClick={() => setActiveTab('kado')}
            className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
              activeTab === 'kado'
                ? 'text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-gold-500 hover:text-white'
            }`}
            style={{
               background: activeTab === 'kado' ? 'linear-gradient(135deg, #D4AF37 0%, #F5E070 100%)' : 'rgba(26,20,8,0.5)',
               border: activeTab === 'kado' ? '1px solid transparent' : '1px solid rgba(212,175,55,0.3)',
            }}
          >
            Kirim Kado
          </button>
        </motion.div>

        {/* Content */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'transfer' && (
              <motion.div
                key="transfer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full space-y-6"
              >
                {weddingData.bankAccounts?.map((bank, index) => (
                  <div key={index} className="glass-card p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group">
                    <button
                      onClick={() => handleCopy(bank.accountNumber)}
                      className="absolute top-4 right-4 p-2 text-gold-500 hover:text-white transition-colors bg-black/20 rounded-full group-hover:bg-black/40"
                      title="Salin Rekening"
                    >
                      {copiedText === bank.accountNumber ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                    </button>
                    
                    <p className="font-sans font-bold text-lg mb-1" style={{ color: 'rgba(245,240,232,0.9)' }}>
                      {bank.bankName}
                    </p>
                    <p className="font-mono text-2xl mb-2 tracking-wider" style={{ color: 'rgba(212,175,55,0.9)' }}>
                      {bank.accountNumber}
                    </p>
                    <p className="font-sans text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
                      a.n. {bank.accountHolder}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'kado' && (
              <motion.div
                key="kado"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group">
                  <button
                    onClick={() => handleCopy(weddingData.shippingAddress || '')}
                    className="absolute top-4 right-4 p-2 text-gold-500 hover:text-white transition-colors bg-black/20 rounded-full group-hover:bg-black/40"
                    title="Salin Alamat"
                  >
                    {copiedText === weddingData.shippingAddress ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  </button>
                  
                  <div className="w-16 h-px mb-6 mt-4" style={{ background: 'rgba(212,175,55,0.4)' }} />
                  <p className="font-sans text-base leading-relaxed whitespace-pre-wrap max-w-sm" style={{ color: 'rgba(245,240,232,0.8)' }}>
                    {weddingData.shippingAddress}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
