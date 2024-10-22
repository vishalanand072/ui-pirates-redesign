import { Button } from "@nextui-org/button";

const LandingHero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center w-screen overflow-hidden pt-8">
          <img
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729510050/heroimg_itvpw6.svg"
            alt="Dribble Logo"
            className="w-[50%] max-md:w-[80%] max-lg:w-[65%]"
          />

          <div className="text-7xl px-72 text-center font-semibold max-md:text-4xl max-md:px-4 max-lg:text-6xl max-lg:px-32 -mt-8">
            World-class design for <p className="">Saas & Tech</p> companies
          </div>
          <p className="w-1/2 text-center text-lg mt-4">
            We build products that work for users and drive business growth
          </p>
          {/* <div className="content text-anim ">
            <h1 className="title">
              the beautiful aurora
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div> */}
          <div className="mt-12 flex flex-row items-center">
            <Button className="bg-black text-white button dark:bg-white dark:text-black ">
              Book a 15-min call
            </Button>
            <Button
              color="primary"
              variant="bordered"
              className="ml-4 border-gray-300 text-black button dark:text-white"
              startContent={
                <img
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                  alt="Dribble Logo"
                  className="w-[100%]"
                />
              }
            >
              Bordered
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
