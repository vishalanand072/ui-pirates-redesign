import { Button } from "@nextui-org/button";

const LandingHero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-28 w-full max-lg:py-28 max-md:py-20 container mx-auto overflow-hidden">
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden pt-8">
          <div className="flex flex-row items-center justify-center overflow-hidden w-full ">
            <div className="flex flex-row overflow-hidden">
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729683237/Div_framer-ly1pbp_e81se2.svg"
                alt="Dribble Logo"
                className="w-[100px] h-[150px]  transform transition duration-500 hover:scale-110  hover:rotate-[5deg] max-md:hidden"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729683238/Div_framer-1nnkmr2_qp6ixs.svg"
                alt="Dribble Logo"
                className="w-[100px] h-[150px]  transform transition duration-500 hover:scale-110  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729683246/Div_framer-1afektp_rzs7cu.svg"
                alt="Dribble Logo"
                className="w-[100px] h-[150px]  transform transition duration-500 hover:scale-110  hover:rotate-[7deg]"
              />

              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729683236/Div_framer-10onn91_ma3aqp.svg"
                alt="Dribble Logo"
                className="w-[100px] h-[150px]  transform transition duration-500 hover:scale-110  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729683234/Div_framer-9crwzt_yxjjd2.svg"
                alt="Dribble Logo"
                className="w-[100px] h-[150px]  transform transition duration-500 hover:scale-110 hover:rotate-[-5deg] max-md:hidden"
              />
            </div>
          </div>

          <div className="text-7xl px-40 text-center font-semibold max-lg:text-5xl max-md:text-4xl max-md:px-4 max-lg:px-32 -mt-8 ">
            World-class design for <br />
            <span className="bg-gradient-to-b to-[#64B5F6] from-[#6A4DFF] bg-clip-text text-transparent">
              Saas & Tech
            </span>{" "}
            companies
          </div>
          <p className="lg:w-1/2 text-center text-lg mt-4 px-32 max-md:px-0 max-lg:12">
            We build products that work for users and drive business growth
          </p>

          <div className="mt-12 flex flex-row items-center max-md:flex-col">
            <a
              href="https://calendly.com/vishalanand072/ui-ux-discussion?month=2024-10"
              target="blank"
            >
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
            </a>
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
              Chat
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
