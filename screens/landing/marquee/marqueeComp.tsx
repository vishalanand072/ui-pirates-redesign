import React from "react";

const MarqueeComp = ({ items, reverse }: any) => {
  return (
    <div className="flex w-full overflow-hidden select-none">
      <div
        className={`flex animate-marquee ${reverse ? "animate-reverse" : ""}`}
      >
        {items.map((el: any, index: any) => (
          <div
            key={index}
            className="grid place-items-center w-[clamp(10rem,1rem+30vmin,10rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
          >
            <img
              src={el}
              alt={`img-${index}`}
              className=" h-[40px]  grayscale hover:grayscale-0 max-h-[40px] w-[100px] max-w-[100px]"
            />
          </div>
        ))}
      </div>
      <div
        className={`flex animate-marquee ${reverse ? "animate-reverse" : ""}`}
      >
        {items.map((el: any, index: any) => (
          <div
            key={index}
            className="grid place-items-center w-[clamp(10rem,1rem+30vmin,10rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
          >
            <img
              src={el}
              alt={`img-${index}`}
              className=" h-[40px]  grayscale hover:grayscale-0  max-h-[40px] w-[100px] max-w-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeComp;
