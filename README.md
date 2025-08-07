# The Strong Moms - Complete Full-Stack Application

A comprehensive fitness platform designed specifically for moms who want to feel strong again. This application includes a complete backend API and frontend React application with full authentication, user management, and community features.

## 🚀 Features

### Backend (Node.js/Express)
- **Authentication System**: JWT-based login/register with bcrypt password hashing
- **User Management**: Profile management, goal tracking, and user preferences
- **Program Management**: Fitness programs and enrollment system
- **Community Features**: Posts, comments, and social interactions
- **Blog System**: Content management for fitness articles
- **RESTful API**: Complete CRUD operations with proper error handling
- **Security**: CORS, Helmet, input validation, and secure headers

### Frontend (React/Vite)
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Authentication**: Complete login/register flow with form validation
- **State Management**: Context API for global state management
- **Protected Routes**: Authentication-based routing
- **Real-time Updates**: Dynamic content updates and user interactions
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Morgan** - HTTP request logger

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Lucide React** - Icon library

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Quick Start
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TheStrongMoms
   ```

2. **Run the startup script**
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

   This will:
   - Install all dependencies for both backend and frontend
   - Start the backend server on port 5001
   - Start the frontend development server on port 5173

### Manual Setup

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=5001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5001/api
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get specific program
- `POST /api/programs/:id/enroll` - Enroll in program

### Community
- `GET /api/community/posts` - Get community posts
- `POST /api/community/posts` - Create new post
- `POST /api/community/posts/:id/like` - Like a post
- `POST /api/community/posts/:id/comments` - Comment on post

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get specific blog post
- `GET /api/blog/categories` - Get blog categories

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/goals` - Get user goals
- `PUT /api/users/goals` - Update user goals

## 🔐 Authentication Flow

1. **Registration**: User fills out registration form with name, email, password, and fitness goals
2. **Login**: User provides email and password
3. **Token Storage**: JWT token is stored in localStorage
4. **Protected Routes**: Authentication state is checked for protected pages
5. **Auto-logout**: Token expiration automatically logs out user

## 📱 Application Flow

### For New Users
1. Visit the homepage
2. Click "Join the Strong Moms" or "Register"
3. Fill out registration form with fitness goals
4. Get redirected to dashboard after successful registration

### For Existing Users
1. Click "Login" in navigation
2. Enter email and password
3. Access dashboard and all protected features

### Dashboard Features
- View enrolled programs
- Track fitness goals
- Access community posts
- Read blog articles
- Update profile settings

## 🎨 UI/UX Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations for better user experience
- **Loading States**: Proper loading indicators for all async operations
- **Error Handling**: User-friendly error messages and validation
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Tokens**: Secure authentication without server-side sessions
- **CORS Protection**: Proper cross-origin request handling
- **Input Validation**: Server-side validation for all inputs
- **Security Headers**: Helmet.js for additional security

## 🚀 Deployment

### Backend Deployment
```bash
cd backend
npm install --production
npm start
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Serve the dist folder with your preferred web server
```

## 📝 Development

### Backend Development
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend Development
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for strong moms everywhere** 