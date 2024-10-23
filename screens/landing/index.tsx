"use client";
import LandingHero from "./hero";
import LandingMarquee from "./marquee";
import LandingAppScreen from "./appScreen";
import LandingBehance from "./behance";
import LandingBusinessHelp from "./businessHelp";
import LandingOurPricing from "./ourPricing";
import LandingFaqs from "./faqs";
import LandingAbout from "./about";
import LandingFooter from "./footer";

const Landing = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingMarquee />
        <div className=" overflow-x-hidden py-12">
          <LandingAppScreen />
        </div>
        <div className=" my-12">
          <LandingBehance />
        </div>
        <LandingBusinessHelp />
        <LandingAbout />
        <LandingOurPricing />
        <LandingFaqs />
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
