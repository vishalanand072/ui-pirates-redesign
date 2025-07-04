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

// Smooth scroll function that works with Locomotive Scroll
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Calculate the offset to account for the fixed navbar
    const navbarHeight = 80;
    const elementPosition = element.offsetTop - navbarHeight;

    // Use scrollIntoView with a slight delay to work better with Locomotive Scroll
    setTimeout(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: "auto", // Use 'auto' to avoid conflicts with Locomotive Scroll
      });
    }, 100);
  }
};

export const Navbar = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to control navbar visibility

  useEffect(() => {
    // Set a timer to hide the loading state after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 3-second delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

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
    <div className=" container mx-auto h-[67px] reveal-text-anim-1 overflow-hidden pb-6">
      {!loading && (
        <NextUINavbar
          maxWidth="xl"
          position="sticky"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className={clsx(
            "bg-none mx-[25rem] blur-none py-0 w-auto px-0 max-lg:mx-20 max-md:mx-2 max-xl:mx-40 max-2xl:mx-[18rem] border-2 container flex flex-row items-center rounded-2xl sticky top-0 mt-3 max-md:mt-2 h-[55px] bg-transparent",
            { "text-white": isDarkSection, "text-black": !isDarkSection }
          )}
          style={{}}
        >
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
            <ul className="hidden lg:flex gap-0 justify-start ml-0">
              {siteConfig.navItems.map((item) => (
                <NavbarItem
                  key={item.href}
                  className="hover:bg-[#E9E9E9] px-2 rounded-[0.65rem] pb-[4px] hover:font-[700]"
                >
                  <button
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium text-sm font-[500] cursor-pointer"
                    )}
                    onClick={() => smoothScrollTo(item.href.replace("#", ""))}
                  >
                    {item.label}
                  </button>
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
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden"
            />
          </NavbarContent>

          <NavbarMenu>
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <button
                    className="text-foreground text-lg cursor-pointer text-left w-full"
                    onClick={() => {
                      smoothScrollTo(item.href.replace("#", ""));
                      // Close mobile menu after clicking
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </NextUINavbar>
      )}
    </div>
  );
};
