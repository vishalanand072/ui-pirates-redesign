"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isInView = entries.some((entry) => entry.isIntersecting);
        setIsDarkSection(isInView);
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the "dark-section" class
    const darkSections = document.querySelectorAll(".dark-section");
    darkSections.forEach((section) => observer.observe(section));

    return () => {
      darkSections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className=" container mx-auto">
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className={clsx(
          "bg-none mx-[25rem] blur-none py-0 w-auto px-0 max-lg:mx-20 max-md:mx-2 max-xl:mx-40 max-2xl:mx-[18rem] border-2 container flex flex-row items-center rounded-2xl sticky top-0 mt-3 max-md:mt-2 h-[55px] bg-transparent",
          { "text-white": isDarkSection, "text-black": !isDarkSection }
        )}
        style={{}}
      >
        {/* <div
        className="border-2 container  flex flex-row items-center rounded-2xl sticky top-0"
      > */}
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1 md:-ml-6 max-sm:-ml-3"
              href="/"
            >
              {/* <Logo /> */}
              <img
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1729862847/Div_framer-bfl99f_v7cltn.svg"
                alt=""
                className="mt-2"
              />
              <p
                className={clsx("font-bold text-inherit", {
                  "text-white": isDarkSection,
                  "text-black": !isDarkSection,
                })}
              >
                UI Pirates
              </p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-sm font-[500]"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden md:flex">
            <a
              href="https://cal.com/vishal-anand/introduction-and-free-ui-ux-strategy-session"
              target="blank"
            >
              <Button
                isExternal
                as={Link}
                className=" btn-flip text-sm font-[500] text-white bg-black pt-0 dark:bg-white dark:text-black -mr-4 mt-[0.3rem]"
                // startContent={<HeartFilledIcon className="text-danger" />}
                variant="solid"
                style={{ paddingTop: 0 }}
                data-back="Let's Talk"
                data-front="Have an Idea?"
              >
                Have an Idea?
              </Button>
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="md:hidden basis-1" justify="end">
          <a
            href="https://cal.com/vishal-anand/introduction-and-free-ui-ux-strategy-session"
            target="blank"
          >
            <Button
              isExternal
              as={Link}
              className=" btn-flip text-sm font-[500] text-white bg-black pt-0 dark:bg-white dark:text-black -mr-4 mt-[0.3rem]"
              // startContent={<HeartFilledIcon className="text-danger" />}
              variant="solid"
              style={{ paddingTop: 0 }}
              data-back="Let's Talk"
              data-front="Have an Idea?"
            >
              Have an Idea?
            </Button>
          </a>
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  // color={
                  //   index === 2
                  //     ? "primary"
                  //     : index === siteConfig.navMenuItems.length - 1
                  //     ? "danger"
                  //     : "foreground"
                  // }
                  color="foreground"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
        {/* </div> */}
      </NextUINavbar>
    </div>
  );
};
