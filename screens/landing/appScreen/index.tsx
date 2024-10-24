import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LandingAppScreen = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".appTrigger", // element to start the animation
        start: "top 50%", // when the top of the trigger hits the center of the viewport
        end: "bottom 50%", // end when the bottom of the trigger hits the top of the viewport
        scrub: 1, // smooth animation on scroll
      },
    });

    // Left image rotates and moves from left
    tl.to("#left", { rotate: 0, x: 0, duration: 1, ease: "power2.out" })
      // Right image rotates and moves from right
      .to("#right", { rotate: 0, x: 0, duration: 1, ease: "power2.out" }, "<")
      // Center image moves up
      .to("#center", { paddingTop: 0, duration: 1 }, "<");

    // Initial position off-screen
    gsap.set("#left", { x: "-10vw" });
    gsap.set("#right", { x: "10vw" });
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 mt-40 appTrigger container mx-auto">
        <img
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1729516037/Div_framer-phxs80_ltdycu.svg"
          alt="app"
          id="left"
          className="rotate-[-6deg] max-md:w-[50%]"
        />
        <img
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1729516039/Div_framer-o8mlgh_cbc7mx.svg"
          alt="app"
          id="center"
          className="pt-40 max-md:hidden"
        />
        <img
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1729595123/app_cjhwn2.svg"
          alt="app"
          id="right"
          className="rotate-[6deg] max-md:w-[50%]"
        />
      </div>
    </>
  );
};

export default LandingAppScreen;
