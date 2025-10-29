import { useState } from 'react';
import { BookOpen, X, Play, Pause, Volume2, ChevronRight } from 'lucide-react';

interface Practice {
  id: string;
  title: string;
  language: string;
  duration: string;
  type: 'audio' | 'video' | 'article';
  category: string;
  icon: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BestPracticesHub({ isOpen, onClose }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'monsoon' | 'disease' | 'nutrition'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const practices: Practice[] = [
    {
      id: '1',
      title: 'Monsoon Livestock Care Essentials',
      language: 'Hindi',
      duration: '5 min',
      type: 'audio',
      category: 'monsoon',
      icon: '🎙️',
    },
    {
      id: '2',
      title: 'Preventing Foot & Mouth Disease',
      language: 'English',
      duration: '8 min',
      type: 'article',
      category: 'disease',
      icon: '📖',
    },
    {
      id: '3',
      title: 'Early Detection of Lumpy Skin Disease',
      language: 'Kannada',
      duration: '6 min',
      type: 'audio',
      category: 'disease',
      icon: '🎙️',
    },
    {
      id: '4',
      title: 'Cattle Nutrition During Dry Season',
      language: 'Tamil',
      duration: '10 min',
      type: 'video',
      category: 'nutrition',
      icon: '🎥',
    },
    {
      id: '5',
      title: 'Vaccination Schedule Guide',
      language: 'Hindi',
      duration: '7 min',
      type: 'article',
      category: 'disease',
      icon: '📖',
    },
    {
      id: '6',
      title: 'Fodder Management Best Practices',
      language: 'Marathi',
      duration: '9 min',
      type: 'audio',
      category: 'nutrition',
      icon: '🎙️',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Topics', icon: '📚' },
    { id: 'monsoon', label: 'Monsoon Care', icon: '🌧️' },
    { id: 'disease', label: 'Disease Prevention', icon: '💊' },
    { id: 'nutrition', label: 'Nutrition', icon: '🌾' },
  ];

  const filteredPractices = practices.filter(
    practice => selectedCategory === 'all' || practice.category === selectedCategory
  );

  const handlePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full max-w-md h-[90vh] sm:h-[600px] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Best Practices Hub</h2>
              <p className="text-amber-100 text-xs">AI-curated guides & resources</p>
            </div>
          </div>
          <button onClick={onClose} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-orange-200 px-4 py-3 overflow-x-auto">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <span className="mr-1.5">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {filteredPractices.map((practice) => (
            <div key={practice.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-3xl">{practice.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{practice.title}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded-full font-semibold">{practice.language}</span>
                      <span>•</span>
                      <span>{practice.duration}</span>
                      <span>•</span>
                      <span className="capitalize">{practice.type}</span>
                    </div>
                  </div>
                </div>

                {practice.type === 'audio' && (
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-3 border border-amber-200">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handlePlay(practice.id)}
                        className={`p-2.5 rounded-full transition-all ${
                          playingId === practice.id
                            ? 'bg-amber-600 hover:bg-amber-700'
                            : 'bg-amber-500 hover:bg-amber-600'
                        }`}
                      >
                        {playingId === practice.id ? (
                          <Pause className="w-4 h-4 text-white" />
                        ) : (
                          <Play className="w-4 h-4 text-white" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="bg-amber-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-amber-600 h-full rounded-full transition-all duration-500"
                            style={{ width: playingId === practice.id ? '45%' : '0%' }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-600">
                            {playingId === practice.id ? '2:15' : '0:00'}
                          </span>
                          <span className="text-xs text-gray-600">{practice.duration}</span>
                        </div>
                      </div>
                      <Volume2 className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                )}

                {practice.type === 'video' && (
                  <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-4 h-32 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
                    <button
                      onClick={() => handlePlay(practice.id)}
                      className="relative bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all hover:scale-110"
                    >
                      <Play className="w-6 h-6 text-amber-600" />
                    </button>
                  </div>
                )}

                {practice.type === 'article' && (
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-md transition-all">
                    <BookOpen className="w-4 h-4" />
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {playingId === practice.id && practice.type === 'audio' && (
                <div className="bg-amber-50 border-t border-amber-200 px-4 py-3">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    "गायों को मानसून में सूखी और साफ जगह पर रखें। बारिश के पानी से बचाव जरूरी है..."
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold">{filteredPractices.length} resources available</span>
            </div>
            <button className="text-amber-600 font-semibold hover:text-amber-700">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
