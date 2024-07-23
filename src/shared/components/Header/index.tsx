"use client";

import useScrollCalc from "@/shared/hooks/useScrollCalc";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import P from "@/shared/UIComponents/Base/P";
import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import suglifyTitle from "@/shared/utils/suglify-title";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { cn } from "tailwind-cn";
import Logo from "../Logo/Index";
import Switcher from "../SwitcherDark";
import News from "./News";

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
    text: "Academy",
    path: "/academy",
  },

   {
    text: "Servicios",
    path: "/services",
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
                <Logo />
                <span className="text-lg ml-1">{""}onzalo</span>
                <span></span>
                <span className="text-xs ml-1"></span>
              </Link>
            </div>
          </div>

          <div className="w-full hidden lg:flex space-x-8 ml-auto justify-end pr-4">
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
        className="transition-all duration-100 fixed  w-screen top-0 left-0 z-[99999] text-white bg-blackbg overflow-y-auto h-[100vh] "
      >
        <div className="w-full h-full">
          <div className="flex flex-col w-full ">
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
                        <span className="">
                          <img
      className=" w-[40px] filter invert sm:w-[40px] object-contain h-[50px]"
      src={siteMetadata.logoUrl}
      alt="logo"
            />
                        </span>
                      </span>
                      <span className="text-white text-lg ml-1">
                        {""}onzalo
                      </span>
                      <span></span>
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
            <div className="flex  gap-4 p-[2rem] flex-col sm:flex-row">
              <div className="flex-2 w-[250px] border-r-0   h-full  border-solid border-graydark  flex-2 text-gray-F7 ">
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
                    className="hover:translate-x-2 transition-all duration-100 "
                    href="/services"
                    onClick={() => handleHoverEnd()}
                  >
                    <li className="flex font-headings text-2xl">
                      Servicios{" "}
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
                </ul>
              </div>

              <div className="hidden md:flex max-w-[500px] flex-wrap  gap-4">
                <Link
                  onClick={() => handleHoverEnd()}
                  href={`/blog/${suglifyTitle(
                    (articles &&
                      sortArticlesByDate[0]?.properties.Name?.title[0]
                        ?.plain_text) ||
                      "Articulo sin Titulo"
                  )}`}
                  className="flex flex-col w-full  h-[350px] bg-[#292929] rounded-xl"
                  style={{
                    backgroundImage: `url(${
                      sortArticlesByDate[0]?.cover?.file?.url ||
                      sortArticlesByDate[0]?.cover?.external?.url
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="flex flex-col w-full p-4 ">
                    <span className="text-black bg-white font-bold rounded-max px-3 py-2 text-md flex items-center">
                      <span>
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
                      </span>
                      <span>
                        {(articles &&
                          sortArticlesByDate[0]?.properties.Name?.title[0]
                            ?.plain_text) ||
                          "Articulo sin Titulo"}
                      </span>
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
                  className="flex flex-col w-full  h-[350px] bg-[#292929] rounded-xl"
                  style={{
                    backgroundImage: `
     
      url(${
        sortArticlesByDate[1]?.cover?.file?.url ||
        sortArticlesByDate[1]?.cover?.external?.url
      })
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="flex flex-col w-full p-4 ">
                    <span className="text-black bg-white font-bold rounded-max px-3 py-2 text-md flex items-center">
                      <span>
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
                      </span>
                      <span>
                        {(articles &&
                          sortArticlesByDate[1]?.properties.Name?.title[0]
                            ?.plain_text) ||
                          "Articulo sin Titulo"}
                      </span>
                    </span>
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
