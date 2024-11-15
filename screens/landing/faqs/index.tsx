import FaqsAccordion from "./accordion";
import { Card, CardBody, Button } from "@nextui-org/react";

const LandingFaqs = () => {
  return (
    <div className="container mx-auto grid grid-cols-5 max-lg:grid-cols-5 max-md:grid-cols-1 max-md:px-4 lg:px-20 pt-32 pb-52 max-md:pb-32 max-md:mt-28 bg-white rounded-[100px]">
      {/* Left section - Sticky */}
      <div className="col-span-2 max-md:col-span-1 lg:pr-12 max-xl:pr-8 max-md:pr-0 md:sticky md:top-4 md:h-screen">
        <div className="flex flex-row items-start mb-6 max-md:items-center max-md:justify-center">
          <img
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1730981154/faq_pagz0a.svg"
            alt="FAQ Icon"
          />
        </div>
        <p className="text-5xl max-lg:text-3xl max-2xl:text-4xl max-md:text-3xl font-[700] mt-3 mb-6 max-md:text-center max-md:px-8">
          Have questions?! We've got you!
        </p>

        {/* Card with contact options */}
        <Card className="py-0 shadow-none border-2 rounded-[32px]">
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

            {/* WhatsApp Button */}
            <a href="https://wa.link/i35lma" target="_blank" className="w-full">
              <Button
                color="primary"
                variant="bordered"
                className="mt-3 border-gray-100 text-black font-bold w-full hover:border-gray-200 button"
                startContent={
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                    alt="WhatsApp Logo"
                  />
                }
              >
                <p className="text-base font-semibold">Chat</p>
              </Button>
            </a>

            {/* Email Button */}
            <a href="mailto:vishalanand072@gmail.com" className="w-full">
              <Button
                color="primary"
                variant="bordered"
                className="mt-3 border-gray-100 text-black dark:text-white font-bold w-full hover:border-gray-200 button"
                startContent={
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729767692/email_bxvlmd.svg"
                    alt="Email Logo"
                  />
                }
              >
                <p className="text-base font-semibold">Email Us</p>
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>

      {/* Right section - Scrollable */}
      <div className="col-span-3 max-lg:col-span-3 max-md:col-span-1 max-md:mt-0">
        {/* <div className="overflow-y-auto h-full relative z-10"> */}
        <FaqsAccordion />
        {/* <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LandingFaqs;
