# 🚀 Startup Idea Validator AI - Full Stack MVP

A complete full-stack web application for validating startup ideas using simulated AI analysis. Built with Angular, Node.js, Express, and PostgreSQL.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Database Schema](#database-schema)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

## 🛠️ Tech Stack

### Frontend
- Angular 17+
- Angular Material UI
- Tailwind CSS
- RxJS & Reactive Forms
- Chart.js for analytics
- ng2-charts

### Backend
- Node.js & Express.js
- PostgreSQL Database
- Sequelize ORM
- JWT Authentication
- bcrypt Password Hashing

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL (local server)
- Angular CLI: `npm install -g @angular/cli`

### 1. Database Setup

```bash
# Create PostgreSQL database
psql -U postgres
CREATE DATABASE startup_idea_validator;
\c startup_idea_validator
\i database/schema.sql
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your database credentials:
# PORT=3000
# DATABASE_URL=postgresql://postgres:password@localhost:5432/startup_idea_validator
# JWT_SECRET=your_super_secret_jwt_key_change_in_production
# NODE_ENV=development

# Start development server
npm run dev
```

Backend runs on: `http://localhost:3000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
ng serve
```

Frontend runs on: `http://localhost:4200`

## 📁 Project Structure

```
startup-idea-validator-ai/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── reportController.ts
│   │   │   ├── userController.ts
│   │   │   └── adminController.ts
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   └── Report.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── users.ts
│   │   │   ├── reports.ts
│   │   │   └── admin.ts
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   └── aiAnalyzer.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/
│   │   │   │   ├── landing/
│   │   │   │   │   ├── landing.component.ts
│   │   │   │   │   ├── landing.component.html
│   │   │   │   │   └── landing.component.scss
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── register/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── submit-idea/
│   │   │   │   ├── reports/
│   │   │   │   ├── report-details/
│   │   │   │   ├── edit-report/
│   │   │   │   ├── profile/
│   │   │   │   └── admin/
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── report.service.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   └── admin.service.ts
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── admin.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   ├── models/
│   │   │   │   ├── auth.model.ts
│   │   │   │   └── report.model.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.component.ts
│   │   ├── environments/
│   │   │   ├── environment.ts
│   │   │   └── environment.prod.ts
│   │   ├── styles.scss
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── database/
│   └── schema.sql
│
└── README.md
```

## 🔐 Test Credentials

### User Account
- **Email:** demo@example.com
- **Password:** demo123456
- **Role:** User

### Admin Account
- **Email:** admin@example.com
- **Password:** demo123456
- **Role:** Admin

## 📚 API Documentation

### Authentication Endpoints

```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

---

POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### User Endpoints

```
GET /api/users/profile
Authorization: Bearer {token}
```

### Report Endpoints

```
POST /api/reports
Authorization: Bearer {token}
Content-Type: application/json

{
  "startupName": "TechStartup",
  "problemStatement": "The problem this startup solves...",
  "solution": "Our solution is...",
  "industry": "AI",
  "targetAudience": "Enterprise companies",
  "revenueModel": "Subscription",
  "country": "USA",
  "startupStage": "MVP"
}

---

GET /api/reports
Authorization: Bearer {token}
Query: ?page=1&limit=10

---

GET /api/reports/:id
Authorization: Bearer {token}

---

PUT /api/reports/:id
Authorization: Bearer {token}
Content-Type: application/json

---

DELETE /api/reports/:id
Authorization: Bearer {token}
```

### Admin Endpoints

```
GET /api/admin/users
Authorization: Bearer {admin_token}
Query: ?page=1&limit=10

---

GET /api/admin/reports
Authorization: Bearer {admin_token}
Query: ?page=1&limit=10

---

GET /api/admin/dashboard
Authorization: Bearer {admin_token}
```

## ✨ Features

### Frontend Features
- ✅ Landing Page with Hero Section
- ✅ User Authentication (Login/Register)
- ✅ Dashboard with Statistics
- ✅ Startup Idea Submission Form
- ✅ Report Management (View, Edit, Delete)
- ✅ Reports List with Pagination, Search & Filter
- ✅ Report Details with SWOT Analysis
- ✅ User Profile Page
- ✅ Admin Dashboard
- ✅ Charts & Analytics
- ✅ Responsive Design
- ✅ Material UI Components
- ✅ Tailwind CSS Styling

### Backend Features
- ✅ Complete REST API
- ✅ JWT Authentication
- ✅ Role-Based Access Control
- ✅ CRUD Operations
- ✅ Input Validation
- ✅ Error Handling
- ✅ Database Relationships
- ✅ Pagination
- ✅ AI Analysis Engine (Mock)
- ✅ Sequelize ORM

## 🎯 Application Pages

### Landing Page (`/`)
- Hero section with CTA
- Features showcase
- Pricing cards
- Testimonials
- Navigation to login/register

### Authentication Pages
- **Login** (`/login`) - User login with email/password
- **Register** (`/register`) - New user registration

### Dashboard (`/dashboard`)
- Statistics cards (total ideas, avg scores)
- Recent reports table
- Navigation sidebar
- Top navbar with user menu

### Submit Idea (`/submit-idea`)
- Form with validation
- Industry selection dropdown
- Startup stage selection
- Revenue model selection
- AI analysis auto-generation

### Reports (`/reports`)
- Reports list with pagination
- Search by startup name
- Filter by industry
- Edit/Delete options
- View report details

### Report Details (`/reports/:id`)
- Full analysis view with tabs
- Market validation insights
- SWOT analysis matrix
- Competition analysis
- Revenue potential
- Investor & Innovation scores
- Suggestions and recommendations
- Charts and visualizations
- Download PDF option

### Edit Report (`/reports/edit/:id`)
- Update startup details
- Re-generate analysis
- Form validation

### Profile (`/profile`)
- User information display
- Account statistics
- Quick action buttons
- Logout option

### Admin Dashboard (`/admin`)
- Platform statistics overview
- User management table
- Report management table
- Analytics charts
- Dashboard metrics

## 🔧 Environment Variables

Create `.env` file in `backend` directory:

```
PORT=3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/startup_idea_validator
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
```

## 📊 Database Schema

### Users Table
- `id` - Primary Key (Integer)
- `name` - User's name (String)
- `email` - Email address (String, Unique)
- `password` - Hashed password (String)
- `role` - User role (String: 'user' | 'admin')
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

### Reports Table
- `id` - Primary Key (Integer)
- `user_id` - Foreign Key to users table
- `startup_name` - Startup name (String)
- `problem_statement` - Problem description (Text)
- `solution` - Solution description (Text)
- `industry` - Industry/domain (String)
- `target_audience` - Target customer (Text)
- `revenue_model` - Revenue model (String)
- `country` - Country (String)
- `startup_stage` - Stage of startup (String)
- `market_validation` - Market insights (Text)
- `strengths` - Array of strengths
- `weaknesses` - Array of weaknesses
- `opportunities` - Array of opportunities
- `threats` - Array of threats
- `competition_analysis` - Competitor insights (Text)
- `revenue_potential` - Revenue forecast (String)
- `investor_score` - Investor readiness (0-100)
- `innovation_score` - Innovation level (0-100)
- `suggestions` - Array of recommendations
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

## 🚀 Deployment

### Build for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
ng build --configuration production
```

### Deploy to Cloud

**Heroku (Backend)**
```bash
cd backend
heroku create startup-validator-api
git push heroku main
```

**Vercel/Netlify (Frontend)**
```bash
cd frontend
npm run build
# Deploy dist folder to Vercel or Netlify
```

## 🛠️ Development Commands

### Backend
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
```

### Frontend
```bash
cd frontend
npm install          # Install dependencies
ng serve             # Start dev server
ng build             # Build for production
ng test              # Run tests
ng lint              # Run linter
```

## 📋 Checklist for First Run

- [ ] Node.js v18+ installed
- [ ] PostgreSQL running on port 5432
- [ ] Database `startup_idea_validator` created
- [ ] Schema imported from `database/schema.sql`
- [ ] Backend `.env` file created
- [ ] Backend dependencies installed (`npm install`)
- [ ] Backend server running on port 3000
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Frontend server running on port 4200
- [ ] Can login with demo@example.com / demo123456
- [ ] Can create new startup reports
- [ ] Can view reports list and details
- [ ] Admin can access admin dashboard

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 👤 Author

Startup Idea Validator AI Development Team

---

**Happy Validating! 🎉**

For issues and questions, please open an issue on GitHub.