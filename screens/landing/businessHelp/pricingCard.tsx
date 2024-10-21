import { Card, CardBody } from "@nextui-org/react";
const data = [
  {
    heading: "Heading 1",
  },
  {
    heading: "Heading 1",
  },
  {
    heading: "Heading 1",
  },
];
const PricingCard = () => {
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <Card className="rounded-[48px] mt-8">
              <CardBody className="grid grid-cols-2 gap-4 max-md:grid-cols-1 p-4">
                <Card className="rounded-[40px]">
                  <CardBody className="p-6">
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521815/fileicon_thzcul.svg"
                      alt="behance Logo"
                      className="w-[40px]"
                    />
                    <p className="text-3xl max-md:text-xl mt-4 mb-6">
                      Web/Mobile Apps
                    </p>
                    <p className="text-lg max-md:text-base">
                      Transform your ideas into market-ready digital products.
                      We create intuitive, engaging applications with modern UI
                      that drive user engagement and business growth.
                    </p>
                  </CardBody>
                </Card>
                <Card className=" rounded-[40px] p-0 h-[350px]">
                  <CardBody style={{ padding: 0 }}>
                    <img
                      src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521816/card_zzxglp.svg"
                      alt="behance Logo"
                      className="object-cover h-[350px]"
                    />
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default PricingCard;