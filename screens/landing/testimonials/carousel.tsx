import React from "react";
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
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className=" mt-8 mb-12">
            <Card
              key={index}
              className={`rounded-[40px] max-md:w-[100%] bg-[#e9e9e9] card-item`}
            >
              <CardBody className="p-4 max-md:p-4 max-lg:p-4">
                <div className="w-full p-6 bg-white rounded-[24px]">
                  <div className="flex flex-row justify-between gap-4">
                    <div className="flex flex-row gap-3">
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                        alt="behance Logo"
                        className="w-[40px]"
                      />
                      <div className="">
                        <p className="text-2xl max-md:text-xl font-semibold">
                          Eden Hazani
                        </p>
                        <p className="text-[#A2A2A2]">
                          Xperiti | VP Research and Development
                        </p>
                      </div>
                    </div>
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729837616/in_hnnctn.svg"
                      alt="behance Logo"
                      className="w-[30px]"
                    />
                  </div>

                  <p className="max-md:text-base mt-4">
                    Wonderful to work with, very experienced with UI/UX design.
                    Was very open to work in the flow we requested that required
                    actual Angular coding from his team as well, and stood up to
                    the challenge of working with a remot...
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-2xl font-semibold mb-1">10/10</p>
                      <p className="text-[#C5C5C5]">Sactisfaction Score</p>
                    </div>
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-2xl font-semibold mb-1">Xperiti</p>
                      <p className="text-[#C5C5C5]">Projects Worked on</p>
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
