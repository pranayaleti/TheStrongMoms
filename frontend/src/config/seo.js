/**
 * SEO config: site URL, default meta, and per-route meta for Google & AI discoverability.
 * VITE_SITE_URL should be set in production (e.g. https://thestrongmoms.com).
 */
export const SITE_NAME = 'The Strong Moms';
export const DEFAULT_DESCRIPTION =
  'The Strong Moms – fitness, community, and mindset for moms worldwide. CrossFit, strength, hiking, and support.';
export const DEFAULT_KEYWORDS =
  'mom fitness, CrossFit for moms, mom community, strength training, hiking for moms, mindset coaching, women fitness, strong moms';
export const TWITTER_HANDLE = '';
export const LOCALE = 'en_US';
export const OG_IMAGE_DEFAULT = '/logo.png';

/** Base URL for canonical and OG. Use env in build or window.origin at runtime. */
export function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) return import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return '';
}

export const ROUTE_META = {
  '/': {
    title: 'The Strong Moms – Fitness, Community & Mindset for Moms',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  },
  '/programs': {
    title: 'Programs – The Strong Moms',
    description:
      'Fitness and mindset programs for moms: CrossFit, hiking, mindset coaching. Join programs designed for busy moms worldwide.',
    keywords: 'mom fitness programs, CrossFit for moms, hiking group, mindset coaching, mom workouts',
  },
  '/community': {
    title: 'Community – The Strong Moms',
    description: 'Join a supportive community of strong moms. Challenges, events, and connections worldwide.',
    keywords: 'mom community, fitness community, strong moms community',
  },
  '/blog': {
    title: 'Blog – The Strong Moms',
    description: 'Fitness tips, mindset advice, and stories from The Strong Moms. Read our latest articles.',
    keywords: 'mom fitness blog, fitness tips for moms, mindset for moms',
  },
  '/social': {
    title: 'Social – The Strong Moms',
    description: 'Connect with The Strong Moms on social media. Follow us for daily inspiration and community.',
    keywords: 'The Strong Moms social, mom fitness Instagram, community',
  },
  '/join': {
    title: 'Join Us – The Strong Moms',
    description: 'Join The Strong Moms: fitness, community, and mindset programs for moms. Start your journey today.',
    keywords: 'join The Strong Moms, mom fitness membership, sign up',
  },
  '/contact': {
    title: 'Contact – The Strong Moms',
    description: 'Get in touch with The Strong Moms. Questions, feedback, or partnership – we’d love to hear from you.',
    keywords: 'contact The Strong Moms, support, feedback',
  },
  '/login': {
    title: 'Login – The Strong Moms',
    description: 'Log in to your Strong Moms account.',
    keywords: '',
  },
  '/register': {
    title: 'Register – The Strong Moms',
    description: 'Create your Strong Moms account and join our community.',
    keywords: '',
  },
  '/forgot-password': {
    title: 'Forgot Password – The Strong Moms',
    description: 'Reset your Strong Moms account password.',
    keywords: '',
  },
  '/dashboard': {
    title: 'Dashboard – The Strong Moms',
    description: 'Your Strong Moms dashboard. Programs, progress, and community.',
    keywords: '',
    noindex: true,
  },
  '/privacy': {
    title: 'Privacy Policy – The Strong Moms',
    description: 'Privacy policy for The Strong Moms. How we collect, use, and protect your data.',
    keywords: 'privacy policy, data protection, The Strong Moms',
  },
  '/terms': {
    title: 'Terms of Use – The Strong Moms',
    description: 'Terms of use for The Strong Moms website and services.',
    keywords: 'terms of use, legal, The Strong Moms',
  },
  '/licensing': {
    title: 'Licensing – The Strong Moms',
    description: 'Licensing and brand usage information for The Strong Moms.',
    keywords: '',
  },
  '/accessibility': {
    title: 'Accessibility – The Strong Moms',
    description: 'Accessibility statement for The Strong Moms. We are committed to an inclusive experience.',
    keywords: 'accessibility, inclusive, The Strong Moms',
  },
  '/sitemap': {
    title: 'Site Map – The Strong Moms',
    description: 'Site map of all pages on The Strong Moms website.',
    keywords: 'sitemap, site map, The Strong Moms',
  },
};

/** Build JSON-LD for Organization (used on all pages). */
export function getOrganizationJsonLd(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl || undefined,
    description: DEFAULT_DESCRIPTION,
    logo: siteUrl ? `${siteUrl}${OG_IMAGE_DEFAULT}` : undefined,
  };
}

/** Build JSON-LD for WebSite (homepage / global). */
export function getWebSiteJsonLd(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl || undefined,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@type': 'Organization', name: SITE_NAME },
    inLanguage: 'en',
  };
}

/** Build JSON-LD for Article (blog post). */
export function getArticleJsonLd({ siteUrl, title, description, image, datePublished, dateModified, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description || undefined,
    image: image || undefined,
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: author ? { '@type': 'Person', name: author } : undefined,
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: siteUrl ? { '@type': 'WebPage', '@id': siteUrl } : undefined,
  };
}
