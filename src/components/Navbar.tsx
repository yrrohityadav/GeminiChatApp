import React from 'react';
import { MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">GeminiChat</span>
          </div>
          <div className="flex items-center">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;