# The Strong Moms - Health & Fitness Website

A modern, responsive full-stack health & fitness website empowering moms through strength training, CrossFit, hiking, and mindset coaching. 

## 🎯 Project Overview

**The Strong Moms** is a comprehensive fitness platform designed specifically for moms who want to build strength, confidence, and community. The website features:

- **CrossFit for Moms**: Functional fitness programs with postpartum modifications
- **Mountain Mamas Hiking**: Outdoor adventures and community building
- **Mindset Mastery**: Coaching programs for mental strength and confidence
- **Community Features**: Social feed, testimonials, challenges, and hashtags
- **Blog**: Expert advice on postpartum health, workouts, nutrition, and mindset

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **TailwindCSS** for modern, responsive styling
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **Lucide React** for beautiful icons
- **Axios** for API communication

### Backend
- **Node.js** with Express.js
- **MongoDB** (ready for integration)
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** and **Helmet** for security
- **Morgan** for logging

### Deployment Ready
- **Vercel/Netlify** for frontend hosting
- **Render/Railway** for backend hosting
- **Stripe** integration ready for payments
- **Firebase Auth** ready for authentication

## 🏗️ Project Structure

```
strong-moms-website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   └── ui/          # UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── services/        # API services
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── routes/              # API route handlers
│   ├── models/              # Database models
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   └── server.js            # Main server file
└── README.md
```

## 🎨 Design Features

### Brand Identity
- **Title**: The Strong Moms
- **Tagline**: "For every mom who wants to feel strong again"
- **Colors**: Pink/purple gradient with blue and yellow accents
- **Typography**: Poppins for headings, Inter for body text
- **Vibe**: Empowerment, authenticity, grit, real-life strength

### Key Hashtags
- #StrongMomTribe
- #MomCommunity
- #RealLifeStrongMom
- #EmpoweredMoms
- #CrossFitMom
- #MindsetMatters

## 📱 Pages & Features

### Core Pages
1. **Homepage**: Hero section, featured programs, testimonials
2. **Programs**: CrossFit, hiking, mindset coaching with filtering
3. **Community**: Testimonials, social feed, challenges, hashtags
4. **Blog**: Articles on fitness, nutrition, mindset, postpartum
5. **Join**: Signup form with program selection
6. **Dashboard**: Progress tracking (coming soon)
7. **Login/Register**: Authentication pages

### Features
- ✅ Responsive design (mobile-first)
- ✅ Modern animations with Framer Motion
- ✅ SEO-ready with meta tags
- ✅ Social media integration
- ✅ Mock API with fallback data
- ✅ Clean, modular code structure
- ✅ Accessibility considerations
- ✅ Performance optimized

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd strong-moms-website
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Install backend dependencies**
```bash
cd ../backend
npm install
```

4. **Set up environment variables**
```bash
# In backend directory, create .env file:
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/strong-moms
```

### Running the Application

1. **Start the backend server**
```bash
cd backend
npm run dev
```
The API will be available at `http://localhost:5000`

2. **Start the frontend development server**
```bash
cd frontend
npm run dev
```
The website will be available at `http://localhost:5173`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program by ID
- `POST /api/programs/:id/book` - Book a program

### Community
- `GET /api/community/testimonials` - Get testimonials
- `GET /api/community/social-feed` - Get social feed
- `GET /api/community/challenges` - Get challenges
- `GET /api/community/stats` - Get community stats

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get blog post by ID
- `POST /api/blog/:id/like` - Like a blog post

## 🎯 Future Enhancements

### Planned Features
- [ ] User dashboard with progress tracking
- [ ] Real-time chat and community features
- [ ] Stripe payment integration
- [ ] Firebase authentication
- [ ] Instagram API integration
- [ ] Fitness tracker integration
- [ ] Gamification (badges, challenges)
- [ ] Mobile app development

### Technical Improvements
- [ ] Database integration (MongoDB)
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Advanced search and filtering
- [ ] Performance optimizations
- [ ] Unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern fitness and wellness brands
- Community-focused approach inspired by successful mom communities
- Technical stack chosen for scalability and developer experience

---

**The Strong Moms** - Empowering moms to build strength, confidence, and community. 💪 