import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading:
      "What’s the difference between design-only, dev-only, and design + development?",
    description:
      "Hourly pricing is flexible, billing only for hours used. Fixed pricing offers a set project cost for more predictability.",
  },
  {
    heading: "What’s the difference between hourly and fixed pricing?",
    description:
      "Timing depends on project scope; typically, smaller projects take a few weeks, while larger ones may take 1-3 months.",
  },
  {
    heading: "How do I determine the right pricing plan for my project?",
    description:
      "Yes, we offer post-launch support to ensure smooth performance and assist with any adjustments.",
  },
  {
    heading: "How long does it take to complete a project?",
    description:
      "Absolutely! We can refine, rebrand, or further develop any existing designs.",
  },
  {
    heading: "Do you offer post-launch support?",
    description:
      "Each project includes design, development options, testing, and launch support, tailored to your needs.",
  },
  {
    heading: "What’s included in a web or mobile app project?",
    description:
      "Yes, projects generally start at $8,000, but we’ll discuss based on project specifics.",
  },
  {
    heading: "Can I modify my project scope after starting?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },

  {
    heading: "What deliverables should I expect for motion graphics?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
  {
    heading: "Can you help us set up a Design System and Component Library?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
  {
    heading: "What does a UX Audit & Consultation involve?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
  {
    heading: "What’s included in a 3D Animation & Rendering project?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
  {
    heading: "Do you work with existing designs or wireframes?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
  {
    heading: "How do we get started?",
    description:
      "Start by scheduling a consultation, and we’ll walk you through the entire process.",
  },
];

export default function FaqsAccordion() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50, // Start from below
            paddingTop: "5%",
            paddingBottom: "5%",
            opacity: isMobile ? 1 : 0, // Start fully transparent
            filter: isMobile ? "blur(0px)" : "blur(5px)", // Initial blur effect
          },
          {
            y: 0, // Move to its original position
            paddingTop: "0%",
            paddingBottom: "0%",
            opacity: 1, // Fade in to fully visible
            filter: "blur(0px)", // Remove blur
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 0%" : "top 90%", // Adjust start point for mobile
              end: isMobile ? "botton 0%" : "top 30%", // Adjust end point for mobile
              toggleActions: "restart none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div
        className=""
        ref={(el) => {
          if (el) cardsRef.current[0] = el;
        }}
      >
        {" "}
        <Accordion
          variant="splitted"
          className="mb-0"
          // key={index} // Move key here for proper rendering
        >
          {data.map((item, index) => {
            return (
              <AccordionItem
                key={item.heading}
                aria-label={item.heading}
                title={item.heading}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <p className="text-3xl text-black rotate-45 ">+</p>
                  ) : (
                    <p className="text-3xl text-black ">+</p>
                  )
                }
                className="shadow-none border-1 rounded-2xl mt-4 items-center"
              >
                {item.description}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
