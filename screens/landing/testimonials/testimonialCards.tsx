"use client";

import { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";
export const testimonials = [
  {
    name: "Eden Hazani",
    occupation: "Frontend Web Developer",
    company: "Israel",
    review:
      "Wonderful to work with, very experienced with UI/UX design. Very easy-going to work with; the flow we requested facilitated our Angular coding from start as well, and stood up to the challenge of working with a remote team in different timezones. Successfully overhauled the design of our entire platform in less than 3 months for both visual designs on Figma and mock Angular code on GitHub.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593626/ipsos_b771yl.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593627/eden_ts51gy.svg",
  },
  {
    name: "Yadin Soffer",
    occupation: "CEO & Founder, Xperiti",
    company: "New York, US",
    review:
      "Vishal’s work stood out, even when we were comparing multiple options. Clean design, great responsiveness, and he easily adapted to our Angular setup without any fuss. The quality showed, and it was clear he knew his craft.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593625/xperiti_shp94q.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593626/yadin_bxb9rm.svg",
  },
  {
    name: "Kalvan Dave",
    occupation: "Founder, The Black Chai",
    company: "India",
    review:
      "Vishal is great to work with and will ensure you’re happy with his work. I enjoyed working with him.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760598018/healt_nvmdpw.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593625/kaivan_z5mbdp.svg",
  },
  {
    name: "Teri McRobbson",
    occupation: "Brand & CEO, Bird",
    company: "San Francisco, US",
    review:
      "Seamless process, on-point designs every time. From brochures to posters, everything matched our brand perfectly.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593623/bird_x6xr9z.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593624/teri_os6bhp.svg",
  },
  {
    name: "Nihal Lal",
    occupation: "Founder & CEO, NIYA",
    company: "India",
    review:
      "They picked up on the emotional side of our brand right away. The visuals and flow felt true to who we are, without us having to spell everything out.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593622/niva_p8m7fm.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593623/nidhi_mitwg8.svg",
  },
  {
    name: "Shivna Arora",
    occupation: "Product Design Head",
    company: "New Delhi, India",
    review:
      "Vishal’s exceptional design talent consistently transforms complex requirements into intuitive, visually striking solutions. His creative vision and technical skill have significantly elevated our product quality. Working with him has been both productive and inspiring — a true asset to any project.",
    logo: "",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593620/shirina_adl1fh.svg",
  },
  {
    name: "Nipun Sharma",
    occupation: "CEO, RevUp AI",
    company: "Dallas, Texas, US",
    review:
      "Vishal and his team have been our go-to star design partner from day one. We call him our UI/UX doctor for a reason. Every single project, from the first SaaS flow to our full design overhaul, was crisp, scalable, and aligned with our business. Would work with them again in a heartbeat.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593623/revup_bvnmip.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593623/nipun_tqwxmz.svg",
  },
  {
    name: "Priyanka Padhiya",
    occupation: "Creative Head, RINCS & I",
    company: "Nashik, India",
    review:
      "I highly recommend Vishal to anyone looking for a skilled and thoughtful UI/UX designer. His expertise, coupled with his collaborative approach, makes him a valuable partner for any design project.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593621/rings_zwpnqc.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593627/priynaka_djaqd5.svg",
  },
  {
    name: "Rohit Kumar Jha",
    occupation: "Product Head, Aaroh",
    company: "Bangalore, India",
    review:
      "I’m amazed at how the team brought our complex AI trading vision to life. Not only did they nail the website design, but their work on dashboards — our AI integration systems — was outstanding. Their deep understanding of both design and technical requirements helped create a sophisticated tool that makes data-heavy dashboards seamless for users. Vishal’s team never backed down from the complex data visualization challenge, and the multiple iterations really perfected the user experience.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593621/artha_dl8bqi.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593621/rohit_vo3c4g.svg",
  },
  {
    name: "Kyle Drucker",
    occupation: "Marketing Lead",
    company: "New Jersey, US",
    review:
      "Great to work with, professional, responsive, and handled exactly what I needed. Changes and iterations were always welcomed. Would happily work with them again.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593628/kyleicon_fzwink.svg",
    profileImage: "",
  },
  {
    name: "Miriam Sagaram",
    occupation: "CEO, ChicWings",
    company: "New York, US",
    review:
      "They nailed the vibe for ChicWings. Elegant, on-brand posters that got compliments the same day we put them up.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593621/chloe_k7x6jm.svg",
    profileImage: "",
  },
  {
    name: "Sharmin",
    occupation: "Creative Consultant",
    company: "Chennai, Canada",
    review:
      "Easy to work with and quick to understand what we needed. Designs were spot-on and delivered without overcomplicating things.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593628/netzhill_tbpsc7.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593630/sharmin_wnplbc.svg",
  },
  {
    name: "Pankaj Soni",
    occupation: "Marketing Lead, Pawdrobe",
    company: "India",
    review:
      "They didn’t just build us a site, the winter campaign designs helped us reach people we’d never reached before. You can feel the heart in the details.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593629/mission_v8uehd.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593629/pankaj_dtrdun.svg",
  },
  {
    name: "Arman Sharma",
    occupation: "Design Head",
    company: "New Delhi, India",
    review:
      "Turned our messy Shopify wishlist into a clean, functional store. Currently working on a redesign for our SaaS app, and it’s shaping up perfectly. Scalable, easy to manage, and they kept it quick and simple. Huge win for us.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593620/godrice_vshi5n.svg",
    profileImage: "",
  },
  {
    name: "Akash Pandey",
    occupation: "Founder, Surya Digital",
    company: "India",
    review:
      "They put real care into getting every detail right. The new identity finally feels like us.",
    logo: "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593624/uva_poku8h.svg",
    profileImage:
      "https://res.cloudinary.com/dvk9ttiym/image/upload/v1760593626/akash_p9yoeo.svg",
  },
];

export default function TestimonialCards() {
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // max-md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // decide which testimonials to show
  const displayedTestimonials = isMobile
    ? testimonials.slice(0, 6)
    : testimonials;

  // split into 3 columns
  const col1 = displayedTestimonials.filter((_, i) => i % 3 === 0);
  const col2 = displayedTestimonials.filter((_, i) => i % 3 === 1);
  const col3 = displayedTestimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="w-full py-12 container mx-auto lg:px-12 max-md:px-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {[col1, col2, col3].map((col, i) => (
          <div key={i} className="flex flex-col gap-4 flex-1">
            {col.map((item, idx) => (
              <Card
                key={idx}
                className="rounded-[32px] max-md:w-full bg-[#e9e9e9] shadow-none border-1 border-[#0000000f]"
              >
                <CardBody className="p-3 max-md:p-2 max-lg:p-3">
                  <div className="w-full p-5 bg-white rounded-[24px] max-md:p-4 box-shadow">
                    <div className="flex flex-row items-center justify-between gap-4 max-md:gap-2">
                      <div className="flex flex-row gap-3 items-center">
                        <img
                          src={
                            item.profileImage
                              ? item.profileImage
                              : "https://res.cloudinary.com/damm9iwho/image/upload/v1731065510/Ellipse_1388_od4ab3.svg"
                          }
                          alt="Profile"
                          className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full"
                        />
                        <div>
                          <p className="text-xl max-md:text-lg font-semibold">
                            {item.name}
                          </p>
                          <p className="text-[#A2A2A2] text-sm -mt-1">
                            {item.occupation || "occupation"}
                          </p>
                          <p className="text-[#A2A2A2] text-sm -mt-1">
                            {item.company || "location"}
                          </p>
                        </div>
                      </div>
                      <div className="max-md:hidden block">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt="Logo"
                            className="max-w-[80px]"
                          />
                        )}
                      </div>
                    </div>
                    <p className="mt-4 text-base font-[400]">
                      {item.review || ""}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
