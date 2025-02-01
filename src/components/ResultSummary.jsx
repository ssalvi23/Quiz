import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Trophy, PieChart } from 'lucide-react';

export const ResultsSummary = () => {
  const { score, quizData, resetQuiz } = useQuiz();
  const totalQuestions = quizData?.questions.length || 0;
  const percentage = (score / (totalQuestions * 10)) * 100;
  
  const getMessage = () => {
    if (percentage >= 80) return "Outstanding!";
    if (percentage >= 60) return "Good Job!";
    return "Keep Practicing!";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn bg-gradient-to-br from-white to-[#FFEA00]/20">
      <CardHeader className="text-center p-6">
        <Trophy className="w-12 h-12 text-[#FFB700] mx-auto mb-3" />
        <h1 className="text-2xl font-semibold text-[#FF7B00]">
          {getMessage()}
        </h1>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <div className="text-center py-4 bg-gradient-to-r from-[#FF7B00] to-[#FF9500] rounded-lg text-white">
          <p className="text-4xl font-bold">{score}</p>
          <p className="text-sm text-[#FFEA00] mt-1">Total Score</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <PieChart className="w-6 h-6 text-[#FF7B00] mx-auto mb-2" />
            <p className="text-xl font-semibold text-[#FF7B00]">{percentage.toFixed(1)}%</p>
            <p className="text-sm text-gray-500">Accuracy</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Trophy className="w-6 h-6 text-[#FFB700] mx-auto mb-2" />
            <p className="text-xl font-semibold text-[#FF7B00]">{totalQuestions}</p>
            <p className="text-sm text-gray-500">Questions</p>
          </div>
        </div>

        <Button 
          onClick={resetQuiz}
          className="w-full py-3 bg-gradient-to-r from-[#FF7B00] to-[#FF9500] hover:from-[#FF7B00] hover:to-[#FF7B00] text-white rounded-lg transition-all duration-200"
        >
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;