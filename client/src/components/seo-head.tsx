import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEOHead({ 
  title = "Synabl - Intelligence Synergized | AI & Data Consulting",
  description = "Synabl provides cutting-edge AI and data consulting services to transform your business intelligence. Expert consulting for data analytics, machine learning, and AI implementation.",
  keywords = "AI consulting, data analytics, machine learning, business intelligence, data science, artificial intelligence",
  canonical = "/"
}: SEOHeadProps) {
  const fullTitle = title.includes("Synabl") ? title : `${title} | Synabl`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Synabl" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Synabl" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://synabl.com${canonical}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Synabl",
          "description": "AI and Data Consulting Services - Intelligence Synergized",
          "url": "https://synabl.com",
          "logo": "https://synabl.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@synabl.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Drive",
            "addressLocality": "Tech District",
            "addressRegion": "SF",
            "postalCode": "94107",
            "addressCountry": "US"
          },
          "service": [
            {
              "@type": "Service",
              "name": "AI Consulting",
              "description": "Strategic AI implementation and consulting services"
            },
            {
              "@type": "Service", 
              "name": "Data Analytics",
              "description": "Advanced data analytics and visualization solutions"
            },
            {
              "@type": "Service",
              "name": "Machine Learning",
              "description": "Custom machine learning model development and deployment"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
