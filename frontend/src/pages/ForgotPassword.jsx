import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { authAPI } from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      await authAPI.forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              Forgot Password
            </h1>
            <p className="hero-text text-lg sm:text-xl max-w-2xl mx-auto">
              Enter your email and we'll send you reset instructions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            {success ? (
              <>
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-green-100 p-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4 text-center">
                  Check your email
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  If an account exists with <strong>{email}</strong>, you'll receive reset instructions shortly.
                </p>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg btn-primary text-white no-underline"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                  Back to Login
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-8 text-center">
                  Reset your password
                </h2>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" />
                    <span className="text-red-700 text-sm">{error}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary btn-with-icon text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white shrink-0"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send reset link
                        <ArrowLeft className="w-5 h-5 shrink-0 rotate-180" aria-hidden />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                    Back to Login
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
