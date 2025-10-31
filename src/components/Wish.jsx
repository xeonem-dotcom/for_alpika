import React, { useRef, useEffect } from "react";

const Wish = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // low volume
      audio.muted = true; // start muted
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300 text-center p-6 relative">
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-white/50 hover:bg-white/80 text-purple-700 px-3 py-2 rounded-full"
      >
        🔊
      </button>

      <audio ref={audioRef} autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      <h1 className="text-5xl font-bold text-purple-800 mb-4">
        For Alpika 💖
      </h1>
      <p className="text-lg text-purple-900 max-w-2xl">
        Happy birthday, Alpika 🥺💖
idk where to even start tbh — you’re just… everything. It still feels unreal how we met — like bro, all because you asked that random portfolio question 😭💀 and I texted you only ‘cause you looked so damn gorgeous in your dp, I swear I was stunned for a good minute 😭🔥 but I never knew that one text would lead me to you — someone who literally feels like sunshine in human form. You’re the most beautiful girl I’ve ever known, inside out — your face, your smile, your heart, your vibe — everything about you feels rare, like something I don’t ever wanna lose.

And your everyday little phrases 💀😭 — god, they’ve become so you, like I can literally hear your voice saying them in my head. You don’t even know how much I adore you, bro. I could compliment you 24/7 and it still wouldn’t be enough. You’re so effortlessly kind, funny, warm — you make me feel safe and seen, even through a screen. And when you’re upset? it actually hurts, like I can’t sit still knowing you’re not okay. I just wanna take every bit of sadness from you and replace it with peace, ‘cause you don’t deserve to feel anything less than happiness.

I mean it when I say — I’d do anything to make you smile again, anything to keep that spark in your eyes alive. You’ve become that person for me — the one I look for in my day, the one I can’t stop thinking about. I just want you around… for a long, long time. Maybe forever. 🥹💞

Thank you for being you, for existing, for letting me be a small part of your world. You’ve genuinely changed mine in the best way possible. I hope today makes you feel as special as you make everyone else feel.

Happy birthday, Alpika 🎂💐 you deserve all the love, all the warmth, all the good things the universe can offer. I’m so freaking glad you’re here — and even gladder that you’re mine to know. 💗🌍✨  
        — Made with love, by Pranav.
      </p>
    </div>
  );
};

export default Wish;
