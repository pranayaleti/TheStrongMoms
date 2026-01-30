const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authMiddleware = require('../authMiddleware');
const { users, findUserByEmail, createUser } = require('../dataStore');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name, goals } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (goals && !Array.isArray(goals)) {
      return res.status(400).json({ error: 'Goals must be an array' });
    }
    
    // Check if user exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = createUser({
      id: users.length + 1,
      email,
      password: hashedPassword,
      name,
      goals
    });

    users.push(newUser);

    // Create token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Welcome to The Strong Moms! 💪',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Welcome back, Strong Mom! 💪',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Forgot password - request reset (placeholder: no email sent yet)
router.post('/forgot-password', (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    // Don't reveal whether email exists; always return success
    // TODO: send reset link when email service is configured
    res.json({ message: 'If an account exists with this email, you will receive reset instructions.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get profile
router.get('/profile', authMiddleware, (req, res) => {
  const user = req.user;
  res.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      joinDate: user.joinDate,
      goals: user.goals
    }
  });
});

module.exports = router; 