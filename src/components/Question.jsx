import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const Question = () => {
  const { currentQuestion, quizData, loading } = useQuiz();

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center">
          <p>Loading questions...</p>
        </CardContent>
      </Card>
    );
  }

  if (!quizData?.questions?.length || !quizData.questions[currentQuestion]) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center">
          <p>No question available</p>
        </CardContent>
      </Card>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border border-blue-100">
      <CardHeader className="bg-blue-50 p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            Time Remaining: 30s
          </span>
        </div>
        <Progress 
          value={((currentQuestion + 1) / quizData.questions.length) * 100} 
          className="mt-2 h-2 bg-gray-200"
        />
      </CardHeader>
      
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {question.description}
        </h2>
      </CardContent>
    </Card>
  );
};

export default Question;