"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "tailwind-cn";
import Logo from "../Logo/Index";
import Switcher from "../SwitcherDark";
import Sidebar from "./Sidebar";
import useScrollCalc from "@/shared/hooks/useScrollCalc";

export const pathsNavHeader = [
  {
    text: "Inicio",
    path: "/",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Proyectos",
    path: "/projects",
  },
  {
    text: "Academia",
    path: "/academy",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);

  const fulpath = usePathname();
  const statePage: any = (path: any) => {
    if (path.startsWith("/blog")) {
      return {
        path: "/blog",
        name: "Blog",
      };
    }
    if (path.startsWith("/academy")) {
      return {
        path: "/academy",
        name: "Academy",
      };
    }
    if (path.startsWith("/about")) {
      return {
        path: "/about",
        name: "About",
      };
    }
    if (path.startsWith("/projects")) {
      return {
        path: "/projects",
        name: "Projects",
      };
    }
    return {
      path: "/",
      name: "",
    };
  };
  const path = statePage(fulpath);
  const { scrolledPast } = useScrollCalc();

  return (
    <>
      <Flex
        full
        col
        className={cn(
          "lg:max-w-screen sticky  top-0 z-30  sm:bg-opacity-70 sm:backdrop-blur-lg",
          " bg-opacity-1 dark:bg-opacity-1 sm:bg-opacity-50   dark:sm:bg-opacity-70",
          !scrolledPast ? "bg-transparent" : " bg-white dark:bg-blackbg"
        )}
      >
        <Flex full itemscenter between className="mx-auto px-3  md:px-8 py-0">
          <Flex>
            <div className="relative flex items-center z-10  self-stretch  lg:pr-8">
              <Link className="focus:outline-none" href="/">
                <Logo />
              </Link>
            </div>
          </Flex>
          <Flex full className="hidden lg:flex space-x-8 ml-auto justify-end">
            {pathsNavHeader.map((el: any, index: any) => {
              return (
                <Link key={index} href={el.path} className="">
                  <P className={cn("text-sm", "")}>{el.text}</P>
                </Link>
              );
            })}
          </Flex>
          <Flex itemscenter className="space-x-4">
            <div>
              <Switcher />
            </div>
            <button
              className="lg:hidden w-12 h-12 relative -mr-2 z-20"
              aria-label="Toggle menu"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 absolute top-2 left-2 transition-opacity"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 absolute top-2 left-2 transition-opacity opacity-0"
              >
                <path
                  d="m7.757 7.757 8.486 8.486M7.757 16.243l8.486-8.486"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </Flex>
        </Flex>
      </Flex>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
