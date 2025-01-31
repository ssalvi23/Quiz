// src/context/QuizContext.jsx
import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    if (currentQuestion + 1 < quizData?.questions?.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const value = {
    currentQuestion,
    score,
    showResults,
    quizStarted,
    quizData,
    loading,
    error,
    handleAnswer,
    startQuiz,
    resetQuiz,
    setQuizData,
    setLoading,
    setError,
    setQuizStarted  // Added this to the context value
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};