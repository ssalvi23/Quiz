import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Button } from '../components/ui/button';

export const Options = () => {
  const { quizData, currentQuestion, handleAnswer } = useQuiz();
  const question = quizData?.questions?.[currentQuestion];

  if (!question || !question.options?.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {question.options.map((option, index) => (
        <div
          key={index}
          className="animate-fadeIn"
          style={{
            animationDelay: `${index * 150}ms`,
            opacity: 0,
            animation: 'fadeIn 0.5s ease forwards'
          }}
        >
          <Button
            className="w-full text-left justify-start h-auto py-5 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] group"
            onClick={() => handleAnswer(option.is_correct)}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold group-hover:from-indigo-700 group-hover:to-purple-700">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-gray-700 text-lg group-hover:text-indigo-800">
                {option.description}
              </span>
            </div>
          </Button>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Options;