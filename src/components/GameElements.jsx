import React from 'react';
import { useQuiz } from '../hooks/useQuiz';

export function GameElements() {
  const { score, streak, multiplier } = useQuiz();

  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
      <div>
        <span className="font-bold text-2xl">Score: {score}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-orange-300 text-xl">
          Streak: {streak} 🔥
        </span>
        <span className="text-yellow-300 text-xl">
          Multiplier: x{multiplier}
        </span>
      </div>
    </div>
  );
}