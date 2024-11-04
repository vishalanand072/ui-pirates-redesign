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
import LandingTestimonials from "./testimonials";
import LandingBehanceDan from "./behance/text";
import LandingBehanceFramor from "./behance/LandingBehance";
const Landing = () => {
  return (
    <>
      <div>
        <LandingHero />
        <LandingMarquee />
        <div className=" overflow-x-hidden py-12">
          <LandingAppScreen />
        </div>
        <div className="">
          {/* <LandingBehanceDan /> */}
          <LandingBehanceFramor />
          {/* <LandingBehance /> */}
        </div>
        <LandingBusinessHelp />
        <LandingAbout />
        <div className=" overflow-hidden">
          <LandingTestimonials />
        </div>
        <LandingOurPricing />
        <LandingFaqs />
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
