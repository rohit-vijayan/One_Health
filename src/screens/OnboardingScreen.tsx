import { ArrowRight } from 'lucide-react';

interface Props {
  onGetStarted: () => void;
}

export default function OnboardingScreen({ onGetStarted }: Props) {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative flex items-center justify-center space-x-2 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/40">
                    <span className="text-5xl">👨‍⚕️</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse delay-75"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/40">
                    <span className="text-5xl">🐄</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse delay-150"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/40">
                    <span className="text-5xl">🌳</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <svg className="w-64 h-24 mx-auto" viewBox="0 0 200 60" fill="none">
                  <circle cx="50" cy="30" r="25" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  <circle cx="100" cy="30" r="25" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  <circle cx="150" cy="30" r="25" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />

                  <line x1="75" y1="30" x2="75" y2="30" stroke="white" strokeWidth="2" opacity="0.5">
                    <animate attributeName="x2" from="75" to="125" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="125" y1="30" x2="125" y2="30" stroke="white" strokeWidth="2" opacity="0.5">
                    <animate attributeName="x1" from="125" to="75" dur="2s" repeatCount="indefinite" />
                  </line>

                  <circle cx="50" cy="30" r="3" fill="white" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="30" r="3" fill="white" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="30" r="3" fill="white" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>

            <div className="mb-12">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                One Health
              </h1>
              <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <p className="text-white text-lg font-medium">
                  Together for Every Life
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm">Human Health</p>
                    <p className="text-white/70 text-xs">AI-powered health monitoring</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <span className="text-2xl">🐄</span>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm">Animal Health</p>
                    <p className="text-white/70 text-xs">Disease tracking & prevention</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm">Environmental Health</p>
                    <p className="text-white/70 text-xs">Real-time monitoring & alerts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-3">
          <button
            onClick={onGetStarted}
            className="w-full bg-white text-teal-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="w-full bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
            Explore as Guest
          </button>

          <div className="text-center pt-4">
            <p className="text-white/60 text-xs">
              Powered by AI • Built for India • Trusted by millions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
