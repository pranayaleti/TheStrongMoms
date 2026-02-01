import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, TrendingUp, Star, Play, Instagram, Facebook } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '1,250+', label: 'Strong Moms', icon: Heart },
    { number: '89', label: 'Active This Week', icon: Users },
    { number: '156', label: 'Challenges Completed', icon: TrendingUp },
    { number: '4.9', label: 'Average Rating', icon: Star },
  ];

  const featuredPrograms = [
    {
      title: 'CrossFit for Moms',
      subtitle: 'Build strength, confidence, and community',
      description: 'Our signature CrossFit program designed specifically for moms. Focus on functional fitness, proper form, and building a supportive community.',
      price: 199,
      duration: '8 weeks',
      image: '/images/crossfit-moms.jpg',
      features: ['3x weekly coached sessions', 'Nutrition guidance', 'Community support group'],
      category: 'crossfit'
    },
    {
      title: 'Mountain Mamas Hiking',
      subtitle: 'Connect with nature and other moms',
      description: 'Weekly hiking adventures for moms who want to explore the outdoors, build endurance, and create lasting friendships.',
      price: 49,
      duration: 'Ongoing',
      image: '/images/hiking-moms.jpg',
      features: ['Weekly guided hikes', 'Trail safety training', 'Childcare coordination'],
      category: 'hiking'
    },
    {
      title: 'Mindset Mastery',
      subtitle: 'Transform your mindset, transform your life',
      description: 'A comprehensive mindset coaching program that helps moms overcome limiting beliefs, build confidence, and create the life they truly want.',
      price: 299,
      duration: '12 weeks',
      image: '/images/mindset-coaching.jpg',
      features: ['Weekly group coaching', '1:1 coaching calls', 'Daily mindset practices'],
      category: 'mindset'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'The Strong Moms community changed my life. I went from barely being able to do a push-up to completing my first CrossFit competition!',
      program: 'CrossFit for Moms',
      rating: 5
    },
    {
      name: 'Jessica L.',
      quote: 'As a new mom, I was struggling with my identity. The mindset coaching helped me rediscover my strength and confidence.',
      program: 'Mindset Mastery',
      rating: 5
    },
    {
      name: 'Maria R.',
      quote: 'The hiking group is my favorite part of the week. Fresh air, great conversation, and beautiful views. It\'s like therapy with friends!',
      program: 'Mountain Mamas Hiking',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - near-black bg + high-contrast text for readability */}
      <section className="relative hero-dark overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/logo.png"
                alt="The Strong Moms"
                className="h-14 sm:h-16 md:h-20 w-auto mb-8 object-contain"
              />
              <h1 className="hero-headline text-4xl md:text-6xl font-display leading-tight mb-6">
                For every mom who wants to{' '}
                <span className="hero-headline-accent">feel strong again</span>
              </h1>
              <p className="hero-text text-xl leading-relaxed mb-8 max-w-xl">
                Join our community of empowered moms who are building strength, confidence, 
                and lasting friendships through CrossFit, hiking, and mindset coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/join" className="btn-cta-dark btn-with-icon text-lg px-8 py-4">
                  Join the Strong Moms
                  <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
                </Link>
                <button type="button" className="btn-cta-dark btn-with-icon text-lg px-8 py-4">
                  <Play className="w-5 h-5 shrink-0" aria-hidden />
                  Watch Our Story
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-black/40 rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="text-center">
                  <h3 className="hero-headline text-2xl font-bold mb-4">Join Our Community</h3>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-[#fce7f3] mr-2 shrink-0" aria-hidden />
                            <span className="hero-headline text-2xl font-bold">{stat.number}</span>
                          </div>
                          <p className="hero-text text-sm font-medium">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="https://instagram.com/TheStrongMoms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://facebook.com/TheStrongMoms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://tiktok.com/@thestrong_moms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="TikTok">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 section-programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              Our Signature Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for moms who want to build strength, confidence, and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-programs p-6"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl">💪</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-primary-600 font-semibold mb-3">{program.subtitle}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">${program.price}</span>
                  <span className="text-sm text-gray-500">{program.duration}</span>
                </div>
                <Link to={`/programs#${program.category}`} className="btn-primary w-full text-center">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
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
                key={index}
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

      {/* CTA Section - same dark bg as hero for readable buttons */}
      <section className="py-20 hero-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="hero-headline text-4xl font-bold font-display mb-6">
              Ready to Join the Strong Moms?
            </h2>
            <p className="hero-text text-xl mb-8">
              Start your journey to strength, confidence, and community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join" className="btn-cta-dark btn-with-icon text-lg px-8 py-4">
                Join Now
                <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
              </Link>
              <Link to="/community" className="btn-outline-hero text-lg px-8 py-4">
                Meet the Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 