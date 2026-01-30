const express = require('express');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5174',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/programs', require('./routes/programs'));
app.use('/api/community', require('./routes/community'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/users', require('./routes/users'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'The Strong Moms API is running!' });
});

// Test Instagram connection (5 most recent posts)
app.get('/api/test-instagram', async (req, res) => {
  try {
    const { INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID } = process.env;

    const response = await axios.get(
      `https://graph.facebook.com/v18.0/${INSTAGRAM_USER_ID}/media`,
      {
        params: {
          fields: 'id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count',
          access_token: INSTAGRAM_ACCESS_TOKEN,
          limit: 5
        }
      }
    );

    res.json({
      success: true,
      message: "Successfully connected to TheStrongMoms' Instagram!",
      post_count: response.data.data.length,
      latest_posts: response.data.data
    });
  } catch (error) {
    console.error('Instagram Fetch Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.response?.data || 'Failed to fetch Instagram data'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 The Strong Moms API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
}); 