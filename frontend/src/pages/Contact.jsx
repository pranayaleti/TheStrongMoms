import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Feedback',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submit; replace with API call when backend is ready
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Feedback', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - same theme as Login */}
      <section className="hero-dark hero-auth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-auth-content"
          >
            <img
              src="/logo.png"
              alt="The Strong Moms"
              className="h-16 sm:h-20 w-auto mx-auto mb-6 object-contain"
            />
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">
              Contact Us
            </h1>
            <p className="hero-text text-lg sm:text-xl max-w-2xl mx-auto">
              Get in touch or share feedback—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-900 font-display">Get in touch</h2>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:hello@strongmoms.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    hello@strongmoms.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Fitness Studio, Downtown Lehi, UT</p>
                </div>
              </div>
            </motion.div>

            {/* Feedback / Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary-500" />
                  <h2 id="feedback" className="text-xl font-bold text-gray-900 font-display">
                    Share feedback
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Got ideas? We're listening. Send us your feedback so we can build better experiences for our Strong Moms community.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-lg bg-primary-50 border border-primary-200 p-6 text-center"
                  >
                    <p className="text-primary-700 font-medium">Thanks for reaching out!</p>
                    <p className="text-gray-600 text-sm mt-1">
                      We'll get back to you as soon as we can.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="Feedback">Feedback</option>
                        <option value="General">General inquiry</option>
                        <option value="Programs">Programs</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                        placeholder="Your message or feedback..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-70 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
