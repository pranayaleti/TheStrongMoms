const express = require('express');
const router = express.Router();

// Mock community data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    image: "/images/testimonials/sarah.jpg",
    quote: "The Strong Moms community changed my life. I went from barely being able to do a push-up to completing my first CrossFit competition! The support here is incredible.",
    program: "CrossFit for Moms",
    rating: 5,
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Jessica L.",
    image: "/images/testimonials/jessica.jpg",
    quote: "As a new mom, I was struggling with my identity. The mindset coaching helped me rediscover my strength and confidence. I'm now the mom I always wanted to be.",
    program: "Mindset Mastery",
    rating: 5,
    date: "2024-02-20"
  },
  {
    id: 3,
    name: "Maria R.",
    image: "/images/testimonials/maria.jpg",
    quote: "The hiking group is my favorite part of the week. Fresh air, great conversation, and beautiful views. It's like therapy with friends!",
    program: "Mountain Mamas Hiking",
    rating: 5,
    date: "2024-03-10"
  },
  {
    id: 4,
    name: "Amanda K.",
    image: "/images/testimonials/amanda.jpg",
    quote: "Postpartum recovery was tough, but the modifications and support from The Strong Moms made all the difference. I'm stronger now than before pregnancy!",
    program: "CrossFit for Moms",
    rating: 5,
    date: "2024-01-30"
  },
  {
    id: 5,
    name: "Lisa T.",
    image: "/images/testimonials/lisa.jpg",
    quote: "The community here is unlike anything I've experienced. Real women, real struggles, real support. We lift each other up every single day.",
    program: "All Programs",
    rating: 5,
    date: "2024-02-15"
  }
];

const socialFeed = [
  {
    id: 1,
    type: "instagram",
    username: "@strongmom_sarah",
    content: "Just completed my first pull-up! 💪 The Strong Moms community has been incredible. #StrongMomTribe #CrossFitMom",
    image: "/images/social/instagram-1.jpg",
    likes: 234,
    comments: 45,
    date: "2024-03-15"
  },
  {
    id: 2,
    type: "instagram",
    username: "@mountainmama_jess",
    content: "Sunrise hike with my Strong Moms crew! 🌅 Nothing better than starting the day with these amazing women. #MomCommunity #WellnessLifestyle",
    image: "/images/social/instagram-2.jpg",
    likes: 189,
    comments: 32,
    date: "2024-03-14"
  },
  {
    id: 3,
    type: "tiktok",
    username: "@mindset_mom_maria",
    content: "Day 30 of my mindset transformation! The Strong Moms program helped me break through limiting beliefs. #MindsetMatters #EmpoweredMoms",
    video: "/videos/social/tiktok-1.mp4",
    likes: 567,
    comments: 89,
    date: "2024-03-13"
  }
];

const challenges = [
  {
    id: 1,
    title: "March Strength Challenge",
    description: "Complete 100 push-ups, 100 squats, and 100 burpees this month",
    participants: 45,
    endDate: "2024-03-31",
    prize: "Strong Moms t-shirt and bragging rights!",
    progress: {
      total: 100,
      completed: 67
    }
  },
  {
    id: 2,
    title: "Mindset Monday",
    description: "Share your biggest win of the week every Monday",
    participants: 89,
    endDate: "Ongoing",
    prize: "Community recognition and support",
    progress: {
      total: 52,
      completed: 12
    }
  }
];

// Get testimonials
router.get('/testimonials', (req, res) => {
  res.json({
    message: "Testimonials loaded! 💪",
    testimonials
  });
});

// Get social feed
router.get('/social-feed', (req, res) => {
  res.json({
    message: "Social feed loaded! 📱",
    posts: socialFeed
  });
});

// Get challenges
router.get('/challenges', (req, res) => {
  res.json({
    message: "Challenges loaded! 🏆",
    challenges
  });
});

// Join challenge
router.post('/challenges/:id/join', (req, res) => {
  const challenge = challenges.find(c => c.id === parseInt(req.params.id));
  if (!challenge) {
    return res.status(404).json({ error: 'Challenge not found' });
  }

  res.json({
    message: `You've joined ${challenge.title}! 🎉`,
    challenge: {
      id: challenge.id,
      title: challenge.title,
      participants: challenge.participants + 1
    }
  });
});

// Get community stats
router.get('/stats', (req, res) => {
  res.json({
    totalMembers: 1250,
    activeThisWeek: 89,
    testimonialsCount: testimonials.length,
    challengesCompleted: 156,
    socialPosts: socialFeed.length,
    hashtags: [
      "#StrongMomTribe",
      "#MomCommunity", 
      "#RealLifeStrongMom",
      "#MomInfluencer",
      "#WellnessLifestyle",
      "#EmpoweredMoms",
      "#CrossFitMom",
      "#HealthyMomLife",
      "#DisciplineOverMotivation",
      "#MindsetMatters"
    ]
  });
});

module.exports = router; 