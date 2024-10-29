import { Button } from "@nextui-org/button";
import CircularImage from "./circularImage";

const footerIcon = [
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665622/ri_linkedin-fill_nivdt4.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/InstagramLogo_tqqxe8.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665602/bxl_upwork_qojqwz.svg",
  "https://res.cloudinary.com/damm9iwho/image/upload/v1729665601/uil_behance_ky54am.svg",
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
  return (
    <>
      <div className="relative overflow-hidden h-screen mt-12">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            contain: "content",
            height: "100vh",
          }}
          // className=" absolute top-0 pl-[45vh] max-lg:pl-[10vh]"
          className=" absolute max-md:hidden"
        >
          <CircularImage images={images} />
        </div>

        <div className="h-[100vh] max-md:h-[100vh] bg-black rounded-tr-[100px] rounded-tl-[100px]  max-md:rounded-tr-[50px] max-md:rounded-tl-[50px]  text-white max-md:px-12">
          <div className="flex flex-row items-center justify-center h-full">
            <div className=" pt-32 absolute bottom-8">
              <div className="flex flex-row items-center justify-center">
                <p className="text-center text-5xl md:w-3/4 mb-3 font-bold">
                  Ready to bring your vision to life?
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p className="text-center text-lg md:w-1/2 max-md:px-4">
                  Schedule a call or send us a WhatsApp message, and let’s get
                  started!
                </p>
              </div>
              <div className="mt-12 flex flex-row items-center justify-center max-md:flex-col w-full">
                <a
                  href="https://calendly.com/vishalanand072/ui-ux-discussion?month=2024-10"
                  target="blank"
                >
                  <Button
                    className=" button bg-white text-black "
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
                  className="md:ml-4 max-md:mt-4 border-gray-300 text-white button dark:text-white font-bold"
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
              <div className="flex flex-row items-center justify-center mt-4">
                <div className="flex flex-row ">
                  {footerIcon.map((item, index) => {
                    return (
                      <img
                        src={item}
                        alt="Dribble Logo"
                        className="w-[70px] h-[70px] max-md:w-[40px] max-md:h-[40px]"
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-center mt-4">
                Copyright© 2023 UI Pirates. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
