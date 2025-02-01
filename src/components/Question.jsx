import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Progress } from '../components/ui/progress';
import { Timer } from 'lucide-react';

export const Question = () => {
  const { currentQuestion, quizData, loading } = useQuiz();

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 text-center animate-pulse">
        <div className="w-8 h-8 border-2 border-[#FF7B00] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-500">Loading questions...</p>
      </div>
    );
  }

  if (!quizData?.questions?.length || !quizData.questions[currentQuestion]) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 text-center">
        <p className="text-gray-500">No question available</p>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white to-[#FFEA00]/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          Question {currentQuestion + 1} of {quizData.questions.length}
        </span>
        <span className="flex items-center gap-2 text-[#FF7B00]">
          <Timer className="w-4 h-4" />
          30s
        </span>
      </div>
      
      <Progress 
        value={((currentQuestion + 1) / quizData.questions.length) * 100} 
        className="mb-6 h-1.5 bg-[#FFEA00]/20"
      />
      
      <h2 className="text-xl text-gray-800 leading-relaxed animate-fadeIn">
        {question.description}
      </h2>
    </div>
  );
};

export default Question;