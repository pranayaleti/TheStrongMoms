import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Star, ArrowRight, Filter, Search } from 'lucide-react';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Programs', icon: '🏋️' },
    { id: 'crossfit', name: 'CrossFit', icon: '💪' },
    { id: 'hiking', name: 'Hiking', icon: '🏔️' },
    { id: 'mindset', name: 'Mindset', icon: '🧠' },
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPrograms = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/programs');
        const data = await response.json();
        setPrograms(data.programs);
        setFilteredPrograms(data.programs);
      } catch (error) {
        // Fallback to mock data
        const mockPrograms = [
          {
            id: 1,
            title: "CrossFit for Moms",
            subtitle: "Build strength, confidence, and community",
            description: "Our signature CrossFit program designed specifically for moms. Focus on functional fitness, proper form, and building a supportive community of strong women.",
            category: "crossfit",
            duration: "8 weeks",
            difficulty: "All levels",
            price: 199,
            features: [
              "3x weekly coached sessions",
              "Nutrition guidance",
              "Community support group",
              "Progress tracking",
              "Postpartum modifications available"
            ],
            instructor: "Coach Jessica",
            schedule: "Mon, Wed, Fri 6:00 AM & 6:00 PM",
            maxParticipants: 12,
            rating: 4.9,
            reviews: 45
          },
          {
            id: 2,
            title: "Mountain Mamas Hiking",
            subtitle: "Connect with nature and other moms",
            description: "Weekly hiking adventures for moms who want to explore the outdoors, build endurance, and create lasting friendships. All fitness levels welcome!",
            category: "hiking",
            duration: "Ongoing",
            difficulty: "Beginner to Advanced",
            price: 49,
            features: [
              "Weekly guided hikes",
              "Trail safety training",
              "Childcare coordination",
              "Beautiful photo opportunities",
              "Seasonal challenges"
            ],
            instructor: "Trail Guide Maria",
            schedule: "Saturdays 8:00 AM",
            maxParticipants: 20,
            rating: 4.8,
            reviews: 32
          },
          {
            id: 3,
            title: "Mindset Mastery",
            subtitle: "Transform your mindset, transform your life",
            description: "A comprehensive mindset coaching program that helps moms overcome limiting beliefs, build confidence, and create the life they truly want.",
            category: "mindset",
            duration: "12 weeks",
            difficulty: "All levels",
            price: 299,
            features: [
              "Weekly group coaching sessions",
              "1:1 coaching calls",
              "Daily mindset practices",
              "Private community access",
              "Lifetime access to resources"
            ],
            instructor: "Mindset Coach Amanda",
            schedule: "Tuesdays 7:00 PM (Group), Flexible (1:1)",
            maxParticipants: 15,
            rating: 5.0,
            reviews: 28
          }
        ];
        setPrograms(mockPrograms);
        setFilteredPrograms(mockPrograms);
      }
      setLoading(false);
    };

    fetchPrograms();
  }, []);

  useEffect(() => {
    let filtered = programs;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(program => program.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPrograms(filtered);
  }, [programs, selectedCategory, searchTerm]);

  const handleBookProgram = async (programId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/programs/${programId}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Booking feature coming soon! 🎉');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading programs...</p>
        </div>
      </div>
    );
  }

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
              Our Programs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the program that fits your goals and lifestyle. All programs are designed 
              specifically for moms who want to build strength, confidence, and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  {/* Program Image */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-6xl">
                      {program.category === 'crossfit' && '💪'}
                      {program.category === 'hiking' && '🏔️'}
                      {program.category === 'mindset' && '🧠'}
                    </div>
                  </div>

                  {/* Program Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        {program.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-500 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{program.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({program.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{program.subtitle}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>

                    {/* Program Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Max {program.maxParticipants} participants</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                      <ul className="space-y-1">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${program.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/ {program.duration}</span>
                      </div>
                      <button
                        onClick={() => handleBookProgram(program.id)}
                        className="btn-primary"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
              Not sure which program is right for you?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation to discuss your goals and find the perfect program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join" className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/community" className="btn-outline text-lg px-8 py-4">
                Talk to Our Moms
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs; 