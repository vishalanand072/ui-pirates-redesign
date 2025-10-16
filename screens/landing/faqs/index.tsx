"use client";
import { useState } from "react";
import FaqsAccordion from "./accordion";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";

const LandingFaqs = () => {
  const [isHoveredChat, setIsHoveredChat] = useState(false);
  const [isHoveredEmail, setIsHoveredEmail] = useState(false);

  return (
    <div className="container mx-auto  max-md:px-4 lg:px-20 pt-12 pb-32 mb-12 max-md:pb-32 max-md:mt-28 bg-white rounded-[100px] max-md:rounded-[50px]">
      {/* Left section - Sticky */}
      <div className=" flex flex-col items-center justify-center pb-12">
        <div className="flex flex-row items-start mb-6 max-md:items-center max-md:justify-center">
          <span className="bg-[#8EF1F1] px-4 py-2 rounded-xl font-semibold uppercase border-cyan-400 border-2">
            FAQs
          </span>
        </div>
        <h2 className="text-5xl max-lg:text-3xl max-2xl:text-4xl max-md:text-3xl font-[700] mt-3 mb-1 max-md:text-center max-md:px-8">
          Have questions?
        </h2>
        <h2 className="text-5xl max-lg:text-3xl max-2xl:text-4xl max-md:text-3xl font-[700] mb-6 max-md:text-center max-md:px-8">
          We've got you!
        </h2>

        {/* Card with contact options */}
        {/* <Card className="py-0 shadow-none border-2 rounded-[32px]">
          <CardBody className="overflow-visible p-6">
            <img
              alt="Card background"
              className="object-cover rounded-3xl w-[80px] h-[80px] max-h-[80px] object-top border-1 border-white  transform transition duration-500 hover:scale-110  hover:rotate-[-5deg]"
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761421/vishal_b32poo.svg"
            />
            <h4 className="font-[500] text-lg my-4">
              Still have questions? We’re here to help – feel free to ask us
              anything below 👇🏻
            </h4>

            <a href="https://wa.link/i35lma" target="_blank" className="w-full">
              <Button
                color="primary"
                variant="bordered"
                className="mt-3 border-gray-100 text-black font-bold w-full hover:border-gray-200 px-[70px] py-[25px]"
                style={{ width: "100%" }}
                onMouseEnter={() => setIsHoveredChat(true)}
                onMouseLeave={() => setIsHoveredChat(false)}
              >
                <div className="flex flex-col items-center justify-center max-h-[22px] overflow-hidden">
                  <span
                    className={`text-black transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-x-3 ${
                      isHoveredChat ? "translate-y-[50px]" : "translate-y-2"
                    }`}
                  >
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                      alt="WhatsApp Logo"
                    />
                    Chat
                  </span>

                  <span
                    className={`text-black w-full transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-3 ${
                      isHoveredChat ? "-translate-y-2" : "translate-y-[50px]"
                    }`}
                  >
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                      alt="WhatsApp Logo"
                    />
                    +91 97086 36151
                  </span>
                </div>
              </Button>
            </a>

            

            <a href="mailto:vishalanand072@gmail.com" className="w-full">
              <Button
                color="primary"
                variant="bordered"
                className="mt-3 border-gray-100 text-black font-bold w-full hover:border-gray-200 px-[70px] py-[25px]"
                style={{ width: "100%" }}
                onMouseEnter={() => setIsHoveredEmail(true)}
                onMouseLeave={() => setIsHoveredEmail(false)}
              >
                <div className="flex flex-col items-center justify-center max-h-[20px] overflow-hidden">
                  <span
                    className={`text-black transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-x-3 ${
                      isHoveredEmail ? "translate-y-[50px]" : "translate-y-2"
                    }`}
                  >
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729767692/email_bxvlmd.svg"
                      alt="Email Logo"
                    />
                    Email Us
                  </span>

                  <span
                    className={`text-black w-full transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-3 ${
                      isHoveredEmail ? "-translate-y-2" : "translate-y-[50px]"
                    }`}
                  >
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729767692/email_bxvlmd.svg"
                      alt="Email Logo"
                    />
                    vishalanand072@gmail.com
                  </span>
                </div>
              </Button>
            </a>
          </CardBody>
        </Card> */}
      </div>

      {/* Right section - Scrollable */}
      <div className=" px-12 max-md:px-0">
        <FaqsAccordion />
      </div>
    </div>
  );
};

export default LandingFaqs;
