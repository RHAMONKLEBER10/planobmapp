import React from 'react';
import { ArrowLeft, Check, Phone } from 'lucide-react';

interface PlanDetailsProps {
  planType: 'bronze' | 'basico-plus' | 'prata' | 'ouro' | 'diamante';
  onBack: () => void;
}

export function PlanDetails({ planType, onBack }: PlanDetailsProps) {
  const getPlanData = () => {
    switch (planType) {
      case 'bronze':
        return {
          title: 'PLANO BRONZE',
          price: 'R$ 40,00',
          color: 'from-amber-600 to-yellow-600',
          bgColor: 'bg-amber-50',
          textColor: 'text-amber-700',
          description: 'Nosso plano de entrada com os serviços essenciais para sua tranquilidade.',
          benefits: [
            'Translados de até 600 Km rodados',
            'Urna Mortuária c/ visor e alça varão - REF. GS-11 ou Similar',
            'Vestuário Masculino/Feminino',
            'Flores Naturais ou Artificiais',
            'Paramentação com velas e Livro de Presença',
            'Kit Café',
            'Cortejo p/ Cemitério Local',
            'Anúncio Fúnebre - 01h carro de som ou 02 chamadas em rádio'
          ],
          conditions: [
            'Sem Carência',
            'Pagamento mensal via PIX',
            'Renovação automática',
            
          ],
          exclusiveFeatures: [
            'Suporte 24 Horas',
            'Desconto em Consultas, exames, laboratório e muito +'
            
          ]
        };
      
      case 'basico-plus':
        return {
          title: 'PLANO BÁSICO PLUS',
          price: 'R$ 55,00',
          color: 'from-blue-600 to-indigo-600',
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-700',
          description: 'Uma versão aprimorada do plano básico com benefícios adicionais.',
          benefits: [
            'Translados de até 800 Km rodados',
            'Urna Mortuária c/ visor e alça varão - REF. GS-12 ou Similar',
            'Vestuário Masculino/Feminino',
            'Flores Naturais ou Artificiais',
            'Paramentação com velas e Livro de Presença',
            'Kit Café',
            'Cortejo p/ Cemitério Local',
            'Anúncio Fúnebre - 01h carro de som ou 02 chamadas em rádio'
          ],
          conditions: [
            'Sem Carência',
            'Pagamento mensal via PIX',
            'Renovação automática',
          ],
          exclusiveFeatures: [
            'Suporte 24h WhatsApp',
            'Desconto em Consultas, exames, laboratório e muito +'
          ]
        };
      
      case 'prata':
        return {
          title: 'PLANO PRATA',
          price: 'R$ 70,00',
          color: 'from-gray-500 to-slate-600',
          bgColor: 'bg-gray-50',
          textColor: 'text-gray-700',
          description: 'Plano intermediário com excelente custo-benefício e serviços completos.',
          benefits: [
            'Translados de até 1000 Km rodados',
            'Urna Mortuária c/ visor e alça varão - REF. GS-13 ou Similar',
            'Vestuário Masculino/Feminino',
            'Flores Naturais ou Artificiais',
            'Paramentação com velas e Livro de Presença',
            'Kit Café',
            'Cortejo p/ Cemitério Local',
            'Anúncio Fúnebre - 02h carro de som ou 04 chamadas em rádio'
          ],
          conditions: [
            'Sem Carência',
            'Pagamento mensal via PIX',
            'Renovação automática',
          ],
          exclusiveFeatures: [
            'Suporte 24h WhatsApp',
            'Desconto em Consultas, exames, laboratório e muito +'
          ]
        };
      
      case 'ouro':
        return {
          title: 'PLANO OURO',
          price: 'R$ 100,00',
          color: 'from-yellow-500 to-amber-500',
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-700',
          description: 'Plano premium com serviços diferenciados e atendimento de excelência.',
          benefits: [
            'Translados de até 1200 Km rodados',
            'Urna Mortuária c/ visor e alça varão - REF. GS-14 ou Similar',
            'Vestuário Masculino/Feminino',
            'Flores Naturais ou Artificiais',
            'Paramentação com velas e Livro de Presença',
            'Kit Café',
            'Cortejo p/ Cemitério Local',
            'Anúncio Fúnebre - 02h carro de som ou 04 chamadas em rádio'
          ],
          conditions: [
            'Sem Carência',
            'Pagamento mensal via PIX',
            'Renovação automática',
          ],
          exclusiveFeatures: [
            'Suporte 24h WhatsApp',
            'Desconto em Consultas, exames, laboratório e muito +'
          ]
        };
      
      case 'diamante':
        return {
          title: 'PLANO DIAMANTE',
          price: 'R$ 145,00',
          color: 'from-red-900 to-red-800',
          bgColor: 'bg-red-50',
          textColor: 'text-red-800',
          description: 'Nosso plano mais completo com serviços exclusivos e atendimento personalizado.',
          benefits: [
            'Translados de até 1500 Km rodados',
            'Urna Mortuária c/ visor e alça varão - REF. GS-34 ou Similar',
            'Vestuário Masculino/Feminino',
            'Flores Naturais ou Artificiais',
            'Paramentação com velas e Livro de Presença',
            'Kit Café',
            'Cortejo p/ Cemitério Local',
            'Anúncio Fúnebre - 04h carro de som ou 08 chamadas em rádio'
          ],
          conditions: [
            'Sem Carência',
            'Pagamento mensal via PIX',
            'Renovação automática',
          ],
          exclusiveFeatures: [
            'Suporte 24h WhatsApp',
            'Desconto em Consultas, exames, laboratório e muito +'
          ]
        };
      
      default:
        return null;
    }
  };

  const planData = getPlanData();
  
  if (!planData) return null;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className={`text-center py-6 bg-gradient-to-r ${planData.color} text-white rounded-xl mb-4`}>
          <h1 className="text-2xl font-bold">{planData.title}</h1>
          <div className="text-3xl font-bold mt-2">{planData.price}</div>
          <div className="text-sm opacity-90">por mês</div>
        </div>
      </div>

      {/* Descrição */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className="text-sm text-gray-800">
          <div className={`font-semibold ${planData.textColor} mb-2`}>📋 Descrição do Plano</div>
          <p className="leading-relaxed">{planData.description}</p>
        </div>
      </div>

      {/* Benefícios */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className="text-sm text-gray-800">
          <div className={`font-semibold ${planData.textColor} mb-3`}>✅ Benefícios Inclusos</div>
          <div className="space-y-2">
            {planData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preço e Condições */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className="text-sm text-gray-800">
          <div className={`font-semibold ${planData.textColor} mb-3`}>💰 Preço e Condições</div>
          <div className={`${planData.bgColor} p-3 rounded-lg mb-3`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{planData.price}</div>
              <div className="text-sm text-gray-600">mensais</div>
            </div>
          </div>
          <div className="space-y-1">
            {planData.conditions.map((condition, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-red-800 rounded-full"></div>
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recursos Exclusivos */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <div className="text-sm text-gray-800">
          <div className={`font-semibold ${planData.textColor} mb-3`}>⭐ Recursos Exclusivos</div>
          <div className="space-y-2">
            {planData.exclusiveFeatures.map((feature, index) => (
              <div key={index} className={`${planData.bgColor} p-2 rounded-lg flex items-center space-x-2`}>
                <div className={`w-2 h-2 ${planData.color.replace('from-', 'bg-').split(' ')[0]} rounded-full`}></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão de Contratação */}
      <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
        <a
  href="https://api.whatsapp.com/send?phone=5587999980416&text=%2ATenho+interesse+no+plano.%2A"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full bg-gradient-to-r ${planData.color} hover:opacity-90 text-white p-4 rounded-xl transition-opacity duration-200 shadow-lg flex items-center justify-center space-x-2`}
>
  <Phone size={20} />
  <span className="font-semibold">Contratar {planData.title}</span>
</a>
      </div>

      {/* Botão Voltar */}
      <button
        onClick={onBack}
        className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-950 hover:to-red-900 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 shadow-md"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">Voltar aos Planos</span>
      </button>
    </div>
  );
}