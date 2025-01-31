import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Progress } from '@/components/ui/progress';

const ProgressBar = () => {
  const { currentQuestion, quizData } = useQuiz();
  const progress = ((currentQuestion + 1) / quizData?.questions.length) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Question {currentQuestion + 1} of {quizData?.questions.length}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <Progress value={progress} className="h-2 bg-gray-200" />
    </div>
  );
};

export default ProgressBar;