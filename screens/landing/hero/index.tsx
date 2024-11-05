import { Button } from "@nextui-org/button";
import BookCallButton from "./buttonHover";
import AnimatedButton from "./buttonHover";
const LandingHero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-12 w-full max-lg:py-12 max-md:py-4 container mx-auto overflow-hidden">
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden pt-8">
          <div className="flex flex-row items-center justify-center overflow-hidden w-full ">
            <div className="flex flex-row overflow-hidden">
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768369/hero1_p6oklo.svg"
                alt="Dribble Logo"
                className="w-[80px] h-[130px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-110  hover:rotate-[5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768370/hero2_xt2zum.svg"
                alt="Dribble Logo"
                className="w-[80px] h-[130px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-110  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768377/hero3_shxbjv.svg"
                alt="Dribble Logo"
                className="w-[80px] h-[130px] max-md:w-[60px] max-md:h-[100px]  transform transition duration-500 hover:scale-110  hover:rotate-[7deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768370/hero4_hrsvsr.svg"
                alt="Dribble Logo"
                className="w-[80px] h-[130px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-110  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1730714974/Div_framer-9crwzt_qjulqg.svg"
                alt="Dribble Logo"
                className="w-[80px] h-[130px] max-md:w-[60px] max-md:h-[100px] transform transition duration-500 hover:scale-110 hover:rotate-[-5deg]"
              />
            </div>
          </div>

          <div className="text-7xl px-48 text-center font-semibold max-lg:text-5xl max-md:text-4xl max-md:px-6 max-lg:px-12 mt-3 max-xl:px-12 max-2xl:px-32 ">
            Modern, scalable design for{" "}
            <span className="bg-gradient-to-b to-[#64B5F6] from-[#6A4DFF] bg-clip-text text-transparent">
              Saas & Tech
            </span>{" "}
            companies
          </div>
          <p className="lg:w-1/2 text-center text-lg mt-4 px-36 max-md:px-4 max-lg:12">
            We build products that work for users and drive business growth
          </p>

          <div className="mt-12 flex flex-row items-center max-md:flex-col">
            <a
              href="https://calendly.com/vishalanand072/ui-ux-discussion?month=2024-10"
              target="blank"
            >
              {/* <Button
                className="bg-black text-white button dark:bg-white dark:text-black group transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:scale-x-10 -pl-32"
                startContent={
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                      alt="Dribble Logo"
                      className="w-[100%] h-[30px] transition-transform duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    />

                    <p className="text-[#5B5B5B] text-xl font-bold transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1">
                      +
                    </p>

                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1730289917/Frame_1984078767_sjyim4.svg"
                      alt="Dribble Logo"
                      className="w-[100%] h-[30px] transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1"
                    />
                  </div>
                }
                endContent={
                  <div>
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                      alt="Dribble Logo"
                      className="w-[100%] h-[30px]"
                    />
                  </div>
                }
              >
                Book a 15-min call
              </Button> */}
              <Button
                className="bg-black text-white button dark:bg-white dark:text-black group transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:scale-x-110 px-6 py-2 buttonHero"
                startContent={
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                      alt="Dribble Logo"
                      className="w-auto h-[30px] transition-transform duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    />

                    <p className="text-[#5B5B5B] text-xl font-bold hidden group-hover:inline-block transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform translate-x-5 group-hover:translate-x-0">
                      +
                    </p>

                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1730289917/Frame_1984078767_sjyim4.svg"
                      alt="Dribble Logo"
                      className="w-auto h-[30px] hidden group-hover:inline-block transition-all duration-[1500ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform translate-x-5 group-hover:translate-x-0"
                    />
                  </div>
                }
                endContent={
                  <div>
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                      alt="Dribble Logo"
                      className="w-auto h-[30px]"
                    />
                  </div>
                }
              >
                Book a 15-min call
              </Button>
            </a>
            <div className="max-md:w-[100%]">
              <a href="https://wa.link/i35lma" target="_blank">
                <Button
                  color="primary"
                  variant="bordered"
                  className="md:ml-4 max-md:mt-4 border-gray-300 text-black button dark:text-white font-bold w-full"
                  startContent={
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729511358/whatsapp_zssebt.svg"
                      alt="Dribble Logo"
                      className="w-[30px]  h-[30px] font-bold"
                    />
                  }
                >
                  Chat
                </Button>
              </a>
              {/* <AnimatedButton /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
