import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Accessibility as AccessibilityIcon, ArrowLeft } from 'lucide-react';

const Accessibility = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="hero-dark hero-auth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-auth-content"
        >
          <AccessibilityIcon className="w-16 h-16 text-primary-300 mx-auto mb-4" aria-hidden />
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-display">
            Accessibility
          </h1>
          <p className="hero-text text-lg max-w-2xl mx-auto">
            Our commitment to an inclusive experience for everyone
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 max-w-none">
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">Our Commitment</h2>
            <p>
              The Strong Moms is committed to ensuring our website and services are accessible to people of all abilities. We believe every mom deserves access to our community, programs, and resources, and we work to align with widely accepted accessibility standards.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">Standards and Guidelines</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, where practicable. Our efforts include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Perceivable:</strong> Text alternatives for images, captions where applicable, and content that can be presented in different ways (e.g., resizable text, sufficient color contrast).</li>
              <li><strong>Operable:</strong> Navigation via keyboard, no keyboard traps, clear focus indicators, and enough time to read and use content.</li>
              <li><strong>Understandable:</strong> Readable text, predictable navigation and behavior, and input assistance (e.g., labels, error messages).</li>
              <li><strong>Robust:</strong> Compatibility with assistive technologies and current user agents where possible.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">What We Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use semantic HTML and ARIA where appropriate to support screen readers and other assistive technologies.</li>
              <li>Maintain sufficient color contrast between text and backgrounds.</li>
              <li>Support keyboard navigation and visible focus states.</li>
              <li>Provide clear headings, labels, and link text.</li>
              <li>Respect user preferences such as reduced motion where we can.</li>
              <li>Test our site with accessibility in mind and address issues as we learn of them.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">In-Person Programs</h2>
            <p>
              For our in-person programs (e.g., CrossFit, hiking, events), we strive to accommodate participants with disabilities where feasible. If you need an accommodation to participate, please contact us in advance so we can discuss options.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">Feedback and Assistance</h2>
            <p>
              We welcome your feedback. If you encounter an accessibility barrier on our website or have a suggestion for improvement, please contact us at{' '}
              <a href="mailto:hello@strongmoms.com" className="text-primary-600 hover:text-primary-700 font-medium">hello@strongmoms.com</a>
              {' '}or through our <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact</Link> page. We will do our best to respond and, where possible, provide the information or service in an alternative format or manner.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">Third-Party Content</h2>
            <p>
              Some content on our site may be provided by third parties (e.g., embedded social media, videos). We do not control the accessibility of such content but encourage providers to maintain accessible experiences.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">Continuous Improvement</h2>
            <p>
              Accessibility is an ongoing effort. We review our site and practices periodically and update this statement as we make improvements.
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

export default Accessibility;
