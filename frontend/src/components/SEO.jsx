import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getSiteUrl, ROUTE_META, OG_IMAGE_DEFAULT, SITE_NAME, getOrganizationJsonLd } from '../config/seo';
import { usePageSEO } from '../contexts/PageSEOContext';

const JSON_LD_SCRIPT_ID = 'seo-json-ld';

function setMeta(nameOrProp, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  if (el.getAttribute('content') !== content) el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  if (el.getAttribute('href') !== href) el.setAttribute('href', href);
}

function setJsonLd(data) {
  const existing = document.getElementById(JSON_LD_SCRIPT_ID);
  if (existing) existing.remove();
  if (!data || (Array.isArray(data) && data.length === 0)) return;
  const script = document.createElement('script');
  script.id = JSON_LD_SCRIPT_ID;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(Array.isArray(data) ? data : data);
  document.head.appendChild(script);
}

/**
 * Updates document head for SEO and AI discoverability: title, meta description,
 * Open Graph, Twitter Card, canonical, robots, and JSON-LD.
 * Static routes use ROUTE_META; dynamic pages (e.g. BlogPost) set meta via usePageSEO().
 */
export default function SEO({
  title: titleProp,
  description: descriptionProp,
  keywords: keywordsProp,
  image: imageProp,
  canonical: canonicalProp,
  noindex: noindexProp,
  jsonLd: jsonLdProp,
  type = 'website',
}) {
  const location = useLocation();
  const pathname = location.pathname;
  const { meta: pageMeta } = usePageSEO();
  const siteUrl = getSiteUrl();
  const canonicalUrl = canonicalProp ?? pageMeta?.canonical ?? (siteUrl ? `${siteUrl}${pathname}` : null);
  const routeMeta = ROUTE_META[pathname];
  const resolvedTitle = titleProp ?? pageMeta?.title ?? routeMeta?.title ?? SITE_NAME;
  const resolvedDescription = descriptionProp ?? pageMeta?.description ?? routeMeta?.description ?? '';
  const resolvedKeywords = keywordsProp ?? pageMeta?.keywords ?? routeMeta?.keywords ?? '';
  const resolvedImage = imageProp ?? pageMeta?.image ?? (siteUrl ? `${siteUrl}${OG_IMAGE_DEFAULT}` : OG_IMAGE_DEFAULT);
  const resolvedNoindex = noindexProp ?? pageMeta?.noindex ?? routeMeta?.noindex ?? false;
  const jsonLd = jsonLdProp ?? pageMeta?.jsonLd;
  const jsonLdRef = useRef(null);

  useEffect(() => {
    document.title = resolvedTitle;

    setMeta('description', resolvedDescription);
    if (resolvedKeywords) setMeta('keywords', resolvedKeywords);

    setMeta('og:title', resolvedTitle, true);
    setMeta('og:description', resolvedDescription, true);
    setMeta('og:type', type, true);
    setMeta('og:image', resolvedImage.startsWith('http') ? resolvedImage : (siteUrl ? `${siteUrl}${resolvedImage}` : resolvedImage), true);
    if (canonicalUrl) setMeta('og:url', canonicalUrl, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_US', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', resolvedTitle);
    setMeta('twitter:description', resolvedDescription);
    setMeta('twitter:image', resolvedImage.startsWith('http') ? resolvedImage : (siteUrl ? `${siteUrl}${resolvedImage}` : resolvedImage));

    setCanonical(canonicalUrl);

    if (resolvedNoindex) setMeta('robots', 'noindex, nofollow');
    else setMeta('robots', 'index, follow');

    const org = getOrganizationJsonLd(siteUrl);
    const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const ld = [org, ...extra];
    const ldKey = JSON.stringify(ld);
    if (ldKey !== jsonLdRef.current) {
      jsonLdRef.current = ldKey;
      setJsonLd(ld);
    }
  }, [
    resolvedTitle,
    resolvedDescription,
    resolvedKeywords,
    resolvedImage,
    canonicalUrl,
    resolvedNoindex,
    type,
    siteUrl,
    jsonLd,
  ]);

  return null;
}
