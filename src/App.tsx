import React, { useState, useCallback, useRef } from "react";
import CoverPage from "./pages/CoverPage";
import InvitationPage from "./pages/InvitationPage";

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio lazily (once)
  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      // For public directory files, use import.meta.env.BASE_URL
      // In dev: /undangan-v2/  |  In prod: /undangan-v2/
      const fullMusicUrl = `${import.meta.env.BASE_URL}music/bergema.m4a`;
      console.log('[MusicPlayer] Audio URL:', fullMusicUrl);
      const audio = new Audio(fullMusicUrl);
      audio.loop = true;
      audio.volume = 0.4;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const handleOpenInvitation = useCallback(() => {
    setIsOpened(true);
    // Play music immediately on user gesture (click) — this satisfies browser autoplay policy
    const audio = getAudio();
    audio.play()
      .then(() => {
        console.log('[MusicPlayer] Playing successfully');
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("[MusicPlayer] Autoplay prevented:", err);
        setIsPlaying(false);
      });
  }, [getAudio]);

  const toggleMusic = useCallback(() => {
    const audio = getAudio();
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("[MusicPlayer] Play prevented:", err);
          setIsPlaying(false);
        });
    }
  }, [isPlaying, getAudio]);

  if (!isOpened) {
    return <CoverPage onOpen={handleOpenInvitation} />;
  }

  return (
    <InvitationPage isPlaying={isPlaying} toggleMusic={toggleMusic} />
  );
};

export default App;
