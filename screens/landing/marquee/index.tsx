import React from "react";
import MarqueeComp from "./marqueeComp";

const LandingMarquee = ({ items, reverse }: any) => {
  const row1 = [
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513140/image_34_rb6475.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513139/image_3_wjiecn.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513139/image_2_srxkyz.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513139/image_4_htbg0w.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513138/image_5_s1yrux.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513137/image_29_fxjqk6.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513138/image_31_sdh5l7.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513137/Group_1_lj2z8a.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729513137/image_1_hxpv8e.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682151/image_30_oiwlqz.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682151/Frame_131_xaxhxs.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682150/Frame_1984078729_meav44.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682150/Rings_I_eyrgog.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682149/image_28_lq4jj7.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682148/Group-2_uduxpp.svg",
    "https://res.cloudinary.com/damm9iwho/image/upload/v1729682148/Frame_3_nfidqo.svg",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];
  return (
    <>
      <div className="mt-12">
        <MarqueeComp items={row1} reverse={undefined} />
        {/* <MarqueeComp items={row2} reverse /> */}
      </div>
    </>
  );
};

export default LandingMarquee;
