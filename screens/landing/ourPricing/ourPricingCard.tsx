import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";
import ListMap from "./list";

const data = [
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841109/widget-svgrepo-com_1_xflrym.svg",
    heading: "Web/Mobile Apps",
    description:
      "Ideal for building complete app or Saas, including design and development.",
    dev: "499",
    design: "1999",
    designDev: "2399",
    devhr: "20",
    designhr: "15",
    list: [
      "8-12 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "End-to-end design and development",
      "Functional prototypes for testing",
      "Cross-platform testing",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDev: [
      "6-8 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "Fully responsive code",
      "Custom frontend development",
      "Backend integration (API-ready)",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDesign: [
      "4-6 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "Interactive prototypes",
      "3 rounds of revisions included",
      "Design files (Figma) provided",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listhr: [
      "8-12 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "End-to-end design and development",
      "Functional prototypes for testing",
      "Cross-platform testing",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDevhr: [
      "6-8 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "Fully responsive code",
      "Custom frontend development",
      "Backend integration (API-ready)",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDesignhr: [
      "4-6 week delivery",
      "SaaS design ready",
      "Predefined scope of work (SOW)",
      "Interactive prototypes",
      "3 rounds of revisions included",
      "Design files (Figma) provided",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    tab: true,
  },
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841107/Vectore_ididim.svg",
    heading: "Landing Pages & E-commerce",
    description:
      "Build high-conversion landing pages or full e-commerce platforms",
    dev: "299",
    design: "499",
    designDev: "699",
    devhr: "20",
    designhr: "15",
    list: [
      "4-6 week delivery",
      "1-5 Pages",
      "End-to-end design & development",
      "E-commerce integrations",
      "SEO-optimized structure",
      "Analytics & tracking integration",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDev: [
      "3-4 week delivery",
      "1-5 Pages",
      "CMS integration (if needed)",
      "SSL & basic security setup",
      "Payment gateway integration (if needed)",
      "Responsive coding (desktop & mobile)",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDesign: [
      "2-3 week delivery",
      "1-5 Pages",
      "Up to 3 rounds of revisions",
      "Custom, conversion-focused design",
      "E-commerce functionality",
      "Mobile-responsive layouts",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listhr: [
      "4-6 week delivery",
      "1-5 Pages",
      "End-to-end design & development",
      "E-commerce integrations",
      "SEO-optimized structure",
      "Analytics & tracking integration",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDevhr: [
      "3-4 week delivery",
      "1-5 Pages",
      "CMS integration (if needed)",
      "SSL & basic security setup",
      "Payment gateway integration (if needed)",
      "Responsive coding (desktop & mobile)",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listDesignhr: [
      "2-3 week delivery",
      "1-5 Pages",
      "Up to 3 rounds of revisions",
      "Custom, conversion-focused design",
      "E-commerce functionality",
      "Mobile-responsive layouts",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    tab: true,
  },
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841104/figma-component-svgrepo-com_1_mtgewy.svg",
    heading: "Design Systems & Component Libraries",
    description:
      "Scalable design systems with reusable components for consistent UI and easy integration.",
    designDev: "1,199",
    designhr: "15",
    list: [
      "1-2 month delivery",
      "Consistent UI components",
      "Scalable design assets",
      "Brand guidelines integration",
      "Documented usage guidelines",
      "Cross-platform consistency",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    listhr: [
      "1-2 month delivery",
      "Consistent UI components",
      "Scalable design assets",
      "Brand guidelines integration",
      "Documented usage guidelines",
      "Cross-platform consistency",
      "5/7 communication via Teams, Meet, or Zoom",
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
    price: "49",
    pricehr: "30",
    list: [
      "1-4 weeks delivery",
      "Custom motion graphics",
      "High-end 3D rendering",
      "Interactive animations",
      "Development-ready assets",
      "3 rounds of revisions",
      "Compatible with web & social",
      "50/30/20 payment schedule",
      "5/7 communication via Teams, Meet, or Zoom",
    ],
    limited: false,
  },
  {
    icon: "https://res.cloudinary.com/damm9iwho/image/upload/v1729841102/Group_jgfe_zhcljv.svg",

    heading: "Partnership & Consultation ",
    description:
      "Perfect for ongoing design & development needs or flexible, undefined scopes. Get continuous support for your projects.",
    price: "999",
    pricehr: "20",
    list: [
      "Flexible scope of work",
      "End-to-end project management",
      "Unlimited Design request & revisions",
      "Design & dev consultation",
      "Heuristic analysis",
      "Recommendations for improvement",
      "Visual/UX critique",
      "50/30/20 payment schedule",
      "1-3 days updates + 1 sync call/week",
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
                className="rounded-[40px] max-md:rounded-[30px] box-shadow"
              >
                <CardBody className="p-8 max-md:p-4 max-lg:p-6 grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-4">
                  <div className="w-full">
                    <img
                      src={item.icon}
                      alt="service logo"
                      className="w-[40px]"
                    />
                    <p className="text-3xl max-md:text-xl mt-4 mb-4 font-[700] tracking-[-0.5px] leading-[38.4px]">
                      {item.heading}
                    </p>
                    <p className="font-[500]">{item.description}</p>
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
                                {item.designDev}
                                <span className=" text-2xl font-bold max-md:text-sm align-top">
                                  *
                                </span>
                              </p>
                            ) : selectedTab == "Design Only" ? (
                              <p className=" align-middle">
                                <span className="text-2xl mr-[4px] ">$</span>
                                {item.design}
                                <span className=" text-2xl font-bold max-md:text-sm align-top">
                                  *
                                </span>
                              </p>
                            ) : (
                              <p className=" align-middle">
                                <span className="text-2xl mr-[4px] ">$</span>
                                {item.dev}
                                <span className=" text-2xl font-bold max-md:text-sm align-top">
                                  *
                                </span>
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
                              <span className="text-[#C5C5C5] text-lg font-light max-md:text-sm">
                                {item.tab && "Design"}
                              </span>{" "}
                              {item.devhr && (
                                <>
                                  <span className="text-[#C5C5C5] ">+</span>{" "}
                                  <span className="text-2xl mr-[4px] ">$</span>
                                  {item.devhr}
                                  <span className="text-[#C5C5C5] text-lg font-light max-md:text-sm">
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
                    {item.tab && (
                      <div>
                        {props.id == "Fixed" ? (
                          selectedTab == "Design + Dev" ? (
                            <ListMap list={item.list} />
                          ) : selectedTab == "Design Only" ? (
                            <ListMap list={item.listDesign} />
                          ) : (
                            <ListMap list={item.listDev} />
                          )
                        ) : selectedTab == "Design + Dev" ? (
                          <ListMap list={item.listhr} />
                        ) : selectedTab == "Design Only" ? (
                          <ListMap list={item.listDesignhr} />
                        ) : (
                          <ListMap list={item.listDevhr} />
                        )}
                      </div>
                    )}

                    {!item.tab && (
                      <div>
                        {props.id == "Fixed" ? (
                          <ListMap list={item.list} />
                        ) : (
                          <ListMap list={item.listhr} />
                        )}
                      </div>
                    )}

                    {/* {item.list.map((listItem, listIndex) => (
                      <div
                        key={listIndex}
                        className="flex flex-row items-center mt-3 gap-2"
                      >
                        <img
                          src="https://res.cloudinary.com/damm9iwho/image/upload/v1730809748/mynaui_check-hexagon-solid_t7vhzg.svg"
                          alt=""
                        />
                        <p className="">{listItem}</p>
                      </div>
                    ))} */}

                    {item.tab && (
                      <div className="flex w-full flex-col items-start justify-end mt-8 max-sm:mt-6">
                        <Tabs
                          aria-label="Dynamic tabs"
                          items={tabs}
                          classNames={{
                            cursor: "w-full bg-black text-black",
                            tab: "px-6 max-lg:px-2",
                            tabContent:
                              "group-data-[selected=true]:text-white text-black font-[700] max-md:font-[600]",
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
                <Card className="rounded-[40px] box-shadow">
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
                      <p className="font-[500]">{item.description}</p>
                      <div className="mt-6 mb-4">
                        <p className="text-[#C5C5C5] text-lg">
                          {props.id == "Fixed"
                            ? "Starting from"
                            : "Hourly Rate"}
                        </p>
                        <p className="text-4xl font-semibold mt-2">
                          <span className="text-2xl mr-[4px] ">$</span>
                          {props.id == "Fixed" ? item.price : item.pricehr}
                          {props.id == "Fixed" ? (
                            <span className=" text-2xl font-bold max-md:text-sm align-top">
                              *
                            </span>
                          ) : (
                            ""
                          )}
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
                          <div className="flex flex-row items-start mt-3 gap-2">
                            <img
                              src="https://res.cloudinary.com/damm9iwho/image/upload/v1730809748/mynaui_check-hexagon-solid_t7vhzg.svg"
                              alt=""
                            />
                            <p className="">{items}</p>
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
