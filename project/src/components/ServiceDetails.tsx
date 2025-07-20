import React from 'react';
import { ArrowLeft, Copy } from 'lucide-react';

interface ServiceDetailsProps {
  selectedOption: number;
  onBack: () => void;
  onPlanSelect?: (plan: 'bronze' | 'basico-plus' | 'prata' | 'ouro' | 'diamante') => void;
}

export function ServiceDetails({ selectedOption, onBack, onPlanSelect }: ServiceDetailsProps) {
  const getServiceContent = () => {
    switch (selectedOption) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800">
                <div className="font-semibold text-red-700 mb-3">👥 Portal do cliente</div>
                <div className="mb-3">
          Faça seu cadastro em nosso site ou utilize nosso aplicativo no seu Android ou iPhone e tenha acesso fácil e rápido a todas as informações importantes:
                                      <div className="text-xs text-gray-600">
                      ➥Seu plano e dependentes
                    </div>
<div className="text-xs text-gray-600">
                      ➥Nossos Parceiros
                    </div>
<div className="text-xs text-gray-600">
                      ➥Mensalidades
                    </div>
    <div className="text-xs text-gray-600">
                    ➥Unidades de atendimento
                    </div>                                
    <div className="text-xs text-gray-600">
                    ➥Obituário
                    </div>       
        <div className="text-xs text-gray-600">
                    ➥Quem somos
                    </div>                      
                </div>
                   {/* Acesso Web */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <div className="font-semibold text-blue-700 mb-2">💻 Acesso via Web</div>
                  <a
                    href="https://apps.mssistemas.com.br/areacliente.php/?codigo=145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span className="font-medium">Área do Cliente</span>
                  </a>
                </div>
                
                {/* Botões dos Aplicativos */}
                <div className="space-y-3 mb-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=br.inf.mssistemas.areacli.bm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span className="font-medium">📱 Baixar App Android (Play Store)</span>
                  </a>
                  
                  <a
                    href="https://apps.apple.com/br/app/plano-bm/id1533661136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span className="font-medium">📱 Baixar App iPhone (App Store)</span>
                  </a>
                </div>

                {/* Site Principal */}
                <div className="bg-red-50 p-4 rounded-lg border border-purple-200 mb-4">
                  <div className="font-semibold text-red-700 mb-2">🌐 Visite nosso Site</div>
                  <div className="text-red-800 text-sm mb-3">
                    Conheça mais sobre nossos serviços e informações completas em nosso site oficial.
                  </div>
                  <a
                    href="https://www.planobm.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span className="font-medium">www.planobm.com.br</span>
                  </a>
                </div>

                {/* Redes Sociais */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="font-semibold text-gray-700 mb-3">📱 Redes Sociais</div>
                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/planobm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                    >
                      <span className="font-medium">📸 Instagram @planobm</span>
                    </a>
                    
                    <a
                      href="https://www.facebook.com/PlanoAssistencialFamiliarBM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                    >
                      <span className="font-medium">📘 Facebook Plano BM</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800 leading-relaxed">
                <div className="font-semibold text-gray-800 mb-4 text-lg flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  Solicitação de atendimento
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <div className="text-gray-700 text-sm">
                   Em momentos difíceis como este, estamos aqui para ajudar. Para comunicar um falecimento e acionar os serviços do seu plano, entre em contato conosco imediatamente através do WhatsApp, tenha em mãos as seguintes informações abaixo.
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {/* Item 1 - Titular */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-2">
                          👤 Nome completo do titular do plano
                        </div>
                        <div className="text-gray-600 text-sm">
                          Informe o nome completo conforme consta no contrato
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 - Falecido */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-2">
                          🕊️ Nome completo da pessoa falecida
                        </div>
                        <div className="text-gray-600 text-sm">
                          Nome completo do beneficiário falecido
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 - Endereço */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-2">
                          📍 Endereço completo do local
                        </div>
                        <div className="text-gray-600 text-sm">
                          Hospital/residência, rua, número, bairro, cidade
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 - Responsável */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-2">
                          📞 Nome e telefone do responsável
                        </div>
                        <div className="text-gray-600 text-sm">
                          Nome e telefone (com DDD) do familiar ou acompanhante
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                  <div className="text-center">
                    <div className="mb-4 text-gray-700 font-medium">
                      Clique no botão abaixo
                    </div>
                    
                    {/* Botão WhatsApp */}

                    <div>
                      <a
                        href="https://api.whatsapp.com/send?phone=5587999581111&text=%2AFalecimento,+irei+passar+as+informacoes.%2A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                        </svg>
                        <span>COMUNICAR</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800 leading-relaxed">
                <div className="font-semibold text-green-600 mb-3">💳 Pagamentos</div>
                
                <div className="mb-4 text-gray-700">
                  Pensando na sua comodidade, disponibilizamos diversas opções de pagamento para melhor atendê-lo:
                </div>

                {/* PAGAMENTO PRESENCIAL */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <div className="font-semibold text-blue-700 mb-3 flex items-center">
                    🏪 1️⃣ PAGAMENTO PRESENCIAL
                  </div>
                  <div className="space-y-2 text-blue-800 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Atendimento personalizado em qualquer uma de nossas filiais</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Aceitamos dinheiro, cartão de débito e crédito</span>
                    </div>
                  </div>
                </div>

                {/* PIX */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <div className="font-semibold text-green-700 mb-3 flex items-center">
                    ⚡ 2️⃣ PIX (Forma mais rápida)
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <div className="text-sm text-green-800 space-y-1">
                        <div><span className="font-semibold">CNPJ:</span> 10.282.432/0001-96</div>
                        <div><span className="font-semibold">Nome:</span> PAULO JOSÉ BEZERRA</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => navigator.clipboard.writeText('10282432000196')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Copy size={16} />
                        <span className="font-medium">PIX: 10.282.432/0001-96</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* TRANSFERÊNCIA/DEPÓSITO BANCÁRIO */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4">
                  <div className="font-semibold text-purple-700 mb-3 flex items-center">
                    🏦 3️⃣ TRANSFERÊNCIA/DEPÓSITO BANCÁRIO
                  </div>
                  
                  <div className="space-y-3">
                    {/* BRADESCO */}
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <div className="font-semibold text-red-600 mb-2">BRADESCO</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• <span className="font-semibold">Agência:</span> 0586-0</div>
                        <div>• <span className="font-semibold">Conta Corrente:</span> 14.641-2</div>
                        <div>• <span className="font-semibold">Titular:</span> PAULO JOSÉ BEZERRA</div>
                      </div>
                    </div>

                    {/* BANCO DO BRASIL */}
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <div className="font-semibold text-yellow-600 mb-2">BANCO DO BRASIL</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• <span className="font-semibold">Agência:</span> 0914</div>
                        <div>• <span className="font-semibold">Operação:</span> 003</div>
                        <div>• <span className="font-semibold">Conta Corrente:</span> 0370-4</div>
                        <div>• <span className="font-semibold">Titular:</span> PAULO JOSÉ BEZERRA</div>
                      </div>
                    </div>

                    {/* CAIXA ECONÔMICA */}
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <div className="font-semibold text-blue-600 mb-2">CAIXA ECONÔMICA</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• <span className="font-semibold">Agência:</span> 0914</div>
                        <div>• <span className="font-semibold">Operação:</span> 003</div>
                        <div>• <span className="font-semibold">Conta Corrente:</span> 0370-4</div>
                        <div>• <span className="font-semibold">Titular:</span> PAULO JOSÉ BEZERRA</div>
                      </div>
                    </div>

                    {/* SICOOB */}
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <div className="font-semibold text-green-600 mb-2">SICOOB</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• <span className="font-semibold">Cooperativa:</span> 4293</div>
                        <div>• <span className="font-semibold">Conta Corrente:</span> 149.578-0</div>
                        <div>• <span className="font-semibold">Titular:</span> PAULO JOSÉ BEZERRA</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ATENÇÃO - APÓS PAGAMENTO */}
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300 mb-4">
                  <div className="font-semibold text-yellow-700 mb-3 flex items-center">
                    ⚠️ ATENÇÃO: Após realizar o pagamento
                  </div>
                  <div className="space-y-2 text-yellow-800 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">1.</span>
                      <span>Envie o comprovante</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">2.</span>
                      <span>Informe seu número de contrato</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-yellow-800 font-medium text-sm">
                      Esta informações são essenciais para confirmarmos sua mensalidade.
                    </div>
                  </div>
                </div>
                
                {/* BOTÃO WHATSAPP PARA DÚVIDAS */}
                <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <div className="text-center">
                    <div className="font-semibold text-green-700 mb-3">
                      💬 Envie seu comprovante!
                    </div>                  
                    {/* Botão WhatsApp */}
                    <a
                      href="https://api.whatsapp.com/send/?phone=5587999980416&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                      {/* Ícone WhatsApp SVG */}
                      <svg 
                        className="w-6 h-6 fill-current" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                      </svg>
                      <span className="text-lg">WhatsApp</span>
                    </a>
                    
                    <div className="text-xs text-gray-500 mt-3">
                      Atendimento rápido
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800 leading-relaxed">
                <div className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4 text-lg flex items-center">
                  <span className="mr-2 text-2xl">💎</span>
                  Planos Novos
                </div>
                <div className="mb-4 text-gray-700 font-medium">
                  Escolha o plano ideal para sua família:
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => onPlanSelect?.('bronze')}
                    className="w-full bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 p-4 rounded-xl border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">🥉</span>
                        </div>
                        <div>
                          <div className="font-bold text-amber-800 text-lg">Plano Bronze</div>
                          <div className="text-xs text-amber-600 font-medium">Plano de entrada • Essencial</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-700">R$ 40,00</div>
                        <div className="text-xs text-amber-600">por mês</div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
                      ✨ Clique para ver todos os benefícios
                    </div>
                  </button>
                  <button 
                    onClick={() => onPlanSelect?.('basico-plus')}
                    className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">⭐</span>
                        </div>
                        <div>
                          <div className="font-bold text-blue-800 text-lg">Plano Básico Plus</div>
                          <div className="text-xs text-blue-600 font-medium">Versão aprimorada •</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-700">R$ 55,00</div>
                        <div className="text-xs text-blue-600">por mês</div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                      ✨ Clique para ver todos os benefícios
                    </div>
                  </button>
                  <button 
                    onClick={() => onPlanSelect?.('prata')}
                    className="w-full bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 p-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">🥈</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">Plano Prata</div>
                          <div className="text-xs text-gray-600 font-medium">Intermediário •</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-700">R$ 70,00</div>
                        <div className="text-xs text-gray-600">por mês</div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      ✨ Clique para ver todos os benefícios
                    </div>
                  </button>
                  <button 
                    onClick={() => onPlanSelect?.('ouro')}
                    className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 p-4 rounded-xl border-2 border-yellow-300 hover:border-yellow-400 transition-all duration-300 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">🥇</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">Plano Ouro</div>
                          <div className="text-xs text-yellow-600 font-medium">Premium •</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-700">R$ 100,00</div>
                        <div className="text-xs text-yellow-600">por mês</div>
                      </div>
                    </div>
                    <div className="text-xs text-yellow-700 mt-2 font-medium bg-yellow-100 px-2 py-1 rounded-full inline-block">
                      ✨ Clique para ver detalhes completos
                    </div>
                  </button>
                  <button 
                    onClick={() => onPlanSelect?.('diamante')}
                    className="w-full bg-gradient-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 p-4 rounded-xl border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MAIS COMPLETO
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg animate-pulse">
                          💎
                        </div>
                        <div>
                          <div className="font-bold text-purple-800 text-lg">Plano Diamante</div>
                          <div className="text-xs text-purple-600 font-medium">Máxima cobertura</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-700">R$ 145,00</div>
                        <div className="text-xs text-purple-600">por mês</div>
                      </div>
                    </div>
                    <div className="text-xs text-purple-700 mt-2 font-medium bg-purple-100 px-2 py-1 rounded-full inline-block">
                      ✨ Clique para ver detalhes completos
                    </div>
                  </button>
                </div>
             
                        
                      </div>
                    </div>
                  </div>

        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800 leading-relaxed">
                <div className="font-semibold text-orange-600 mb-3">🦽 Locação de Equipamentos</div>

                {/* Pré-requisitos */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <div className="font-semibold text-blue-700 mb-3">
                    ✅ Pré-requisitos para o empréstimo
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-sm">O solicitante deve ser o titular do plano ou seu dependente legalmente inscrito</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-sm">Apresentar prescrição médica com indicação do equipamento e tempo de uso</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-sm">Estar com as mensalidades do plano em dia</span>
                    </div>
                  </div>
                </div>

                {/* Equipamentos Disponíveis */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <div className="font-semibold text-green-700 mb-3">
                    🏥 Equipamentos Disponíveis
                  </div>
                  <div className="grid gap-3">
                    {[
                      { name: 'CADEIRA DE RODAS', icon: '​🦽', color: 'from-blue-500 to-blue-600' },
                      { name: 'CADEIRA HIGIÊNICA', icon: '♿', color: 'from-purple-500 to-purple-600' }, 
                      { name: 'BENGALA', icon: '🦯', color: 'from-amber-500 to-amber-600' },
                      { name: 'MULETA AXILAR', icon: '🩼', color: 'from-red-500 to-red-600' },
                      { name: 'MULETA CANADENSE', icon: '🩼', color: 'from-orange-500 to-orange-600' },
                      { name: 'ANDADOR', icon: '🚹', color: 'from-teal-500 to-teal-600' }
                    ].map((equipment, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-xl border border-green-200 flex items-center space-x-4 hover:shadow-md hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${equipment.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0`}>
                          {equipment.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-gray-800 text-base">{equipment.name}</span>
                          <div className="text-xs text-green-600 mt-1">Disponível para empréstimo</div>
                        </div>
                        <div className="text-green-500">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                    
                    {/* Item especial para "DIVERSOS" */}
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-dashed border-green-300 flex items-center space-x-4 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                        ⚕️
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 text-base">DIVERSOS*</span>
                        <div className="text-xs text-emerald-700 mt-1 font-medium">
                          *Consulte nossa equipe
                        </div>
                      </div>
                      <div className="text-emerald-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informações Importantes */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300 mb-4">
                  <div className="font-semibold text-yellow-700 mb-2 flex items-center">
                    ⚠️ Informações Importantes
                  </div>
                  <div className="space-y-2 text-yellow-800 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><span className="font-semibold">Empréstimo gratuito:</span> Até 90 dias</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><span className="font-semibold">Após 90 dias:</span> Taxa de manutenção até devolução</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><span className="font-semibold">Prescrição médica:: </span> Obrigatória para todos os equipamentos</span>
                    </div>
                  </div>
                </div>

                {/* Contato para Solicitação */}
                <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      
                      <button 
                        onClick={() => navigator.clipboard.writeText('(87) 9 9958-3333')}
                        className="text-green-600 hover:text-green-700 p-1 hover:bg-green-100 rounded"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <div className="mb-3">
                      <a
                        href="https://api.whatsapp.com/send?phone=5587999583333&text=Olá,%20gostaria%20de%20solicitar%20um%20equipamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                        </svg>
                        <span className="text-sm">Solicitar via WhatsApp</span>
                      </a>
                    </div>
                    <div className="text-xs text-purple-600">
                      WhatsApp • Tenha em mãos: prescrição médica e dados do titular
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="text-sm text-gray-800 leading-relaxed">
                <div className="font-semibold text-purple-600 mb-3">📞 Informações Gerais</div>
                
                {/* MATRIZ */}
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold text-purple-700 mb-2 flex items-center">
                    🏢 MATRIZ
                  </div>
                  <div className="space-y-1 text-gray-700">
                    <div className="font-semibold">Plano BM - Serra Talhada</div>
                    <div>📍 Rua Enock Ignácio de Oliveira, 891 - Nsa. Sra. da Penha</div>
                    <div>📞 <a href="tel:+5587999980416" className="text-purple-600 hover:text-purple-800 font-medium underline">(87) 9 9998-0416</a></div>
                  </div>
                </div>

                {/* FILIAIS PERNAMBUCO */}
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold text-blue-700 mb-3 flex items-center">
                    🏪 FILIAIS PERNAMBUCO (18)
                  </div>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {[
                      { name: "Afogados da Ingazeira", address: "Pça. Mons. Alfredo de Arruda Câmara, 172-A", contact: "(87) 3838-3703 / 9.9983-0099", phones: ["+5587383837033", "+5587999830099"] },
                      { name: "Betânia", address: "Pça. da Bandeira, 40", contact: "(87) 3852-1232 / 9.9610-0004", phones: ["+5587385212323", "+5587996100004"] },
                      { name: "Calumbí", address: "Rua Manoel Antônio de Melo, 25", contact: "(87) 3845-1381", phones: ["+5587384513813"] },
                      { name: "Carnaíba", address: "Rua José Martins, 222", contact: "(87) 3854-1194 / 9.9610-1661", phones: ["+5587385411943", "+5587996101661"] },
                      { name: "Custódia", address: "Rua Pedro Segundo, 64 - Centro", contact: "(87) 3848-2884 / 9.8802-9570", phones: ["+5587384828843", "+5587988029570"] },
                      { name: "Flores", address: "Pça. Dr. Santana Filho, 02", contact: "(87) 3857-1577 / 9.9941-2000", phones: ["+5587385715773", "+5587999412000"] },
                      { name: "Fátima/Flores", address: "Rua Dr. Santana Filho, 40", contact: "(87) 9.8118-3185 / 9.8120-1869", phones: ["+5587981183185", "+5587981201869"] },
                      { name: "Floresta", address: "Rua Alcina Torres de Araújo, 28", contact: "(87) 3877-1256", phones: ["+5587387712563"] },
                      { name: "Iguaraci", address: "Rua João Alves dos Passos, 54, Sala-B", contact: "(87) 9.8802-9568", phones: ["+5587988029568"] },
                      { name: "Ingazeira", address: "Rua do Comércio, 73", contact: "(87) 9.8869-8609", phones: ["+5587988698609"] },
                      { name: "Quixaba", address: "Rua Solidônio Pereira de Carvalho, 225", contact: "(87) 9.8845-9967", phones: ["+5587988459967"] },
                      { name: "Santa Cruz da Baixa Verde", address: "Pça. da Matriz, 155", contact: "(87) 3846-8042", phones: ["+5587384680423"] },
                      { name: "São João dos Leites/Flores", address: "Rua do Comércio, 219", contact: "(87) 99998-0416", phones: ["+5587999980416"] },
                      { name: "São José do Belmonte", address: "Rua Cel. José Davi de Barros Silva, 31", contact: "(87) 3884-1492 / 9.9958-0002", phones: ["+5587388414923", "+5587999580002"] },
                      { name: "Tabira", address: "Rua Cel. Zuza Barros, 2815", contact: "(87) 3847-1822 / 9.9941-1000", phones: ["+5587384718223", "+5587999411000"] },
                      { name: "Solidão", address: "Rua Luiz Carolino de Siqueira, 165", contact: "(87) 99998-0416", phones: ["+5587999980416"] },
                      { name: "Triunfo", address: "Av. Frei Fernandes, 50", contact: "(87) 3846-1068 / 9.9983-0102", phones: ["+5587384610683", "+5587999830102"] },
                      { name: "Vila Canaã/Triunfo", address: "Rua do Comércio, 33-B", contact: "(87) 99998-0416", phones: ["+5587999980416"] }
                    ].map((filial, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-blue-200">
                        <div className="font-semibold text-blue-800">{index + 1}. {filial.name}</div>
                        <div className="text-xs text-gray-600 mt-1">📍 {filial.address}</div>
                        <div className="text-xs text-blue-700 font-medium mt-1">
                          📞 {filial.contact.split(' / ').map((phone, phoneIndex) => (
                            <span key={phoneIndex}>
                              {phoneIndex > 0 && ' / '}
                              <a 
                                href={`tel:${filial.phones[phoneIndex]}`} 
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                {phone}
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FILIAIS PARAÍBA */}
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold text-green-700 mb-3 flex items-center">
                    🏪 FILIAIS PARAÍBA (5)
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Água Branca", address: "Rua José Vidal, 71 - Centro", contact: "(83) 9.9967-0143", phones: ["+5583999670143"] },
                      { name: "Jurú", address: "Av. Capitão Dalmo Teixeira, 793", contact: "(83) 3484-1362", phones: ["+5583348413623"] },
                      { name: "Manaíra", address: "Rua Dr. José Rosa, SN", contact: "(83) 3458-1265 / 9.9967-0168", phones: ["+5583345812653", "+5583999670168"] },
                      { name: "Princesa Isabel", address: "Rua Cel. Vicente Carneiro, 40", contact: "(83) 3457-3435 / 9.9967-0121", phones: ["+5583345734353", "+5583999670121"] },
                      { name: "Tavares", address: "Rua Manoel de Lima, 177", contact: "(83) 3450-1013", phones: ["+5583345010133"] }
                    ].map((filial, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-green-200">
                        <div className="font-semibold text-green-800">{index + 1}. {filial.name}</div>
                        <div className="text-xs text-gray-600 mt-1">📍 {filial.address}</div>
                        <div className="text-xs text-green-700 font-medium mt-1">
                          📞 {filial.contact.split(' / ').map((phone, phoneIndex) => (
                            <span key={phoneIndex}>
                              {phoneIndex > 0 && ' / '}
                              <a 
                                href={`tel:${filial.phones[phoneIndex]}`} 
                                className="text-green-600 hover:text-green-800 underline"
                              >
                                {phone}
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTATO PRINCIPAL */}
                <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
                  <div className="font-semibold text-purple-700 mb-2 text-center">📱 Siga nossas Redes Sociais</div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <ul>
  <li>
    📸 <a href="https://www.instagram.com/planobm" target="_blank" rel="noopener noreferrer">Instagram: @planobm</a>
  </li>
  <li>
    📘 <a href="https://www.facebook.com/PlanoAssistencialFamiliarBM" target="_blank" rel="noopener noreferrer">Facebook: Plano BM</a>
  </li>
</ul>

                    </div>
                    <div className="text-xs text-purple-600">
                    • Há mais de 50 anos proporcionando confiança e tranquilidade às famílias enlutadas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {getServiceContent()}
      
      <button
        onClick={onBack}
        className="w-full bg-burgundy-to-r from-red-500 to-red-500 hover:from-burgundy-600 hover:to-violet-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 shadow-md"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">Voltar ao Menu</span>
      </button>
    </div>
  );
}