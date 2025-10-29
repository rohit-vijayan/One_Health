export interface HealthReport {
  id: string;
  report_type: string;
  title: string;
  description?: string;
  location_name?: string;
  ai_analysis?: string;
  status: string;
  created_at: string;
}

export interface AnimalReport {
  id: string;
  animal_type: string;
  disease_name?: string;
  symptoms: string;
  location_name?: string;
  cases_count: number;
  severity: string;
  ai_recommendation?: string;
  status: string;
  created_at: string;
}

export interface EnvironmentalHazard {
  id: string;
  hazard_type: string;
  location_lat: number;
  location_lng: number;
  location_name?: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  water_quality_index?: number;
  air_quality_index?: number;
  temperature?: number;
  verified: boolean;
}

export interface GreenMission {
  id: string;
  title: string;
  description?: string;
  mission_type: string;
  target_count: number;
  points_reward: number;
  badge_name?: string;
  season?: string;
  active: boolean;
}

export interface UserAchievement {
  id: string;
  badge_name: string;
  badge_description?: string;
  points_earned: number;
  achievement_type: string;
  earned_at: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
