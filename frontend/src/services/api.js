import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 (clear auth, redirect only if not already on login)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      const path = window.location.pathname || '';
      if (!path.startsWith('/login') && !path.startsWith('/forgot-password')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (body) => api.post('/auth/forgot-password', body),
  getProfile: () => api.get('/auth/profile'),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

// Programs API
export const programsAPI = {
  getAll: () => api.get('/programs'),
  getById: (id) => api.get(`/programs/${id}`),
  book: (programId) => api.post(`/programs/${programId}/book`),
};

// Community API
export const communityAPI = {
  getTestimonials: () => api.get('/community/testimonials'),
  getSocialFeed: () => api.get('/community/social-feed'),
  getChallenges: () => api.get('/community/challenges'),
  joinChallenge: (challengeId) => api.post(`/community/challenges/${challengeId}/join`),
  getStats: () => api.get('/community/stats'),
};

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blog'),
  getById: (id) => api.get(`/blog/${id}`),
  getRelated: (id) => api.get(`/blog/${id}/related`),
  getCategories: () => api.get('/blog/categories'),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
  getGoals: () => api.get('/users/goals'),
  updateGoals: (goals) => api.put('/users/goals', { goals }),
};

export default api;
