import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, TrendingUp, Star, Instagram, Facebook, Twitter, MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

const Community = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [socialFeed, setSocialFeed] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Simulate API calls
    const fetchCommunityData = async () => {
      try {
        // Fetch testimonials
        const testimonialsResponse = await fetch('http://localhost:5000/api/community/testimonials');
        const testimonialsData = await testimonialsResponse.json();
        setTestimonials(testimonialsData.testimonials);

        // Fetch social feed
        const socialResponse = await fetch('http://localhost:5000/api/community/social-feed');
        const socialData = await socialResponse.json();
        setSocialFeed(socialData.posts);

        // Fetch challenges
        const challengesResponse = await fetch('http://localhost:5000/api/community/challenges');
        const challengesData = await challengesResponse.json();
        setChallenges(challengesData.challenges);

        // Fetch stats
        const statsResponse = await fetch('http://localhost:5000/api/community/stats');
        const statsData = await statsResponse.json();
        setStats(statsData);
      } catch (error) {
        // Fallback to mock data
        setTestimonials([
          {
            id: 1,
            name: "Sarah M.",
            quote: "The Strong Moms community changed my life. I went from barely being able to do a push-up to completing my first CrossFit competition! The support here is incredible.",
            program: "CrossFit for Moms",
            rating: 5
          },
          {
            id: 2,
            name: "Jessica L.",
            quote: "As a new mom, I was struggling with my identity. The mindset coaching helped me rediscover my strength and confidence. I'm now the mom I always wanted to be.",
            program: "Mindset Mastery",
            rating: 5
          },
          {
            id: 3,
            name: "Maria R.",
            quote: "The hiking group is my favorite part of the week. Fresh air, great conversation, and beautiful views. It's like therapy with friends!",
            program: "Mountain Mamas Hiking",
            rating: 5
          }
        ]);

        setSocialFeed([
          {
            id: 1,
            type: "instagram",
            username: "@strongmom_sarah",
            content: "Just completed my first pull-up! 💪 The Strong Moms community has been incredible. #StrongMomTribe #CrossFitMom",
            likes: 234,
            comments: 45
          },
          {
            id: 2,
            type: "instagram",
            username: "@mountainmama_jess",
            content: "Sunrise hike with my Strong Moms crew! 🌅 Nothing better than starting the day with these amazing women. #MomCommunity #WellnessLifestyle",
            likes: 189,
            comments: 32
          }
        ]);

        setChallenges([
          {
            id: 1,
            title: "March Strength Challenge",
            description: "Complete 100 push-ups, 100 squats, and 100 burpees this month",
            participants: 45,
            endDate: "2024-03-31",
            prize: "Strong Moms t-shirt and bragging rights!"
          },
          {
            id: 2,
            title: "Mindset Monday",
            description: "Share your biggest win of the week every Monday",
            participants: 89,
            endDate: "Ongoing",
            prize: "Community recognition and support"
          }
        ]);

        setStats({
          totalMembers: 1250,
          activeThisWeek: 89,
          testimonialsCount: 3,
          challengesCompleted: 156,
          socialPosts: 2,
          hashtags: [
            "#StrongMomTribe",
            "#MomCommunity",
            "#RealLifeStrongMom",
            "#EmpoweredMoms",
            "#CrossFitMom",
            "#MindsetMatters"
          ]
        });
      }
    };

    fetchCommunityData();
  }, []);

  const handleJoinChallenge = async (challengeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/community/challenges/${challengeId}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Challenge feature coming soon! 🎉');
    }
  };

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
              Our Community
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the amazing moms who are building strength, confidence, and lasting friendships. 
              Join our supportive community of empowered women.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.totalMembers && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-8 h-8 text-primary-600 mr-3" />
                    <span className="text-3xl font-bold text-gray-900">{stats.totalMembers}+</span>
                  </div>
                  <p className="text-gray-600">Strong Moms</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-secondary-600 mr-3" />
                    <span className="text-3xl font-bold text-gray-900">{stats.activeThisWeek}</span>
                  </div>
                  <p className="text-gray-600">Active This Week</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-8 h-8 text-accent-600 mr-3" />
                    <span className="text-3xl font-bold text-gray-900">{stats.challengesCompleted}</span>
                  </div>
                  <p className="text-gray-600">Challenges Completed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-8 h-8 text-accent-500 mr-3" />
                    <span className="text-3xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-gray-600">Average Rating</p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              What Our Strong Moms Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real moms who transformed their lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">{testimonial.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              Social Feed
            </h2>
            <p className="text-xl text-gray-600">
              Follow our community on social media
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialFeed.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {post.type === 'instagram' && <Instagram className="w-5 h-5 text-pink-500 mr-2" />}
                  {post.type === 'tiktok' && <div className="w-5 h-5 bg-black rounded mr-2"></div>}
                  <span className="font-semibold text-gray-900">{post.username}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center hover:text-primary-600 transition-colors">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center hover:text-primary-600 transition-colors">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </button>
                  </div>
                  <button className="hover:text-primary-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              Community Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Join our monthly challenges and earn rewards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{challenge.participants} participants</span>
                  <span className="text-sm text-gray-500">Ends: {challenge.endDate}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary-600">Prize: {challenge.prize}</p>
                </div>
                <button
                  onClick={() => handleJoinChallenge(challenge.id)}
                  className="btn-primary w-full"
                >
                  Join Challenge
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hashtags */}
      {stats.hashtags && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
                Join the Conversation
              </h2>
              <p className="text-lg text-gray-600">
                Use these hashtags to connect with our community
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {stats.hashtags.map((hashtag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                >
                  {hashtag}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white font-display mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with like-minded moms and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join" className="btn-secondary text-lg px-8 py-4">
                Join the Strong Moms
              </Link>
              <Link to="/programs" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community; 