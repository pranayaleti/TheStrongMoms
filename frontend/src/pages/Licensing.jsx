import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft } from 'lucide-react';

const Licensing = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="hero-dark hero-auth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-auth-content"
        >
          <Scale className="w-16 h-16 text-primary-300 mx-auto mb-4" aria-hidden />
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-display">
            Licensing
          </h1>
          <p className="hero-text text-lg max-w-2xl mx-auto">
            Use of our brand, content, and materials
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 max-w-none">
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">1. Ownership</h2>
            <p>
              The Strong Moms name, logo, taglines, and all related branding are trademarks or service marks of The Strong Moms. All content on this website and in our programs—including but not limited to text, images, videos, workout plans, coaching materials, and design—is protected by copyright, trademark, and other intellectual property laws and is owned or licensed by The Strong Moms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">2. Permitted Use</h2>
            <p>
              You may view, download, and print content from our website for your personal, non-commercial use only, provided you do not remove any copyright or proprietary notices. Participation in our programs grants you a limited, non-exclusive license to use program materials (e.g., workout guides, mindset resources) for your personal use in connection with the program you joined.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">3. Prohibited Use</h2>
            <p>You may not, without our prior written permission:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, reproduce, or distribute our content for commercial purposes.</li>
              <li>Use our name, logo, or branding to imply endorsement or affiliation.</li>
              <li>Modify, adapt, or create derivative works from our materials.</li>
              <li>Resell, sublicense, or share program materials with non-members.</li>
              <li>Scrape, frame, or use automated tools to access or collect our content.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">4. Social Media and User Content</h2>
            <p>
              If you post content that includes our name, logo, or program references (e.g., photos, testimonials), you grant us a non-exclusive, royalty-free license to use, display, and share that content for promotional and community purposes, in accordance with our <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Policy</Link>. You represent that you have the right to grant this license and that your content does not infringe any third party rights.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">5. Third-Party Content</h2>
            <p>
              Our site may include content or links from third parties (e.g., embedded videos, partner sites). Such content is subject to the respective third party&apos;s terms and licenses. We do not claim ownership of third-party content.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">6. Licensing Inquiries</h2>
            <p>
              For partnership, media, or commercial licensing requests (e.g., use of our brand or content in your product or publication), please contact us at{' '}
              <a href="mailto:hello@strongmoms.com" className="text-primary-600 hover:text-primary-700 font-medium">hello@strongmoms.com</a>
              {' '}or via our <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact</Link> page with a clear description of your intended use.
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

export default Licensing;
