const express = require('express');
const router = express.Router();
const authMiddleware = require('../authMiddleware');

router.use(authMiddleware);

// Get user profile
router.get('/profile', (req, res) => {
  const user = req.user;
  res.json({
    message: "Profile loaded! 💪",
    user
  });
});

// Update user goals
router.put('/goals', (req, res) => {
  const { goals } = req.body;
  const user = req.user;

  if (!Array.isArray(goals)) {
    return res.status(400).json({ error: 'Goals must be an array' });
  }
  
  user.goals = goals;
  
  res.json({
    message: "Goals updated successfully! 🎯",
    goals: user.goals
  });
});

// Get user goals
router.get('/goals', (req, res) => {
  const user = req.user;
  res.json({
    message: "Goals loaded! 🎯",
    goals: user.goals || []
  });
});

// Get user progress
router.get('/progress', (req, res) => {
  const user = req.user;
  res.json({
    message: "Progress loaded! 📊",
    progress: user.progress
  });
});

// Update workout progress
router.post('/progress/workout', (req, res) => {
  const { workoutType, duration, intensity } = req.body;
  const user = req.user;
  
  user.progress.workoutsCompleted += 1;
  user.progress.currentStreak += 1;
  user.progress.totalWorkouts += 1;
  
  res.json({
    message: "Workout logged! 💪",
    progress: user.progress
  });
});

// Get user achievements
router.get('/achievements', (req, res) => {
  const user = req.user;
  res.json({
    message: "Achievements loaded! 🏆",
    achievements: user.achievements
  });
});

// Get user stats
router.get('/stats', (req, res) => {
  const user = req.user;
  res.json({
    message: "Stats loaded! 📈",
    stats: user.stats
  });
});

// Get user dashboard data
router.get('/dashboard', (req, res) => {
  const user = req.user;
  
  const dashboardData = {
    user: {
      name: user.name,
      currentProgram: user.currentProgram,
      joinDate: user.joinDate
    },
    progress: user.progress,
    achievements: user.achievements,
    stats: user.stats,
    recentActivity: [
      {
        type: "workout",
        title: "CrossFit Session",
        date: "2024-03-15",
        description: "Completed WOD with 15 pull-ups"
      },
      {
        type: "achievement",
        title: "New Achievement Unlocked!",
        date: "2024-03-14",
        description: "First Pull-up"
      },
      {
        type: "community",
        title: "Community Post",
        date: "2024-03-13",
        description: "Shared progress in Strong Moms group"
      }
    ],
    upcomingEvents: [
      {
        title: "Saturday Hiking Trip",
        date: "2024-03-16",
        time: "8:00 AM",
        location: "Mountain Trail"
      },
      {
        title: "Mindset Coaching Session",
        date: "2024-03-18",
        time: "7:00 PM",
        location: "Online"
      }
    ]
  };
  
  res.json({
    message: "Dashboard loaded! 🏠",
    dashboard: dashboardData
  });
});

// Update user profile
router.put('/profile', (req, res) => {
  const { name, email, goals } = req.body;
  const user = req.user;

  if (goals && !Array.isArray(goals)) {
    return res.status(400).json({ error: 'Goals must be an array' });
  }
  
  if (name) user.name = name;
  if (email) user.email = email;
  if (goals) user.goals = goals;
  
  res.json({
    message: "Profile updated successfully! ✅",
    user: {
      name: user.name,
      email: user.email,
      goals: user.goals
    }
  });
});

module.exports = router; 