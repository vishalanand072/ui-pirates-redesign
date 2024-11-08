import { useEffect, useLayoutEffect, useRef } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading: "Web/Mobile Apps",
    description:
      "Transform your ideas into interactive, user-friendly apps. We create intuitive, engaging saas web and mobile apps with modern UI that drive user engagement and simplfies complex data visualisations",
    chip: [
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799889/CalendarDots_bqwpcd.svg",
        title: "1-2 months delivery",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799889/AppWindow_m5lr3w.svg",
        title: "SaaS Design",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Code_qedbxu.svg",
        title: "UI Development",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Resize_inl801.svg",
        title: "Scalable Architecture",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Sparkle_qf0yru.svg",
        title: "Clean & Modern UI",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/CodeBlock_wotty4.svg",
        title: "Development Ready",
      },
    ],
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1729841109/widget-svgrepo-com_1_xflrym.svg",
    video:
      "https://res.cloudinary.com/damm9iwho/video/upload/v1730895574/psd_y5ouhe.mp4",
  },
  {
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems and reusable components to ensure consistency across projects and streamline development.",
    chip: [
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799889/CalendarDots_bqwpcd.svg",
        title: "2-3 months delivery",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Code_qedbxu.svg",
        title: "Development Friendly",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801222/File_rvsuin.svg",
        title: "Documentation",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801222/Sliders_t641lz.svg",
        title: "Customizable UI Kits",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801222/Swatches_ic2xmg.svg",
        title: "Design Tokens",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801222/ArrowsCounterClockwise_a1sflh.svg",
        title: "Reusable Components",
      },
    ],
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1729841104/figma-component-svgrepo-com_1_mtgewy.svg",
    video:
      "https://res.cloudinary.com/damm9iwho/video/upload/v1730895563/show_gtb051.mp4",
  },
  {
    heading: "Landing Pages & E-commerce",
    description:
      "Impactful online presence with high-converting landing pages and portfolio websites that showcase your work professionally and drive customer action.",
    chip: [
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799889/CalendarDots_bqwpcd.svg",
        title: "2-4 weeks delivery",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801507/DeviceMobile_rfsexm.svg",
        title: "Mobile-friendly Design",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Code_qedbxu.svg",
        title: "UI Development",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801507/ShoppingCart_pirfab.svg",
        title: "Shopify",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730799888/Sparkle_qf0yru.svg",
        title: "Webflow",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730801507/ic_baseline-wordpress_gpl06j.svg",
        title: "Wordpress",
      },
      {
        icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730808989/VectorD_nnz4jc.svg",
        title: "Landing Page Designs",
      },
    ],
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1729841107/Vectore_ididim.svg",
    video:
      "https://res.cloudinary.com/damm9iwho/video/upload/v1730895565/3D_qasvie.mp4",
  },
  // Add more data as needed...
];

const data1 = [
  {
    heading: "UX Audits & Consultation",
    description: "Identify usability issues and get expert guidance.",
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1730808993/image_39_e9ciky.svg",
    isImage: true,
  },
  {
    heading: "3D Animation  & Rendering",
    description: "Immersive 3D animations and rendering for standout visuals.",
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1730808994/3d-rendering-isometric-house_1_skqu47.svg",
    isImage: true,
  },
  {
    heading: "Animated Motion Graphics",
    description:
      "Impactful animated motion graphics and Videos to enhance storytelling and design.",
    image:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1730808989/view-3d-cinema-clapperboard_1_bcdsv5.svg",
    isImage: false,
  },
  // Add more data as needed...
];

const VideoWithCards = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useLayoutEffect(() => {
    // GSAP ScrollTrigger animation for cards
    const isMobile = window.innerWidth <= 768;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 100, // Start from below
            transform: "scale(0.80)",
          },
          {
            y: 0, // Move to original position
            transform: "scale(1)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 150%" : "top 99%",
              end: isMobile ? "bottom 0%" : "bottom 0%",
              toggleActions: "play none none reverse",
              scrub: 1.5,
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Find the index of the observed element in videoRefs
          const index = videoRefs.current.findIndex(
            (video) => video === entry.target
          );

          if (index !== -1) {
            // Check if the index is valid
            const videoElement = videoRefs.current[index];
            if (videoElement) {
              // Ensure the video element is valid
              if (entry.isIntersecting) {
                console.log(`Video ${index + 1} started playing.`);
                videoElement.play();
                videoElement.playbackRate = 0.5; // Adjust speed when in view
              } else {
                console.log(`Video ${index + 1} paused.`);
                videoElement.pause();
                videoElement.playbackRate = 1; // Reset speed when out of view
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 10% of the video is in view
    );

    // Observing all video elements
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video); // Ensure video is not null before observing
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="min-h-screen">
      {data.map((item, index) => (
        <div
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          key={index}
        >
          <Card className="rounded-[48px] mt-12 bg-[#e9e9e9] dark:bg-[#18181b] max-md:mt-4 group">
            <CardBody className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 p-4 max-md:p-2">
              <Card className="rounded-[40px] box-shadow">
                <CardBody className="p-8 max-md:p-4 max-lg:p-6">
                  <img
                    src={item.image}
                    alt="behance Logo"
                    className="w-[40px] grayscale group-hover:grayscale-0"
                  />
                  <p className="text-3xl max-md:text-xl mt-4 mb-4 font-[700] tracking-[-0.5px] leading-[41.6px]">
                    {item.heading}
                  </p>
                  <p className="text-lg max-md:text-base font-[500]">
                    {item.description}
                  </p>
                  <div className="mt-6 grid-rows-3 w-full gap-4">
                    {item.chip.map((chipItem, chipIndex) => (
                      <Chip
                        key={chipIndex}
                        radius="sm"
                        className="m-2 text-[14px] text-[#00000094] bg-[#51525E14]"
                        startContent={
                          <img src={chipItem.icon} className="mx-1 w-[16px]" />
                        }
                      >
                        <p className="font-[600]">{chipItem.title}</p>
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
              <Card className="rounded-[40px] p-0 h-[500px] max-md:h-[300px]">
                <CardBody style={{ padding: 0 }}>
                  <video
                    ref={(elvideo) => {
                      if (elvideo) videoRefs.current[index] = elvideo;
                    }}
                    width="100%"
                    // autoPlay
                    loop
                    muted
                    className="object-cover h-[500px] min-md:h-[400px] max-h-full"
                    src={item.video}
                  ></video>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
      ))}
      <div
        ref={(el) => {
          if (el) cardsRef.current[3] = el;
        }}
      >
        <Card className="rounded-[48px] mb-12 bg-[#e9e9e9] dark:bg-[#18181b] mt-12 max-md:mt-4">
          <CardBody className="grid grid-cols-3 gap-4 max-xl:grid-cols-1 p-4 max-md:p-2">
            {data1.map((item, index) => {
              return (
                <Card
                  className="rounded-[40px] box-shadow"
                  // style={{ boxShadow: " inset 0 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <CardBody className="p-8 max-md:p-4 max-lg:p-6">
                    <p className="text-3xl max-md:text-xl mt-0 mb-4 font-[700] pr-12 tracking-[-0.5px] leading-[41.6px]">
                      {item.heading}
                    </p>
                    <p className="text-lg max-md:text-base mb-6 font-[500] leading-[25.2px]">
                      {item.description}
                    </p>
                    <div className="flex flex-row items-center justify-center">
                      {item.isImage && (
                        <img
                          src={item.image}
                          alt="behance Logo"
                          className="w-[320px] h-[250px]"
                        />
                      )}
                      {!item.isImage && (
                        <iframe
                          src="https://my.spline.design/componentkeyboardcopy-418b298aa595a45922ac0f0895edd81d/"
                          // frameBorder="0"
                          width="100%"
                          height="100%"
                          className="h-[250px] w-full"
                        ></iframe>
                      )}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default VideoWithCards;
