import { useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import HumanHealthScreen from './screens/HumanHealthScreen';
import VeterinaryScreen from './screens/VeterinaryScreen';
import EnvironmentalScreen from './screens/EnvironmentalScreen';
import DashboardScreen from './screens/DashboardScreen';
import CommunityScreen from './screens/CommunityScreen';
import GrowGreenScreen from './screens/GrowGreenScreen';

export type Screen = 'onboarding' | 'human' | 'veterinary' | 'environmental' | 'dashboard' | 'community' | 'growgreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onGetStarted={() => setCurrentScreen('human')} />;
      case 'human':
        return <HumanHealthScreen onNavigate={setCurrentScreen} />;
      case 'veterinary':
        return <VeterinaryScreen onNavigate={setCurrentScreen} />;
      case 'environmental':
        return <EnvironmentalScreen onNavigate={setCurrentScreen} />;
      case 'dashboard':
        return <DashboardScreen onNavigate={setCurrentScreen} />;
      case 'community':
        return <CommunityScreen onNavigate={setCurrentScreen} />;
      case 'growgreen':
        return <GrowGreenScreen onNavigate={setCurrentScreen} />;
      default:
        return <OnboardingScreen onGetStarted={() => setCurrentScreen('human')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md mx-auto h-screen flex flex-col bg-white shadow-2xl relative overflow-hidden">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
