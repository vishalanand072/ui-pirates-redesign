import FaqsAccordion from "./accordion";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
const LandingFaqs = () => {
  return (
    <>
      <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-1 container mx-auto max-md:px-4 lg:px-20 mt-32">
        <div className="lg:pr-12 col-span-2 max-md:pr-0 max-md:col-span-1">
          <div className="flex flex-row items-start mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729597126/plans_bmcmmc.svg"
              alt=""
            />
          </div>
          <p className=" text-5xl max-lg:text-3xl max-md:text-2xl font-semibold mt-3 mb-6">
            Have questions?! We've got you!
          </p>
          <div>
            <Card className="py-0 shadow-none border-2 rounded-[40px]">
              <CardBody className="overflow-visible ">
                <img
                  alt="Card background"
                  className="object-cover rounded-3xl w-full h-[200px] max-h-[200px]"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
                <h4 className="font-bold text-large mt-2">
                  Still have questions? We’re here to help – feel free to ask us
                  anything below 👇🏻
                </h4>
                <Button
                  color="primary"
                  variant="bordered"
                  className="mt-4 border-gray-300 text-black button dark:text-white font-bold"
                  startContent={
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                      alt="Dribble Logo"
                    />
                  }
                >
                  <p className=" text-base font-semibold ">Chat on WhatsApp</p>
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="max-md:mt-6 col-span-3 max-lg:col-span-2 max-md:col-span-1">
          <FaqsAccordion />
        </div>
      </div>
    </>
  );
};

export default LandingFaqs;
