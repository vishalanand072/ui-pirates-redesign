// components/LandingFooter.tsx
"use client";
import { Button } from "@nextui-org/button";
import CircularImage from "./circularImage";
import { useState } from "react";

const footerSocialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/ui-pirate-by-vishal-anand/",
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729665622/ri_linkedin-fill_nivdt4.svg",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/agencies/1837026757439552424/",
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/bxl_upwork_qojqwz.svg",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/vishalanand-UI-UX",
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/uil_behance_ky54am.svg",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/vishalanandUIUX",
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1730786563/uil_behance_mf89uz.svg",
  },
  {
    name: "Clutch",
    url: "https://clutch.co/profile/ui-pirate-vishal-anand",
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/Frame_1000006225_bafxox.svg", // Using existing icon as fallback
  },
  {
    name: "Google Maps",
    url: "https://maps.app.goo.gl/tcp9QiMqsUmN7xoY8",
    icon: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1751630868/maps_icon-s_rgw06n.svg", // Using LinkedIn icon as placeholder for Maps
  },
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
              <div className="flex flex-col items-center justify-center mt-6">
                <p className="text-center text-sm text-gray-300 mb-3">
                  Follow us on
                </p>
                <div className="flex flex-row gap-3 flex-wrap justify-center">
                  {footerSocialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition-all duration-300 hover:scale-110 hover:opacity-80 p-2 rounded-lg hover:bg-white/10"
                      title={`Visit UI Pirate on ${item.name}`}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.name} Logo`}
                        className="w-[60px] h-[60px] max-md:w-[35px] max-md:h-[35px] filter hover:brightness-110"
                      />
                    </a>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-400 mt-2">
                  LinkedIn • Upwork • Behance • Dribbble • Clutch • Google Maps
                </p>
              </div>
              <p
                className="text-center mt-6 text-gray-300"
                style={{ zIndex: 9999 }}
              >
                Copyright© 2025 UI Pirate by Vishal Anand. All Rights Reserved.
              </p>

              {/* Structured Data for Social Links */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "UI Pirate by Vishal Anand",
                    url: "https://uipirate.com",
                    sameAs: footerSocialLinks.map((link) => link.url),
                  }),
                }}
              />
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
