"use client"; // Ensure to use this for Next.js projects using client-side rendering

import { Button } from "@nextui-org/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading: "Xperiti",
    subtitle: "SaaS app, UX Design, UI Developemt",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1731155233/xperiti_psd_file_1_cvfkqh.svg",
    url: "https://www.xperiti.com/",
  },
  {
    heading: "ArthAlpha",
    subtitle: "Quant Trading App, Portfolio Website, UX Design, UI Developemt",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025189/brahma_zbxs7g.svg",
    url: "https://arthalpha.in/",
  },
  {
    heading: "Rings & I",
    subtitle: "Shopify Store, UX Design , Shopify Theme, Asset Creation",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025333/rings_gnmm1x.svg",
    url: "https://ringsandi.com/",
  },
];

const RecentWorkCard = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]); // To store multiple refs for each card

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? "-35%" : "35%";

      // Animate the image
      gsap.fromTo(
        card.querySelector("img"),
        {
          x: direction,
          rotation: isEven ? -12 : 12,
          opacity: 1,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 110%",
            end: "bottom 0%",
            scrub: 1,
          },
          ease: "power2.out",
        }
      );

      // Animate the contentDiv
      gsap.fromTo(
        card.querySelector("#contentDiv"),
        {
          opacity: 1,
          y: 120, // Start slightly below
        },
        {
          opacity: 1,
          y: 0, // Move to its original position
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          ease: "power2.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="">
      {" "}
      {/* Prevent overflow and horizontal scroll */}
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "flex flex-row-reverse justify-between mb-16 max-md:mb-4 max-w-full max-md:flex-col-reverse" // Ensure the div doesn't exceed the container's width
                : "flex flex-row justify-between mb-16 max-md:mb-4 max-w-full max-md:flex-col-reverse py-32 max-md:py-8 max-lg:py-16 max-xl:py-28"
            }
            // ref={(el) => (cardRefs.current[index] = el!)}

            ref={(el) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
          >
            <div
              className={
                index % 2 === 0
                  ? "flex flex-row items-center md:justify-end w-[40%] text-end max-md:text-center max-md:w-[100%] max-md:px-0 max-md:justify-center"
                  : "flex flex-row items-center justify-start w-[40%] max-md:text-center max-md:w-[100%] max-md:px-4"
              }
              id="contentDiv"
            >
              <div>
                <p className="text-[4.5rem] max-md:text-4xl mb-4 font-[600] max-xl:text-[3.5rem] max-md:mt-12">
                  {item.heading}
                </p>
                <div
                  className={
                    index % 2 === 0
                      ? " flex flex-row items-end  justify-end"
                      : ""
                  }
                >
                  <p
                    className={
                      index % 2 === 0
                        ? "text-lg font-[500] max-w-[300px]"
                        : "text-lg font-[500] max-w-[400px]"
                    }
                  >
                    {item.subtitle}
                  </p>
                </div>
                <a href={item.url} target="_blank">
                  <Button
                    // color="primary"
                    variant="bordered"
                    className="rounded-2xl py-6 px-12 mt-12 font-[700] text-[16px]"
                  >
                    View Project
                  </Button>
                </a>
              </div>
            </div>
            <div className="w-[60%] max-w-full max-md:w-[100%]">
              {" "}
              {/* Ensure images fit within the container */}
              <img
                src={item.img}
                alt="img"
                className=" rounded-3xl md:-mt-12 max-md:mt-12 " // Ensure the image does not overflow
                style={{
                  transform:
                    index % 2 === 0 ? "rotate(-20deg)" : "rotate(20deg)", // Add initial rotation
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentWorkCard;
