// components/LandingFooter.tsx
"use client";
import { Button } from "@nextui-org/button";
import CircularImage from "./circularImage";
import { useState } from "react";

const footerIcon = [
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665622/ri_linkedin-fill_nivdt4.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/bxl_upwork_qojqwz.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/uil_behance_ky54am.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1730786563/uil_behance_mf89uz.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/Frame_1000006225_bafxox.svg",
];

const images = [
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665622/ri_linkedin-fill_nivdt4.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/InstagramLogo_tqqxe8.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/bxl_upwork_qojqwz.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/uil_behance_ky54am.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/Frame_1000006225_bafxox.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665622/ri_linkedin-fill_nivdt4.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/InstagramLogo_tqqxe8.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/bxl_upwork_qojqwz.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/uil_behance_ky54am.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/Frame_1000006225_bafxox.svg",
];

const LandingFooter = () => {
  const [isHoveredChat, setIsHoveredChat] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden h-screen max-md:h-[90vh]   max-lg:h-[90vh]  bg-black rounded-tr-[100px] rounded-tl-[100px] max-md:rounded-tr-[50px] max-md:rounded-tl-[50px] ">
        <div className="relative h-screen  max-md:h-[90vh]   max-lg:h-[90vh] flex items-center justify-center max-lg:hidden">
          <CircularImage images={images} />
        </div>

        <div className="h-[100vh] max-md:h-[90vh]   max-lg:h-[90vh]  text-white max-md:px-12">
          <div className="flex flex-row items-center justify-center h-full">
            <div className="pt-32 absolute bottom-8">
              <div className="flex flex-row items-center justify-center">
                <p className="text-center text-5xl md:w-3/4 mb-3 font-bold max-md:mb-5">
                  Ready to bring your vision to life?
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p className="text-center text-lg md:w-1/2 max-md:px-4">
                  Schedule a call or send us a WhatsApp message, and let’s get
                  started!
                </p>
              </div>
              <div className="mt-12 flex flex-row items-center justify-center max-lg:flex-col w-full">
                <a
                  href="https://cal.com/vishal-anand/introduction-and-free-ui-ux-strategy-session"
                  target="blank"
                >
                  <div className="bg-white text-black button group transform  transition-all duration-[600ms] ease-in-out max-md:px-4 px-6 py-2 buttonHero md:hover:pl-12  flex flow-row items-center gap-3">
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
                <a
                  href="https://wa.link/i35lma"
                  target="_blank"
                  className="w-[300px] max-lg:mt-3 lg:ml-3"
                >
                  <Button
                    color="primary"
                    variant="bordered"
                    className=" border-gray-100 text-white font-bold w-full hover:border-gray-200 px-[70px] py-[25px]"
                    style={{ width: "100%" }}
                    onMouseEnter={() => setIsHoveredChat(true)}
                    onMouseLeave={() => setIsHoveredChat(false)}
                  >
                    <div className="flex flex-col items-center justify-center max-h-[24px] overflow-hidden">
                      <span
                        className={`text-white transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-x-3 ${
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
                        className={`text-white w-full transition-transform duration-300 ease-in-out transform flex flex-row items-center gap-3 ${
                          isHoveredChat
                            ? "-translate-y-2"
                            : "translate-y-[50px]"
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
              </div>
              <div className="flex flex-row items-center justify-center mt-4">
                <div className="flex flex-row">
                  {footerIcon.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt="Social Logo"
                      className="w-[70px] h-[70px] max-md:w-[40px] max-md:h-[40px]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-center mt-4" style={{ zIndex: 9999 }}>
                Copyright© 2023 UI Pirates. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* <div
          className="h-20 w-full bg-red-100 absolute bottom-0 blur-md"
          style={{ zIndex: 9 }}
        ></div> */}
      </div>
    </>
  );
};

export default LandingFooter;
