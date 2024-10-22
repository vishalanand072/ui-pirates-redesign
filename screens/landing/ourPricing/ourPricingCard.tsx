import { Button, Card, CardBody, chip, Chip } from "@nextui-org/react";
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
];
const OurPricingCard = (props: any) => {
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <Card className="rounded-[48px] mt-8 bg-[#e9e9e9] dark:bg-[#18181b]">
              <CardBody className="gap-4 max-md:grid-cols-1 p-4">
                <Card className="rounded-[40px]">
                  <CardBody className="p-6 grid grid-cols-2 gap-8 max-md:grid-cols-1">
                    <div className="w-full">
                      <img
                        src="https://res.cloudinary.com/damm9iwho/image/upload/v1729521815/fileicon_thzcul.svg"
                        alt="behance Logo"
                        className="w-[40px]"
                      />
                      <p className="text-3xl max-md:text-xl mt-4 mb-4 font-semibold">
                        Web/Mobile Apps {props.id}
                      </p>
                      <p className="text-lg max-md:text-base">
                        Ideal for designing or redesigning website to double
                        your conversion rates
                      </p>
                      <div className="mt-6 mb-4">
                        <p>Starting from</p>
                        <p className="text-4xl font-semibold">1,000</p>
                      </div>
                      <Button
                        className="bg-black text-white button dark:bg-white dark:text-black py-5 w-full"
                        style={{
                          height: "55px",
                          fontSize: "17px",
                        }}
                      >
                        Book a 15-min call
                      </Button>
                    </div>

                    <div>
                      {item.chip.map((items, indexs) => {
                        return (
                          <p className="mt-2 text-lg">
                            10-14 Days turnaround time
                          </p>
                        );
                      })}
                    </div>
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

export default OurPricingCard;
