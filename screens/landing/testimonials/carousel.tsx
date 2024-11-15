import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody } from "@nextui-org/react";

const clients = [
  {
    name: "Eden Hazani",
    occupation: "VP Research and Development",
    location: "New York, USA",
    review:
      "Wonderful to work with, very experienced with UI/UX design. Was very open to work in the flow we requested that required actual Angular coding from his team as well, and stood up to the challenge of working with a remote team in different timezones. Successfully overhauled the design of our entire platform in less than 3 months both as visual designs on Figma and mock Angular code on github.",
    satisfactionScore: 10,
    company: "Xperiti",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731064807/xperiti_we7cq0.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729513137/image_1_hxpv8e.svg",
  },
  // {
  //   name: "Luis",
  //   occupation: "",
  //   location: "",
  //   review:
  //     "The team has been incredible in developing our SaaS web app. They have a clear understanding of our needs and have created a platform that is intuitive, scalable, and perfectly aligned with our vision. We’re excited for what the future holds with this partnership.",
  //   satisfactionScore: 10,
  //   company: "Amuzn",
  //   projects: [],
  //   profileImage:
  //     "https://res.cloudinary.com/damm9iwho/image/upload/v1731065510/Ellipse_1388_od4ab3.svg",
  //   logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729513137/image_29_fxjqk6.svg",
  // },
  {
    name: "Aman Sharma",
    occupation: "Founder",
    location: "New Delhi India",
    review:
      "The team delivered an exceptional e-commerce website for us. Their attention to detail and seamless integration of Shopify exceeded our expectations. It’s been a great experience working with them, and the platform has significantly enhanced our online presence and customer engagement.",
    satisfactionScore: 10,
    company: "Godrics",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731065510/Ellipse_1388_od4ab3.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729513138/image_5_s1yrux.svg",
  },
  {
    name: "Pankaj Soni",
    occupation: "President",
    location: "Jharkhand, India",
    review:
      "Working with this team was a game-changer for Mission Blue. The new website and brand visuals have captured our mission beautifully, bringing clarity and energy to our digital presence. The online campaign they crafted amplified our winter distribution outreach in ways we hadn’t imagined. Thrilled to continue this partnership!",
    satisfactionScore: 10,
    company: "Mission Blue Foundation",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731162245/pankaj-soni-qm3tjj21p3eewy070apjjpyzrymt41qib2tdndac22_w8ajyw.jpg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729513138/image_31_sdh5l7.svg",
  },
  {
    name: "Priyanka",
    occupation: "Co-Founder",
    location: "Maharashtra, India",
    review:
      "Absolutely thrilled with the website! The design captures our brand’s elegance perfectly, and the Shopify integration makes managing our e-commerce so smooth. The whole process was seamless, and the team really understood our vision.",
    satisfactionScore: 10,
    company: "Rings & I",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731162302/priyanka_humj3w.jpg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729682150/Rings_I_eyrgog.svg",
  },
  {
    name: "Rohit Kumar Jha",
    occupation: "Co-Founder",
    location: "Bangalore, India",
    review:
      "Working with this team has been a game-changer for us. They took our vision for a cutting-edge AI trading tool and translated it seamlessly into a dynamic, professional platform. The result has elevated our brand and made our offerings far more engaging and user-friendly.",
    satisfactionScore: 10,
    company: "ArthAlpha, Brahmastra",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731064807/arth_xpceb3.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1730790130/728_x_90_copy_6x_uft7ai.svg",
  },
  {
    name: "Nidhi Lal",
    occupation: "CEO and Co-Founder",
    location: "New Delhi, India",
    review:
      "Collaborating with this team has been a game-changer for Niya. They Created impactful corporate Video, that authentically reflect our mission to support mental well-being in workplaces. Their creativity and dedication helped us communicate our values in a way that truly resonates.",
    satisfactionScore: 10,
    company: "Niya",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731064807/niya_l38ljv.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1730790130/image_38_udzxkk.svg",
  },
  {
    name: "Akash Pandey",
    occupation: "Chairman",
    location: "Jharkhand, India",
    review:
      "Working with the team was a transformative experience. They didn’t just build our website; they took care of our entire brand presence—from design to the finer details of our identity. They understood the spirit of Yuva Sadan and translated it beautifully across every part of our platform. Their attention to detail and commitment to creating something meaningful for us truly set them apart. Highly recommend!",
    satisfactionScore: 10,
    company: "Yuva Sadan",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731064808/yuva_ftd7mq.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729682151/image_30_oiwlqz.svg",
  },
  {
    name: "Vivek Ranjan Singh",
    occupation: "Founder",
    location: "Jharkhand, India",
    review:
      "The team brought Parivarik TV to life with an OTT platform that truly captures our mission to celebrate regional art and bring families together. Their dedication to every detail—from design to functionality—was impressive. It’s clear they cared about making our vision a reality, creating a platform that feels both innovative and authentic to our roots. Truly grateful for their work!",
    satisfactionScore: 10,
    company: "Parivarik TV",
    projects: [],
    profileImage:
      "https://res.cloudinary.com/damm9iwho/image/upload/v1731064808/pari_cecp8e.svg",
    logo: "https://res.cloudinary.com/damm9iwho/image/upload/v1729513140/image_34_rb6475.svg",
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
            width: "300px",
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
          transition: "background-color ease",
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
        {clients.map((item, index) => (
          <div className=" mt-8 mb-12 py-12 transform transition-transform duration-300 ">
            <Card
              key={index}
              className={`rounded-[32px] max-md:w-[100%] bg-[#e9e9e9] card-item max-md:rounded-[30px] shadow-none border-1 border-[#0000000f]`}
            >
              <CardBody className="p-3 max-md:p-2 max-lg:p-4">
                <div className="w-full p-5 bg-white rounded-[24px] max-md:p-4 box-shadow">
                  <div className="flex flex-row items-center justify-between gap-4 max-md:gap-2">
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        src={
                          item.profileImage
                            ? item.profileImage
                            : "https://res.cloudinary.com/damm9iwho/image/upload/v1731065510/Ellipse_1388_od4ab3.svg"
                        }
                        // sizes="40px"
                        alt="behance Logo"
                        className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full"
                      />
                      <div className="">
                        <p className="text-xl max-md:text-lg font-semibold">
                          {item.name}
                        </p>
                        <p className="text-[#A2A2A2] text-sm -mt-1">
                          {item.occupation ? item.occupation : "occupation"}
                        </p>
                        <p className="text-[#A2A2A2] text-sm -mt-1">
                          {item.location ? item.location : "location"}
                        </p>
                      </div>
                    </div>
                    <div className=" max-md:hidden block">
                      <img
                        src={item.logo}
                        alt="behance Logo"
                        className="max-w-[80px] max-md:max-w-[80px] "
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-[500]">
                    {item.review ? item.review : ""}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6 max-md:grid-cols-1">
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-base font-semibold mb-1  max-md:text-base">
                        {item.satisfactionScore ? item.satisfactionScore : "0"}
                        /10
                      </p>
                      <p className="text-[#C5C5C5] text-sm">
                        Sactisfaction Score
                      </p>
                    </div>
                    <div className=" bg-[#EDEDED] p-3 rounded-xl">
                      <p className="text-base font-semibold mb-1  max-md:text-base">
                        {item.company ? item.company : ""}
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
