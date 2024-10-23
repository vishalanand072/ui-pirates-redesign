import { Button } from "@nextui-org/button";

const LandingHero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-28 w-full max-lg:py-28 max-md:py-20">
        <div className="flex flex-col items-center w-screen overflow-hidden pt-8">
          <img
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729510050/heroimg_itvpw6.svg"
            alt="Dribble Logo"
            className="w-[40%] max-md:w-[100%] max-lg:w-[65%]"
          />

          <div className="text-7xl px-72 text-center font-semibold max-lg:text-5xl max-md:text-4xl max-md:px-4 max-lg:px-32 -mt-8 ">
            World-class design for <span className="">Saas & Tech</span>{" "}
            companies
          </div>
          <p className="lg:w-1/2 text-center text-lg mt-4 px-48 max-md:px-0 max-lg:12">
            We build products that work for users and drive business growth
          </p>

          <div className="mt-12 flex flex-row items-center max-md:flex-col">
            <Button
              className="bg-black text-white button dark:bg-white dark:text-black "
              startContent={
                <img
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                  alt="Dribble Logo"
                  className="w-[100%]"
                />
              }
            >
              Book a 15-min call
            </Button>
            <Button
              color="primary"
              variant="bordered"
              className="md:ml-4 max-md:mt-4 border-gray-300 text-black button dark:text-white font-bold"
              startContent={
                <img
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                  alt="Dribble Logo"
                  className="w-[100%]"
                />
              }
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
