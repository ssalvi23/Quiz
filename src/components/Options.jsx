import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Button } from '../components/ui/button';

const Options = () => {
  const { quizData, currentQuestion, handleAnswer } = useQuiz();

  useEffect(() => {
    console.log("Current Question Data:", quizData?.questions[currentQuestion]);
  }, [quizData, currentQuestion]);

  const question = quizData?.questions[currentQuestion];

  if (!question || currentQuestion >= quizData?.questions?.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {question?.options?.map((option) => (
        <Button
          key={option.id}
          className="w-full text-left justify-start h-auto py-4 px-6 bg-white hover:bg-blue-50 border border-gray-200 rounded-lg shadow-sm transition-all duration-200"
          onClick={() => handleAnswer(option.is_correct)}
        >
          <span className="text-gray-800 text-lg">{option.description}</span>
        </Button>
      ))}
    </div>
  );
};

export default Options;