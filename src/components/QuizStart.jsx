import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';

const QuizStart = () => {
  const { startQuiz, quizData } = useQuiz();

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <CardHeader className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          {quizData?.title || 'Quiz Challenge'}
        </h1>
      </CardHeader>
      <CardContent className="text-center space-y-6 p-6">
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            {quizData?.description || 'Test your knowledge with this exciting quiz!'}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-gray-800">Quiz Rules:</h2>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              <li>Each correct answer earns you 10 points</li>
              <li>No negative marking for wrong answers</li>
              <li>You cannot go back to previous questions</li>
              <li>Final score and performance summary at the end</li>
            </ul>
          </div>
        </div>
        <Button 
          onClick={startQuiz} 
          className="w-full max-w-xs text-lg py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-200"
        >
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizStart;