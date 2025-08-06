const express = require('express');
const router = express.Router();

// Mock programs data
const programs = [
  {
    id: 1,
    title: "CrossFit for Moms",
    subtitle: "Build strength, confidence, and community",
    description: "Our signature CrossFit program designed specifically for moms. Focus on functional fitness, proper form, and building a supportive community of strong women.",
    category: "crossfit",
    duration: "8 weeks",
    difficulty: "All levels",
    price: 199,
    features: [
      "3x weekly coached sessions",
      "Nutrition guidance",
      "Community support group",
      "Progress tracking",
      "Postpartum modifications available"
    ],
    image: "/images/crossfit-moms.jpg",
    instructor: "Coach Jessica",
    schedule: "Mon, Wed, Fri 6:00 AM & 6:00 PM",
    maxParticipants: 12
  },
  {
    id: 2,
    title: "Mountain Mamas Hiking",
    subtitle: "Connect with nature and other moms",
    description: "Weekly hiking adventures for moms who want to explore the outdoors, build endurance, and create lasting friendships. All fitness levels welcome!",
    category: "hiking",
    duration: "Ongoing",
    difficulty: "Beginner to Advanced",
    price: 49,
    features: [
      "Weekly guided hikes",
      "Trail safety training",
      "Childcare coordination",
      "Beautiful photo opportunities",
      "Seasonal challenges"
    ],
    image: "/images/hiking-moms.jpg",
    instructor: "Trail Guide Maria",
    schedule: "Saturdays 8:00 AM",
    maxParticipants: 20
  },
  {
    id: 3,
    title: "Mindset Mastery",
    subtitle: "Transform your mindset, transform your life",
    description: "A comprehensive mindset coaching program that helps moms overcome limiting beliefs, build confidence, and create the life they truly want.",
    category: "mindset",
    duration: "12 weeks",
    difficulty: "All levels",
    price: 299,
    features: [
      "Weekly group coaching sessions",
      "1:1 coaching calls",
      "Daily mindset practices",
      "Private community access",
      "Lifetime access to resources"
    ],
    image: "/images/mindset-coaching.jpg",
    instructor: "Mindset Coach Amanda",
    schedule: "Tuesdays 7:00 PM (Group), Flexible (1:1)",
    maxParticipants: 15
  }
];

// Get all programs
router.get('/', (req, res) => {
  res.json({
    message: "Programs loaded successfully! 💪",
    programs
  });
});

// Get program by ID
router.get('/:id', (req, res) => {
  const program = programs.find(p => p.id === parseInt(req.params.id));
  if (!program) {
    return res.status(404).json({ error: 'Program not found' });
  }
  res.json({ program });
});

// Get programs by category
router.get('/category/:category', (req, res) => {
  const categoryPrograms = programs.filter(p => p.category === req.params.category);
  res.json({
    category: req.params.category,
    programs: categoryPrograms
  });
});

// Book a program (placeholder for Stripe integration)
router.post('/:id/book', (req, res) => {
  const program = programs.find(p => p.id === parseInt(req.params.id));
  if (!program) {
    return res.status(404).json({ error: 'Program not found' });
  }

  // Mock booking response
  res.json({
    message: `You're booked for ${program.title}! 🎉`,
    bookingId: `BK-${Date.now()}`,
    program: {
      id: program.id,
      title: program.title,
      price: program.price
    },
    nextSteps: [
      "Check your email for confirmation",
      "Join our private community group",
      "Mark your calendar for orientation"
    ]
  });
});

module.exports = router; 