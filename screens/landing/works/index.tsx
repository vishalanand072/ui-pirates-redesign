import React, { useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import RecentWorkCard from "./workCard";

const LandingWork = () => {
  const [activeTab, setActiveTab] = useState("Hourly"); // Track active tab

  const tabs = [
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
      <div className="container mx-auto xl:px-40 2xl:px-48 max-md:px-4 mt-32 max-xl:px-4 max-2xl:px-0">
        <div className="autoShow">
          <div className="flex flex-row items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1730973289/work_iljiv2.svg"
              alt=""
            />
          </div>
          <p className="heading-center">Recent Works</p>
          <div className="flex flex-row items-center justify-center mb-8 mt-3 px-40 max-lg:px-32 max-md:px-8 max-xl:px-32 ">
            <p className="md:w-3/4 text-center content-center font-[500] ">
              In the world of creativity, clients consistently appreciate our
              work and value the results we deliver.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <a href="https://www.behance.net/vishalanand-UI-UX" target="_blank">
              <Button
                color="primary"
                className="bg-black button text-lg dark:bg-white dark:text-black px-[70px] py-[30px] cursor-pointer"
                // style={{
                //   paddingRight: "70px",
                //   paddingLeft: "70px",
                //   paddingTop: "30px",
                //   paddingBottom: "30px",
                // }}
              >
                Explore Works
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="px-32 max-md:px-4 overflow-x-hidden overflow-y-auto pb-28 pt-48 max-md:pt-12">
        <RecentWorkCard />
      </div>
    </>
  );
};

export default LandingWork;
