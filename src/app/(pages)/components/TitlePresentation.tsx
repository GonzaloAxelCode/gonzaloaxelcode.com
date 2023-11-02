"use client";
import LogosBg from "@/shared/components/LogosBg";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "tailwind-cn";

const TitlePresentation = () => {
  const [gradientTextClass, setGradientTextClass] = useState(
    "inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#17a2b8] via-[#7b74a7] to-[#3b5c7f]"
  );
  return (
    <div className="-mt-12 mb-12 md:mt-0 md:mb-24">
      <div className="content-wrapper">
        <div className="flex items-center justify-center py-8">
          <blockquote className="flex gap-2 pt-2 text-4xl sm:text-4xl text-graydarksoft md:text-4xl lg:pt-0 lg:text-5xl dark:text-gray-400">
            <svg
              xmlns="http://www.w3.oarg/2000/svg"
              viewBox="0 0 20 20"
              role="img"
              fill="currentColor"
              className="-mt-1 h-10 text-gray-300 md:-mt-3  dark:text-white"
            >
              <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z" />
            </svg>
            <span className="flex flex-col">
              <span className="leading-[1.15]">
                <em>Hola, soy</em>{" "}
              </span>
              <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
                <span className="mt-1 h-0.5 w-8 rounded-full bg-gray-400 lg:h-1 lg:w-24 dark:bg-gray-600" />
                <span>
                  <strong className="font-extrabold text-graydark dark:text-gray-300">
                    Gonzalo 
                  </strong>
                  <strong className="font-extrabold text-graydark dark:text-gray-300">
                    Axel
                  </strong>
                  <strong className="font-extrabold text-graydarksoft dark:text-gray-300"></strong>
                </span>
                <span className="mt-1 h-0.5 w-6 rounded-full bg-gray-400 lg:h-1 lg:w-14 dark:bg-gray-600" />
              </span>
              <span className="leading-[1.15]">
                desarrollador{" "}
                <strong className="relative font-extrabol">
                  <span className="absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-gray-100 px-1 lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0 dark:bg-gray-800" />
                  <br className="md:hidden" />
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
                </strong>
              </span>
            </span>
          </blockquote>
        </div>
      </div>
      <div className="ml-10  text-md flex flex-col ">
        <LogosBg />
        <span className=" max-w-[500px] mt-4 text-gray-1F  dark:text-gray-400">
          Apasionado por el desarrollo de sofware, con gran gusto en construir
          cualquier cosa con codigo y hacer aplicaciones facinantes.
        </span>
        <div className="flex gap-6 mt-4">
          <button className="border-2 border-solid px-6 py-2 text-md rounded-3xl text-gray-1F border-gray-1F dark:text-gray-300 dark:border-gray-300">
            Ver mi CV
          </button>
          <button className="border-2 border-solid px-6 py-2 text-md rounded-3xl text-gray-1F border-gray-1F dark:text-gray-300 dark:border-gray-300">
            Explora mi web
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePresentation;
