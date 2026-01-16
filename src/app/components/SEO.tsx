import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEO({
  title = 'Parenting Tips & Baby Care Guide - Expert Advice for Parents',
  description = 'Comprehensive parenting tips, baby care guides, and kids activities. Expert advice for parents of babies, toddlers, and children. Learn about nutrition, development, education, and more.',
  keywords = 'parenting tips, baby care, kids activities, child development, parenting advice, baby feeding, toddler care, children education, parenting guide, family tips',
  ogImage = 'https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?w=1200&h=630&fit=crop',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}: SEOProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonical = canonicalUrl || currentUrl;

  // Default organization structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ParentCare Hub',
    description: 'Your trusted source for parenting tips and baby care advice',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
    },
    sameAs: [
      'https://facebook.com/parentcarehub',
      'https://twitter.com/parentcarehub',
      'https://instagram.com/parentcarehub',
    ],
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ParentCare Hub" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@parentcarehub" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="ParentCare Hub" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
