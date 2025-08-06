# The Strong Moms - Backend API

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with:
```
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/strong-moms
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program by ID
- `GET /api/programs/category/:category` - Get programs by category
- `POST /api/programs/:id/book` - Book a program

### Community
- `GET /api/community/testimonials` - Get testimonials
- `GET /api/community/social-feed` - Get social feed
- `GET /api/community/challenges` - Get challenges
- `POST /api/community/challenges/:id/join` - Join challenge
- `GET /api/community/stats` - Get community stats

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get blog post by ID
- `GET /api/blog/categories` - Get blog categories
- `GET /api/blog/:id/related` - Get related posts
- `POST /api/blog/:id/like` - Like a blog post

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/progress` - Get user progress
- `POST /api/users/progress/workout` - Log workout
- `GET /api/users/achievements` - Get user achievements
- `GET /api/users/dashboard` - Get dashboard data

## Health Check
- `GET /api/health` - API health status 