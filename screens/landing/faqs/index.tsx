import FaqsAccordion from "./accordion";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
const LandingFaqs = () => {
  return (
    <>
      <div className="grid grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-1 container mx-auto max-md:px-4 lg:px-20 mt-32">
        <div className="lg:pr-32 col-span-2 max-md:pr-0 max-md:col-span-1">
          <div className="flex flex-row items-start mb-6 max-md:items-center max-md:justify-center">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729861628/Div_framer-3TZmM_kfhwe_oihrjx.svg"
              alt=""
            />
          </div>
          <p className=" text-5xl max-lg:text-3xl max-md:text-2xl font-semibold mt-3 mb-6 max-md:text-center max-md:px-8">
            Have questions?! We've got you!
          </p>
          <div>
            <Card className="py-0 shadow-none border-2 rounded-[32px]">
              <CardBody className="overflow-visible ">
                <img
                  alt="Card background"
                  className="object-cover rounded-3xl w-full h-[250px] max-h-[250px] object-top"
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761421/vishal_b32poo.svg"
                />
                <h4 className="font-semibold text-base mt-2">
                  Still have questions? We’re here to help – feel free to ask us
                  anything below 👇🏻
                </h4>
                <Button
                  color="primary"
                  variant="bordered"
                  className="mt-3 border-gray-300 text-black button dark:text-white font-bold"
                  startContent={
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                      alt="Dribble Logo"
                    />
                  }
                >
                  <p className=" text-base font-semibold ">Chat</p>
                </Button>
                <a href="mailto:vishalanand072@gmail.com" className="w-full">
                  <Button
                    color="primary"
                    variant="bordered"
                    className="mt-3 border-gray-300 text-black button dark:text-white font-bold w-full"
                    startContent={
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729767692/email_bxvlmd.svg"
                        alt="Dribble Logo"
                      />
                    }
                  >
                    <p className=" text-base font-semibold ">Email Us</p>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="max-md:mt-6 col-span-2 max-lg:col-span-2 max-md:col-span-1">
          <FaqsAccordion />
        </div>
      </div>
    </>
  );
};

export default LandingFaqs;
