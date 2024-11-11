import { Button } from "@nextui-org/button";
const LandingHero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-16 w-full max-lg:py-12 max-md:py-4 container mx-auto overflow-hidden">
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden pt-8">
          <div className="flex flex-row items-center justify-center overflow-hidden w-full ">
            <div className="flex flex-row overflow-hidden">
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1730885769/kartik_n62nvw.svg"
                alt="Dribble Logo"
                className="w-[60px] h-[100px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-125  hover:rotate-[5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768370/hero2_xt2zum.svg"
                alt="Dribble Logo"
                className="w-[60px] h-[100px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-125  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768377/hero3_shxbjv.svg"
                alt="Dribble Logo"
                className="w-[70px] h-[110px] max-md:w-[60px] max-md:h-[100px]  transform transition duration-500 hover:scale-125  hover:rotate-[7deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729768370/hero4_hrsvsr.svg"
                alt="Dribble Logo"
                className="w-[60px] h-[100px] max-md:w-[60px] max-md:h-[100px]   transform transition duration-500 hover:scale-125  hover:rotate-[-5deg]"
              />
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1731309710/sharmin_ad0xqu.svg"
                alt="Dribble Logo"
                className="w-[60px] h-[100px] max-md:w-[60px] max-md:h-[100px] transform transition duration-500 hover:scale-125 hover:rotate-[-5deg]"
              />
            </div>
          </div>

          <div className="text-7xl px-56 text-center font-[700] max-md:font-[600] max-lg:text-5xl max-md:text-4xl max-md:px-6 max-lg:px-12 mt-3 max-xl:px-12 max-2xl:px-32 tracking-[-1.5px] leading-[80px]">
            Modern, scalable design for{" "}
            {/* {" "}
            <span className="bg-gradient-to-b to-[#64B5F6] from-[#6A4DFF] bg-clip-text text-transparent">
              Saas & Tech
            </span>{" "} */}
            Saas & Tech companies
          </div>
          <p className="lg:w-1/2 text-center text-lg mt-4 px-40 max-md:px-4 max-lg:12 font-sans leading-[25.2px]">
            We build products that work for users and drive business growth
          </p>

          <div className="mt-12 flex flex-row items-center max-md:flex-col max-md:px-2">
            <a
              href="https://cal.com/vishal-anand/introduction-and-free-ui-ux-strategy-session"
              target="blank"
            >
              <div className="bg-black text-white button group transform  transition-all duration-[600ms] ease-in-out max-md:px-4 px-6 py-2 buttonHero md:hover:pl-12 hover:bg-black flex flow-row items-center gap-3">
                <div className="flex flex-row gap-2 items-center md:mr-11">
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1730289917/Frame_1984078767_sjyim4.svg"
                    alt="Dribble Logo"
                    id="image"
                    className="w-auto h-[30px] md:absolute  transform translate-x-0 transition-all duration-[580ms] ease-in-out  md:group-hover:translate-x-4 max-md:order-3  md:order-1 md:group-hover:order-3"
                  />
                  <p
                    id="plus"
                    className="text-[#5B5B5B] text-xl font-bold md:absolute order-2 -mt-1"
                  >
                    +
                  </p>
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729761707/vishal_profile_d2fbyt.svg"
                    alt="Dribble Logo"
                    id="client"
                    className="w-auto h-[30px] md:absolute  transform translate-x-0 transition-all duration-500 ease-in-out  md:group-hover:-translate-x-[2.1rem] max-md:order-1  md:order-3 md:group-hover:order-1"
                  />
                </div>
                <p> Book a 15-min call</p>
                <div>
                  <img
                    src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                    alt="Dribble Logo"
                    className="w-auto h-[30px]"
                  />
                </div>
              </div>
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
