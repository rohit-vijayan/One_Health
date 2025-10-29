import { Camera, MapPin, Thermometer, Droplets, Wind, Eye, Users } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

type ViewMode = 'waste' | 'water' | 'deforestation';

export default function EnvironmentalScreen({ onNavigate }: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>('waste');

  const hazards = [
    { type: 'waste', lat: 12.9716, lng: 77.5946, name: 'Biomedical Waste', location: 'Koramangala, Bangalore', severity: 'critical' },
    { type: 'water', lat: 19.0760, lng: 72.8777, name: 'Water Contamination', location: 'Dharavi, Mumbai', severity: 'high' },
    { type: 'waste', lat: 28.7041, lng: 77.1025, name: 'Plastic Dump', location: 'Chandni Chowk, Delhi', severity: 'moderate' },
    { type: 'water', lat: 22.5726, lng: 88.3639, name: 'Industrial Effluent', location: 'Howrah, Kolkata', severity: 'high' },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-cyan-50 to-white">
      <div className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🌍</div>
            <h1 className="text-2xl font-bold">EcoWatch Live</h1>
          </div>
        </div>
        <p className="text-cyan-50 text-sm">Real-time environmental monitoring across India</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-5 py-4">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setViewMode('waste')}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                viewMode === 'waste'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              🗑️ Waste
            </button>
            <button
              onClick={() => setViewMode('water')}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                viewMode === 'water'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              💧 Water
            </button>
            <button
              onClick={() => setViewMode('deforestation')}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                viewMode === 'deforestation'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              🌳 Trees
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-lg overflow-hidden mb-4">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-sky-900/40">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-xs font-semibold text-gray-700">Live Map View</p>
                  <p className="text-xs text-gray-500">India</p>
                </div>

                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute w-8 h-8 bg-red-500/30 rounded-full animate-ping"></div>
                    <div className="relative w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2">
                  <div className="relative">
                    <div className="absolute w-6 h-6 bg-orange-500/30 rounded-full animate-ping"></div>
                    <div className="relative w-6 h-6 bg-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                  </div>
                </div>

                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute w-6 h-6 bg-yellow-500/30 rounded-full animate-ping"></div>
                    <div className="relative w-6 h-6 bg-yellow-500 rounded-full border-3 border-white shadow-lg"></div>
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/3">
                  <div className="relative w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg flex space-x-3">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-700 font-medium">Critical</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-700 font-medium">High</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-700 font-medium">Moderate</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700 font-medium">Safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-4 rounded-xl shadow-lg mb-4 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center space-x-3">
              <Camera className="w-5 h-5" />
              <span className="font-bold text-lg">Report Hazard</span>
              <Eye className="w-5 h-5" />
            </div>
            <p className="text-cyan-50 text-xs mt-1">AI Vision will detect contamination type</p>
          </button>

          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 mb-4">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
              <Thermometer className="w-5 h-5 text-orange-500" />
              <span>Environmental Data</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-semibold text-gray-700">Water Quality</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">Moderate</p>
                <p className="text-xs text-gray-500 mt-1">pH: 7.2 • TDS: 480 ppm</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-semibold text-gray-700">Temperature</span>
                </div>
                <p className="text-2xl font-bold text-orange-600">31°C</p>
                <p className="text-xs text-gray-500 mt-1">Feels like 35°C</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Wind className="w-5 h-5 text-purple-500" />
                  <span className="text-xs font-semibold text-gray-700">Air Quality</span>
                </div>
                <p className="text-2xl font-bold text-purple-600">AQI 82</p>
                <p className="text-xs text-gray-500 mt-1">Moderate • PM2.5</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">🌡️</span>
                  <span className="text-xs font-semibold text-gray-700">Humidity</span>
                </div>
                <p className="text-2xl font-bold text-emerald-600">68%</p>
                <p className="text-xs text-gray-500 mt-1">Normal range</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 mb-4">
            <h3 className="font-bold text-gray-800 mb-3">Recent Hazard Reports</h3>
            <div className="space-y-2">
              {hazards.slice(0, 3).map((hazard, index) => {
                const severityColors = {
                  critical: 'bg-red-100 text-red-700 border-red-200',
                  high: 'bg-orange-100 text-orange-700 border-orange-200',
                  moderate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
                };

                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{hazard.name}</p>
                        <p className="text-xs text-gray-500 mt-1">📍 {hazard.location}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-bold border ${severityColors[hazard.severity as keyof typeof severityColors]}`}>
                        {hazard.severity}
                      </div>
                    </div>
                  </div>
                );
              })}
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
            <div className="bg-gradient-to-br from-cyan-500 to-sky-500 p-2.5 rounded-xl">
              <span className="text-xl">🌳</span>
            </div>
            <span className="text-xs font-semibold text-cyan-600">Environment</span>
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
