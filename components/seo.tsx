import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UI Pirate by Vishal Anand",
            url: "https://yourwebsite.com",
            logo: "https://yourwebsite.com/logo.png",
            description:
              "Enterprise UI/UX design expert specializing in AI-driven SaaS applications.",
            sameAs: [
              "https://www.linkedin.com/in/vishal-a-51bb49110",

              "https://www.behance.net/vishalanand-UI-UX",
              "hhttps://www.behance.net/vishalanand-UI-UX",
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
              contactType: "UX-Design",
              email: "vishalanand072@gmail.com",
            },
          }),
        }}
      />
    </Head>
  );
};

export default Seo;
