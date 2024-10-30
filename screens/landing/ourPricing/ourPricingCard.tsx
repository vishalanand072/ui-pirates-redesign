import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";

const data = [
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841109/widget-svgrepo-com_1_xflrym.svg",
    heading: "Web/Mobile Apps",
    description:
      "Ideal for building complete app or Saas, including design and development.",
    dev: "999",
    design: "999",
    devhr: "15",
    designhr: "20",
    list: [
      "4-6 week delivery",
      "30-50 screens",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "AI chatbot integration available",
      "Cross-platform development",
      "5/7 Communication",
    ],
    tab: true,
  },
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841107/Vectore_ididim.svg",
    heading: "Landing Pages & E-commerce",
    description:
      "Build high-conversion landing pages or full e-commerce platforms",
    dev: "499",
    design: "499",
    devhr: "15",
    designhr: "20",
    list: [
      "10-14 days turnaround time",
      "1-5 Pages",
      "High-conversion rate focus",
      "E-commerce functionality",
      "Responsive Design",
      "Predefined scope of work (SOW)",
      "5/7 Communication",
    ],
    tab: true,
  },
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841104/figma-component-svgrepo-com_1_mtgewy.svg",
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems with reusable components for consistent UI and easy integration.",
    design: "1,999",
    designhr: "20",
    list: [
      "2-4 weeks delivery",
      "Scalable design systems",
      "Development-ready components",
      "UI consistency",
      "5/7 Communication",
      "Reusable components",
      "Custom design library",
    ],
    tab: false,
  },
];

const dataPrice = [
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841103/video-library-svgrepo-com_1_edfhv4.svg",
    heading: "3D Animation + Motion Graphics",
    description:
      "Create stunning visuals and motion graphics for your digital projects with expert 3D animation and rendering.",
    price: "99",
    pricehr: "30",
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
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841102/Group_jgfe_zhcljv.svg",

    heading: "Partnership & Consultation ",
    description:
      "Perfect for ongoing design and development needs or flexible, undefined scopes. Get continuous support for your evolving projects.",
    price: "1,499",
    pricehr: "20",
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
  const tabs = [
    {
      id: "Design + Dev",
      label: "Design + Dev",
    },
    {
      id: "Design Only",
      label: "Design Only",
    },
    {
      id: "Dev Only",
      label: "Dev Only",
    },
  ];

  return (
    <div>
      <Card className="rounded-[48px] max-md:rounded-[38px] mt-4 bg-[#e9e9e9] dark:bg-[#18181b]">
        <CardBody className="gap-4 max-md:grid-cols-1 p-4 max-md:p-2">
          {data.map((item, index) => {
            const [selectedTab, setSelectedTab] = useState("Design + Dev");

            const handleTabChange = (id: any) => {
              setSelectedTab(id);
              console.log(`Tab for card ${index} selected:`, id);
            };

            return (
              <Card
                key={index}
                className="rounded-[40px] max-md:rounded-[30px]"
              >
                <CardBody className="p-8 max-md:p-4 max-lg:p-6 grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-4">
                  <div className="w-full">
                    <img
                      src={item.icon}
                      alt="service logo"
                      className="w-[40px]"
                    />
                    <p className="text-3xl max-md:text-xl mt-4 mb-4 font-semibold">
                      {item.heading}
                    </p>
                    <p className="text-lg max-md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-6 mb-4">
                      <p className="text-[#C5C5C5] text-lg">
                        {props.id === "Fixed" ? "Starting from" : "Hourly Rate"}
                      </p>
                      <div className="flex flex-row items-center justify-between">
                        <p className="text-4xl font-semibold mt-2 max-md:text-2xl">
                          {/* $ {item.price} */}
                          {props.id == "Fixed" ? (
                            selectedTab == "Design + Dev" ? (
                              <p>
                                <span className="text-2xl mr-[4px] ">$</span>
                                {item.design}
                                <span className="text-[#C5C5C5] text-lg font-light">
                                  {item.tab && "Design"}
                                </span>{" "}
                                {item.dev && (
                                  <>
                                    <span className="text-[#C5C5C5] ">+</span>{" "}
                                    <span className="text-2xl mr-[4px] ">
                                      $
                                    </span>
                                    {item.dev}
                                    <span className="text-[#C5C5C5] text-lg font-light">
                                      Dev
                                    </span>
                                  </>
                                )}
                              </p>
                            ) : selectedTab == "Design Only" ? (
                              <p className=" align-middle">
                                <span className="text-2xl mr-[4px] ">$</span>
                                {item.design}
                              </p>
                            ) : (
                              <p className=" align-middle">
                                <span className="text-2xl mr-[4px] ">$</span>
                                {item.dev}
                              </p>
                            )
                          ) : selectedTab == "Design + Dev" ? (
                            // <p>
                            //   <span className="text-2xl mr-[4px] ">$</span>
                            //   {item.designhr}{" "}
                            //   {item.devhr && (
                            //     <>
                            //       <span className="text-[#C5C5C5] ">+</span>{" "}
                            //       <span className="text-2xl mr-[4px] ">$</span>
                            //       {item.devhr}
                            //     </>
                            //   )}
                            // </p>

                            <p>
                              <span className="text-2xl mr-[4px] ">$</span>
                              {item.designhr}
                              <span className="text-[#C5C5C5] text-lg font-light">
                                {item.tab && "Design"}
                              </span>{" "}
                              {item.devhr && (
                                <>
                                  <span className="text-[#C5C5C5] ">+</span>{" "}
                                  <span className="text-2xl mr-[4px] ">$</span>
                                  {item.devhr}
                                  <span className="text-[#C5C5C5] text-lg font-light">
                                    Dev
                                  </span>
                                </>
                              )}
                            </p>
                          ) : selectedTab == "Design Only" ? (
                            <p>
                              <span className="text-2xl mr-[4px] ">$</span>
                              {item.designhr}
                            </p>
                          ) : (
                            <p>
                              <span className="text-2xl mr-[4px] ">$</span>
                              {`${item.devhr}`}
                            </p>
                          )}
                        </p>
                        {item.tab && (
                          <img
                            src={
                              selectedTab == "Design + Dev"
                                ? "https://res.cloudinary.com/damm9iwho/image/upload/v1730106610/designdev_f0onqh.svg"
                                : selectedTab == "Design Only"
                                  ? "https://res.cloudinary.com/damm9iwho/image/upload/v1730106610/design_oly_f4hn7l.svg"
                                  : "https://res.cloudinary.com/damm9iwho/image/upload/v1730106610/dev_grzer7.svg"
                            }
                            alt="design dev icon"
                            className="w-[36px] h-[32px]"
                          />
                        )}
                      </div>
                    </div>
                    <a
                      href="https://calendly.com/vishalanand072/ui-ux-discussion?month=2024-10"
                      target="blank"
                    >
                      <Button
                        className="bg-black text-white button dark:bg-white dark:text-black w-full"
                        startContent={
                          <img
                            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729594468/free_p7odqs.svg"
                            alt="Dribble Logo"
                          />
                        }
                      >
                        Book a 15-min call
                      </Button>
                    </a>
                  </div>

                  <div>
                    {item.list.map((listItem, listIndex) => (
                      <div
                        key={listIndex}
                        className="flex flex-row items-center mt-2 gap-2"
                      >
                        <img
                          src="https://res.cloudinary.com/damm9iwho/image/upload/v1729841108/Vectorw_mjuq5w.svg"
                          alt=""
                        />
                        <p className=" text-lg">{listItem}</p>
                      </div>
                    ))}
                    {item.tab && (
                      <div className="flex w-full flex-col items-start justify-end mt-8 max-sm:mt-6">
                        <Tabs
                          aria-label="Dynamic tabs"
                          items={tabs}
                          classNames={{
                            cursor: "w-full bg-black text-black",
                            tab: "px-6 max-lg:px-2",
                            tabContent: "group-data-[selected=true]:text-white",
                          }}
                          onSelectionChange={(key) => handleTabChange(key)}
                        >
                          {tabs.map((tabItem) => (
                            <Tab
                              key={tabItem.id}
                              title={tabItem.label}
                              className="max-md:text-xs"
                            />
                          ))}
                        </Tabs>
                      </div>
                    )}
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
                          src={item.icon}
                          alt="behance Logo"
                          className="w-[45px]"
                        />
                        {item.limited && (
                          <Chip
                            radius="sm"
                            className=" text-sm text-[#7B7B7B] px-2 rounded-lg bg-[#E9E9E9]"
                            startContent={
                              <img
                                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729841595/svg1994013495_1681_qv43ow.svg"
                                className="w-[14px]"
                              />
                            }
                          >
                            Limited availability
                          </Chip>
                        )}
                      </div>

                      <p className="text-3xl max-md:text-xl mt-4 mb-4 font-semibold pr-12">
                        {item.heading}
                      </p>
                      <p className="text-lg max-md:text-base">
                        {item.description}
                      </p>
                      <div className="mt-6 mb-4">
                        <p className="text-[#C5C5C5] text-lg">
                          {props.id == "Fixed"
                            ? "Starting from"
                            : "Hourly Rate"}
                        </p>
                        <p className="text-4xl font-semibold mt-2">
                          <span className="text-2xl mr-[4px] ">$</span>
                          {props.id == "Fixed" ? item.price : item.pricehr}
                        </p>
                      </div>
                      <a
                        href="https://calendly.com/vishalanand072/ui-ux-discussion?month=2024-10"
                        target="blank"
                      >
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
                      </a>
                    </div>

                    <div className="">
                      {item.list.map((items, indexs) => {
                        return (
                          <div className="flex flex-row items-start mt-2 gap-2">
                            <img
                              src="https://res.cloudinary.com/damm9iwho/image/upload/v1729841108/Vectorw_mjuq5w.svg"
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
  );
};

export default OurPricingCard;
