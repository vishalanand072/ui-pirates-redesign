"use client";
import LandingHero from "./hero";
import LandingMarquee from "./marquee";
import LandingAppScreen from "./appScreen";
import LandingBehance from "./behance";

const Landing = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingMarquee />
        <div className=" overflow-x-hidden py-12">
          <LandingAppScreen />
        </div>
        <LandingBehance />
      </div>
    </>
  );
};

export default Landing;
