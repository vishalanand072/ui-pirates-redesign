import { Accordion, AccordionItem } from "@nextui-org/react";

const data = [
  {
    heading:
      "What’s the difference between design-only and design plus development?",
  },
  {
    heading: "How do I determine the right pricing plan for my project?",
  },
  {
    heading: "What is the typical turnaround time for projects?",
  },
  {
    heading: "Can I modify my project scope after starting?",
  },
  {
    heading: "What kind of support do you offer during and after the project?",
  },
  {
    heading: "Do you collaborate with clients on existing designs?",
  },
  {
    heading: "How do I get started with my project?",
  },
];

export default function FaqsAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      {data.map((item, index) => {
        return (
          <Accordion variant="splitted" className="mb-4">
            <AccordionItem
              key={index}
              aria-label={item.heading}
              title={item.heading}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <p className="text-2xl font-semibold">-</p>
                ) : (
                  <p className="text-2xl font-semibold">+</p>
                )
              }
              className=" shadow-none border-1"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
}
