import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const Question = () => {
  const { 
    currentQuestion, 
    quizData,
    handleAnswer,
    loading
  } = useQuiz();

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-10">
        <CardContent>
          <p>Loading questions...</p>
        </CardContent>
      </Card>
    );
  }

  if (!quizData?.questions?.[currentQuestion]) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-10">
        <CardContent>
          <p>No question available</p>
        </CardContent>
      </Card>
    );
  }

  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Time Remaining: 30s
            </span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-gray-200"
          />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {question.description}
            </h2>
            {question.options?.length ? (
              <div className="grid gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.is_correct)}
                    className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className="text-gray-800 text-lg">{option.answer}</span>
                  </button>
                ))}
              </div>
            ) : (
              <p>No options available for this question.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;