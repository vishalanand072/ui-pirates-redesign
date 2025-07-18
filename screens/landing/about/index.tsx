import AboutCardAnimation from "./aboutCard";
const LandingAbout = () => {
  return (
    <>
      <div className=" container mx-auto lg:px-40 max-md:px-4  pt-32 max-md:pt-24 ">
        <div className="autoShow">
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1730981156/Div_framer-1nycyfv_slcii0.svg"
              alt=""
            />
          </div>
          <h2 className="heading-center">Who We Are</h2>
          <div className="flex flex-row items-center justify-center mb-8 mt-3 max-md:px-8">
            <p className="md:w-1/2 text-center content-center px-8  max-lg:px-4 max-md:px-0 font[500]">
              Combining creativity and technology to deliver standout websites
              and app experiences.
            </p>
          </div>
        </div>
      </div>{" "}
      <div
        style={{ overflowX: "hidden" }}
        className="mx-auto px-32 lg:px-20 max-md:px-4 "
      >
        <AboutCardAnimation />
      </div>
    </>
  );
};

export default LandingAbout;
