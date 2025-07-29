"use client";
import { Button } from "@nextui-org/button";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StarRating = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <div
      className={`flex flex-row gap-1 h-[14px] overflow-hidden ${className}`}
    >
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-[14px] h-[14px] relative">
          <img
            src="https://res.cloudinary.com/dvk9ttiym/image/upload/v1753806991/tabler-icon-star-filled_oymrgq.svg"
            alt="5 star rating"
            className="w-[14px] h-[14px] transition-transform duration-300 hover:scale-110 absolute top-0 left-0"
            style={{
              animation: `starSlideUp 0.5s ease-out forwards`,
              animationDelay: `${delay / 1000 + index * 0.12}s`,
              opacity: 0,
              transform: "translateY(25px)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

const LandingHero = () => {
  const [isHoveredChat, setIsHoveredChat] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-center py-12 w-full max-lg:py-10 max-md:py-6 container mx-auto">
        <div
          className="flex flex-col items-center justify-center w-screen"
          style={{ overflow: "visible" }}
        >
          <motion.div
            className="p-2 px-4 rounded-xl bg-[#8EF1F1] border-cyan-400 border-2"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <p className="text-center uppercase text-xs max-md:text-[10px] font-medium">
              Trusted by 40+ startups across 6 countries
            </p>
          </motion.div>
          <div className="flex flex-row items-center justify-center w-full py-8 max-md:py-4 max-md:pb-2 overflow-visible">
            <div className="flex flex-row gap-2 overflow-visible">
              <div className="items-center flex flex-col max-w-[200px] gap-2 overflow-visible">
                <div className="w-[32px] h-[32px] relative overflow-hidden">
                  <motion.img
                    src="https://res.cloudinary.com/dvk9ttiym/image/upload/v1753805631/Kaivan_Dave-modified_mcm9iw.png"
                    alt="SaaS Application Design - Enterprise UI/UX"
                    className="w-[32px] h-[32px] absolute top-0 left-0"
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: "backOut",
                    }}
                  />
                </div>
                <div className="min-h-[32px] flex items-center overflow-hidden">
                  <motion.p
                    className="text-center italic text-xs font-medium"
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    "...great to work with and will ensure you're happy..."
                  </motion.p>
                </div>
                <div className="flex flex-row gap-1 h-[14px] items-start">
                  <StarRating delay={300} />
                </div>
              </div>
              <div className="items-center flex flex-col max-w-[200px] gap-2 max-md:hidden overflow-visible">
                <div className="w-[32px] h-[32px] relative overflow-hidden">
                  <motion.img
                    src="https://res.cloudinary.com/dvk9ttiym/image/upload/v1753805632/eden-modified_jsf37k.png"
                    alt="Dribble Logo"
                    className="w-[32px] h-[32px] absolute top-0 left-0"
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45,
                      ease: "backOut",
                    }}
                  />
                </div>
                <div className="min-h-[32px] flex items-center overflow-hidden">
                  <motion.p
                    className="text-center italic text-xs font-medium"
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.55,
                      ease: "easeOut",
                    }}
                  >
                    "Successfully overhauled the design of our entire
                    platform..."
                  </motion.p>
                </div>
                <div className="flex flex-row gap-1 h-[14px] items-start">
                  <StarRating delay={350} />
                </div>
              </div>
              <div className="items-center flex flex-col max-w-[200px] gap-2 max-md:hidden overflow-visible">
                <div className="w-[32px] h-[32px] relative overflow-hidden">
                  <motion.img
                    src="https://res.cloudinary.com/dvk9ttiym/image/upload/v1753805632/Priyanka-modified_byouxn.png"
                    alt="Mobile App Design - AI-Driven User Interface"
                    className="w-[32px] h-[32px] absolute top-0 left-0"
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6,
                      ease: "backOut",
                    }}
                  />
                </div>
                <div className="min-h-[32px] flex items-center overflow-hidden">
                  <motion.p
                    className="text-center italic text-xs font-medium"
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7,
                      ease: "easeOut",
                    }}
                  >
                    "...ability to truly understand our brand's identity &
                    target..."
                  </motion.p>
                </div>
                <div className="flex flex-row gap-1 h-[14px] items-start">
                  <StarRating delay={400} />
                </div>
              </div>
            </div>
          </div>

          <h1 className="reveal-text-anim text-7xl px-56 text-center font-[700] max-md:font-[600] max-lg:text-5xl max-md:text-[44px] max-md:px-6 max-lg:px-12 mt-3 max-xl:px-12 max-2xl:px-32 tracking-[-1.5px] leading-[80px]">
            Scalable UI/UX design for SaaS & AI Products
          </h1>

          <p className="reveal-text-anim-1 lg:w-3/4 text-center text-lg max-md:text-sm mt-4 px-40 max-md:px-4 max-lg:12 font-sans leading-[25.2px]">
            We help SaaS and enterprise startups design high-converting
            dashboards, onboarding flows, and full product experiences, from MVP
            to scale.
          </p>

          <div className="my-12 flex flex-col items-center max-md:flex-col max-md:px-2 button-spring-animate relative">
            {/* Star firework background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="star-firework-animate text-yellow-400 text-2xl">
                  ✨
                </div>
              </div>
              <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="star-firework-animate text-blue-400 text-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⭐
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                <div
                  className="star-firework-animate text-purple-400 text-xl"
                  style={{ animationDelay: "1s" }}
                >
                  ✨
                </div>
              </div>
              <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div
                  className="star-firework-animate text-pink-400 text-sm"
                  style={{ animationDelay: "1.5s" }}
                >
                  ⭐
                </div>
              </div>
            </div>

            <a
              href="https://cal.com/vishal-anand/introduction-and-free-ui-ux-strategy-session"
              target="blank"
              className="relative z-10"
            >
              <div className="bg-black text-white button group transform transition-all duration-[600ms] ease-in-out max-md:px-4 px-6 py-2 buttonHero md:hover:pl-12 hover:bg-black flex flow-row items-center gap-3 cta-button-hover">
                <div className="flex flex-row gap-2 items-center md:mr-11">
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1730289917/Frame_1984078767_sjyim4.svg"
                    alt="Dribble Logo"
                    id="image"
                    className="w-auto h-[30px] md:absolute  transform translate-x-0 transition-all duration-[580ms] ease-in-out  md:group-hover:translate-x-4 max-md:order-3  md:order-1 md:group-hover:order-3"
                  />
                  <p
                    id="plus"
                    className="text-[#5B5B5B] text-xl font-bold md:absolute order-2 -mt-1"
                  >
                    +
                  </p>
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                    alt="Dribble Logo"
                    id="client"
                    className="w-auto h-[30px] md:absolute  transform translate-x-0 transition-all duration-500 ease-in-out  md:group-hover:-translate-x-[2.1rem] max-md:order-1  md:order-3 md:group-hover:order-1"
                  />
                </div>
                <p> Book a 15-min call</p>
                <div>
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                    alt="Dribble Logo"
                    className="w-auto h-[30px]"
                  />
                </div>
              </div>
            </a>
            <div className="w-[100%] mt-3">
              <a
                href="https://wa.link/i35lma"
                target="_blank"
                className="w-[200px]"
              >
                <Button
                  color="primary"
                  variant="bordered"
                  className=" border-gray-300 text-black font-bold w-full hover:border-gray-200 rounded-[16px]   py-[25px]"
                  style={{ width: "100%" }}
                  onMouseEnter={() => setIsHoveredChat(true)}
                  onMouseLeave={() => setIsHoveredChat(false)}
                >
                  <div className="flex flex-col items-center justify-center max-h-[32px] overflow-hidden">
                    <span
                      className={`text-black transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-x-3 ${
                        isHoveredChat ? "translate-y-[50px]" : "translate-y-4"
                      }`}
                    >
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                        alt="WhatsApp Logo"
                        className="w-[30px]  h-[30px] "
                      />
                      <p className="text-base font-semibold">Chat</p>
                    </span>

                    <span
                      className={`text-black w-full transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-3 ${
                        isHoveredChat ? "-translate-y-4" : "translate-y-[50px]"
                      }`}
                    >
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                        alt="WhatsApp Logo"
                        className="w-[30px]  h-[30px]"
                      />
                      <p className="text-base font-semibold">
                        {" "}
                        +91 97086 36151
                      </p>
                    </span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
