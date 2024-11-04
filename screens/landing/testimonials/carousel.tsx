import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody } from "@nextui-org/react";

const data = [
  {
    heading: "Web/Mobile Apps",
    description:
      "Ideal for building complete app or Saas, including design and development.",
    price: "1,000",
    list: [
      "4-6 week delivery",
      "30-50 screens",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "AI chatbot integration available",
      "Cross-platform development",
      "5/7 Communication",
    ],
  },
  {
    heading: "Landing Pages & E-commerce",
    description:
      "Build high-conversion landing pages or full e-commerce platforms",
    price: "499",
    list: [
      "10-14 days turnaround time",
      "1-5 Pages",
      "High-conversion rate focus",
      "E-commerce functionality",
      "Responsive Design",
      "Predefined scope of work (SOW)",
      "5/7 Communication",
    ],
  },
  {
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems with reusable components for consistent UI and easy integration.",
    price: "1,999",
    list: [
      "2-4 weeks delivery",
      "Scalable design systems",
      "Development-ready components",
      "UI consistency",
      "5/7 Communication",
      "Reusable components",
      "Custom design library",
    ],
  },
  {
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems with reusable components for consistent UI and easy integration.",
    price: "1,999",
    list: [
      "2-4 weeks delivery",
      "Scalable design systems",
      "Development-ready components",
      "UI consistency",
      "5/7 Communication",
      "Reusable components",
      "Custom design library",
    ],
  },
];

function ResponsiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setActiveIndex(next),
    appendDots: (dots: any) => (
      <div
        className="py-4 bg-red-400 w-full"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            margin: "0px",
            color: "red",
            background: "#EDEDED",
            width: "150px",
            paddingTop: "12px",
            borderRadius: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),

    customPaging: (i: number) => (
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: i === activeIndex ? "#545454" : "#E2E2E2", // Active and inactive colors
          transition: "background-color 0.3s ease",
        }}
      ></div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-2 pb-12">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className=" mt-8 mb-12 py-12">
            <Card
              key={index}
              className={`rounded-[40px] max-md:w-[100%] bg-[#e9e9e9] card-item max-md:rounded-[30px]`}
            >
              <CardBody className="p-3 max-md:p-2 max-lg:p-4">
                <div className="w-full p-5 bg-white rounded-[24px] max-md:p-4 box-shadow">
                  <div className="flex flex-row justify-between gap-4 max-md:gap-2">
                    <div className="flex flex-row gap-3">
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                        alt="behance Logo"
                        className="w-[40px]"
                      />
                      <div className="">
                        <p className="text-2xl max-md:text-lg font-semibold">
                          Eden Hazani
                        </p>
                        <p className="text-[#A2A2A2] max-md:text-sm">
                          Xperiti | VP Research and Development
                        </p>
                      </div>
                    </div>
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729837616/in_hnnctn.svg"
                      alt="behance Logo"
                      className="w-[30px] max-md:w-[20px] max-md:hidden"
                    />
                  </div>

                  <p className="mt-4 line-clamp-4 max-md:text-sm">
                    Wonderful to work with, very experienced with UI/UX design.
                    Was very open to work in the flow we requested that required
                    actual Angular coding from his team as well, and stood up to
                    the challenge of working with a remot...
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6 max-md:grid-cols-1">
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-2xl font-semibold mb-1 max-md:text-lg max-lg:text-xl">
                        10/10
                      </p>
                      <p className="text-[#C5C5C5] text-sm">
                        Sactisfaction Score
                      </p>
                    </div>
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-2xl font-semibold mb-1  max-md:text-lg max-lg:text-xl">
                        Xperiti
                      </p>
                      <p className="text-[#C5C5C5] text-sm">
                        Projects Worked on
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveCarousel;
