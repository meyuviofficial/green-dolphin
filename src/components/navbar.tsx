"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { ThemeToggler } from "./theme-toggler";
import { CgWebsite } from "react-icons/cg";

const links = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Certifications",
    url: "#certifications",
  },
];

const social_media_links = [
  {
    name: "GitHub",
    url: "",
    icon: <BsGithub className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <BsLinkedin className="w-6 h-6" />,
  },
  {
    name: "Medium",
    url: "",
    icon: <BsMedium className="w-6 h-6" />,
  },
  {
    name: "Twitter",
    url: "",
    icon: <BsTwitterX className="w-6 h-6" />,
  },
  {
    name: "Website",
    url: "",
    icon: <CgWebsite className="w-6 h-6" />,
  },
];

export function NavBar() {
  return (
    <div className="bg-white dark:bg-black grid grid-flow-col fixed top-0 w-full p-2">
      <div className="flex flex-wrap justify-between flex-col items-start">
        <NavigationMenu>
          {social_media_links.map((link, index) => (
            <NavigationMenuList key={index}>
              <NavigationMenuItem key={index}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.icon}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          ))}
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-end">
        <NavigationMenu>
          {links.map((link, index) => (
            <NavigationMenuList key={index}>
              <NavigationMenuItem key={index}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          ))}
          <NavigationMenuList>
            <NavigationMenuItem>
              <ThemeToggler />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
