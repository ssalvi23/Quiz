import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { LightningBolt, Star } from 'lucide-react';

export const GameElements = () => {
  const { score, streak, multiplier } = useQuiz();

  return (
    <div className="flex justify-between items-center mb-6 p-5 bg-gradient-to-r from-[#FF7B00] to-[#FF9500] rounded-lg text-white">
      <div>
        <span className="font-semibold text-2xl">
          {score.toString().padStart(4, '0')}
        </span>
        <p className="text-[#e0ce03] text-xs">POINTS</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <LightningBolt className="w-5 h-5 text-[#FFD000]" />
          <span className="text-lg">{streak}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[#FFEA00]" />
          <span className="text-lg">x{multiplier}</span>
        </div>
      </div>
    </div>
  );
};

export default GameElements;