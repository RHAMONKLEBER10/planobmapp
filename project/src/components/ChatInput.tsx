import React, { useState } from 'react';
import { Send, Paperclip, Mic, Smile } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-4 border-t border-red-100">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <button
          type="button"
          className="p-2 text-red-800 hover:bg-red-50 rounded-full transition-colors"
          disabled={disabled}
        >
          <Paperclip size={20} />
        </button>
        
        <div className="flex-1 flex items-center bg-red-50 rounded-full px-4 py-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
            disabled={disabled}
          />
          <button
            type="button"
            className="p-1 text-red-800 hover:bg-red-100 rounded-full transition-colors ml-2"
            disabled={disabled}
          >
            <Smile size={18} />
          </button>
        </div>
        
        <button
          type="button"
          className="p-2 text-red-800 hover:bg-red-50 rounded-full transition-colors"
          disabled={disabled}
        >
          <Mic size={20} />
        </button>
        
        <button
          type="submit"
          className="p-2 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-white rounded-full transition-colors disabled:opacity-50"
          disabled={disabled || !message.trim()}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}