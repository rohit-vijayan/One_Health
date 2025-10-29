import { useState } from 'react';
import { Bot, Send, AlertCircle, MapPin, Stethoscope, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  analysis?: {
    condition: string;
    severity: 'low' | 'moderate' | 'high';
    recommendation: string;
    nearestFacility?: string;
  };
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIHealthCopilot({ isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Health Copilot. Describe your symptoms and I\'ll help you with guidance.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickSymptoms = [
    'Fever & headache',
    'Rash & itching',
    'Stomach pain',
    'Cough & cold',
  ];

  const handleSend = (message?: string) => {
    const messageToSend = message || input;
    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: messageToSend,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: 'Based on your symptoms, here\'s my analysis:',
        analysis: {
          condition: 'Possible Dengue Fever',
          severity: 'high',
          recommendation: 'Visit nearest PHC immediately for blood test (NS1 antigen test). Stay hydrated and monitor fever.',
          nearestFacility: 'UPHC Koramangala, 1.2 km away',
        },
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full max-w-md h-[90vh] sm:h-[600px] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">AI Health Copilot</h2>
              <p className="text-sky-100 text-xs">Instant health guidance</p>
            </div>
          </div>
          <button onClick={onClose} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                {message.role === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-sky-500 rounded-full p-1.5">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">AI Copilot</span>
                  </div>
                )}

                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-sky-500 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>

                {message.analysis && (
                  <div className="mt-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    <div className={`px-4 py-3 ${
                      message.analysis.severity === 'high' ? 'bg-red-50 border-b border-red-200' :
                      message.analysis.severity === 'moderate' ? 'bg-yellow-50 border-b border-yellow-200' :
                      'bg-green-50 border-b border-green-200'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <AlertCircle className={`w-4 h-4 ${
                          message.analysis.severity === 'high' ? 'text-red-600' :
                          message.analysis.severity === 'moderate' ? 'text-yellow-600' :
                          'text-green-600'
                        }`} />
                        <p className="text-sm font-bold text-gray-800">{message.analysis.condition}</p>
                      </div>
                      <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                        message.analysis.severity === 'high' ? 'bg-red-200 text-red-800' :
                        message.analysis.severity === 'moderate' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {message.analysis.severity.toUpperCase()} PRIORITY
                      </div>
                    </div>

                    <div className="px-4 py-3 space-y-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Stethoscope className="w-4 h-4 text-teal-600" />
                          <p className="text-xs font-semibold text-gray-700">Recommendation</p>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{message.analysis.recommendation}</p>
                      </div>

                      {message.analysis.nearestFacility && (
                        <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <MapPin className="w-3 h-3 text-teal-600" />
                            <p className="text-xs font-semibold text-gray-800">Nearest Healthcare</p>
                          </div>
                          <p className="text-xs text-gray-600">{message.analysis.nearestFacility}</p>
                        </div>
                      )}

                      <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                        Get Directions
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickSymptoms.map((symptom, index) => (
              <button
                key={index}
                onClick={() => handleSend(symptom)}
                className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold hover:bg-sky-100 transition-colors border border-sky-200"
              >
                {symptom}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your symptoms..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className={`p-3 rounded-xl font-semibold transition-all ${
                input.trim()
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
