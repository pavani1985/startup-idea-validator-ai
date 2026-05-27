-- PostgreSQL Schema for Startup Idea Validator AI

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Reports table
CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    startup_name VARCHAR(255) NOT NULL,
    problem_statement TEXT NOT NULL,
    solution TEXT NOT NULL,
    industry VARCHAR(100) NOT NULL,
    target_audience TEXT,
    revenue_model VARCHAR(255),
    country VARCHAR(100),
    startup_stage VARCHAR(100),
    market_validation TEXT,
    strengths TEXT[] DEFAULT ARRAY[]::TEXT[],
    weaknesses TEXT[] DEFAULT ARRAY[]::TEXT[],
    opportunities TEXT[] DEFAULT ARRAY[]::TEXT[],
    threats TEXT[] DEFAULT ARRAY[]::TEXT[],
    competition_analysis TEXT,
    revenue_potential VARCHAR(255),
    investor_score INTEGER DEFAULT 0 CHECK (investor_score >= 0 AND investor_score <= 100),
    innovation_score INTEGER DEFAULT 0 CHECK (innovation_score >= 0 AND innovation_score <= 100),
    suggestions TEXT[] DEFAULT ARRAY[]::TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reports_user_id ON reports(user_id);
CREATE INDEX IF NOT EXISTS idx_reports_industry ON reports(industry);
CREATE INDEX IF NOT EXISTS idx_reports_created_at ON reports(created_at);

-- Insert sample user (password: demo123456 hashed with bcrypt)
INSERT INTO users (name, email, password, role) VALUES 
('Demo User', 'demo@example.com', '$2b$10$jF7sPPgVKzKLxHqNYJf.6e8V8kVzRk5kR9gR8kK5kV5kV5kV5kV5k', 'user'),
('Admin User', 'admin@example.com', '$2b$10$jF7sPPgVKzKLxHqNYJf.6e8V8kVzRk5kR9gR8kK5kV5kV5kV5kV5k', 'admin')
ON CONFLICT (email) DO NOTHING;