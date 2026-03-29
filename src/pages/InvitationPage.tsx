import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CountdownSection from '../components/CountdownSection';
import CoupleSection from '../components/CoupleSection';
import EventDetails from '../components/EventDetails';
import MapEmbed from '../components/MapEmbed';
import Gallery from '../components/Gallery';
import LoveStory from '../components/LoveStory';
import WeddingGift from '../components/WeddingGift';
import GuestBook from '../components/GuestBook';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import { motion } from 'framer-motion';

interface InvitationPageProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const InvitationPage: React.FC<InvitationPageProps> = ({ isPlaying, toggleMusic }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
      style={{ background: '#0A0A0A' }}
    >
      <Navbar isVisible={true} />
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

      <main>
        <HeroSection />
        <CountdownSection />
        <CoupleSection />
        <LoveStory />
        <EventDetails />
        <MapEmbed />
        <Gallery />
        <WeddingGift />
        <GuestBook />
      </main>

      <Footer />
    </motion.div>
  );
};

export default InvitationPage;
