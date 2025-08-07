import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const hashtags = [
    '#StrongMomTribe',
    '#MomCommunity',
    '#RealLifeStrongMom',
    '#MomInfluencer',
    '#WellnessLifestyle',
    '#EmpoweredMoms',
    '#CrossFitMom',
    '#HealthyMomLife',
    '#DisciplineOverMotivation',
    '#MindsetMatters'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">The Strong Moms</h3>
                <p className="text-sm text-gray-300">For every mom who wants to feel strong again</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering moms through strength training, CrossFit, hiking, and mindset coaching. 
              Join our community of strong, supportive women who lift each other up.
            </p>
            
            {/* Hashtags */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Join the conversation:</h4>
              <div className="flex flex-wrap gap-2">
                {hashtags.slice(0, 6).map((hashtag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full hover:bg-primary-600 transition-colors duration-200 cursor-pointer"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">hello@strongmoms.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">Fitness Studio, Downtown</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/strongmoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/strongmoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/strongmoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-gray-400 text-sm">
                © {currentYear} The Strong Moms. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Made with 💛 in Lehi, UT
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 