import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Progress } from '@/components/ui/progress';

export const ProgressBar = () => {
  const { currentQuestion, quizData } = useQuiz();
  const progress = ((currentQuestion + 1) / quizData?.questions.length) * 100;

  return (
    <div className="w-full space-y-3 animate-fadeIn">
      <div className="flex justify-between text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF7B00] animate-pulse" />
          <span>Question {currentQuestion + 1} of {quizData?.questions.length}</span>
        </div>
        <span className="text-[#FF7B00]">{Math.round(progress)}% Complete</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-[#FFEA00]/20 rounded-full overflow-hidden transition-all duration-1000 ease-in-out"
      />
    </div>
  );
};

export default ProgressBar;