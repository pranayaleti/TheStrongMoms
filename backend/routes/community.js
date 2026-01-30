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

// Optional: comma-separated Instagram post URLs (e.g. https://www.instagram.com/p/ABC123/)
// If set, these are returned as embeddable posts on the Social page.
const INSTAGRAM_POST_URLS = process.env.INSTAGRAM_POST_URLS
  ? process.env.INSTAGRAM_POST_URLS.split(',').map((u) => u.trim()).filter(Boolean)
  : [];

// Instagram Graph API: fetch latest posts automatically (no hardcoded list).
// Requires: Instagram Business or Creator account connected to a Facebook Page.
// Set INSTAGRAM_ACCESS_TOKEN (long-lived User or Page token) and INSTAGRAM_USER_ID (IG User ID).
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID || '';
const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME || '@TheStrongMoms';

const GRAPH_API_BASE = 'https://graph.facebook.com/v21.0';

async function fetchInstagramMedia() {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) return null;
  const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count';
  const limit = 25;
  const url = `${GRAPH_API_BASE}/${INSTAGRAM_USER_ID}/media?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(INSTAGRAM_ACCESS_TOKEN)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) {
      console.error('Instagram Graph API error:', data.error.message);
      return null;
    }
    return data.data || [];
  } catch (err) {
    console.error('Instagram fetch error:', err.message);
    return null;
  }
}

function formatInstagramPost(media) {
  const isVideo = media.media_type === 'VIDEO' || media.media_type === 'REELS';
  const date = media.timestamp ? new Date(media.timestamp).toISOString().slice(0, 10) : null;
  const imageUrl = isVideo
    ? (media.thumbnail_url || media.media_url)
    : (media.media_url || media.thumbnail_url);
  return {
    id: media.id,
    type: 'instagram',
    username: INSTAGRAM_USERNAME,
    content: media.caption || '',
    image: imageUrl || null,
    video: isVideo ? media.media_url : null,
    permalink: media.permalink,
    likes: media.like_count ?? 0,
    comments: media.comments_count ?? 0,
    date,
  };
}

const mockSocialFeed = [
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

// Social feed: prefer Instagram Graph API (latest posts), else URL list, else mock.
async function getSocialFeed() {
  const apiMedia = await fetchInstagramMedia();
  if (apiMedia && apiMedia.length > 0) {
    return apiMedia.map(formatInstagramPost);
  }
  if (INSTAGRAM_POST_URLS.length > 0) {
    return INSTAGRAM_POST_URLS.map((url, i) => ({
      id: `ig-${i + 1}`,
      type: 'instagram',
      url: url.startsWith('http') ? url : `https://www.instagram.com/p/${url}/`,
      embedUrl: true
    }));
  }
  return mockSocialFeed;
}

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

// Get social feed (async: fetches latest from Instagram when configured)
router.get('/social-feed', async (req, res) => {
  try {
    const posts = await getSocialFeed();
    res.json({
      message: "Social feed loaded! 📱",
      posts
    });
  } catch (err) {
    console.error('Social feed error:', err);
    res.status(500).json({
      message: "Failed to load social feed",
      posts: []
    });
  }
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
router.get('/stats', async (req, res) => {
  let socialPosts = 0;
  try {
    const feed = await getSocialFeed();
    socialPosts = feed.length;
  } catch (_) { /* use 0 */ }
  res.json({
    totalMembers: 1250,
    activeThisWeek: 89,
    testimonialsCount: testimonials.length,
    challengesCompleted: 156,
    socialPosts,
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