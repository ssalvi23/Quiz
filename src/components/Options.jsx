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
    <div className="grid grid-cols-1 gap-3 p-4">
      {question.options.map((option, index) => (
        <div
          key={index}
          className="animate-fadeIn"
          style={{
            animationDelay: `${index * 100}ms`,
            opacity: 0,
            animation: 'fadeIn 0.4s ease forwards'
          }}
        >
          <Button
            className="w-full text-left justify-start h-auto py-4 px-5 bg-white hover:bg-[#FFEA00]/10 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md group"
            onClick={() => handleAnswer(option.is_correct)}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#FFD000] text-[#FF7B00] text-sm group-hover:bg-[#FF7B00] group-hover:text-white">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-gray-700 text-base group-hover:text-[#FF7B00]">
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
            transform: translateY(10px);
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