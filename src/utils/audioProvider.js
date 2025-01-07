import React, { createContext, useEffect } from "react";

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  useEffect(() => {
    const audio = document.createElement("audio");
    audio.src = "/music/pink-soldiers.mp3"; 
    audio.loop = true;
    audio.volume = 0.2;

    document.body.appendChild(audio);

    const playAudio = () => {
      audio.play().catch((err) => console.error("Autoplay failed:", err));
    };

    document.body.addEventListener("click", playAudio, { once: true });

    playAudio();


    return () => {
      audio.pause();
      document.body.removeChild(audio);
    };
  }, []);

  return <AudioContext.Provider value={{}}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
