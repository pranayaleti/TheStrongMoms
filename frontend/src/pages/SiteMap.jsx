import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowLeft } from 'lucide-react';

const siteLinks = [
  {
    title: 'Main',
    links: [
      { to: '/', label: 'Home' },
      { to: '/programs', label: 'Programs' },
      { to: '/community', label: 'Community' },
      { to: '/blog', label: 'Blog' },
      { to: '/social', label: 'Social' },
      { to: '/join', label: 'Join Us' },
      { to: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Account',
    links: [
      { to: '/login', label: 'Login' },
      { to: '/register', label: 'Register' },
      { to: '/forgot-password', label: 'Forgot Password' },
      { to: '/dashboard', label: 'Dashboard' },
    ],
  },
  {
    title: 'Legal & Information',
    links: [
      { to: '/licensing', label: 'Licensing' },
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Use' },
      { to: '/accessibility', label: 'Accessibility' },
    ],
  },
];

const SiteMap = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="hero-dark hero-auth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-auth-content"
        >
          <Map className="w-16 h-16 text-primary-300 mx-auto mb-4" aria-hidden />
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-display">
            Site Map
          </h1>
          <p className="hero-text text-lg max-w-2xl mx-auto">
            Find all pages and sections of The Strong Moms
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 max-w-none">
          <p className="text-gray-600 mb-8">
            Use the links below to navigate to any section of our website. For questions or feedback, visit our <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact</Link> page.
          </p>

          <nav className="space-y-10" aria-label="Site map">
            {siteLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-lg font-bold text-gray-900 font-display mb-4 border-b border-gray-200 pb-2">
                  {group.title}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 btn-cta-dark btn-with-icon text-lg px-8 py-4 no-underline"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default SiteMap;
