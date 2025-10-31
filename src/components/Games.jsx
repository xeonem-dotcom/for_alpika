import React, { useEffect, useRef, useState } from "react";

const Games = () => {
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef(null);

  // Spawn new hearts at intervals
  useEffect(() => {
    if (gameOver) return;

    const spawnInterval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - 50),
          y: -50,
          speed: 2 + Math.random() * 3 + score * 0.1, // speed increases with score
        },
      ]);
    }, 1000);

    return () => clearInterval(spawnInterval);
  }, [gameOver, score]);

  // Move hearts down
  useEffect(() => {
    if (gameOver) return;

    const fallInterval = setInterval(() => {
      setHearts((prev) => {
        const updated = prev.map((h) => ({
          ...h,
          y: h.y + h.speed,
        }));

        // Check if any heart hits the bottom
        for (let h of updated) {
          if (h.y >= window.innerHeight - 50) {
            setGameOver(true);
            clearInterval(fallInterval);
            return prev;
          }
        }

        return updated;
      });
    }, 30);

    return () => clearInterval(fallInterval);
  }, [gameOver]);

  // Pop heart and increase score
  const popHeart = (id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
    setScore((s) => s + 1);
  };

  // Restart game
  const restartGame = () => {
    setScore(0);
    setHearts([]);
    setGameOver(false);
  };

  return (
    <div
      ref={gameAreaRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-pink-100 to-rose-200 flex items-center justify-center"
    >
      {/* Score */}
      <div className="absolute top-4 left-4 text-2xl font-semibold text-pink-600">
        Score: {score}
      </div>

      {/* Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          onClick={() => popHeart(heart.id)}
          className="absolute text-5xl cursor-pointer select-none transition-transform duration-200 active:scale-125"
          style={{
            left: heart.x,
            top: heart.y,
            transition: "top 0.03s linear",
          }}
        >
          💖
        </div>
      ))}

      {/* Game Over Screen */}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">
            Game Over 💔
          </h1>
          <p className="text-xl text-pink-500 mb-6">Final Score: {score}</p>
          <button
            onClick={restartGame}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Games;
