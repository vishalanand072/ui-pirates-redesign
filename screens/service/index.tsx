import ServiceHero from "./hero";
import ServicesList from "./servicesList";
import WhatWeProvide from "./whatWeProvide";
const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <ServiceHero />
      <ServicesList />
      <WhatWeProvide />
    </div>
  );
};

export default Service;
