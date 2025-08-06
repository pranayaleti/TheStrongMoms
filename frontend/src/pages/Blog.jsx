import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Postpartum Recovery: Your Complete Guide to Getting Strong Again",
      excerpt: "Everything you need to know about safely returning to fitness after having a baby.",
      author: "Dr. Sarah Johnson",
      publishDate: "2024-03-15",
      readTime: "8 min read",
      category: "postpartum",
      image: "/images/blog/postpartum-recovery.jpg"
    },
    {
      id: 2,
      title: "5 CrossFit Workouts You Can Do at Home (No Equipment Needed!)",
      excerpt: "Transform your living room into a CrossFit box with these effective, equipment-free workouts.",
      author: "Coach Jessica",
      publishDate: "2024-03-12",
      readTime: "6 min read",
      category: "workouts",
      image: "/images/blog/home-crossfit.jpg"
    },
    {
      id: 3,
      title: "Mindset Monday: How to Overcome the 'I'm Too Tired' Excuse",
      excerpt: "Practical strategies for pushing through fatigue and finding your motivation.",
      author: "Mindset Coach Amanda",
      publishDate: "2024-03-11",
      readTime: "5 min read",
      category: "mindset",
      image: "/images/blog/mindset-monday.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6">
              Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice, inspiring stories, and practical tips for moms on their fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.publishDate}
                    <Clock className="w-4 h-4 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 inline" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <Link to="/join" className="btn-primary text-lg px-8 py-4">
              Join to Get Updates
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 