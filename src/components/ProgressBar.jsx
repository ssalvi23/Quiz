import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

export const ProgressBar = () => {
  const { currentQuestion, quizData } = useQuiz();
  const progress = ((currentQuestion + 1) / quizData?.questions.length) * 100;

  return (
    <div className="w-full space-y-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
      <div className="flex justify-between text-sm font-medium">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600 animate-pulse" />
          <span className="text-indigo-900">Level {currentQuestion + 1} / {quizData?.questions.length}</span>
        </div>
        <span className="text-purple-600 font-bold">{Math.round(progress)}% Complete</span>
      </div>
      <div className="relative">
        <Progress 
          value={progress} 
          className="h-3 bg-indigo-100 rounded-full overflow-hidden"
        />
        <div 
          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-[-2px] w-4 h-7 bg-white rounded-full shadow-lg transform translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;