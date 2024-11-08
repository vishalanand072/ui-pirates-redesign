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
    textHover: "#fff",
  },
  {
    heading: "20+",
    subtitle1: "Enterprise",
    subtitle2: "Clients",
    hoverBg: "#8EF1F1E5",
    textHover: "#000",
  },
  {
    heading: "20+",
    subtitle1: "Industries",
    subtitle2: "Served",
    hoverBg: "#b0ddcae6",
    textHover: "#000",
  },
  {
    heading: "8+",
    subtitle1: " Years of",
    subtitle2: "Experience",
    hoverBg: "#f4e342e6",
    textHover: "#000",
  },
];

const AboutCardAnimation = () => {
  const isMobile = window.innerWidth <= 768;

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const letterRefs = useRef<Array<HTMLSpanElement[]>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    cardRefs.current.forEach((cardAbout, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? "-30%" : "30%";

      gsap.fromTo(
        cardAbout,
        {
          x: direction,
          rotation: isEven ? -15 : 15,
          opacity: 0.2,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: cardAbout,
            start: isMobile ? "top 120%" : "top 99%",
            end: isMobile ? "bottom 100%" : "bottom 100%",
            scrub: 1.5,
          },
          ease: "power2.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);

    if (letterRefs.current[index]) {
      gsap.fromTo(
        letterRefs.current[index],
        { y: "100%", opacity: 1 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);

    // if (letterRefs.current[index]) {
    //   gsap.fromTo(
    //     letterRefs.current[index],
    //     { y: "-10%", opacity: 1 },
    //     {
    //       y: "0%", // Move back down
    //       opacity: 1, // Fade out
    //       duration: 1,
    //       stagger: 0.2,
    //       ease: "power3.in",
    //     }
    //   );
    // }
  };

  return (
    <div className="container mx-auto px-4 pb-20 max-md:pb-20 max-md:pt-12">
      <div className="grid grid-cols-2 gap-6 lg:mt-60 max-lg:grid-cols-1">
        {data.map((item, index) => (
          <div
            key={index}
            className={`bg-[#E1EAEA] rounded-[40px] pt-4 pb-12 px-12 max-md:px-6 w-full h-[350px] max-md:h-[300px] ${
              index % 2 === 0 ? "lg:-mt-32" : "lg:mt-0"
            } hover:ease-in-out`}
            style={{
              transform: index % 2 === 0 ? "rotate(-15deg)" : "rotate(15deg)",
              backgroundColor:
                hoveredIndex === index ? item.hoverBg : "#E1EAEA",
              transition: "background-color 0.6s ease",
              color: hoveredIndex === index ? item.textHover : "#000",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            ref={(el) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
          >
            <div>
              <p className="text-8xl max-md:text-7xl mb-4 lg:pt-4 overflow-hidden font-[500] max-md:font-[500]">
                {item.heading.split("").map((letter, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      if (!letterRefs.current[index])
                        letterRefs.current[index] = [];
                      if (el) letterRefs.current[index][i] = el;
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </span>
                ))}
              </p>
              <p className="text-3xl max-md:text-2xl font-semibold flex flex-row items-end justify-end pt-20 text-right max-md:pt-28 uppercase">
                {item.subtitle1}
                <br />
                {item.subtitle2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCardAnimation;
