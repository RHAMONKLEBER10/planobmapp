import React from 'react';
import { 
  FileText, 
  Heart, 
  CreditCard, 
  Plus, 
  Wrench, 
  Info,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

interface ServiceMenuProps {
  onOptionSelect: (option: number) => void;
  onBackToStart: () => void;
}

export function ServiceMenu({ onOptionSelect, onBackToStart }: ServiceMenuProps) {
  const menuOptions = [
    {
      id: 1,
      icon: <FileText className="text-red-800" size={20} />,
      title: "Área do Cliente",
      description: "Acesse seu plano",
      action: "LINK DO CONTRATO"
    },
    {
      id: 2,
      icon: <Heart className="text-red-800" size={20} />,
      title: "Falecimento",
      description: "Comunicar falecimento"
    },
    {
      id: 3,
      icon: <CreditCard className="text-red-800" size={20} />,
      title: "Pagamentos",
      description: "Formas de pagamento"
    },
    {
      id: 4,
      icon: <Plus className="text-red-800" size={20} />,
      title: "Planos Novos",
      description: "Conheça nossos planos"
    },
    {
      id: 5,
      icon: <Wrench className="text-red-800" size={20} />,
      title: "Equipamentos",
      description: "Aluguel de equipamentos"
    },
    {
      id: 6,
      icon: <Info className="text-red-800" size={20} />,
      title: "Informações Gerais",
      description: "Contato e informações"
    }
  ];

  return (
    <div className="space-y-3">
      {/* Main Service Message */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className="text-sm text-gray-800 leading-relaxed">
          <div className="font-semibold text-red-800 mb-2">
           Em que posso te ajudar?
          </div>
           <div>
            Escolha uma de nossas opções abaixo, para podermos dar continuidade ao seu atendimento:
          </div>
        </div>
      </div>

      {/* Service Options */}
      <div className="grid gap-2">
        {menuOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className="bg-white hover:bg-red-50 p-3 rounded-lg border border-red-100 transition-colors duration-200 flex items-center space-x-3 shadow-sm"
          >
            <div className="flex-shrink-0">
              {option.icon}
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold text-gray-800 text-sm">
                {option.id} - {option.title}
              </div>
              <div className="text-xs text-gray-600">
                {option.description}
              </div>
            </div>
            {option.action && (
              <ExternalLink className="text-red-800" size={16} />
            )}
          </button>
        ))}
      </div>

      {/* Return to Menu Button */}
      <button
        onClick={onBackToStart}
        className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 shadow-md"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">Retornar ao Menu Inicial</span>
      </button>
    </div>
  );
}