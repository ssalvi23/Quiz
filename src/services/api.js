// const API_URL = 'https://api.jsonserve.com/Uw5CrX';

// src/services/api.js

export const fetchQuizData = async () => {
  const response = await fetch('/Uw5CrX'); // Use the proxy configured URL
  if (!response.ok) {
    throw new Error('Failed to fetch quiz data');
  }
  return response.json(); // Assuming the response is in JSON format
};
