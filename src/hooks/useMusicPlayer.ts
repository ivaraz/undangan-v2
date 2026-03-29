import { useState, useEffect, useCallback } from "react";

export const useMusicPlayer = (src: string) => {
  const [audio] = useState(() => new Audio(src));

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    audio.src = src; // Always ensure src is set (fixes StrictMode src wipe)
    audio.loop = true;
    audio.volume = 0.5;

    const handleCanPlay = () => setIsLoaded(true);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      // Do not set audio.src = '' here because React Strict Mode will remount immediately
    };
  }, [audio, src]);

  const play = useCallback(() => {
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.error("Autoplay prevented:", err);
        setIsPlaying(false);
      });
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
    setIsPlaying(false);
  }, [audio]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  return { isPlaying, isLoaded, toggle, play, pause };
};
