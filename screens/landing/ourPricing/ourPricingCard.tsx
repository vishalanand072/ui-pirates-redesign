import { Button, Card, CardBody, chip, Chip } from "@nextui-org/react";
import { Tabs, Tab, CardHeader } from "@nextui-org/react";

const data = [
  {
    heading: "Web/Mobile Apps",
    description:
      "Ideal for building complete app or Saas, including design and development.",
    price: "1,000",
    list: [
      "4-6 week delivery",
      "30-50 screens",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "AI chatbot integration available",
      "Cross-platform development",
      "5/7 Communication",
    ],
  },
  {
    heading: "Landing Pages & E-commerce",
    description:
      "Build high-conversion landing pages or full e-commerce platforms",
    price: "499",
    list: [
      "10-14 days turnaround time",
      "1-5 Pages",
      "High-conversion rate focus",
      "E-commerce functionality",
      "Responsive Design",
      "Predefined scope of work (SOW)",
      "5/7 Communication",
    ],
  },
  {
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems with reusable components for consistent UI and easy integration.",
    price: "1,999",
    list: [
      "2-4 weeks delivery",
      "Scalable design systems",
      "Development-ready components",
      "UI consistency",
      "5/7 Communication",
      "Reusable components",
      "Custom design library",
    ],
  },
];

const dataPrice = [
  {
    heading: "3D Animation + Motion Graphics",
    description:
      "Create stunning visuals and motion graphics for your digital projects with expert 3D animation and rendering.",
    price: "99",
    list: [
      "4-6 weeks delivery",
      "Custom motion graphics",
      "High-end 3D rendering",
      "Cross-platform visuals",
      "5/7 Communication",
      "Interactive animations",
      "Development-ready assets",
    ],
    limited: false,
  },
  {
    heading: "Partnership & Consultation ",
    description:
      "Perfect for ongoing design and development needs or flexible, undefined scopes. Get continuous support for your evolving projects.",
    price: "1,499",
    list: [
      "Flexible scope of work",
      "End-to-end project management",
      "Unlimited Design request & revisions",
      "Design & dev consultation",
      "5/7 Communication",
      "1-3 days updates + 1 sync call/week",
      "UI Development",
    ],
    limited: true,
  },
];
const OurPricingCard = (props: any) => {
  let tabs = [
    {
      id: "Design Only",
      label: "Design Only",
    },
    {
      id: "Dev Only",
      label: "Dev Only",
    },
    {
      id: "Design + Dev",
      label: "Design + Dev",
    },
  ];
  return (
    <>
      <div>
        <Card className="rounded-[48px] mt-4 bg-[#e9e9e9] dark:bg-[#18181b]">
          <CardBody className="gap-4 max-md:grid-cols-1 p-4 max-md:p-2">
            {data.map((item, index) => {
              return (
                <Card className="rounded-[40px]">
                  <CardBody className="p-8 max-md:p-4 max-lg:p-6 grid grid-cols-2 gap-12 max-md:grid-cols-1">
                    <div className="w-full">
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729659876/svg1096732083_2596_tio9cb.svg"
                        alt="behance Logo"
                        className="w-[40px]"
                      />
                      <p className="text-3xl max-md:text-xl mt-4 mb-4 font-semibold">
                        {item.heading} {props.id}
                      </p>
                      <p className="text-lg max-md:text-base">
                        {item.description}
                      </p>
                      <div className="mt-6 mb-4">
                        <p className="text-[#C5C5C5] text-lg">Starting from</p>
                        <p className="text-4xl font-semibold mt-2">
                          $ {item.price}
                        </p>
                      </div>
                      <Button
                        className="bg-black text-white button dark:bg-white dark:text-black w-full"
                        startContent={
                          <img
                            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                            alt="Dribble Logo"
                            className=""
                          />
                        }
                      >
                        Book a 15-min call
                      </Button>
                    </div>

                    <div>
                      <div>
                        {item.list.map((items, indexs) => {
                          return (
                            <div className="flex flex-row items-center mt-2 gap-2">
                              <img
                                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729659619/svg2117386749_2472_qlrpim.svg"
                                alt=""
                              />
                              <p className=" text-lg">{items}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex w-full flex-col items-start justify-end mt-8">
                        <Tabs
                          aria-label="Dynamic tabs"
                          items={tabs}
                          classNames={{
                            // tabList:
                            //   "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                            cursor: "w-full bg-black text-black",
                            tab: "px-6 max-lg:px-2 ",
                            tabContent: "group-data-[selected=true]:text-white",
                          }}
                        >
                          {(item) => (
                            <Tab
                              key={item.id}
                              title={item.label}
                              className="max-md:text-xs"
                            >
                              {/* <OurPricingCard id={item.id} /> */}
                            </Tab>
                          )}
                        </Tabs>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              {dataPrice.map((item, index) => {
                return (
                  <Card className="rounded-[40px]">
                    <CardBody className="p-8 max-md:p-4 max-lg:p-6 grid grid-cols-1 gap-4 max-md:grid-cols-1">
                      <div className="w-full">
                        <div className="flex flex-row items-center justify-between">
                          <img
                            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729661220/campus_exryq3.svg"
                            alt="behance Logo"
                            className="w-[45px]"
                          />
                          {item.limited && (
                            <Chip
                              radius="md"
                              className="m-2 text-lg text-gray-600"
                            >
                              Limited availability
                            </Chip>
                          )}
                        </div>

                        <p className="text-3xl max-md:text-xl mt-4 mb-4 font-semibold pr-12">
                          {item.heading} {props.id}
                        </p>
                        <p className="text-lg max-md:text-base">
                          {item.description}
                        </p>
                        <div className="mt-6 mb-4">
                          <p className="text-[#C5C5C5] text-lg">
                            Starting from
                          </p>
                          <p className="text-4xl font-semibold mt-2">
                            $ {item.price}
                          </p>
                        </div>
                        <Button
                          className="bg-black text-white button dark:bg-white dark:text-black w-full"
                          startContent={
                            <img
                              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                              alt="Dribble Logo"
                              className=""
                            />
                          }
                        >
                          Book a 15-min call
                        </Button>
                      </div>

                      <div className="">
                        {item.list.map((items, indexs) => {
                          return (
                            <div className="flex flex-row items-start mt-2 gap-2">
                              <img
                                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729659619/svg2117386749_2472_qlrpim.svg"
                                alt=""
                              />
                              <p className=" text-lg">{items}</p>
                            </div>
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default OurPricingCard;
