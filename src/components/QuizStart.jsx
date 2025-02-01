import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, XCircle, Clock, BarChart } from 'lucide-react';

export const QuizStart = () => {
  const { startQuiz, quizData } = useQuiz();

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-xl transform transition-all duration-500 hover:shadow-2xl animate-slideInUp">
      <CardHeader className="p-8 bg-gradient-to-r from-[#FFDD00]/50 to-[#FFEA00]/50 rounded-t-xl">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#FF7B00] to-[#FF9500] bg-clip-text text-transparent">
          {quizData?.title || 'Quiz Challenge'}
        </h1>
      </CardHeader>
      
      <CardContent className="text-center space-y-8 p-8">
        <div className="space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed animate-fadeIn">
            {quizData?.description || 'Test your knowledge with this exciting quiz!'}
          </p>
          
          <div className="bg-[#FFEA00]/5 p-6 rounded-xl shadow-inner">
            <h2 className="font-bold text-xl mb-4 text-[#FF7B00]">Quiz Rules</h2>
            <div className="grid grid-cols-1 gap-4 text-left">
              {[
                { Icon: CheckCircle, color: 'text-[#FF7B00]', text: 'Each correct answer earns you 10 points' },
                { Icon: XCircle, color: 'text-[#FF9500]', text: 'No negative marking for wrong answers' },
                { Icon: Clock, color: 'text-[#FFB700]', text: 'You cannot go back to previous questions' },
                { Icon: BarChart, color: 'text-[#FF7B00]', text: 'Final score and performance summary at the end' }
              ].map((rule, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <rule.Icon className={`w-6 h-6 ${rule.color}`} />
                  <span className="text-gray-700">{rule.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button 
          onClick={startQuiz} 
          className="w-full max-w-xs mx-auto text-lg py-6 bg-gradient-to-r from-[#FF7B00] to-[#FF9500] hover:from-[#FF7B00] hover:to-[#FF7B00] text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce"
        >
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizStart;