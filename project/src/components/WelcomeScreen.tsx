import React from 'react';
import { MessageCircle, Users, Shield, Clock } from 'lucide-react';

interface WelcomeScreenProps {
  onStartChat: () => void;
}

export function WelcomeScreen({ onStartChat }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <div class="container">
    <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFzpJx0dchrXGstMXiZmv6MwX8p-9Et_ih4Y-KEihUKsRw8EpfVlNqNq9gMs-hBSgFpQTDFW7JCuADTbu8LJ3oHV1LnCv9KD7LOzAY6lOW5cSmKloz3Mrn5HGZnnp9S2-nifsog5QuFYffKgBdgv4yP1AESnJ9e4WSVIZoYpez6lObPIhMmVqPxXbx-QGf/s1600/2025.png"
    />
</div>

          </div>
          
          <h1 className="text-3xl font-bold text-white">
            Plano BM
          </h1>
          
          <p className="text-red-100 text-lg">
            Atendimento Virtual
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <Clock className="text-red-800" size={24} />
            </div>
            <p className="text-sm text-red-100">Atendimento 24/7</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <Users className="text-red-800" size={24} />
            </div>
            <p className="text-sm text-red-100">Suporte</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <Shield className="text-red-800" size={24} />
            </div>
            <p className="text-sm text-red-100">Seguro e Confiável</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <MessageCircle className="text-red-800" size={24} />
            </div>
            <p className="text-sm text-red-100">Chat Instantâneo</p>
          </div>
        </div>
        
        <button
          onClick={onStartChat}
          className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2"
        >
          <MessageCircle size={20} />
          <span>Iniciar Atendimento</span>
        </button>
                              <ul>

                                          <div className="text-xs text-red-100">
                     Viva Tranquilo!
                    </div>
</ul>
      </div>
    </div>
  );
}