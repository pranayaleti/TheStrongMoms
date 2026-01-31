import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Privacy = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="hero-dark hero-auth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-auth-content"
        >
          <Shield className="w-16 h-16 text-primary-300 mx-auto mb-4" aria-hidden />
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-display">
            Privacy Policy
          </h1>
          <p className="hero-text text-lg max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 max-w-none">
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">1. Introduction</h2>
            <p>
              The Strong Moms (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, programs, and community services. Please read this policy carefully.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account information:</strong> Name, email address, password (encrypted), and fitness goals when you register or join.</li>
              <li><strong>Profile information:</strong> Optional details you provide for your profile and community participation.</li>
              <li><strong>Usage data:</strong> How you use our site (pages visited, features used) to improve our services.</li>
              <li><strong>Communications:</strong> Messages you send via contact forms, feedback, or support requests.</li>
              <li><strong>Device information:</strong> Browser type, IP address, and similar technical data for security and analytics.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our programs and community features.</li>
              <li>Process registrations, bookings, and account management.</li>
              <li>Send important updates (e.g., schedule changes, program information) and, with your consent, marketing.</li>
              <li>Respond to your inquiries and support requests.</li>
              <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
              <li>Analyze usage to improve our website and user experience.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share information only: (a) with service providers who assist our operations (under strict confidentiality); (b) when required by law or to protect our rights; (c) with your consent. We do not share your data with third parties for their marketing.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">5. Data Security</h2>
            <p>
              We use industry-standard measures to protect your data, including encryption, secure servers, and access controls. No method of transmission over the internet is 100% secure; we encourage strong passwords and prompt reporting of any suspected breach.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">6. Your Rights and Choices</h2>
            <p>
              You may access, correct, or delete your account data through your account settings or by contacting us. You can opt out of marketing emails at any time. Depending on your location, you may have additional rights (e.g., data portability, restriction of processing).
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies for essential site function, preferences, and analytics. You can manage cookie preferences in your browser settings.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">8. Children</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can delete it.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">10. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at{' '}
              <a href="mailto:hello@strongmoms.com" className="text-primary-600 hover:text-primary-700 font-medium">hello@strongmoms.com</a>
              {' '}or via our <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact</Link> page.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 btn-cta-dark btn-with-icon text-lg px-8 py-4 no-underline"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
