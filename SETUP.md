# 🚀 Complete Setup Guide - Startup Idea Validator AI

## Step 1: Clone Repository

```bash
git clone https://github.com/pavani1985/startup-idea-validator-ai.git
cd startup-idea-validator-ai
```

## Step 2: Database Setup

### Create PostgreSQL Database

```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE startup_idea_validator;

# Connect to database
\c startup_idea_validator

# Run schema file
\i database/schema.sql

# Verify tables created
\dt
```

## Step 3: Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env with your PostgreSQL credentials
# PORT=3000
# DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/startup_idea_validator
# JWT_SECRET=your_super_secret_jwt_key_12345
# NODE_ENV=development

# Start development server
npm run dev
```

**Backend should now be running on: http://localhost:3000**

## Step 4: Frontend Setup

```bash
# In a new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
ng serve
```

**Frontend should now be running on: http://localhost:4200**

## Step 5: Test the Application

Open browser and go to: **http://localhost:4200**

### Test Credentials

**User Account:**
- Email: demo@example.com
- Password: demo123456

**Admin Account:**
- Email: admin@example.com
- Password: demo123456

## ✅ Verification Checklist

- [ ] PostgreSQL running on port 5432
- [ ] Database created: `startup_idea_validator`
- [ ] Tables created from schema
- [ ] Backend installed dependencies
- [ ] Backend .env file created
- [ ] Backend running on port 3000
- [ ] Frontend installed dependencies
- [ ] Frontend running on port 4200
- [ ] Can access http://localhost:4200
- [ ] Can login with demo credentials
- [ ] Can create new reports
- [ ] Can view reports list

## 🔧 Troubleshooting

### Database Connection Error

```
# Check PostgreSQL is running
psql -U postgres -c "SELECT version();"

# Verify DATABASE_URL in .env
# Format: postgresql://username:password@localhost:5432/database_name
```

### Port Already in Use

```bash
# Change PORT in .env or angular.json if ports conflict
# Backend: Update PORT in .env
# Frontend: ng serve --port 4300
```

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📁 Project Structure

```
startup-idea-validator-ai/
├── backend/              # Node.js + Express backend
│   ├── src/
│   │   ├── config/       # Database config
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Auth middleware
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   └── utils/        # Helper functions
│   ├── package.json
│   └── .env.example
│
├── frontend/             # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/    # Page components
│   │   │   ├── services/ # API services
│   │   │   ├── guards/   # Route guards
│   │   │   └── models/   # Data models
│   │   └── environments/ # Environment config
│   └── package.json
│
├── database/
│   └── schema.sql        # PostgreSQL schema
│
└── README.md
```

## 🚀 Available Commands

### Backend
```bash
cd backend
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm start        # Start production server
```

### Frontend
```bash
cd frontend
ng serve         # Start dev server
ng build         # Build for production
ng test          # Run unit tests
ng lint          # Run linter
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/profile` - Get user profile

### Reports
- `POST /api/reports` - Create report
- `GET /api/reports` - Get user's reports
- `GET /api/reports/:id` - Get single report
- `PUT /api/reports/:id` - Update report
- `DELETE /api/reports/:id` - Delete report

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/reports` - Get all reports
- `GET /api/admin/dashboard` - Get dashboard stats

## 📖 Features Walkthrough

### Landing Page
- Visit http://localhost:4200
- View features, pricing, testimonials
- Click "Register" or "Login"

### Create First Report
1. Login with demo@example.com
2. Click "Submit Idea"
3. Fill out startup details
4. Click "Submit & Generate Report"
5. AI analysis generated automatically

### View Reports
1. Go to "My Reports"
2. See all created reports
3. Click to view full analysis
4. Edit or delete reports

### Admin Dashboard
1. Login with admin@example.com
2. Go to "Admin Dashboard"
3. View platform statistics
4. Manage users and reports

## 🎯 Next Steps

- [ ] Explore all application features
- [ ] Create multiple reports
- [ ] Test admin dashboard
- [ ] Review database schema
- [ ] Understand API structure
- [ ] Read code documentation

## ❓ Need Help?

Refer to the main README.md for:
- Complete API documentation
- Feature descriptions
- Database schema details
- Deployment instructions

---

**Happy building! 🎉**