import { Trophy, Award, Play, BookOpen, Users, Star, ChevronRight } from 'lucide-react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function CommunityScreen({ onNavigate }: Props) {
  const learningModules = [
    {
      title: 'Prevent Zoonotic Diseases',
      description: 'Learn how diseases spread from animals to humans',
      duration: '12 min',
      points: 150,
      icon: '🦠',
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'Clean Water Challenge',
      description: 'Interactive game: Identify water contamination sources',
      duration: '8 min',
      points: 100,
      icon: '💧',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Waste Management 101',
      description: 'Best practices for safe waste disposal',
      duration: '10 min',
      points: 120,
      icon: '♻️',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', location: 'Mumbai', points: 2850, avatar: '👩🏽' },
    { rank: 2, name: 'Rajesh Kumar', location: 'Bangalore', points: 2640, avatar: '👨🏽' },
    { rank: 3, name: 'Anita Patel', location: 'Delhi', points: 2420, avatar: '👩🏽' },
    { rank: 4, name: 'Vikram Singh', location: 'Jaipur', points: 2180, avatar: '👨🏽' },
    { rank: 5, name: 'Deepika Rao', location: 'Hyderabad', points: 2050, avatar: '👩🏽' },
  ];

  const badges = [
    { name: 'Tree Guardian', icon: '🌳', earned: true },
    { name: 'Water Warrior', icon: '💧', earned: true },
    { name: 'Health Hero', icon: '🏥', earned: true },
    { name: 'Eco Star', icon: '⭐', earned: false },
    { name: 'Disease Detective', icon: '🔍', earned: false },
    { name: 'Community Leader', icon: '👥', earned: false },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-violet-50 to-white">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold">Learn • Play • Earn</h1>
            <p className="text-violet-100 text-sm mt-1">Community & Awareness Hub</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl text-center">
            <p className="text-2xl font-bold">1,850</p>
            <p className="text-xs text-violet-100">Your Points</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-violet-600" />
            <span>AI-Curated Learning Modules</span>
          </h3>

          <div className="space-y-3">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${module.color} rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">{module.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{module.title}</h4>
                    <p className="text-white/90 text-sm mb-3">{module.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold">
                          {module.duration}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>+{module.points}</span>
                        </span>
                      </div>
                      <button className="bg-white text-violet-600 px-4 py-2 rounded-lg font-semibold hover:bg-violet-50 transition-colors flex items-center space-x-1">
                        <Play className="w-4 h-4" />
                        <span>Start</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-lg p-5 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center space-x-2">
              <Trophy className="w-6 h-6" />
              <span>Top Contributors</span>
            </h3>
            <button className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold">
              View All
            </button>
          </div>

          <div className="space-y-2">
            {leaderboard.map((user, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 ${
                  index < 3 ? 'border-2 border-white/30' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 font-bold text-lg">
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                  </div>
                  <div className="text-2xl">{user.avatar}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">{user.name}</p>
                    <p className="text-yellow-100 text-xs">{user.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">{user.points.toLocaleString()}</p>
                    <p className="text-yellow-100 text-xs">points</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-600" />
            <span>Your Badges & Certificates</span>
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`${
                  badge.earned
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-100 border-amber-300'
                    : 'bg-gray-50 border-gray-200 opacity-50'
                } border-2 rounded-xl p-3 text-center`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className={`text-xs font-semibold ${badge.earned ? 'text-gray-800' : 'text-gray-400'}`}>
                  {badge.name}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🎓</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800 mb-1">Certificate Program</p>
                <p className="text-xs text-gray-600 mb-2">
                  Complete 10 modules to earn "One Health Champion" certificate
                </p>
                <div className="bg-white rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-xs text-gray-500">3 of 10 modules completed</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('growgreen')}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🌱</div>
              <div className="text-left">
                <p className="font-bold text-lg">GrowGreen Missions</p>
                <p className="text-green-100 text-sm">Plant trees & earn rewards</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>
        </button>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-200">
          <h3 className="font-bold text-gray-800 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3 border border-pink-100">
              <div className="flex items-start space-x-2">
                <span className="text-lg">✅</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">Completed: Clean Water Challenge</p>
                  <p className="text-xs text-gray-500">Earned 100 points • 2 hours ago</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-pink-100">
              <div className="flex items-start space-x-2">
                <span className="text-lg">🏆</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">Badge Unlocked: Health Hero</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
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
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-2.5 rounded-xl">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-violet-600">Community</span>
          </button>
          <button
            onClick={() => onNavigate('growgreen')}
            className="flex flex-col items-center space-y-1"
          >
            <div className="bg-gray-100 p-2.5 rounded-xl">
              <span className="text-xl">🌱</span>
            </div>
            <span className="text-xs font-medium text-gray-500">GrowGreen</span>
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
