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
