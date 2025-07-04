import Head from "next/head";

const Seo = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UI Pirate by Vishal Anand",
    url: "https://uipirate.com",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1731044026/newfavicon_ibmap0.svg",
    description:
      "Enterprise UI/UX design expert specializing in AI-driven SaaS applications and modern digital experiences.",
    sameAs: [
      "https://www.linkedin.com/in/vishal-a-51bb49110",
      "https://www.behance.net/vishalanand-UI-UX",
      "https://dribbble.com/vishalanandUIUX",
      "https://maps.app.goo.gl/GV82USvoBF7YGsZm7",
    ],
    founder: {
      "@type": "Person",
      name: "Vishal Anand",
      jobTitle: "Founder & Lead UI/UX Designer",
      url: "https://www.linkedin.com/company/ui-pirate-by-vishal-anand",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919708636151",
      contactType: "customer service",
      email: "vishalanand072@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "UI Design",
      "UX Design",
      "SaaS Design",
      "AI Application Design",
      "Enterprise Software Design",
      "Mobile App Design",
      "Web Design",
      "Design Systems",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    provider: {
      "@type": "Organization",
      name: "UI Pirate by Vishal Anand",
      url: "https://uipirate.com",
    },
    description:
      "Professional UI/UX design services for SaaS and enterprise applications",
    serviceType: ["UI Design", "UX Design", "SaaS Design", "Mobile App Design"],
    areaServed: "Worldwide",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vishal Anand",
    jobTitle: "UI/UX Designer",
    worksFor: {
      "@type": "Organization",
      name: "UI Pirate",
    },
    url: "https://uipirate.com",
    sameAs: [
      "https://www.linkedin.com/in/vishal-a-51bb49110",
      "https://www.behance.net/vishalanand-UI-UX",
      "https://dribbble.com/vishalanandUIUX",
    ],
    knowsAbout: [
      "UI Design",
      "UX Design",
      "SaaS Design",
      "AI Application Design",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
    </Head>
  );
};

export default Seo;
