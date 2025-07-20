import React from 'react';

interface MessageBubbleProps {
  content: string | React.ReactNode;
  isBot?: boolean;
  timestamp?: string;
}

export function MessageBubble({ content, isBot = true, timestamp }: MessageBubbleProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`
          max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm
          ${isBot 
            ? 'bg-white text-gray-800 rounded-bl-sm' 
            : 'bg-gradient-to-r from-red-900 to-red-800 text-white rounded-br-sm'
          }
        `}
      >
        <div className="text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>
        {timestamp && (
          <div className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-red-100'}`}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
}