import React, { useState } from "react";

const Games = () => {
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setScore(score + Math.floor(Math.random() * 10 + 1));
    setClicks(clicks + 1);
  };

  return (
    <div className="text-center p-6 bg-gradient-to-br from-pink-200 to-purple-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">🎮 Fun Zone</h1>
      <p className="mb-6 text-lg text-purple-700">
        Welcome to the Games corner! Let’s see how fast you can click.  
      </p>

      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all"
      >
        Click Me 💥
      </button>

      <div className="mt-6">
        <p className="text-xl font-semibold text-purple-900">Score: {score}</p>
        <p className="text-md text-purple-700">Total Clicks: {clicks}</p>
      </div>

      {clicks >= 15 && (
        <div className="mt-6 text-green-800 text-lg">
          You’ve officially proved your love through clicks 💘
        </div>
      )}
    </div>
  );
};

export default Games;
