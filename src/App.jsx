// src/App.jsx
import React, { useEffect } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { fetchQuizData } from './services/api'; // Make sure fetchQuizData is correct
import QuizStart from './components/QuizStart';
import Question from './components/Question';
import ResultsSummary from './components/ResultSummary'; // Results summary
import { Alert, AlertDescription } from './components/ui/alert';
import Options from './components/Options';

const QuizApp = () => {
  const { 
    quizStarted, 
    showResults, 
    loading, 
    error,
    setQuizData, 
    setLoading, 
    setError 
  } = useQuiz(); // Correct use of useQuiz hook

  useEffect(() => {
    const loadQuizData = async () => {
      setLoading(true); // Set loading to true
      try {
        const data = await fetchQuizData();
        setQuizData(data); // Store quiz data
      } catch (err) {
        setError(err.message); // Store error if there's any
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    loadQuizData();
  }, [setError, setLoading, setQuizData]); // Correctly using setLoading and other methods

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-10">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {!quizStarted && <QuizStart />}
      {quizStarted && !showResults && (
        <>
          <Question />  {/* Display the current question */}
          <Options />   {/* Display the options related to the question */}
        </>
      )}
      {showResults && <ResultsSummary />}
    </div>
  );
};

const App = () => {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
};

export default App;
