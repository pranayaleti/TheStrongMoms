import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Target, Trophy, Users } from 'lucide-react';

const Dashboard = () => {
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
              Dashboard
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Track your progress, connect with your community, and achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card p-12">
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
                Dashboard Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're building an amazing dashboard where you can track your progress, 
                connect with other moms, and celebrate your achievements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Target className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Goal Tracking</h3>
                  <p className="text-sm text-gray-600">Set and track your fitness goals</p>
                </div>
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Achievements</h3>
                  <p className="text-sm text-gray-600">Earn badges and celebrate wins</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Connect with other Strong Moms</p>
                </div>
              </div>
              <Link to="/join" className="btn-primary text-lg px-8 py-4">
                Join to Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 