import { Camera, AlertTriangle, Shield, BookOpen, ChevronRight, Users, ScanLine } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';
import BestPracticesHub from '../components/BestPracticesHub';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function VeterinaryScreen({ onNavigate }: Props) {
  const [showPracticesHub, setShowPracticesHub] = useState(false);
  const recentReports = [
    { disease: 'Brucellosis', cases: 3, severity: 'moderate', location: 'Raichur District, Karnataka' },
    { disease: 'Foot & Mouth Disease', cases: 7, severity: 'high', location: 'Amravati, Maharashtra' },
    { disease: 'Lumpy Skin Disease', cases: 12, severity: 'critical', location: 'Alwar, Rajasthan' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-amber-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🐄</div>
            <h1 className="text-2xl font-bold">Veterinary & Livestock</h1>
          </div>
        </div>
        <p className="text-amber-50 text-sm">Monitor animal health & prevent disease spread</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-lg p-5 text-white">
          <h3 className="font-bold text-lg mb-3">Report Animal Disease</h3>
          <p className="text-orange-50 text-sm mb-4">Help prevent zoonotic disease transmission</p>
          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              <Camera className="w-5 h-5" />
              <span>Take Photo</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              <ScanLine className="w-5 h-5" />
              <span>Scan QR</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span>Recent Disease Reports</span>
            </h3>
            <button className="text-xs text-teal-600 font-semibold">View All</button>
          </div>

          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{report.disease}</h4>
                    <p className="text-xs text-gray-600 flex items-center space-x-1">
                      <span className="text-lg">📍</span>
                      <span>{report.location}</span>
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(report.severity)}`}>
                    {report.severity.toUpperCase()}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">{report.cases} cases</span> reported
                  </span>
                  <button className="text-xs text-teal-600 font-semibold flex items-center space-x-1">
                    <span>View Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-md p-5 border border-teal-200">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-3 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">AI Assistant Recommendation</h3>
              <p className="text-gray-600 text-sm mb-3">Smart analysis based on reported symptoms</p>

              <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="text-xl">🐮</div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Symptom Analysis</p>
                    <p className="text-xs text-gray-600">High fever (104°F) + skin lesions detected in Alwar region</p>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
                  <p className="text-xs font-bold text-teal-800 mb-2">🤖 AI Recommendation:</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Immediately isolate affected cattle from herd</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Vaccinate all cattle within 5 km radius</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Contact: District Veterinary Officer, Alwar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Monitor for zoonotic transmission risk</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                  Contact Veterinary Team
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowPracticesHub(true)}
          className="bg-white rounded-2xl shadow-md p-5 border border-amber-200 hover:shadow-lg transition-all hover:scale-[1.02] text-left w-full"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-1">Best Practices Hub</h3>
              <p className="text-gray-600 text-sm mb-3">AI-curated articles & voice guides in multiple languages</p>

              <div className="space-y-2 mb-3">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-3 border border-amber-200 flex items-center space-x-3">
                  <div className="text-2xl">🎙️</div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">Monsoon Livestock Care</p>
                    <p className="text-xs text-gray-500">Hindi • 5 min audio</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-3 border border-amber-200 flex items-center space-x-3">
                  <div className="text-2xl">📖</div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">Preventing FMD Outbreaks</p>
                    <p className="text-xs text-gray-500">English • 8 min read</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <span>View All Resources</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </button>
      </div>

      <BestPracticesHub
        isOpen={showPracticesHub}
        onClose={() => setShowPracticesHub(false)}
      />

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
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-xl">
              <span className="text-xl">🐄</span>
            </div>
            <span className="text-xs font-semibold text-amber-600">Animal</span>
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
