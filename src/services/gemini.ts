import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const getGeminiResponse = async (prompt: string) => {
  try {
    // Validate API key
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      throw new Error('Gemini API key is not configured');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Ensure prompt is not empty
    if (!prompt.trim()) {
      throw new Error('Empty prompt provided');
    }

    const result = await model.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error('Invalid response from Gemini API');
    }

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    
    // Return a user-friendly error message based on the error type
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return 'Error: Gemini API key is not properly configured. Please check your environment variables.';
      }
      return `Error: ${error.message}`;
    }
    
    return 'An unexpected error occurred while processing your request. Please try again.';
  }
};