import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, Brain, Clock, Trophy } from 'lucide-react';

export const QuizStart = () => {
  const { startQuiz, quizData } = useQuiz();

  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 bg-gradient-to-br from-white to-indigo-50 shadow-2xl rounded-2xl transform transition-all duration-500 hover:shadow-3xl">
      <CardHeader className="p-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl text-white">
        <div className="flex justify-center mb-6">
          <Brain className="w-16 h-16 text-white animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold text-center">
          {quizData?.title || 'Knowledge Challenge'}
        </h1>
      </CardHeader>
      
      <CardContent className="text-center space-y-8 p-8">
        <p className="text-2xl text-gray-700 leading-relaxed animate-fadeIn">
          {quizData?.description || 'Ready to test your knowledge? Take on this exciting challenge!'}
        </p>
        
        <div className="bg-indigo-50 p-8 rounded-xl shadow-inner">
          <h2 className="font-bold text-3xl mb-6 text-indigo-800">Game Rules</h2>
          <div className="grid grid-cols-1 gap-4">
            {[ 
              { Icon: Trophy, text: 'Earn points for each correct answer', color: 'indigo' },
              { Icon: CheckCircle, text: 'Build streaks for bonus multipliers', color: 'purple' },
              { Icon: Clock, text: 'Race against time - 30 seconds per question', color: 'indigo' },
              { Icon: Brain, text: 'Unlock achievements as you progress', color: 'purple' }
            ].map((rule, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`p-2 rounded-lg bg-${rule.color}-100`}>
                  <rule.Icon className={`w-6 h-6 text-${rule.color}-600`} />
                </div>
                <span className="text-xl text-gray-700">{rule.text}</span> {/* Increased font size to text-xl */}
              </div>
            ))}
          </div>
        </div>

        <Button 
          onClick={startQuiz} 
          className="w-full max-w-xs mx-auto text-2xl py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
        >
          Begin Challenge
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizStart;
