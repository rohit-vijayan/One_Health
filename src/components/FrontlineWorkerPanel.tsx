import { useState } from 'react';
import { Bell, AlertTriangle, MapPin, Phone, X, CheckCircle, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'zoonotic' | 'outbreak' | 'environmental';
  title: string;
  description: string;
  location: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  status: 'new' | 'acknowledged' | 'resolved';
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FrontlineWorkerPanel({ isOpen, onClose }: Props) {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'zoonotic',
      title: 'Cow Fever Alert - Zoonotic Risk',
      description: 'Multiple cattle showing high fever in Hebbal Village. AI detects possible zoonotic transmission risk.',
      location: 'Hebbal Village, North Bangalore',
      priority: 'critical',
      timestamp: '2 minutes ago',
      status: 'new',
    },
    {
      id: '2',
      type: 'outbreak',
      title: 'Dengue Cluster Detected',
      description: '5 dengue cases reported within 500m radius. Urgent vector control needed.',
      location: 'Koramangala, Bangalore',
      priority: 'high',
      timestamp: '15 minutes ago',
      status: 'new',
    },
    {
      id: '3',
      type: 'environmental',
      title: 'Water Contamination',
      description: 'E.coli detected in community water source. Immediate action required.',
      location: 'Whitefield, Bangalore',
      priority: 'high',
      timestamp: '1 hour ago',
      status: 'acknowledged',
    },
  ]);

  const handleAcknowledge = (alertId: string) => {
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === alertId ? { ...alert, status: 'acknowledged' as const } : alert
      )
    );
  };

  const handleResolve = (alertId: string) => {
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === alertId ? { ...alert, status: 'resolved' as const } : alert
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500 text-white border-red-600';
      case 'high':
        return 'bg-orange-500 text-white border-orange-600';
      case 'medium':
        return 'bg-yellow-500 text-white border-yellow-600';
      default:
        return 'bg-blue-500 text-white border-blue-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'zoonotic':
        return '🐄';
      case 'outbreak':
        return '🦠';
      case 'environmental':
        return '💧';
      default:
        return '⚠️';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full max-w-md h-[90vh] sm:h-[600px] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl relative">
              <Bell className="w-6 h-6" />
              {alerts.filter(a => a.status === 'new').length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">{alerts.filter(a => a.status === 'new').length}</span>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold">Frontline Alerts</h2>
              <p className="text-red-100 text-xs">ASHA & Health Worker Panel</p>
            </div>
          </div>
          <button onClick={onClose} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-orange-200 px-6 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700">{alerts.filter(a => a.status === 'new').length} New Alerts</span>
            </div>
            <button className="text-red-600 font-semibold hover:text-red-700">Mark All Read</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${
                alert.status === 'new' ? 'border-red-300' : 'border-gray-200'
              }`}
            >
              <div className={`px-4 py-3 ${getPriorityColor(alert.priority)}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getTypeIcon(alert.type)}</span>
                    <span className="font-bold text-sm uppercase">{alert.priority} PRIORITY</span>
                  </div>
                  {alert.status === 'new' && (
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{alert.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{alert.description}</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{alert.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{alert.timestamp}</span>
                  {alert.status !== 'new' && (
                    <>
                      <span>•</span>
                      <span className={`font-semibold ${
                        alert.status === 'resolved' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {alert.status.toUpperCase()}
                      </span>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200">
                  <button className="flex items-center justify-center space-x-2 bg-teal-500 text-white px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call Team</span>
                  </button>
                  {alert.status === 'new' ? (
                    <button
                      onClick={() => handleAcknowledge(alert.id)}
                      className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Acknowledge</span>
                    </button>
                  ) : alert.status === 'acknowledged' ? (
                    <button
                      onClick={() => handleResolve(alert.id)}
                      className="flex items-center justify-center space-x-2 bg-green-500 text-white px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Resolve</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-3 py-2.5 rounded-lg text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Resolved</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>Emergency Contact Directory</span>
          </button>
        </div>
      </div>
    </div>
  );
}
