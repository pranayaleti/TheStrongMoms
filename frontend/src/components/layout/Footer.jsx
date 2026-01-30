import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// Official brand SVGs (current logos, accessible)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const IconPinterest = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-4.486 1.406-4.486s-.359-.719-.359-1.782c0-1.668.969-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.012-4.869-3.414 0-5.418 2.561-5.418 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.013 11.985.013L12.017 0z" />
  </svg>
);

const socialLinks = [
  { href: 'https://instagram.com/TheStrongMoms', label: 'Instagram', Icon: IconInstagram, hoverClass: 'hover:bg-[#E4405F] hover:border-[#E4405F]' },
  { href: 'https://facebook.com/TheStrongMoms', label: 'Facebook', Icon: IconFacebook, hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
  { href: 'https://tiktok.com/@TheStrongMamas', label: 'TikTok', Icon: IconTikTok, hoverClass: 'hover:bg-[#000000] hover:border-[#00f2ea] hover:text-[#00f2ea]' },
  { href: 'https://youtube.com/@TheStrongMoms', label: 'YouTube', Icon: IconYouTube, hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]' },
  { href: 'https://pinterest.com/TheStrongMoms', label: 'Pinterest', Icon: IconPinterest, hoverClass: 'hover:bg-[#BD081C] hover:border-[#BD081C]' },
];

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
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="The Strong Moms"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
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
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact Us
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
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, Icon, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center border border-gray-700 bg-gray-800/80 text-gray-300 transition-all duration-200 ${hoverClass} hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Card - small box */}
      <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-md rounded-xl border-2 border-primary-500/80 bg-gray-800/90 px-6 py-5 shadow-lg">
            <h3 className="text-lg font-bold font-display text-primary-400 mb-1">
              Got ideas? We're listening!
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              Share feedback to help us build better experiences for our Strong Moms community.
            </p>
            <Link
              to="/contact#feedback"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
            >
              Share feedback
            </Link>
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
              <p className="text-gray-400 text-sm">
                Designed. Developed. Deployed by{' '}
                <a
                  href="https://ondosoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200 font-medium"
                >
                  OndoSoft
                </a>
                .
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