import { useState } from 'react';
import { AlertTriangle, Download, Bell, MapPin, TrendingUp, Users, Mail, Filter, ChevronDown, Activity, Cloud, Droplets } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

interface RiskZone {
  id: string;
  name: string;
  state: string;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  riskScore: number;
  factors: string[];
  diseases: string[];
  population: string;
}

export default function RiskInsightsScreen({ onNavigate }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'critical' | 'high'>('all');
  const [showForecast, setShowForecast] = useState(false);

  const riskZones: RiskZone[] = [
    {
      id: '1',
      name: 'Pune District',
      state: 'Maharashtra',
      riskLevel: 'critical',
      riskScore: 89,
      factors: ['High dengue cases', 'Monsoon rainfall', 'Poor sanitation'],
      diseases: ['Dengue', 'Leptospirosis', 'Typhoid'],
      population: '9.4M',
    },
    {
      id: '2',
      name: 'Alwar District',
      state: 'Rajasthan',
      riskLevel: 'critical',
      riskScore: 85,
      factors: ['Lumpy Skin Disease outbreak', 'High cattle density', 'Limited vet services'],
      diseases: ['Lumpy Skin', 'Brucellosis'],
      population: '3.7M',
    },
    {
      id: '3',
      name: 'Kolkata Metro',
      state: 'West Bengal',
      riskLevel: 'high',
      riskScore: 76,
      factors: ['Industrial pollution', 'Water contamination', 'High population density'],
      diseases: ['Cholera', 'Hepatitis A', 'Malaria'],
      population: '14.1M',
    },
    {
      id: '4',
      name: 'Kozhikode',
      state: 'Kerala',
      riskLevel: 'high',
      riskScore: 72,
      factors: ['Nipah virus history', 'Fruit bat habitat', 'Zoonotic hotspot'],
      diseases: ['Nipah Virus', 'Avian Influenza'],
      population: '2.1M',
    },
  ];

  const forecastData = [
    { month: 'Nov', dengue: 45, malaria: 32, cholera: 12 },
    { month: 'Dec', dengue: 38, malaria: 28, cholera: 15 },
    { month: 'Jan', dengue: 52, malaria: 35, cholera: 18 },
    { month: 'Feb', dengue: 68, malaria: 42, cholera: 22 },
    { month: 'Mar', dengue: 85, malaria: 55, cholera: 28 },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'moderate': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getRiskBorderColor = (level: string) => {
    switch (level) {
      case 'critical': return 'border-red-300';
      case 'high': return 'border-orange-300';
      case 'moderate': return 'border-yellow-300';
      default: return 'border-green-300';
    }
  };

  const filteredZones = riskZones.filter(zone => {
    if (selectedFilter === 'all') return true;
    return zone.riskLevel === selectedFilter;
  });

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-red-50 to-white">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold mb-1">Risk Insights Dashboard</h1>
            <p className="text-red-100 text-sm">AI-Powered Prediction & Analysis</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl hover:bg-white/30 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-xs mb-1">National AI Risk Index</p>
              <div className="flex items-end space-x-2">
                <span className="text-4xl font-bold">73</span>
                <span className="text-red-100 text-lg mb-1">/ 100</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-red-500 px-3 py-1.5 rounded-full text-xs font-bold mb-1">HIGH ALERT</div>
              <p className="text-red-100 text-xs">3 Critical Zones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-5 py-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Real-Time Risk Map</span>
              </h3>
              <button className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold">
                <Filter className="w-3 h-3" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-64 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                <div className="relative group cursor-pointer">
                  <div className="absolute w-16 h-16 bg-red-500/40 rounded-full animate-ping"></div>
                  <div className="relative w-16 h-16 bg-red-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap">
                      Pune: Critical Risk (89)
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 left-1/4">
                <div className="relative group cursor-pointer">
                  <div className="absolute w-14 h-14 bg-red-500/40 rounded-full animate-ping"></div>
                  <div className="relative w-14 h-14 bg-red-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 right-1/4">
                <div className="relative group cursor-pointer">
                  <div className="absolute w-12 h-12 bg-orange-500/40 rounded-full animate-ping"></div>
                  <div className="relative w-12 h-12 bg-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-1/2">
                <div className="relative group cursor-pointer">
                  <div className="absolute w-12 h-12 bg-orange-500/40 rounded-full animate-ping"></div>
                  <div className="relative w-12 h-12 bg-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                </div>
              </div>

              <div className="absolute top-1/3 right-1/3">
                <div className="relative w-10 h-10 bg-yellow-500 rounded-full border-3 border-white shadow-lg"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-5xl font-bold text-slate-700 mb-1">INDIA</p>
                  <p className="text-sm text-slate-500">Disease Risk Monitoring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 bg-white border-t border-gray-200">
            <div className="flex justify-around text-xs">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-700">Critical (3)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-gray-700">High (8)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-semibold text-gray-700">Moderate (15)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-gray-700">Low (22)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          {['all', 'critical', 'high'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter as any)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {filter === 'all' ? 'All Zones' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Risk`}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredZones.map((zone) => (
            <div key={zone.id} className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${getRiskBorderColor(zone.riskLevel)}`}>
              <div className={`${getRiskColor(zone.riskLevel)} text-white px-5 py-3`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{zone.name}</h3>
                    <p className="text-xs opacity-90">{zone.state} • Pop: {zone.population}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{zone.riskScore}</div>
                    <p className="text-xs opacity-90">Risk Score</p>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                  <span className="text-xs font-bold uppercase">{zone.riskLevel} RISK</span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-bold text-gray-700">Active Diseases</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.diseases.map((disease, index) => (
                      <span key={index} className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-red-200">
                        {disease}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <p className="text-xs font-bold text-gray-700">Risk Factors</p>
                  </div>
                  <div className="space-y-1">
                    {zone.factors.map((factor, index) => (
                      <div key={index} className="flex items-start space-x-2 text-xs text-gray-600">
                        <span className="text-orange-500 mt-0.5">•</span>
                        <span>{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200">
                  <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:shadow-md transition-all">
                    <Bell className="w-4 h-4" />
                    <span>Send Alert</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-teal-500 text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:shadow-md transition-all">
                    <MapPin className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <button
            onClick={() => setShowForecast(!showForecast)}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5" />
              <div className="text-left">
                <h3 className="font-bold">AI Forecast Engine</h3>
                <p className="text-blue-100 text-xs">Next 4 months prediction</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${showForecast ? 'rotate-180' : ''}`} />
          </button>

          {showForecast && (
            <div className="p-5 space-y-4">
              <div className="flex items-center space-x-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <Cloud className="w-5 h-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-800">Monsoon Impact Analysis</p>
                  <p className="text-xs text-gray-600">Temperature 28-32°C • Rainfall +45% expected</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800 mb-3">Outbreak Predictions</p>
                <div className="space-y-2">
                  {forecastData.slice(-3).map((month, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-700">{month.month} 2025</span>
                        <div className="flex items-center space-x-2">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-gray-500">Monsoon Season</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-red-50 rounded p-2 text-center border border-red-200">
                          <p className="text-lg font-bold text-red-600">{month.dengue}%</p>
                          <p className="text-xs text-gray-600">Dengue</p>
                        </div>
                        <div className="bg-yellow-50 rounded p-2 text-center border border-yellow-200">
                          <p className="text-lg font-bold text-yellow-600">{month.malaria}%</p>
                          <p className="text-xs text-gray-600">Malaria</p>
                        </div>
                        <div className="bg-blue-50 rounded p-2 text-center border border-blue-200">
                          <p className="text-lg font-bold text-blue-600">{month.cholera}%</p>
                          <p className="text-xs text-gray-600">Cholera</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-5 border border-slate-300">
          <h3 className="font-bold text-gray-800 mb-4">Automated Actions</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-1">Alert Distribution</p>
                <p className="text-xs text-gray-600 mb-2">Automated SMS/Email to CHCs, veterinary centers & panchayats</p>
                <div className="flex space-x-2 text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">156 Sent Today</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">98% Delivered</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-start space-x-3">
              <Download className="w-5 h-5 text-teal-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-1">Policy Reports</p>
                <p className="text-xs text-gray-600 mb-2">Auto-generated insights for district & state officials</p>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-600 transition-colors">
                  Download Latest Report (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <Users className="w-6 h-6 text-teal-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">2,847</p>
            <p className="text-xs text-gray-600">Reports This Week</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <Activity className="w-6 h-6 text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-800">18</p>
            <p className="text-xs text-gray-600">Active Outbreaks</p>
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
