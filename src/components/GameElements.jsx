import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { LightningBolt, Star, Trophy } from 'lucide-react';

export const GameElements = () => {
  const { score, streak, multiplier } = useQuiz();

  return (
    <div className="flex justify-between items-center mb-6 p-5 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg text-white shadow-lg transform hover:scale-102 transition-all duration-300">
      <div className="flex items-center gap-4">
        <Trophy className="w-6 h-6 text-yellow-300 animate-bounce" />
        <div>
          <span className="font-bold text-3xl font-gaming">
            {score.toString().padStart(4, '0')}
          </span>
          <p className="text-purple-200 text-xs tracking-wider">SCORE</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center bg-indigo-800/50 px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2">
            <LightningBolt className="w-5 h-5 text-yellow-300" />
            <span className="text-xl font-bold">{streak}</span>
          </div>
          <span className="text-xs text-purple-200">STREAK</span>
        </div>
        
        <div className="flex flex-col items-center bg-indigo-800/50 px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-xl font-bold">x{multiplier}</span>
          </div>
          <span className="text-xs text-purple-200">MULTIPLIER</span>
        </div>
      </div>
    </div>
  );
};

export default GameElements;