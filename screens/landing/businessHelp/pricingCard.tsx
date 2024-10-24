// import { Card, CardBody, chip, Chip } from "@nextui-org/react";
// const data = [
//   {
//     heading: "Heading 1",
//     chip: [
//       "1-2 months delivery",
//       "$8,000-$12,000",
//       "Documentation",
//       "Scalable Architecture",
//       "Style Guidelines",
//       "Design Tokens",
//     ],
//   },
//   {
//     heading: "Heading 1",
//     chip: [
//       "1-2 months delivery",
//       "$8,000-$12,000",
//       "Documentation",
//       "Scalable Architecture",
//       "Style Guidelines",
//       "Design Tokens",
//     ],
//   },
//   {
//     heading: "Heading 1",
//     chip: [
//       "1-2 months delivery",
//       "$8,000-$12,000",
//       "Documentation",
//       "Scalable Architecture",
//       "Style Guidelines",
//       "Design Tokens",
//     ],
//   },
// ];
// const PricingCard = () => {
//   return (
//     <>
//       <div className="">
//         {data.map((item, index) => {
//           return (
//             <Card className="rounded-[48px] mt-4 bg-[#e9e9e9] dark:bg-[#18181b]">
//               <CardBody className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 p-4 max-md:p-2">
//                 <Card className="rounded-[40px]  border-2">
//                   <CardBody className="p-8 max-md:p-4 max-lg:p-6">
//                     <img
//                       src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521815/fileicon_thzcul.svg"
//                       alt="behance Logo"
//                       className="w-[40px]"
//                     />
//                     <p className="text-3xl max-md:text-xl mt-4 mb-6 font-semibold">
//                       Web/Mobile Apps
//                     </p>
//                     <p className="text-lg max-md:text-base">
//                       Transform your ideas into market-ready digital products.
//                       We create intuitive, engaging applications with modern UI
//                       that drive user engagement and business growth.
//                     </p>
//                     <div className="mt-8 grid-rows-3 w-full gap-4">
//                       {item.chip.map((item, index) => {
//                         return (
//                           <>
//                             <Chip
//                               radius="sm"
//                               className="m-2 text-lg text-black text-opacity-55 bg-[#51525E14]"
//                             >
//                               {item}
//                             </Chip>
//                           </>
//                         );
//                       })}
//                     </div>
//                   </CardBody>
//                 </Card>
//                 <Card className=" rounded-[40px] p-0 h-[400px] max-md:h-[300px]">
//                   <CardBody style={{ padding: 0 }}>
//                     <img
//                       src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521816/card_zzxglp.svg"
//                       alt="behance Logo"
//                       className="object-cover h-[400px] man-md:h-[300px] max-h-full"
//                     />
//                   </CardBody>
//                 </Card>
//               </CardBody>
//             </Card>
//           );
//         })}

//         <div>
//           <Card className="rounded-[48px] mt-4 bg-[#e9e9e9] dark:bg-[#18181b]">
//             <CardBody className="grid grid-cols-3 gap-4 max-md:grid-cols-1 p-4 max-md:p-2">
//               {data.map((item, index) => {
//                 return (
//                   <Card
//                     className="rounded-[40px] border-2"
//                     // style={{ boxShadow: " inset 0 2px 4px rgba(0, 0, 0, 0.1)" }}
//                   >
//                     <CardBody className="p-8 max-md:p-4 max-lg:p-6">
//                       <p className="text-3xl max-md:text-xl mt-0 mb-4 font-semibold">
//                         Web/Mobile Apps
//                       </p>
//                       <p className="text-lg max-md:text-base mb-6">
//                         Transform your ideas into market-ready digital products.
//                         We create intuitive, engaging applications with modern
//                         UI that drive user engagement and business growth.
//                       </p>
//                       <div className="flex flex-row items-center justify-center">
//                         <img
//                           src="https://res.cloudinary.com/damm9iwho/image/upload/v1729658924/Div_framer-sb0m4g_vphvgk.svg"
//                           alt="behance Logo"
//                           className="w-[80%]"
//                         />
//                       </div>
//                     </CardBody>
//                   </Card>
//                 );
//               })}
//             </CardBody>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PricingCard;

import { useEffect, useRef } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    heading: "Heading 1",
    chip: [
      "1-2 months delivery",
      "$8,000-$12,000",
      "Documentation",
      "Scalable Architecture",
      "Style Guidelines",
      "Design Tokens",
    ],
  },
  {
    heading: "Heading 1",
    chip: [
      "1-2 months delivery",
      "$8,000-$12,000",
      "Documentation",
      "Scalable Architecture",
      "Style Guidelines",
      "Design Tokens",
    ],
  },
  {
    heading: "Heading 1",
    chip: [
      "1-2 months delivery",
      "$8,000-$12,000",
      "Documentation",
      "Scalable Architecture",
      "Style Guidelines",
      "Design Tokens",
    ],
  },
  // Add more data as needed...
];

const PricingCard = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50, // Start from below
            marginLeft: "20%",
            marginRight: "20%",
            opacity: 0.5,
            filter: "blur(5px)", // Initial blur effect
          },
          {
            y: 0, // Move to its original position
            marginLeft: "0%",
            marginRight: "0%",
            opacity: 1,
            filter: "blur(0px)", // Remove blur
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%", // When the top of the card reaches 80% of the viewport height
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      {data.map((item, index) => (
        <Card
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          key={index}
          className="rounded-[48px] mt-4 bg-[#e9e9e9] dark:bg-[#18181b]"
        >
          <CardBody className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 p-4 max-md:p-2">
            <Card className="rounded-[40px] border-2">
              <CardBody className="p-8 max-md:p-4 max-lg:p-6">
                <img
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521815/fileicon_thzcul.svg"
                  alt="behance Logo"
                  className="w-[40px]"
                />
                <p className="text-3xl max-md:text-xl mt-4 mb-6 font-semibold">
                  Web/Mobile Apps
                </p>
                <p className="text-lg max-md:text-base">
                  Transform your ideas into market-ready digital products. We
                  create intuitive, engaging applications with modern UI that
                  drive user engagement and business growth.
                </p>
                <div className="mt-8 grid-rows-3 w-full gap-4">
                  {item.chip.map((chipItem, chipIndex) => (
                    <Chip
                      key={chipIndex}
                      radius="sm"
                      className="m-2 text-lg text-black text-opacity-55 bg-[#51525E14]"
                    >
                      {chipItem}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card className="rounded-[40px] p-0 h-[400px] max-md:h-[300px]">
              <CardBody style={{ padding: 0 }}>
                <img
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521816/card_zzxglp.svg"
                  alt="behance Logo"
                  className="object-cover h-[400px] man-md:h-[300px] max-h-full"
                />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PricingCard;
