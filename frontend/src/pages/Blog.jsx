import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogAPI } from '../services/api';
import { staticBlogPosts } from '../data/blogPosts';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogAPI.getAll();
        setBlogPosts(response.data.posts || []);
      } catch {
        setBlogPosts(staticBlogPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - same theme as Login */}
      <section className="hero-dark hero-auth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-auth-content"
          >
            <img
              src="/logo.png"
              alt="The Strong Moms"
              className="h-16 sm:h-20 w-auto mx-auto mb-6 object-contain"
            />
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">
              Blog
            </h1>
            <p className="hero-text text-lg sm:text-xl max-w-2xl mx-auto">
              Expert advice, inspiring stories, and practical tips for moms on their fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card overflow-hidden h-full hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200">
                      {post.image && !imageErrors[post.id] ? (
                        <img
                          src={post.image}
                          alt=""
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={() => setImageErrors((prev) => ({ ...prev, [post.id]: true }))}
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                          <span className="text-4xl">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.publishDate}
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <span className="btn-with-icon text-primary-600 group-hover:text-primary-700 font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-display mb-6">
              More Content Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're working on more amazing content for our Strong Moms community.
            </p>
            <Link to="/join" className="btn-primary btn-with-icon text-lg px-8 py-4">
              Join to Get Updates
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 