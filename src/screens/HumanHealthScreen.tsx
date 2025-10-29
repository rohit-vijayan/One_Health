import { Camera, MapPin, MessageSquare, Users, Award, ChevronRight, Bot, AlertCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function HumanHealthScreen({ onNavigate }: Props) {
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-emerald-50 to-white">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Human Health</h1>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">Report or Learn</span>
          </div>
        </div>
        <p className="text-emerald-50 text-sm">Monitor, Report & Protect Community Health</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-md p-5 border border-emerald-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-xl">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">Report Waste or Contamination</h3>
              <p className="text-gray-600 text-sm mb-3">Use camera & GPS to report health hazards in your area</p>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors">
                  <Camera className="w-4 h-4" />
                  <span>Take Photo</span>
                </button>
                <button className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Add Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl shadow-md p-5 border border-sky-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-3 rounded-xl">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">AI Health Copilot</h3>
              <p className="text-gray-600 text-sm mb-3">Get instant health guidance powered by AI</p>

              {!showChat ? (
                <button
                  onClick={() => setShowChat(true)}
                  className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Chat</span>
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-gray-200 rounded-full p-1.5">
                        <span className="text-xs">👤</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">I have fever and rash since 2 days</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-3 shadow-sm">
                    <div className="flex items-start space-x-2">
                      <div className="bg-sky-500 rounded-full p-1.5">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 font-medium mb-2">
                          <AlertCircle className="w-4 h-4 inline text-orange-500 mr-1" />
                          Possible Dengue symptoms detected
                        </p>
                        <p className="text-xs text-gray-600 mb-2">Based on your symptoms (fever + rash), this could indicate dengue fever, especially during monsoon season.</p>
                        <div className="bg-white rounded-lg p-2 text-xs">
                          <p className="font-semibold text-teal-700 mb-1">Recommended Action:</p>
                          <p className="text-gray-700">Visit nearest PHC immediately for blood test (NS1 antigen test)</p>
                          <p className="text-gray-500 mt-1">Nearest: UPHC Koramangala, 1.2 km</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type your symptoms..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-md p-5 border border-yellow-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-3 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">Gamified Learning Hub</h3>
              <p className="text-gray-600 text-sm mb-3">Learn health practices & earn badges</p>
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-2xl">👧🏽</div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-700">Community Clean-up Challenge</p>
                    <p className="text-xs text-gray-500">Cleaned park in Mumbai - 50 points earned</p>
                  </div>
                  <div className="bg-yellow-100 px-2 py-1 rounded-full">
                    <span className="text-xs font-bold text-yellow-700">+50</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('community')}
                className="flex items-center justify-between w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all"
              >
                <span>View All Challenges</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md p-5 border border-purple-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">Frontline Worker Assistant</h3>
              <p className="text-gray-600 text-sm mb-3">Quick alerts for ASHA & health workers</p>
              <div className="bg-white rounded-lg p-3 shadow-sm space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-red-100 px-2 py-1 rounded text-xs font-bold text-red-700 mt-0.5">ALERT</div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-700 font-medium">Cow fever reported near Hebbal Village</p>
                    <p className="text-xs text-gray-500 mt-1">AI: Possible zoonotic alert - monitor human cases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => onNavigate('human')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2.5 rounded-xl">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-emerald-600">Human</span>
          </button>
          <button
            onClick={() => onNavigate('veterinary')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <span className="text-xl">🐄</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Animal</span>
          </button>
          <button
            onClick={() => onNavigate('environmental')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <span className="text-xl">🌳</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Environment</span>
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <span className="text-xl">📊</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
}
