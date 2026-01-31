import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const Terms = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="hero-dark hero-auth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-auth-content"
        >
          <FileText className="w-16 h-16 text-primary-300 mx-auto mb-4" aria-hidden />
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-display">
            Terms of Use
          </h1>
          <p className="hero-text text-lg max-w-2xl mx-auto">
            Guidelines for using The Strong Moms platform
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 max-w-none">
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing or using The Strong Moms website, programs, and community (the &quot;Services&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use our Services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">2. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. By using our Services, you represent that you meet this requirement and that all information you provide is accurate.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">3. Account and Registration</h2>
            <p>
              When you create an account, you are responsible for maintaining the confidentiality of your password and for all activity under your account. You agree to notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason we deem appropriate.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">4. Use of Services</h2>
            <p>You agree to use our Services only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe any third party&apos;s rights (intellectual property, privacy, or otherwise).</li>
              <li>Harass, bully, defame, or harm other members or our staff.</li>
              <li>Distribute malware, spam, or unauthorized commercial content.</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
              <li>Use the Services in any manner that could damage, disable, or overburden our infrastructure.</li>
            </ul>
            <p>
              We foster a supportive, inclusive community. Behavior that is discriminatory, abusive, or inconsistent with our values may result in removal from programs and/or termination of access.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">5. Fitness and Health Disclaimer</h2>
            <p>
              Our programs involve physical activity. You participate at your own risk. You should consult a healthcare provider before starting any new fitness program, especially if you have health conditions or are postpartum. We are not liable for any injury or health issue arising from your participation in our programs or use of our content.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">6. Programs, Payments, and Refunds</h2>
            <p>
              Program fees, schedules, and availability are as described at the time of registration. Payment terms (e.g., one-time, subscription) will be specified at checkout. Refund and cancellation policies for specific programs will be communicated when you sign up; please review them before purchasing.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">7. Intellectual Property</h2>
            <p>
              All content on our website and in our programs (text, logos, images, videos, workouts, and other materials) is owned by The Strong Moms or our licensors. You may not copy, modify, distribute, or create derivative works without our prior written permission. See our <Link to="/licensing" className="text-primary-600 hover:text-primary-700 font-medium">Licensing</Link> page for more information.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Strong Moms and its affiliates, officers, and staff shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of our Services. Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless The Strong Moms and its affiliates from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, your violation of these Terms, or your violation of any third party rights.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">10. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will post the updated Terms on this page and update the &quot;Last updated&quot; date. Your continued use of the Services after changes constitutes acceptance. If you do not agree, you must stop using the Services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Utah, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Utah.
            </p>

            <h2 className="text-xl font-bold text-gray-900 font-display mt-8">12. Contact</h2>
            <p>
              For questions about these Terms of Use, contact us at{' '}
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

export default Terms;
