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

export const Navbar = () => {
  return (
    <div className=" container mx-auto">
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-none mx-[25rem] blur-none py-0 w-auto px-0 max-lg:mx-20 max-md:mx-0 max-xl:mx-40  max-2xl:mx-[18rem]
      
      border-2 container  flex flex-row items-center rounded-2xl sticky top-0 mt-3 max-md:mt-0 max-md:rounded-none max-md:border-0
     
      h-[55px]
      "
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
              <p className="font-bold text-inherit">UI Pirates</p>
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
            <Button
              isExternal
              as={Link}
              className="text-sm font-[500] text-white bg-black pt-0 dark:bg-white dark:text-black -mr-4"
              // startContent={<HeartFilledIcon className="text-danger" />}
              variant="solid"
              style={{ paddingTop: 0 }}
            >
              Have an Idea?
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1" justify="end">
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch /> */}
          <NavbarMenuToggle />
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
                  href="#"
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
