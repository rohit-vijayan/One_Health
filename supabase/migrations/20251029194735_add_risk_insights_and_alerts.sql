/*
  # Add Risk Insights and Alerts Schema

  1. New Tables
    - `risk_zones`
      - Stores AI-calculated risk scores for different geographic zones
      - Includes risk factors, active diseases, and population data
    - `frontline_alerts`
      - Real-time alerts for ASHA workers and health officials
      - Tracks alert status (new, acknowledged, resolved)
    - `best_practices`
      - Repository of educational content for farmers and workers
      - Supports multiple languages and media types (audio, video, article)
    - `ai_forecasts`
      - Disease outbreak predictions based on weather and historical data
      - Monthly forecasts for different diseases
  
  2. Security
    - Enable RLS on all tables
    - Public read access for educational content and alerts
    - Restricted write access for authorized users
*/

-- Risk Zones Table
CREATE TABLE IF NOT EXISTS risk_zones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  zone_name text NOT NULL,
  state text NOT NULL,
  district text,
  risk_level text DEFAULT 'moderate',
  risk_score integer DEFAULT 50,
  population text,
  active_diseases text[] DEFAULT '{}',
  risk_factors text[] DEFAULT '{}',
  location_lat decimal,
  location_lng decimal,
  last_updated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE risk_zones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view risk zones"
  ON risk_zones FOR SELECT
  TO authenticated
  USING (true);

-- Frontline Alerts Table
CREATE TABLE IF NOT EXISTS frontline_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  alert_type text NOT NULL DEFAULT 'general',
  title text NOT NULL,
  description text NOT NULL,
  location text,
  location_lat decimal,
  location_lng decimal,
  priority text DEFAULT 'medium',
  status text DEFAULT 'new',
  assigned_to uuid REFERENCES auth.users(id),
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  acknowledged_at timestamptz,
  resolved_at timestamptz
);

ALTER TABLE frontline_alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workers can view all alerts"
  ON frontline_alerts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create alerts"
  ON frontline_alerts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Assigned workers can update alerts"
  ON frontline_alerts FOR UPDATE
  TO authenticated
  USING (auth.uid() = assigned_to OR auth.uid() = created_by)
  WITH CHECK (auth.uid() = assigned_to OR auth.uid() = created_by);

-- Best Practices Content Table
CREATE TABLE IF NOT EXISTS best_practices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  content_type text DEFAULT 'article',
  language text DEFAULT 'English',
  duration text,
  category text DEFAULT 'general',
  audio_url text,
  video_url text,
  article_content text,
  thumbnail_url text,
  tags text[] DEFAULT '{}',
  active boolean DEFAULT true,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE best_practices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active practices"
  ON best_practices FOR SELECT
  TO authenticated
  USING (active = true);

-- AI Disease Forecasts Table
CREATE TABLE IF NOT EXISTS ai_forecasts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  forecast_month text NOT NULL,
  forecast_year integer NOT NULL,
  disease_name text NOT NULL,
  region text,
  predicted_cases integer,
  confidence_score decimal,
  risk_percentage decimal,
  weather_factors jsonb,
  historical_data jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_forecasts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view forecasts"
  ON ai_forecasts FOR SELECT
  TO authenticated
  USING (true);

-- Policy Reports Table
CREATE TABLE IF NOT EXISTS policy_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_title text NOT NULL,
  report_type text DEFAULT 'weekly',
  summary text,
  key_insights jsonb,
  recommendations text[] DEFAULT '{}',
  affected_regions text[] DEFAULT '{}',
  report_date date DEFAULT CURRENT_DATE,
  generated_by text DEFAULT 'AI System',
  download_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE policy_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view policy reports"
  ON policy_reports FOR SELECT
  TO authenticated
  USING (true);

-- User Activity Tracking
CREATE TABLE IF NOT EXISTS user_activity_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  activity_type text NOT NULL,
  activity_details jsonb,
  screen_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own activity"
  ON user_activity_log FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can log own activity"
  ON user_activity_log FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_risk_zones_location ON risk_zones(location_lat, location_lng);
CREATE INDEX IF NOT EXISTS idx_risk_zones_risk_level ON risk_zones(risk_level);
CREATE INDEX IF NOT EXISTS idx_frontline_alerts_status ON frontline_alerts(status);
CREATE INDEX IF NOT EXISTS idx_frontline_alerts_priority ON frontline_alerts(priority);
CREATE INDEX IF NOT EXISTS idx_best_practices_category ON best_practices(category);
CREATE INDEX IF NOT EXISTS idx_ai_forecasts_month_year ON ai_forecasts(forecast_month, forecast_year);

-- Insert sample risk zones data
INSERT INTO risk_zones (zone_name, state, district, risk_level, risk_score, population, active_diseases, risk_factors, location_lat, location_lng)
VALUES
  ('Pune District', 'Maharashtra', 'Pune', 'critical', 89, '9.4M', ARRAY['Dengue', 'Leptospirosis', 'Typhoid'], ARRAY['High dengue cases', 'Monsoon rainfall', 'Poor sanitation'], 18.5204, 73.8567),
  ('Alwar District', 'Rajasthan', 'Alwar', 'critical', 85, '3.7M', ARRAY['Lumpy Skin', 'Brucellosis'], ARRAY['Lumpy Skin Disease outbreak', 'High cattle density', 'Limited vet services'], 27.5530, 76.6346),
  ('Kolkata Metro', 'West Bengal', 'Kolkata', 'high', 76, '14.1M', ARRAY['Cholera', 'Hepatitis A', 'Malaria'], ARRAY['Industrial pollution', 'Water contamination', 'High population density'], 22.5726, 88.3639),
  ('Kozhikode', 'Kerala', 'Kozhikode', 'high', 72, '2.1M', ARRAY['Nipah Virus', 'Avian Influenza'], ARRAY['Nipah virus history', 'Fruit bat habitat', 'Zoonotic hotspot'], 11.2588, 75.7804)
ON CONFLICT DO NOTHING;

-- Insert sample best practices content
INSERT INTO best_practices (title, content_type, language, duration, category, tags)
VALUES
  ('Monsoon Livestock Care Essentials', 'audio', 'Hindi', '5 min', 'monsoon', ARRAY['cattle', 'monsoon', 'shelter']),
  ('Preventing Foot & Mouth Disease', 'article', 'English', '8 min', 'disease', ARRAY['FMD', 'prevention', 'vaccination']),
  ('Early Detection of Lumpy Skin Disease', 'audio', 'Kannada', '6 min', 'disease', ARRAY['lumpy skin', 'symptoms', 'cattle']),
  ('Cattle Nutrition During Dry Season', 'video', 'Tamil', '10 min', 'nutrition', ARRAY['nutrition', 'fodder', 'summer']),
  ('Vaccination Schedule Guide', 'article', 'Hindi', '7 min', 'disease', ARRAY['vaccination', 'schedule', 'prevention']),
  ('Fodder Management Best Practices', 'audio', 'Marathi', '9 min', 'nutrition', ARRAY['fodder', 'storage', 'quality'])
ON CONFLICT DO NOTHING;
