import { useState } from 'react';
import { Camera, MapPin, X, Upload, AlertCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReportData) => void;
}

interface ReportData {
  title: string;
  description: string;
  location: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  hasPhoto: boolean;
}

export default function ReportWasteModal({ isOpen, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState<'low' | 'moderate' | 'high' | 'critical'>('moderate');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);

  if (!isOpen) return null;

  const handleGetLocation = () => {
    setLocationDetected(true);
    setLocation('Koramangala, Bangalore, Karnataka');
  };

  const handleSubmit = () => {
    onSubmit({ title, description, location, severity, hasPhoto });
    setTitle('');
    setDescription('');
    setLocation('');
    setSeverity('moderate');
    setHasPhoto(false);
    setLocationDetected(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Report Waste</h2>
            <p className="text-emerald-50 text-sm">Help keep your community clean</p>
          </div>
          <button onClick={onClose} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Issue Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Open garbage dump near park"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the waste or contamination issue..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Severity Level</label>
            <div className="grid grid-cols-4 gap-2">
              {(['low', 'moderate', 'high', 'critical'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSeverity(level)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    severity === level
                      ? level === 'critical' ? 'bg-red-500 text-white shadow-md'
                        : level === 'high' ? 'bg-orange-500 text-white shadow-md'
                        : level === 'moderate' ? 'bg-yellow-500 text-white shadow-md'
                        : 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Add Photo</label>
            <button
              onClick={() => setHasPhoto(!hasPhoto)}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-4 rounded-xl border-2 border-dashed transition-all ${
                hasPhoto
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-300 hover:border-emerald-400'
              }`}
            >
              {hasPhoto ? (
                <>
                  <Upload className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-600">Photo Attached</span>
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-600">Take Photo</span>
                </>
              )}
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            {locationDetected ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{location}</p>
                  <p className="text-xs text-gray-500 mt-1">Location detected successfully</p>
                </div>
              </div>
            ) : (
              <button
                onClick={handleGetLocation}
                className="w-full flex items-center justify-center space-x-2 px-4 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <MapPin className="w-5 h-5" />
                <span>Detect Current Location</span>
              </button>
            )}
          </div>

          {title && description && locationDetected && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-800 mb-1">AI Analysis</p>
                <p className="text-xs text-gray-700">This report will be analyzed using computer vision and location data to prioritize response.</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <button
            onClick={handleSubmit}
            disabled={!title || !description || !locationDetected}
            className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
              title && description && locationDetected
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
