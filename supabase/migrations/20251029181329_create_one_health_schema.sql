/*
  # One Health App Database Schema

  1. New Tables
    - `health_reports`
      - Stores user reports for waste, contamination, and health issues
      - Includes location data, images, AI analysis results
    - `animal_reports`
      - Veterinary and livestock disease reports
      - Tracks disease type, symptoms, location
    - `environmental_hazards`
      - Environmental monitoring data (water quality, AQI, contamination)
      - Map-based hazard tracking
    - `green_missions`
      - Tree planting and environmental missions
      - Progress tracking and verification
    - `user_achievements`
      - Gamification: badges, points, certificates
      - Leaderboard data
    - `ai_interactions`
      - Chat history with AI health copilot
      - Context and recommendations
  
  2. Security
    - Enable RLS on all tables
    - Policies for authenticated users to manage their own data
    - Public read access for environmental data and missions
*/

-- Health Reports Table
CREATE TABLE IF NOT EXISTS health_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  report_type text NOT NULL DEFAULT 'waste',
  title text NOT NULL,
  description text,
  location_lat decimal,
  location_lng decimal,
  location_name text,
  image_url text,
  ai_analysis text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE health_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all health reports"
  ON health_reports FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own health reports"
  ON health_reports FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own health reports"
  ON health_reports FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Animal Reports Table
CREATE TABLE IF NOT EXISTS animal_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  animal_type text NOT NULL DEFAULT 'cattle',
  disease_name text,
  symptoms text NOT NULL,
  location_lat decimal,
  location_lng decimal,
  location_name text,
  cases_count integer DEFAULT 1,
  severity text DEFAULT 'moderate',
  ai_recommendation text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE animal_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all animal reports"
  ON animal_reports FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create animal reports"
  ON animal_reports FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Environmental Hazards Table
CREATE TABLE IF NOT EXISTS environmental_hazards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  hazard_type text NOT NULL DEFAULT 'waste',
  location_lat decimal NOT NULL,
  location_lng decimal NOT NULL,
  location_name text,
  severity text DEFAULT 'moderate',
  description text,
  water_quality_index integer,
  air_quality_index integer,
  temperature decimal,
  image_url text,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE environmental_hazards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view environmental hazards"
  ON environmental_hazards FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create environmental hazards"
  ON environmental_hazards FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Green Missions Table
CREATE TABLE IF NOT EXISTS green_missions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  mission_type text DEFAULT 'tree_planting',
  target_count integer DEFAULT 1,
  points_reward integer DEFAULT 100,
  badge_name text,
  season text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE green_missions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view green missions"
  ON green_missions FOR SELECT
  TO authenticated
  USING (true);

-- User Mission Progress Table
CREATE TABLE IF NOT EXISTS user_mission_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  mission_id uuid REFERENCES green_missions(id),
  progress_count integer DEFAULT 0,
  completed boolean DEFAULT false,
  location_lat decimal,
  location_lng decimal,
  verification_image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_mission_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own mission progress"
  ON user_mission_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own mission progress"
  ON user_mission_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own mission progress"
  ON user_mission_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- User Achievements Table
CREATE TABLE IF NOT EXISTS user_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  badge_name text NOT NULL,
  badge_description text,
  points_earned integer DEFAULT 0,
  achievement_type text DEFAULT 'badge',
  earned_at timestamptz DEFAULT now()
);

ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own achievements"
  ON user_achievements FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own achievements"
  ON user_achievements FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- AI Interactions Table
CREATE TABLE IF NOT EXISTS ai_interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  interaction_type text DEFAULT 'health_copilot',
  user_message text NOT NULL,
  ai_response text NOT NULL,
  context_data jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_interactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own AI interactions"
  ON ai_interactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create AI interactions"
  ON ai_interactions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_health_reports_user_id ON health_reports(user_id);
CREATE INDEX IF NOT EXISTS idx_health_reports_created_at ON health_reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_animal_reports_user_id ON animal_reports(user_id);
CREATE INDEX IF NOT EXISTS idx_environmental_hazards_location ON environmental_hazards(location_lat, location_lng);
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);