"use client";
import LandingHero from "./hero";
import LandingMarquee from "./marquee";
import LandingAppScreen from "./appScreen";
import LandingBehance from "./behance";
import LandingBusinessHelp from "./businessHelp";
import LandingOurPricing from "./ourPricing";

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
        <LandingBusinessHelp />
        <LandingOurPricing />
      </div>
    </>
  );
};

export default Landing;
