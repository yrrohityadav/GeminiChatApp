import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-gray-500">Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span className="text-gray-500">using Gemini AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;