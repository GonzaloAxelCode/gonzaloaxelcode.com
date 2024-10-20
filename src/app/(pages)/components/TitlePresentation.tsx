"use client";
import { general_technologies } from "@/shared/data/tech-data";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "tailwind-cn";
import TechList from "./TechList";

const TitlePresentation = () => {
  const [gradientTextClass, setGradientTextClass] = useState(
    "inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#17a2b8] via-[#7b74a7] to-[#3b5c7f]"
  );
  return (
    <div className="-mt-12 mb-12 md:mt-0 md:mb-24">
      <div className="content-wrapper">
        <div className="flex items-center justify-center py-8">
          <h1 className="font-headings leading-normal  scroll-mt-[120px] text-6xl lg:text-7xl 2xl:text-8xl font-bold title-limiter">
            Soy Gonzalo Axel <br />
            un desarrollador de aplicaciones <br />
            <span className={cn(gradientTextClass)}>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "frontend",
                  800,
                  () =>
                    setGradientTextClass(
                      "inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#ff9900] via-[#ff2f61] to-[#ff5e62]"
                    ),
                  "backend",
                  800,
                  () =>
                    setGradientTextClass(
                      "inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#17a2b8] via-[#7b74a7] to-[#3b5c7f]"
                    ),
                  "fullstack",
                  1000,
                  () =>
                    setGradientTextClass(
                      "inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#2ecc71] via-[#19b5fe] to-[#2e86de]"
                    ),
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="ml-10  text-md flex flex-col ">
        <TechList tools={general_technologies} />
        <span className=" max-w-[500px] mt-4 text-gray-1F  dark:text-gray-400">
          Apasionado por el desarrollo de sofware, con gran gusto en construir
          cualquier cosa con codigo y hacer aplicaciones facinantes.
        </span>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
            target="_blank"
            rel="noopener"
            className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 hover:bg-black text-white bg-gray-1F border-2 border-transparent flex gap-1 items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="text-white w-5 h-5"
              astro-icon="bx:bxs-cloud-download"
            >
              <path
                fill="currentColor"
                d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.61 5.757 9.149 3.609 9.792 2 11.82 2 14c0 2.657 2.089 4.815 4.708 4.971V19H17.99v-.003L18 19c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888zM8 12h3V9h2v3h3l-4 5-4-5z"
              ></path>
            </svg>
            Descargar CV
          </a>
          <a
            href="https://github.com/surjithctly/astroship"
            rel="noopener"
            target="_blank"
            className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black flex gap-1 items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="text-black w-4 h-4"
              astro-icon="bx:bxl-github"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitlePresentation;
