import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Timer, Brain } from 'lucide-react';

export const Question = () => {
  const { currentQuestion, quizData, loading } = useQuiz();

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 text-center">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-indigo-600 font-medium">Loading your challenge...</p>
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
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white to-indigo-50 rounded-xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-indigo-600" />
          <span className="font-medium text-indigo-900">
            Challenge {currentQuestion + 1} of {quizData.questions.length}
          </span>
        </div>
        <div className="flex items-center gap-2 text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
          <Timer className="w-5 h-5" />
          <span className="font-bold">30s</span>
        </div>
      </div>
      
      <h2 className="text-2xl text-gray-800 leading-relaxed animate-fadeIn font-medium">
        {question.description}
      </h2>
      
      <div className="mt-6 bg-indigo-50 rounded-lg p-4">
        <div className="flex items-center gap-2 text-sm text-indigo-600">
          <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          <span>Choose the best answer</span>
        </div>
      </div>
    </div>
  );
};

export default Question;