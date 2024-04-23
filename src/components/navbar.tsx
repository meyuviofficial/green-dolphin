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
import { ThemeToggler } from "./theme-toggler";
import social_media_links from "@/data/socialmedia-data";
import links from "@/data/navbar-data";
import { FaBars } from "react-icons/fa6";
export function NavBar() {
  return (
    <>
      <div className="bg-white dark:bg-black md:grid md:grid-flow-col fixed top-0 md:w-screen p-2 hidden sm:block">
        <div className="flex flex-wrap justify-between flex-col items-start">
          <NavigationMenu>
            {social_media_links.map((link, index) => (
              <NavigationMenuList key={index}>
                <NavigationMenuItem key={index}>
                  <Link href={link.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
      <div className="md:hidden fixed top-0 w-screen p-2 bg-white dark:bg-black">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div>
                <NavigationMenuTrigger>
                  <FaBars className="w-6 h-6" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {links.map((link, index) => (
                    <ul className="flex w-screen px-4 justify-center items-center">
                      <li className="p-2">
                        <Link href={link.url} key={index} passHref>
                          <NavigationMenuLink>{link.name}</NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </NavigationMenuContent>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
