import OurPricingCard from "./ourPricingCard";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
const LandingOurPricing = () => {
  let tabs = [
    {
      id: "Hourly",
      label: "Hourly",
    },
    {
      id: "Fixed",
      label: "Fixed",
    },
  ];
  return (
    <>
      <div className=" container mx-auto xl:px-48 max-md:px-4 mt-32 max-xl:px-12">
        <div>
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729597126/plans_bmcmmc.svg"
              alt=""
            />
          </div>
          <p className="text-center text-5xl max-lg:text-4xl max-md:text-2xl font-semibold">
            Our Pricing
          </p>
          <div className="flex flex-row items-center justify-center mb-8 mt-5 px-32 max-lg:px-32 max-md:px-8 max-xl:px-32">
            <p className="md:w-1/2 text-center content-center">
              Choose between fixed pricing or hourly rates to suit your project
              scope.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <Tabs
            aria-label="Dynamic tabs"
            items={tabs}
            classNames={{
              // tabList:
              //   "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-black text-black",
              tab: "px-12 ",
              tabContent: "group-data-[selected=true]:text-white",
            }}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <OurPricingCard id={item.id} />
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default LandingOurPricing;
