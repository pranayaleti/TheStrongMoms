import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Instagram, Calendar } from 'lucide-react';
import { communityAPI } from '../services/api';

// Load Instagram embed script once and process embeds when posts with URLs are shown
function useInstagramEmbeds(hasEmbedPosts) {
  useEffect(() => {
    if (!hasEmbedPosts) return;
    const processEmbeds = () => {
      if (typeof window.instgrm !== 'undefined' && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    const existing = document.querySelector('script[src*="instagram.com/embed"]');
    if (existing) {
      const t = setTimeout(processEmbeds, 350);
      return () => clearTimeout(t);
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    script.onload = () => setTimeout(processEmbeds, 100);
    document.body.appendChild(script);
  }, [hasEmbedPosts]);
}

const Social = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const hasEmbedPosts = posts.some((p) => p.embedUrl && p.url);
  useInstagramEmbeds(hasEmbedPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await communityAPI.getSocialFeed();
        setPosts(response.data.posts || []);
      } catch (error) {
        setPosts([
          {
            id: 1,
            type: 'instagram',
            username: '@strongmom_sarah',
            content: "Just completed my first pull-up! 💪 The Strong Moms community has been incredible. #StrongMomTribe #CrossFitMom",
            likes: 234,
            comments: 45,
            date: '2024-03-15',
          },
          {
            id: 2,
            type: 'instagram',
            username: '@mountainmama_jess',
            content: "Sunrise hike with my Strong Moms crew! 🌅 Nothing better than starting the day with these amazing women. #MomCommunity #WellnessLifestyle",
            likes: 189,
            comments: 32,
            date: '2024-03-14',
          },
          {
            id: 3,
            type: 'tiktok',
            username: '@mindset_mom_maria',
            content: "Day 30 of my mindset transformation! The Strong Moms program helped me break through limiting beliefs. #MindsetMatters #EmpoweredMoms",
            likes: 567,
            comments: 89,
            date: '2024-03-13',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-dark hero-auth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-auth-content"
          >
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">
              Latest Social Posts
            </h1>
            <p className="hero-text text-lg sm:text-xl max-w-2xl mx-auto">
              All our latest posts from Instagram, TikTok, and more
            </p>
          </motion.div>
        </div>
      </section>

      {/* All posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) =>
                post.embedUrl && post.url ? (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card p-4 flex flex-col items-center"
                  >
                    <blockquote
                      className="instagram-media w-full min-w-[280px] max-w-[658px]"
                      data-instgrm-permalink={post.url}
                      data-instgrm-version="14"
                    >
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                        View this post on Instagram
                      </a>
                    </blockquote>
                  </motion.article>
                ) : (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card p-6 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {post.type === 'instagram' && (
                          <Instagram className="w-5 h-5 text-pink-500 shrink-0" aria-hidden />
                        )}
                        {post.type === 'tiktok' && (
                          <div className="w-5 h-5 bg-gray-900 rounded shrink-0" aria-hidden />
                        )}
                        <span className="font-semibold text-gray-900">{post.username}</span>
                      </div>
                      {post.date && (
                        <span className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1 shrink-0" aria-hidden />
                          {post.date}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.content}</p>
                    {(post.image || post.video) && (
                      <div className="rounded-lg overflow-hidden bg-gray-100 mb-4 aspect-square max-h-80 flex items-center justify-center">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : post.video ? (
                          <span className="text-4xl text-gray-400">▶</span>
                        ) : (
                          <span className="text-4xl text-gray-400">📷</span>
                        )}
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes ?? 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments ?? 0}
                        </span>
                      </div>
                      {post.permalink ? (
                        <a
                          href={post.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                          aria-label="View on Instagram"
                        >
                          <Share2 className="w-4 h-4" />
                          View on Instagram
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                          aria-label="Share"
                        >
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      )}
                    </div>
                  </motion.article>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Social;
