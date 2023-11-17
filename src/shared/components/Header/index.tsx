"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "tailwind-cn";
import Logo from "../Logo/Index";
import { motion, useAnimation } from "framer-motion";

import Switcher from "../SwitcherDark";
import Sidebar from "./Sidebar";
import useScrollCalc from "@/shared/hooks/useScrollCalc";
import useTheme from "@/shared/hooks/useTheme";

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
  const [news, setNews] = useState(true);
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      height: "100%",
      opacity: 1,
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      height: "0%",
      opacity: 0,
    });
  };

  return (
    <>
      {news && (
        <Flex>
          <div className="w-[93%] font-medium my-4 text-sm sm:text-sm rounded-lg sm:rounded-3xl flex flex-col sm:flex-row overflow-hidden relative justify-between mx-auto bg-gray-30 bg-gray-F7 dark:bg-[#323232]">
            <div className="py-1 px-4 my-2 sm:px-6 text-center flex shrink-0 items-center ">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-primary-purple"
              >
                <path
                  opacity="0.2"
                  d="M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16C7.163 64 0 56.837 0 48V16Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.565 15.435a2 2 0 0 1 0 2.828c-7.42 7.42-7.42 19.45 0 26.87a2 2 0 0 1-2.829 2.829c-8.982-8.982-8.982-23.545 0-32.527a2 2 0 0 1 2.829 0Zm26.87 0a2 2 0 0 1 2.828 0c8.983 8.982 8.983 23.545 0 32.527a2 2 0 1 1-2.828-2.829c7.42-7.42 7.42-19.45 0-26.87a2 2 0 0 1 0-2.828Zm-4.95 5.05a2 2 0 0 1 2.829 0c6.248 6.249 6.248 16.38 0 22.628a2 2 0 0 1-2.829-2.829c4.687-4.686 4.687-12.284 0-16.97a2 2 0 0 1 0-2.829Zm-16.97 2.829a2 2 0 1 0-2.829-2.829c-6.248 6.249-6.248 16.38 0 22.628a2 2 0 0 0 2.829-2.829c-4.687-4.686-4.687-12.284 0-16.97ZM32 38a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                  fill="currentColor"
                />
              </svg>
              <span>Nuevo articulo</span>
            </div>
            <div className="py-4 sm:py-1  items-center px-4 sm:px-6 flex flex-wrap gap-x-4 gap-y-2">
              <span>
                👉 5 errores que cometí al comenzar mi primer proyecto de React
              </span>
              <Link
                className="font-bold underline inline-block underline-offset-4 hover:underline-offset-2"
                rel="noreferrer"
                href="/blog"
              >
                Ver
              </Link>
            </div>
            <button
              onClick={() => setNews(false)}
              className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 sm:mr-4"
              type="button"
              aria-label="Close banner"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black dark:text-gray-EE"
              >
                <path
                  d="m7.757 7.757 8.486 8.486M7.757 16.243l8.486-8.486"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </Flex>
      )}
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
              <Link
                className="focus:outline-none flex items-center"
                href="/"
                onMouseEnter={handleHoverStart}
              >
                <Logo />
                <span className="text-lg ml-1">{""}onzalo</span>
                <span></span>
                <span className="text-xs ml-1">Beta</span>
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
            <div className="mx-2">
              <Switcher />
            </div>
            <button
              className="lg:hidden w-12 h-12 relative -mr-2 z-20"
              aria-label="Toggle menu"
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

      <motion.div
        initial={{ height: "0%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed overflow-hidden w-screen top-0 left-0 z-[9999] text-white bg-blackbg"
      >
        <div className="w-full h-full">
          <Flex
            full
            col
            className={cn(
              "lg:max-w-screen sticky top-0 z-30",
              " bg-blackbg text-white "
            )}
          >
            <Flex
              full
              itemscenter
              between
              className="mx-auto px-3  md:px-8 py-0"
            >
              <Flex>
                <div className="relative flex items-center z-10  self-stretch  lg:pr-8">
                  <Link
                    className="focus:outline-none"
                    href="/"
                    onMouseEnter={handleHoverStart}
                  >
                    <Logo />
                  </Link>
                </div>
              </Flex>
            </Flex>
          </Flex>
          <div
            className="flex w-full my-10 h-[50%]"
            onMouseLeave={handleHoverEnd}
          >
            <div className="flex items-center flex-wrap md:flex-nowrap">
              <div className="flex-1 w-[300px] border-r-1 h-full  border-solid border-graydark pl-6 flex-2 text-gray-F7 ">
                <div className="flex flex-col w-auto">
                  <ul className="flex flex-col gap-1">
                    <Link href="#">
                      <li className="font-headings text-2xl">Inicio</li>
                    </Link>
                    <Link href="#">
                      <li className="font-headings text-2xl">Contacto</li>
                    </Link>
                    <Link href="#">
                      <li className="font-headings text-2xl">Academy</li>
                    </Link>
                    <Link href="#">
                      <li className="font-headings text-2xl">Blog</li>
                    </Link>
                    <Link href="#">
                      <li className="font-headings text-2xl">Proyectos</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className=" flex-5 grid grid-cols-3 flex-shrink col-span-8 gap-3 p-4 flex-6">
                <div
                  className="max-w-[200px] flex flex-col h-full bg-[#292929] rounded-xl"
                  style={{
                    backgroundImage: `
      linear-gradient(to bottom, transparent, #000000),
      url(https://res.cloudinary.com/ddksrkond/image/upload/v1691328449/banner_suofgv.png)
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="h-full"></div>
                  <div className=" p-4 pt-0 pb-6">
                    <p className="font-headings font-normal pr-4 text-xl py-3">
                      How to utilize business loans for expansion
                    </p>
                    <button className="bg-[#616161] w-auto px-4 py-2 rounded-3xl">
                      Ver articulo
                    </button>
                  </div>
                </div>
                <div className="max-w-[200px] flex flex-col h-fit bg-[#292929] rounded-xl">
                  <div className="p-0 pb-0">
                    <img
                      className="rounded-t-2xl object-cover grid w-full h-[150px]"
                      src="https://res.cloudinary.com/ddksrkond/image/upload/v1699561105/hq720_cfrkrb.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" p-4 pt-0 pb-6">
                    <p className="font-headings font-normal pr-4 text-xl py-3">
                      How to utilize business loans for expansion
                    </p>
                    <button className="bg-[#616161] w-auto px-4 py-2 rounded-3xl">
                      Ver articulo
                    </button>
                  </div>
                </div>
                <div className="max-w-[200px] flex flex-col relative h-full bg-[#292929] rounded-xl">
                  <div className="justify-center-center absolute right-[3%] top-[3%]  flex aspect-square flex-col items-center rounded-full border p-0.5  border-white/[0.12] dark:border-white/[0.12]  bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="29"
                    >
                      <path
                        className="fill-black"
                        fill-rule="evenodd"
                        d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="p-5 absolute  bottom-0 leading-title left-0 text-2xl">
                    Leer <br />
                    mi Blog
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
