import AboutCardAnimation from "./aboutCard";
const LandingAbout = () => {
  return (
    <>
      <div className=" container mx-auto lg:px-40 max-md:px-4 mt-32">
        <div>
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729857387/Div_framer-3TZmM_zrisqv.svg"
              alt=""
            />
          </div>
          <p className="text-center text-5xl max-lg:text-4xl max-md:text-2xl font-semibold">
            Who We Are
          </p>
          <div className="flex flex-row items-center justify-center mb-8 mt-5 max-md:px-8">
            <p className="md:w-1/2 text-center content-center px-8  max-lg:px-4 max-md:px-0">
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
