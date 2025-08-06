const express = require('express');
const router = express.Router();

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Postpartum Recovery: Your Complete Guide to Getting Strong Again",
    excerpt: "Everything you need to know about safely returning to fitness after having a baby, including when to start, what to avoid, and how to listen to your body.",
    content: "Postpartum recovery is a journey that's unique to every mom. Whether you had a vaginal birth or C-section, your body has been through incredible changes...",
    author: "Dr. Sarah Johnson",
    authorImage: "/images/authors/sarah.jpg",
    category: "postpartum",
    tags: ["postpartum", "recovery", "fitness", "health"],
    image: "/images/blog/postpartum-recovery.jpg",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    views: 1247,
    likes: 89,
    featured: true
  },
  {
    id: 2,
    title: "5 CrossFit Workouts You Can Do at Home (No Equipment Needed!)",
    excerpt: "Transform your living room into a CrossFit box with these effective, equipment-free workouts designed specifically for busy moms.",
    content: "Being a mom means finding creative ways to fit fitness into your busy schedule. These CrossFit-inspired workouts require zero equipment and can be done anywhere...",
    author: "Coach Jessica",
    authorImage: "/images/authors/jessica.jpg",
    category: "workouts",
    tags: ["crossfit", "home-workouts", "strength", "fitness"],
    image: "/images/blog/home-crossfit.jpg",
    publishDate: "2024-03-12",
    readTime: "6 min read",
    views: 892,
    likes: 67,
    featured: false
  },
  {
    id: 3,
    title: "Mindset Monday: How to Overcome the 'I'm Too Tired' Excuse",
    excerpt: "Practical strategies for pushing through fatigue and finding your motivation, even on the toughest days.",
    content: "We've all been there - the alarm goes off, you're exhausted from a sleepless night, and the last thing you want to do is work out...",
    author: "Mindset Coach Amanda",
    authorImage: "/images/authors/amanda.jpg",
    category: "mindset",
    tags: ["mindset", "motivation", "discipline", "mental-health"],
    image: "/images/blog/mindset-monday.jpg",
    publishDate: "2024-03-11",
    readTime: "5 min read",
    views: 567,
    likes: 45,
    featured: false
  },
  {
    id: 4,
    title: "Nutrition for Busy Moms: Meal Prep Strategies That Actually Work",
    excerpt: "Simple, realistic nutrition strategies that fit into your busy mom lifestyle without sacrificing your health goals.",
    content: "Between work, kids, and everything else, finding time to eat healthy can feel impossible. But with the right strategies...",
    author: "Nutrition Coach Maria",
    authorImage: "/images/authors/maria.jpg",
    category: "nutrition",
    tags: ["nutrition", "meal-prep", "healthy-eating", "lifestyle"],
    image: "/images/blog/nutrition-moms.jpg",
    publishDate: "2024-03-08",
    readTime: "7 min read",
    views: 734,
    likes: 52,
    featured: false
  },
  {
    id: 5,
    title: "Building Your Strong Mom Tribe: Why Community Matters",
    excerpt: "The science behind why having a supportive community of like-minded moms is crucial for your fitness and mental health journey.",
    content: "Humans are social creatures, and moms especially need connection. Research shows that having a supportive community...",
    author: "Community Director Lisa",
    authorImage: "/images/authors/lisa.jpg",
    category: "community",
    tags: ["community", "support", "mental-health", "connection"],
    image: "/images/blog/strong-tribe.jpg",
    publishDate: "2024-03-05",
    readTime: "4 min read",
    views: 445,
    likes: 38,
    featured: false
  },
  {
    id: 6,
    title: "Hiking with Kids: Making Outdoor Adventures Family-Friendly",
    excerpt: "Tips and tricks for bringing your little ones along on hiking adventures while keeping everyone safe and happy.",
    content: "Hiking doesn't have to stop when you become a mom. In fact, it can become an even more rewarding experience when you share it with your kids...",
    author: "Trail Guide Maria",
    authorImage: "/images/authors/maria.jpg",
    category: "hiking",
    tags: ["hiking", "outdoors", "family", "adventure"],
    image: "/images/blog/hiking-kids.jpg",
    publishDate: "2024-03-01",
    readTime: "9 min read",
    views: 623,
    likes: 41,
    featured: false
  }
];

// Get all blog posts
router.get('/', (req, res) => {
  const { category, featured, limit } = req.query;
  
  let filteredPosts = [...blogPosts];
  
  if (category) {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }
  
  if (featured === 'true') {
    filteredPosts = filteredPosts.filter(post => post.featured);
  }
  
  if (limit) {
    filteredPosts = filteredPosts.slice(0, parseInt(limit));
  }
  
  res.json({
    message: "Blog posts loaded! 📝",
    posts: filteredPosts,
    total: filteredPosts.length
  });
});

// Get blog categories
router.get('/categories', (req, res) => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  res.json({ categories });
});

// Get related posts
router.get('/:id/related', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  
  res.json({ relatedPosts });
});

// Like a blog post
router.post('/:id/like', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  post.likes += 1;
  
  res.json({
    message: "Post liked! ❤️",
    likes: post.likes
  });
});

// Get blog post by ID
router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  // Increment views
  post.views += 1;
  
  res.json({ post });
});

module.exports = router; 