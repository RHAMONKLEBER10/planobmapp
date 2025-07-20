import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChatHeader } from './components/ChatHeader';
import { MessageBubble } from './components/MessageBubble';
import { ServiceMenu } from './components/ServiceMenu';
import { ServiceDetails } from './components/ServiceDetails';
import { PlanDetails } from './components/PlanDetails';

type AppState = 'welcome' | 'menu' | 'service-details' | 'plan-details';
type PlanType = 'bronze' | 'basico-plus' | 'prata' | 'ouro' | 'diamante';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [showTyping, setShowTyping] = useState(false);

  const handleStartChat = () => {
    setCurrentState('menu');
    setShowTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      setShowTyping(false);
    }, 2000);
  };

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
    setCurrentState('service-details');
  };

  const handlePlanSelect = (plan: PlanType) => {
    setSelectedPlan(plan);
    setCurrentState('plan-details');
  };

  const handleBackToMenu = () => {
    setSelectedOption(null);
    setSelectedPlan(null);
    setCurrentState('menu');
  };

  const handleBackToStart = () => {
    setCurrentState('welcome');
    setSelectedOption(null);
    setSelectedPlan(null);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (currentState === 'welcome') {
    return <WelcomeScreen onStartChat={handleStartChat} />;
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-red-950 via-red-900 to-red-950">
      <ChatHeader onBack={handleBackToStart} />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Welcome message */}
      
        
        {showTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-800 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-red-800 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-red-800 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {!showTyping && currentState === 'menu' && (
          <ServiceMenu 
            onOptionSelect={handleOptionSelect}
            onBackToStart={handleBackToStart}
          />
        )}
        
        {currentState === 'service-details' && selectedOption && (
          <ServiceDetails
            selectedOption={selectedOption}
            onBack={handleBackToMenu}
            onPlanSelect={handlePlanSelect}
          />
        )}
        
        {currentState === 'plan-details' && selectedPlan && (
          <PlanDetails
            planType={selectedPlan}
            onBack={handleBackToMenu}
          />
        )}
      </div>
      
    </div>
  );
}

export default App;