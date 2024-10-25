"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading: "50+",
    subtitle1: "Projects",
    subtitle2: "Completed",
    hoverBg: "#dd3500e6",
    textHover: "#8EF1F1E5",
  },
  {
    heading: "20+",
    subtitle1: "Enterprise",
    subtitle2: "Clients",
    hoverBg: "#8EF1F1E5",
    textHover: "#b0ddcae6",
  },
  {
    heading: "20+",
    subtitle1: "Industries",
    subtitle2: "Served",
    hoverBg: "#b0ddcae6",
    textHover: "#f4e342e6",
  },
  {
    heading: "8+",
    subtitle1: " Years of",
    subtitle2: "Experience",
    hoverBg: "#f4e342e6",
    textHover: "#dd3500e6",
  },
];

const AboutCardAnimation = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]); // To store multiple refs for each card
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    cardRefs.current.forEach((cardAbout, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? "-15%" : "15%"; // Even images come from left, odd from right

      gsap.fromTo(
        cardAbout, // Apply animation to the entire card
        {
          x: direction, // Even cards move from left, odd cards from right
          rotation: isEven ? -15 : 15, // Initial rotation based on index
          opacity: 0, // Start with opacity 0
        },
        {
          x: 0, // Move to original position
          rotation: 0, // Rotate to 0
          opacity: 1, // Fade in
          scrollTrigger: {
            trigger: cardAbout, // Trigger animation when each card enters the viewport
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1, // Smooth animation based on scroll
          },
          ease: "power2.out", // Smooth easing
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 max-md:py-20">
      <div className="grid grid-cols-2 gap-6 lg:mt-60 max-lg:grid-cols-1">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? `bg-[#E1EAEA] rounded-[40px] py-12 px-12 w-full h-[400px]  max-md:h-[300px]  lg:-mt-32 hover:bg-[${item.hoverBg}] hover:text-white hover:ease-in-out`
                  : `bg-[#E1EAEA] rounded-[40px]  py-12 px-12 w-full h-[400px] max-md:h-[300px] lg:mt-0 hover:bg-[${item.hoverBg}] hover:text-white  hover:ease-in-out`
              }
              //   style={{
              //     transform: index % 2 === 0 ? "rotate(-15deg)" : "rotate(15deg)",
              //   }}

              style={{
                transform: index % 2 === 0 ? "rotate(-15deg)" : "rotate(15deg)",
                backgroundColor:
                  hoveredIndex === index ? item.hoverBg : "#E1EAEA",
                transition: "background-color 0.6s ease", // Smooth transition for background color
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)}
              // ref={(el) => (cardRefs.current[index] = el!)}

              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
            >
              <div>
                <p className="uppercase text-9xl max-md:text-7xl mb-4 hover:rotate-[360deg]">
                  {item.heading}
                </p>
                <p className="text-3xl font-semibold flex flex-row items-end justify-end pt-28 text-right max-md:pt-20 uppercase">
                  {item.subtitle1}
                  <br />
                  {item.subtitle2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCardAnimation;
