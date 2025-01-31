import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ResultsSummary = () => {
  const { score, quizData, resetQuiz } = useQuiz();
  const totalQuestions = quizData?.questions.length || 0;
  const percentage = (score / (totalQuestions * 10)) * 100;
  
  const getPerformanceMessage = () => {
    if (percentage >= 80) return "Outstanding Performance!";
    if (percentage >= 60) return "Good Job!";
    return "Keep Practicing!";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <CardHeader className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">{getPerformanceMessage()}</h1>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-4 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">{score} points</p>
            <p className="text-sm text-gray-600 mt-1">Total Score</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-semibold text-gray-800">{percentage.toFixed(1)}%</p>
              <p className="text-sm text-gray-600">Accuracy</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-semibold text-gray-800">{totalQuestions}</p>
              <p className="text-sm text-gray-600">Questions</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={resetQuiz}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-200"
        >
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;