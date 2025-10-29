import { TrendingUp, AlertTriangle, Download, Bell, Users, MapPin, Activity } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function DashboardScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">📊</div>
            <h1 className="text-2xl font-bold">Risk Dashboard</h1>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
            <Bell className="w-5 h-5" />
          </button>
        </div>
        <p className="text-slate-200 text-sm">AI-Powered Disease & Risk Analytics</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <button
          onClick={() => onNavigate('riskinsights')}
          className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-bold text-xl mb-1">📊 AI Risk Insights Dashboard</h3>
              <p className="text-red-100 text-sm">Comprehensive risk prediction & analysis for policy makers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-3">
            <p className="text-sm font-semibold">View unified map • AI forecasting • Automated alerts • Policy reports</p>
          </div>
        </button>

        <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-lg p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">AI Risk Index</h3>
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="flex items-end space-x-3 mb-2">
            <span className="text-5xl font-bold">78</span>
            <span className="text-orange-100 text-lg mb-1">/ 100</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mt-3">
            <p className="text-sm font-semibold mb-1">High Risk Region Detected</p>
            <p className="text-orange-50 text-xs flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Pune District, Maharashtra</span>
            </p>
            <p className="text-orange-50 text-xs mt-2">
              Dengue outbreak + high monsoon rainfall + poor sanitation index
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white px-5 py-3">
            <h3 className="font-bold flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>India Heatmap Analysis</span>
            </h3>
          </div>
          <div className="p-5">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-48 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-red-500/70 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-500/60 rounded-full blur-xl"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-yellow-500/50 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-500/40 rounded-full blur-lg"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-red-500/60 rounded-full blur-xl"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-slate-700 mb-1">INDIA</p>
                      <p className="text-sm text-slate-500">Disease Risk Heatmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-semibold text-gray-700">Critical</p>
                <p className="text-xs text-gray-500">3 zones</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-semibold text-gray-700">High</p>
                <p className="text-xs text-gray-500">8 zones</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-semibold text-gray-700">Moderate</p>
                <p className="text-xs text-gray-500">15 zones</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-semibold text-gray-700">Low</p>
                <p className="text-xs text-gray-500">22 zones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-teal-600" />
            <span>Disease Trends vs Temperature</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800">Dengue Cases</span>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">↑ 45%</span>
              </div>
              <div className="flex items-end space-x-1 h-16">
                <div className="flex-1 bg-red-400 rounded-t" style={{ height: '40%' }}></div>
                <div className="flex-1 bg-red-400 rounded-t" style={{ height: '55%' }}></div>
                <div className="flex-1 bg-red-500 rounded-t" style={{ height: '70%' }}></div>
                <div className="flex-1 bg-red-600 rounded-t" style={{ height: '85%' }}></div>
                <div className="flex-1 bg-red-700 rounded-t" style={{ height: '100%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Correlation with 28-32°C temp range</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800">Malaria Cases</span>
                <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">↑ 22%</span>
              </div>
              <div className="flex items-end space-x-1 h-16">
                <div className="flex-1 bg-yellow-400 rounded-t" style={{ height: '50%' }}></div>
                <div className="flex-1 bg-yellow-500 rounded-t" style={{ height: '65%' }}></div>
                <div className="flex-1 bg-yellow-500 rounded-t" style={{ height: '75%' }}></div>
                <div className="flex-1 bg-yellow-600 rounded-t" style={{ height: '60%' }}></div>
                <div className="flex-1 bg-yellow-600 rounded-t" style={{ height: '80%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Increased during monsoon season</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800">Animal Outbreaks</span>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">12 detected</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">🐄 Lumpy Skin Disease</span>
                  <span className="font-semibold text-gray-800">Rajasthan, Punjab</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">🐔 Avian Influenza</span>
                  <span className="font-semibold text-gray-800">Kerala, West Bengal</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">🐄 Foot & Mouth</span>
                  <span className="font-semibold text-gray-800">Maharashtra, MP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Bell className="w-6 h-6 mb-2" />
            <p className="font-bold text-sm">Send Alert</p>
            <p className="text-xs text-red-50 mt-1">Notify officials</p>
          </button>
          <button className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Download className="w-6 h-6 mb-2" />
            <p className="font-bold text-sm">Download Report</p>
            <p className="text-xs text-teal-50 mt-1">Export PDF</p>
          </button>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-5 border border-slate-300">
          <h3 className="font-bold text-gray-800 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-teal-600">2,847</p>
              <p className="text-xs text-gray-600">Reports This Week</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-600">18</p>
              <p className="text-xs text-gray-600">Active Outbreaks</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-purple-600">156</p>
              <p className="text-xs text-gray-600">Field Workers Active</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-600">94%</p>
              <p className="text-xs text-gray-600">Response Rate</p>
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
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <Users className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-xs font-medium text-gray-500">Human</span>
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
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-2.5 rounded-xl">
              <span className="text-xl">📊</span>
            </div>
            <span className="text-xs font-semibold text-slate-700">Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
}
