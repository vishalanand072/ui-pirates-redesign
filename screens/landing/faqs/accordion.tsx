import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading:
      "What’s the difference between design-only and design plus development?",
  },
  {
    heading: "How do I determine the right pricing plan for my project?",
  },
  {
    heading: "What is the typical turnaround time for projects?",
  },
  {
    heading: "Can I modify my project scope after starting?",
  },
  {
    heading: "What kind of support do you offer during and after the project?",
  },
  {
    heading: "Do you collaborate with clients on existing designs?",
  },
  {
    heading: "How do I get started with my project?",
  },
];

export default function FaqsAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50, // Start from below
            paddingTop: "5%",
            paddingBottom: "5%",
            opacity: 0, // Start fully transparent
            filter: "blur(5px)", // Initial blur effect
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
              start: "top 80%", // When the top of the card reaches 80% of the viewport height
              end: "top 30%",
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
        className="mb-12"
        ref={(el) => {
          if (el) cardsRef.current[0] = el;
        }}
      >
        {data.map((item, index) => {
          return (
            <Accordion
              variant="splitted"
              className="mb-4"
              key={index} // Move key here for proper rendering
            >
              <AccordionItem
                aria-label={item.heading}
                title={item.heading}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <p className="text-3xl text-black rotate-45">+</p>
                  ) : (
                    <p className="text-3xl text-black">+</p>
                  )
                }
                className="shadow-none border-1"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}
