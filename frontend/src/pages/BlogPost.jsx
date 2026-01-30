import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogAPI } from '../services/api';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await blogAPI.getById(id);
        setPost(response.data.post);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
          <p className="text-gray-600 mb-6">This post may have been removed or never existed.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-primary-950 py-20 min-h-[280px] flex flex-col justify-end">
        {post.image && (
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-primary-950/80" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-primary-100">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="card p-8">
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.publishDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </span>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
