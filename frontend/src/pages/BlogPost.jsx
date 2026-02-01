import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Eye, Heart, Tag, ArrowRight } from 'lucide-react';
import { blogAPI } from '../services/api';
import { usePageSEO } from '../contexts/PageSEOContext';
import { getSiteUrl, getArticleJsonLd } from '../config/seo';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setMeta } = usePageSEO();

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

  useEffect(() => {
    if (!post) return;
    const fetchRelated = async () => {
      try {
        const response = await blogAPI.getRelated(id);
        setRelatedPosts(response.data.relatedPosts || []);
      } catch {
        setRelatedPosts([]);
      }
    };
    fetchRelated();
  }, [id, post]);

  useEffect(() => {
    if (!post) {
      setMeta(null);
      return;
    }
    const siteUrl = getSiteUrl();
    const canonical = siteUrl ? `${siteUrl}/blog/${id}` : null;
    const image = post.image?.startsWith('http') ? post.image : (siteUrl ? `${siteUrl}${post.image || ''}` : post.image);
    setMeta({
      title: `${post.title} – The Strong Moms`,
      description: post.excerpt || post.title,
      image: image || undefined,
      canonical,
      type: 'article',
      jsonLd: getArticleJsonLd({
        siteUrl: canonical,
        title: post.title,
        description: post.excerpt,
        image,
        datePublished: post.publishDate,
        author: post.author,
      }),
    });
    return () => setMeta(null);
  }, [post, id, setMeta]);

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
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4 leading-tight max-w-3xl mx-auto" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.5)' }}>
              {post.title}
            </h1>
            <p className="text-lg text-white/95 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 border border-white/10 shadow-sm transition-colors mb-8 no-underline"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Back to Blog
          </Link>

          <div className="card p-8">
            {/* Category & tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  <Tag className="w-3.5 h-3.5 mr-1.5" />
                  {post.category}
                </span>
              )}
              {post.tags && post.tags.length > 0 && (
                <>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </>
              )}
            </div>

            {/* Meta row: date, read time, author (with image), views, likes */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 shrink-0" />
                {post.publishDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 shrink-0" />
                {post.readTime}
              </span>
              <span className="flex items-center">
                {post.authorImage ? (
                  <img
                    src={post.authorImage}
                    alt=""
                    className="w-6 h-6 rounded-full object-cover mr-2 shrink-0"
                  />
                ) : (
                  <span className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center mr-2 shrink-0">
                    <User className="w-3.5 h-3.5 text-pink-700" />
                  </span>
                )}
                {post.author}
              </span>
              {typeof post.views === 'number' && (
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 shrink-0" />
                  {post.views.toLocaleString()} views
                </span>
              )}
              {typeof post.likes === 'number' && (
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 shrink-0" />
                  {post.likes} likes
                </span>
              )}
            </div>

            {/* Content: multiple paragraphs */}
            <div className="prose prose-gray max-w-none">
              {(post.content || post.excerpt || 'Content coming soon.')
                .split(/\n\n+/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-6">Related posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="card p-0 overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
                  >
                    <div className="h-40 overflow-hidden bg-gray-200">
                      {related.image ? (
                        <img
                          src={related.image}
                          alt=""
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                          <span className="text-3xl">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-pink-600 uppercase tracking-wide">
                        {related.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-pink-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{related.readTime}</p>
                      <span className="inline-flex items-center mt-2 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
