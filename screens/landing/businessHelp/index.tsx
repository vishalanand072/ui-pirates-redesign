import PricingCard from "./pricingCard";
const LandingBusinessHelp = () => {
  return (
    <>
      <div className=" container mx-auto lg:px-12 max-md:px-4">
        <div>
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1730973383/services_f0hzhb.svg"
              alt=""
            />
          </div>
          <p className="heading-center">How We Help Your Business</p>
          <div className="flex flex-row items-center justify-center mb-12 mt-3 px-40 max-lg:px-32 max-md:px-8">
            <p className="md:w-1/2 text-center content-center font-[500] leading-[25.2px]">
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
