import PricingCard from "./pricingCard";
const LandingBusinessHelp = () => {
  return (
    <>
      <div className=" container mx-auto lg:px-12 max-md:px-4">
        <div>
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1730877720/services_ku51c3.svg"
              alt=""
            />
          </div>
          <p className="text-center text-5xl max-lg:text-4xl max-md:text-2xl font-[700]">
            How We Help Your Business
          </p>
          <div className="flex flex-row items-center justify-center mb-12 mt-3 px-40 max-lg:px-32 max-md:px-8">
            <p className="md:w-1/2 text-center content-center">
              Strategic design and development to help companies build better
              digital products and experiences.
            </p>
          </div>
        </div>
        <PricingCard />
      </div>
    </>
  );
};

export default LandingBusinessHelp;
