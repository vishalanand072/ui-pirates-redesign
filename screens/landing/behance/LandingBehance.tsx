import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading: "heading 1",
    subtitle: "subtitle 1",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025336/xperiti_ptjxaa.svg",
  },
  {
    heading: "heading 2",
    subtitle: "subtitle 2",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025188/frytx_mo0frx.svg",
  },
  {
    heading: "heading 3",
    subtitle: "subtitle 3",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025189/brahma_zbxs7g.svg",
  },
  {
    heading: "heading 3",
    subtitle: "subtitle 3",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025336/olso_rgvl9a.svg",
  },
  {
    heading: "heading 3",
    subtitle: "subtitle 3",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025333/rings_gnmm1x.svg",
  },
  {
    heading: "heading 2",
    subtitle: "subtitle 2",
    img: "https://res.cloudinary.com/damm9iwho/image/upload/v1730025332/ion_hhwrup.svg",
  },
];

const LandingBehanceFramor = () => {
  const [visibleData, setVisibleData] = useState(data.slice(0, 6)); // Default to 6 items for desktop

  const updateVisibleData = () => {
    const isMobile = window.innerWidth <= 768;
    setVisibleData(isMobile ? data.slice(0, 4) : data.slice(0, 6));
  };

  const runAnimation = () => {
    const images = gsap.utils.toArray("#img") as HTMLElement[];
    const isMobile = window.innerWidth <= 768;

    const animateRow = (
      startIndex: number,
      endIndex: number,
      xMove: string[],
      yMove: string[],
      rotateDeg: number[],
      triggerProgress: number
    ) => {
      gsap.to(images.slice(startIndex, endIndex), {
        x: (i) => xMove[i % 2],
        y: (i) => yMove[i % 2],
        rotate: isMobile ? 0 : (i) => rotateDeg[i % 2],
        scrollTrigger: {
          trigger: images[startIndex],
          start: isMobile ? "top 99%" : "top 99%",
          end: isMobile ? "bottom 30%" : "bottom 0%",
          scrub: 1.5,
          onUpdate: (self) => {
            if (self.progress >= triggerProgress) {
              ScrollTrigger.getById(`row-${startIndex + 2}`)?.enable();
            }
          },
          id: `row-${startIndex}`,
        },
      });
    };

    const xMoveMobile = ["-90%", "90%"];
    const yMoveMobile = ["-20%", "-20%"];
    const xMoveDesktop = ["-70%", "70%"];
    const yMoveDesktop = ["90%", "90%"];

    const xMove = isMobile ? xMoveMobile : xMoveDesktop;
    const yMove = isMobile ? yMoveMobile : yMoveDesktop;

    // Animate rows with staggered starts
    animateRow(
      0,
      2,
      xMove,
      !isMobile ? ["90%", "90%"] : ["-20%", "-20%"],
      [-45, 45],
      0.2
    );
    animateRow(
      2,
      4,
      xMove,
      !isMobile ? ["40%", "40%"] : ["-20%", "-20%"],
      [-45, 45],
      0.3
    );
    animateRow(
      4,
      6,
      xMove,
      !isMobile ? ["-60%", "-60%"] : ["-20%", "-20%"],
      [-45, 45],
      1
    );
  };

  useEffect(() => {
    updateVisibleData();
    runAnimation();

    const handleResize = () => {
      ScrollTrigger.refresh();
      updateVisibleData();
      runAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Centered Info */}
      <div
        id="info"
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <img
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1729514725/behance_k2zcrn.svg"
          alt="behance Logo"
          className="max-md:w-[50%]"
        />
        <p className="text-center text-lg px-24 max-md:px-0 max-lg:px-12 mb-12 mt-6 w-1/2 max-md:text-lg">
          Explore our diverse portfolio of projects that highlight our
          creativity and craftsmanship.
        </p>
        <a href="https://www.behance.net/vishalanand-UI-UX" target="_blank">
          <Button
            color="primary"
            className="bg-black button text-lg dark:bg-white dark:text-black px-[70px] py-[30px]"
            // style={{
            //   paddingRight: "70px",
            //   paddingLeft: "70px",
            //   paddingTop: "30px",
            //   paddingBottom: "30px",
            // }}
          >
            View Behance
          </Button>
        </a>
      </div>

      {/* Image Grid with Overlap */}
      <div className="relative grid grid-cols-2 gap-12 max-md:gap-4 overflow-x-hidden overflow-y-auto py-40 max-md:py-32 max-lg:py-40 max-md:grid-cols-1 hide-scrollbar px-32 max-md:px-4">
        {visibleData.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={item.img}
              alt={item.heading}
              className="w-full h-full object-fill rounded-[30px] grayscale-[25%] box-shadow"
              id="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingBehanceFramor;
