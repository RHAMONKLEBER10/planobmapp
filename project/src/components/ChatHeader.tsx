import React from 'react';
import { ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
  onBack: () => void;
}

export function ChatHeader({ onBack }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-3">
        <button 
          onClick={onBack}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
    <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqVGj0Eu3BDZa_1RgwTQQw3cmHOeWziU1PqqZ2AtKSDv4bJ0ofBLBuF62aiuDt9K5oJmCcUNXV7bmhJPQxlTj3X6FpSqA6ToaqUZjCt-xn1tltUyzUuQLLckn7d-h8q63jw9mz_pAIRJcbBc2TG_z99kw-lAVKxQl9FohyphenhyphenYR0CXsuTbbz7xJKdGF_G7NrQ/s16000/2026.png"
    />
        <div>
          <h3 className="font-semibold">Plano BM</h3>
          <p className="text-xs text-red-100">Atendimento Virtual • Online</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
          <Phone size={20} />
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
          <Video size={20} />
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}