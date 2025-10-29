import { MapPin, Camera, Upload, Award, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function GrowGreenScreen({ onNavigate }: Props) {
  const missions = [
    {
      title: 'Plant 3 Neem Trees this Monsoon',
      description: 'Neem trees purify air & provide medicinal benefits',
      target: 3,
      progress: 1,
      points: 300,
      badge: 'Neem Guardian',
      season: 'Monsoon 2024',
      icon: '🌿',
    },
    {
      title: 'Create a Kitchen Garden',
      description: 'Grow vegetables & herbs at home',
      target: 1,
      progress: 0,
      points: 200,
      badge: 'Green Thumb',
      season: 'Year Round',
      icon: '🥬',
    },
    {
      title: 'Plant 5 Fruit Trees in Community',
      description: 'Mango, Guava, or Jamun trees for community',
      target: 5,
      progress: 0,
      points: 500,
      badge: 'Fruit Forest Creator',
      season: 'Pre-Monsoon',
      icon: '🥭',
    },
  ];

  const recentPlantings = [
    { user: 'Amit Singh', tree: 'Neem', location: 'Sector 12, Noida', time: '2 hours ago', avatar: '👨🏽' },
    { user: 'Sneha Reddy', tree: 'Peepal', location: 'Banjara Hills, Hyderabad', time: '5 hours ago', avatar: '👩🏽' },
    { user: 'Karan Mehta', tree: 'Banyan', location: 'Adyar, Chennai', time: '1 day ago', avatar: '👨🏽' },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold flex items-center space-x-2">
              <span>🌱</span>
              <span>GrowGreen Missions</span>
            </h1>
            <p className="text-green-100 text-sm mt-1">Plant Trees • Earn Green Points • Save Earth</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-50 text-xs mb-1">Your Green Points</p>
              <p className="text-3xl font-bold">850</p>
            </div>
            <div className="text-right">
              <p className="text-green-50 text-xs mb-1">Trees Planted</p>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start space-x-3 mb-4">
            <div className="text-4xl">🌳</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">Featured Mission</h3>
              <p className="text-orange-50 text-sm">Help India reach 1 billion trees by 2030!</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">National Progress</span>
              <span className="text-sm font-bold">847M / 1B</span>
            </div>
            <div className="bg-white/30 rounded-full h-3 overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: '84.7%' }}></div>
            </div>
          </div>
          <button className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors">
            Join This Mission
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-green-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-600" />
            <span>Active Missions</span>
          </h3>

          <div className="space-y-3">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="text-3xl">{mission.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-1">{mission.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{mission.description}</p>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">
                        {mission.season}
                      </span>
                      <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-semibold">
                        +{mission.points} points
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-700">Progress</span>
                    <span className="text-xs font-bold text-green-600">
                      {mission.progress} / {mission.target} planted
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all"
                      style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {mission.progress > 0 ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Keep going!</span>
                    </div>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                      Upload Photo
                    </button>
                  </div>
                ) : (
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                    Join Mission
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Camera className="w-5 h-5 text-teal-600" />
            <span>Verify Your Planting</span>
          </h3>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200 mb-4">
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">📸</div>
              <p className="text-sm font-semibold text-gray-800 mb-2">Upload Tree Photo</p>
              <p className="text-xs text-gray-600 mb-3">
                Take a photo with GPS location to verify your planting
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-md transition-all flex items-center justify-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Take Photo</span>
              </button>
              <button className="flex-1 bg-white text-teal-600 border-2 border-teal-500 px-4 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <p className="text-xs text-blue-800 font-semibold mb-1">💡 Pro Tip</p>
            <p className="text-xs text-gray-700">
              Photos with GPS data get verified faster. Include the sapling and surrounding area in the frame.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-700 to-green-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-5 text-white">
            <h3 className="font-bold mb-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Your Tree Map</span>
            </h3>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl h-40 relative overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-white/70" />
                  <p className="text-sm text-white/80">12 trees planted</p>
                  <p className="text-xs text-white/60">View locations on map</p>
                </div>
              </div>

              <div className="absolute top-4 left-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-12 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <button className="w-full bg-white text-green-700 px-4 py-2.5 rounded-lg font-semibold hover:bg-green-50 transition-all">
              View Full Map
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span>Recent Community Activity</span>
          </h3>

          <div className="space-y-2">
            {recentPlantings.map((planting, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{planting.avatar}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {planting.user} planted a {planting.tree} tree
                    </p>
                    <p className="text-xs text-gray-600 mt-1 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{planting.location}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{planting.time}</p>
                  </div>
                  <div className="text-xl">🌳</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-5 text-white shadow-lg">
          <h3 className="font-bold mb-3 flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Badges Earned</span>
          </h3>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-3xl mb-2">🌳</div>
              <p className="text-xs font-semibold">Tree Guardian</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-3xl mb-2">🌿</div>
              <p className="text-xs font-semibold">Neem Planter</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-xs font-semibold">Eco Star</p>
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
            onClick={() => onNavigate('community')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <Award className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-xs font-medium text-gray-500">Community</span>
          </button>
          <button
            onClick={() => onNavigate('growgreen')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2.5 rounded-xl">
              <span className="text-xl">🌱</span>
            </div>
            <span className="text-xs font-semibold text-green-600">GrowGreen</span>
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
