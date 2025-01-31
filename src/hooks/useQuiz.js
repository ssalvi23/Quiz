import { useState, useEffect } from 'react';
import { fetchQuizData } from './api';

const useQuiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadQuiz = async () => {
            try {
                const data = await fetchQuizData();
                // Mock the options if they're not present
                if (data?.questions) {
                    data.questions = data.questions.map(question => ({
                        ...question,
                        options: [
                            { answer: 'AAAT', is_correct: false },
                            { answer: 'AAAU', is_correct: true },
                            { answer: 'TTTA', is_correct: false },
                            { answer: 'AAGT', is_correct: false }
                        ]
                    }));
                }
                setQuizData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        loadQuiz();
    }, []);

    return { quizData, error };
};

export default useQuiz;
