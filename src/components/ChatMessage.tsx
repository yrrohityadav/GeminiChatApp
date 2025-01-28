import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  // Function to format contact information
  const formatMessage = (text: string) => {
    if (isUser) return text;

    // Split the message into lines
    const lines = text.split('\n');
    
    // Process each line to remove asterisks and format properly
    return lines.map((line, index) => {
      // Remove asterisks and extra spaces
      line = line.replace(/\*/g, '').trim();
      
      // Skip empty lines
      if (!line) return null;

      // Format section headers
      if (line.endsWith(':')) {
        return (
          <h3 key={index} className="font-bold text-gray-800 mt-4 mb-2">
            {line}
          </h3>
        );
      }

      // Format email addresses
      if (line.includes('@')) {
        const [label, email] = line.split(':').map(s => s.trim());
        return (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-1">
            <span className="font-medium">{label}:</span>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </a>
          </div>
        );
      }

      // Format website and social media links
      if (line.includes('http')) {
        const [label, url] = line.split(':').map(s => s.trim());
        return (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-1">
            <span className="font-medium">{label}:</span>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {url}
            </a>
          </div>
        );
      }

      // Format address lines
      return (
        <p key={index} className="py-1">
          {line}
        </p>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
          {isUser ? (
            <div className="bg-blue-500 rounded-full p-2">
              <User className="h-5 w-5 text-white" />
            </div>
          ) : (
            <div className="bg-gray-500 rounded-full p-2">
              <Bot className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
        <div className={`rounded-lg px-4 py-2 ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
        }`}>
          {isUser ? (
            <p className="text-sm whitespace-pre-wrap">{message}</p>
          ) : (
            <div className="text-sm">{formatMessage(message)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;