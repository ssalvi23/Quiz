import React, { useEffect, useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {  Star, Target, Brain, Medal, Crown } from 'lucide-react';

export const ResultsSummary = () => {
  const { score, quizData, resetQuiz } = useQuiz();
  const totalQuestions = quizData?.questions.length || 0;
  const percentage = (score / (totalQuestions * 10)) * 100;
  const [showCelebration, setShowCelebration] = useState(false);
  
  useEffect(() => {
    setShowCelebration(true);
  }, []);

  const getAchievement = () => {
    if (percentage >= 90) return { 
      title: "Legendary Master!", 
      icon: Crown, 
      color: "text-yellow-400",
      message: "Absolutely Brilliant! You're a Quiz Champion! 🏆",
      gradient: "from-yellow-400 to-orange-500"
    };
    if (percentage >= 75) return { 
      title: "Quiz Expert!", 
      icon: Medal, 
      color: "text-indigo-400",
      message: "Outstanding Performance! Keep Shining! ⭐",
      gradient: "from-indigo-500 to-purple-500"
    };
    if (percentage >= 60) return { 
      title: "Knowledge Star!", 
      icon: Star, 
      color: "text-purple-400",
      message: "Great Job! You're Getting Better! 🌟",
      gradient: "from-purple-500 to-pink-500"
    };
    return { 
      title: "Rising Star!", 
      icon: Target, 
      color: "text-blue-400",
      message: "Nice Try! Keep Learning! 🎯",
      gradient: "from-blue-500 to-teal-500"
    };
  };

  const achievement = getAchievement();

  return (
    <div className="relative">
      {/* Celebration Effects */}
      {showCelebration && percentage >= 60 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 animate-float-slow">
            <span className="text-4xl">🎉</span>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-delayed">
            <span className="text-4xl">🎈</span>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float">
            <span className="text-4xl">🌟</span>
          </div>
        </div>
      )}

      <Card className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn bg-gradient-to-br from-white to-indigo-50 shadow-2xl rounded-2xl overflow-hidden">
        <CardHeader className={`text-center p-10 bg-gradient-to-r ${achievement.gradient} rounded-t-xl`}>
          <div className={`transform transition-all duration-1000 ${showCelebration ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
            <achievement.icon className={`w-20 h-20 ${achievement.color} mx-auto mb-4 animate-bounce`} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 animate-fadeIn">
            {achievement.title}
          </h1>
          <p className="text-lg text-white/90 animate-fadeIn delay-300">
            {achievement.message}
          </p>
        </CardHeader>

        <CardContent className="space-y-8 p-8 bg-gradient-to-br from-white to-indigo-50">
          <div className={`text-center py-8 bg-gradient-to-r ${achievement.gradient} rounded-xl text-white transform transition-all duration-500 hover:scale-105 shadow-lg`}>
            <div className="relative">
              <p className="text-6xl font-bold animate-pulse">{score}</p>
              <div className="absolute -right-2 -top-2 transform rotate-12 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-lg">
                SCORE!
              </div>
            </div>
            <p className="text-sm text-white/90 mt-2 uppercase tracking-wider font-medium">Amazing Score</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-3xl font-bold text-indigo-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {percentage.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-500">Accuracy</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {totalQuestions}
              </p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>

          <Button 
            onClick={resetQuiz}
            className="w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xl font-bold transition-all duration-300 hover:shadow-xl transform hover:scale-102 active:scale-98"
          >
            Play Again! 🎮
          </Button>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default ResultsSummary;