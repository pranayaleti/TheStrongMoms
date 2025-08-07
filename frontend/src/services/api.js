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

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
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
  enroll: (programId) => api.post(`/programs/${programId}/enroll`),
};

// Community API
export const communityAPI = {
  getPosts: () => api.get('/community/posts'),
  createPost: (postData) => api.post('/community/posts', postData),
  likePost: (postId) => api.post(`/community/posts/${postId}/like`),
  comment: (postId, comment) => api.post(`/community/posts/${postId}/comments`, { comment }),
};

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blog'),
  getById: (id) => api.get(`/blog/${id}`),
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
