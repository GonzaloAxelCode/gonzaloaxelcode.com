"use client";

import P from "@/shared/UIComponents/Base/P";
import Link from "next/link";
import { useState } from "react";
import { cn } from "tailwind-cn";
import Logo from "../Logo/Index";
import { motion, useAnimation } from "framer-motion";
import Switcher from "../SwitcherDark";
import useScrollCalc from "@/shared/hooks/useScrollCalc";
import { fetcherCache } from "@/shared/services/fetcher";
import useSWR from "swr";
import suglifyTitle from "@/shared/utils/suglify-title";
import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import News from "./News";

export const pathsNavHeader = [
  {
    text: "Blog",
    path: "/blog",
  },
];
const Header = () => {
  const { scrolledPast } = useScrollCalc();

  const controls = useAnimation();
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  const sortArticlesByDate = articles?.sort(sortByCreatedTime) || [];
  const handleHoverStart = () => {
    controls.start({
      height: "100%",
      opacity: 1,
      scale: "1",
      transition: { duration: 0.35, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      height: "100%",
      opacity: 0,
      scale: "0.0000001",
      transition: { duration: 0.35, ease: "easeInOut" },
    });
  };

  return (
    <>
      <News article={articles && sortArticlesByDate[0]} />
      <div
        className={cn(
          "flex flex-col w-full",
          "lg:max-w-screen sticky  py-1 top-0 z-30  sm:bg-opacity-70 sm:backdrop-blur-lg",
          " bg-opacity-1 dark:bg-opacity-1 sm:bg-opacity-50   dark:sm:bg-opacity-70",
          !scrolledPast ? "bg-transparent" : " bg-white dark:bg-blackbg"
        )}
      >
        <div className="flex items-center justify-between w-full  mx-auto px-3  md:px-8 py-0">
          <div className="flex">
            <div className="relative flex items-center z-10  self-stretch  lg:pr-8">
              <Link className="focus:outline-none flex items-center" href="/">
                <img
                  className="absolute w-[40px]  -top-1 -left-2 z-10"
                  src="https://i.pinimg.com/originals/20/d1/b1/20d1b1182b7f6a2007da2ccbe719b1d8.png"
                  alt=""
                />
                <Logo />
                <span className="text-lg ml-1">{""}onzalo</span>
                <span></span>
                <span className="text-xs ml-1">Beta</span>
              </Link>
            </div>
          </div>

          <div className="w-full hidden lg:flex space-x-8 ml-auto justify-end pr-4">
            <span
              className="mr-4 cursor-pointer"
              onMouseEnter={handleHoverStart}
            >
              <span className={cn("text-sm", "")}>Descubre mas</span>
            </span>
            {pathsNavHeader.map((el: any, index: any) => {
              return (
                <Link key={index} href={el.path}>
                  <P className={cn("text-sm", "")}>{el.text}</P>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <Switcher />
            </div>
            <button
              className="lg:hidden w-12 h-12 relative  z-20"
              onClick={() => handleHoverStart()}
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
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          height: "100%",
          opacity: 0,
          scale: "0.0000001",
        }}
        animate={controls}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="transition-all duration-100 fixed overflow-hidden w-screen top-0 left-0 z-[99999] text-white bg-blackbg"
      >
        <div className="w-full h-full">
          <div
            className="flex flex-col w-full  h-[50%]"
            onMouseLeave={handleHoverEnd}
          >
            <div
              className={cn(
                "flex flex-col w-full",
                "lg:max-w-screen sticky top-0 z-30",
                " bg-blackbg text-white "
              )}
            >
              <div className="flex w-full items-center justify-between mx-auto px-3  md:px-8 relative py-0">
                <div className="flex">
                  <div className=" relative flex items-center z-10  self-stretch  lg:pr-8">
                    <span className="focus:outline-none flex gap-0 items-center cursor-pointer  text-white">
                      <span className="">
                        <img
                          className="absolute w-[35px] -top-1 -left-2 z-10"
                          src="https://i.pinimg.com/originals/20/d1/b1/20d1b1182b7f6a2007da2ccbe719b1d8.png"
                          alt=""
                        />
                        <span className="filter invert">
                          <Logo />
                        </span>
                      </span>
                      <span className="text-white text-lg ml-1">
                        {""}onzalo
                      </span>
                      <span></span>
                      <span className="text-white text-xs ml-1">Beta</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleHoverEnd()}
                  className="absolute top-2 h-[30px] w-[30px] right-5  "
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-[30px] w-[30px] text-white"
                  >
                    <path
                      d="m7.757 7.757 8.486 8.486M7.757 16.243l8.486-8.486"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center h-screen">
              <div className="flex-1 max-w-[250px] border-r-1 h-full  border-solid border-graydark pl-8 pt-6 flex-2 text-gray-F7 ">
                <div className="flex flex-col w-auto">
                  <ul className="flex flex-col gap-1">
                    <Link
                      href="/"
                      onClick={() => handleHoverEnd()}
                      className="hover:translate-x-2 transition-all duration-100 "
                    >
                      <li className="font-headings text-2xl flex">
                        Inicio{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                          className="fill-white"
                        >
                          <path
                            className="fill-white"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </li>
                    </Link>
                    <Link
                      className="hover:translate-x-2 transition-all duration-100 "
                      href="#"
                      onClick={() => handleHoverEnd()}
                    >
                      <li className="flex font-headings text-2xl">
                        Contacto{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                          className="fill-white"
                        >
                          <path
                            className="fill-white"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </li>
                    </Link>
                    <Link
                      className="hover:translate-x-2 transition-all duration-100 "
                      href="/academy"
                      onClick={() => handleHoverEnd()}
                    >
                      <li className="flex font-headings text-2xl">
                        Academy{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                          className="fill-white"
                        >
                          <path
                            className="fill-white"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </li>
                    </Link>
                    <Link
                      className="hover:translate-x-2 transition-all duration-100 "
                      href="/blog"
                      onClick={() => handleHoverEnd()}
                    >
                      <li className="flex font-headings text-2xl">
                        Blog{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                          className="fill-white"
                        >
                          <path
                            className="fill-white"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </li>
                    </Link>
                    <Link
                      className="hover:translate-x-2 transition-all duration-100 "
                      href="/projects"
                      onClick={() => handleHoverEnd()}
                    >
                      <li className=" flex font-headings text-2xl">
                        Proyectos{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                          className="fill-white"
                        >
                          <path
                            className="fill-white"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                      </li>
                    </Link>
                    <Link
                      onClick={() => handleHoverEnd()}
                      href="/blog"
                      className="flex md:hidden flex-col h-[200px] w-[150px] px-2 relative  mt-5 bg-[#292929] rounded-xl"
                    >
                      <span className="justify-center-center absolute right-[3%] top-[3%]  flex aspect-square flex-col items-center rounded-full border p-0.5  border-white/[0.12] dark:border-white/[0.12]  bg-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="29"
                        >
                          <path
                            className="fill-black"
                            fillRule="evenodd"
                            d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="p-5 absolute font-headings  bottom-0 leading-title left-0 text-2xl">
                        Leer <br />
                        mi Blog
                      </span>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className=" flex-5 grid  h-screen md:h-full sm:grid-cols-2 md:grid-cols-3  flex-shrink col-span-8 gap-3 p-4 sm:pr-8 flex-6">
                <Link
                  onClick={() => handleHoverEnd()}
                  href={`/blog/${suglifyTitle(
                    (articles &&
                      sortArticlesByDate[0]?.properties.Name?.title[0]
                        ?.plain_text) ||
                      "Articulo sin Titulo"
                  )}`}
                  className="max-w-[150px] sm:max-w-[200px]  flex flex-col max-h-[250px] h-[350px] bg-[#292929] rounded-xl"
                  style={{
                    backgroundImage: `
      linear-gradient(to bottom, transparent, #000000),
      url(${
        sortArticlesByDate[0]?.cover?.file?.url ||
        sortArticlesByDate[0]?.cover?.external?.url
      })
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="h-full"></span>
                  <span className="flex flex-col p-4 pt-0 pb-6">
                    <span className="font-headings font-normal pr-4 text-xl py-3">
                      {(articles &&
                        sortArticlesByDate[0]?.properties.Name?.title[0]
                          ?.plain_text) ||
                        "Articulo sin Titulo"}
                    </span>
                  </span>
                </Link>
                <Link
                  onClick={() => handleHoverEnd()}
                  href={`/blog/${suglifyTitle(
                    (articles &&
                      sortArticlesByDate[1]?.properties.Name?.title[0]
                        ?.plain_text) ||
                      "Articulo sin Titulo"
                  )}`}
                  className="max-w-[150px] sm:max-w-[200px] flex flex-col max-h-[250px] h-[350px] bg-[#292929] rounded-xl"
                  style={{
                    backgroundImage: `
      linear-gradient(to bottom, transparent, #000000),
      url(${
        sortArticlesByDate[1]?.cover?.file?.url ||
        sortArticlesByDate[1]?.cover?.external?.url
      })
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="h-full"></span>
                  <span className="flex flex-col p-4 pt-0 pb-6">
                    <span className="font-headings font-normal pr-4 text-xl py-3">
                      {(articles &&
                        sortArticlesByDate[1]?.properties.Name?.title[0]
                          ?.plain_text) ||
                        "Articulo sin Titulo"}
                    </span>
                  </span>
                </Link>
                <Link
                  onClick={() => handleHoverEnd()}
                  href="/blog"
                  className="hidden md:flex flex-col max-w-[200px]  relative h-full bg-[#292929] rounded-xl"
                >
                  <span className="justify-center-center absolute right-[3%] top-[3%]  flex aspect-square flex-col items-center rounded-full border p-0.5  border-white/[0.12] dark:border-white/[0.12]  bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="29"
                    >
                      <path
                        className="fill-black"
                        fillRule="evenodd"
                        d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="p-5 absolute font-headings  bottom-0 leading-title left-0 text-2xl">
                    Leer <br />
                    mi Blog
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
