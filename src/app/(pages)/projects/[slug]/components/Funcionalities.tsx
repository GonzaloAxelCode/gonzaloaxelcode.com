"use client";
import React, { useEffect, useState } from "react";
const Funcionalities = ({ components }: any) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(components[0].urlImage);
  }, []);
  return (
    <section>
      <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
        <div className="max-w-screen-xl mx-auto mt-12 md:mt-18 lg:mt-[120px] xl:mt-[180px]">
          <div>
            <div className="max-w-[648px] mt-6">
              <div className="flex items-center text-neutrals-opaque-13">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18V18.01M10 22H14C16.2091 22 18 20.2091 18 18V6C18 3.79086 16.2091 2 14 2H10C7.79086 2 6 3.79086 6 6V18C6 20.2091 7.79086 22 10 22Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="square"
                  />
                </svg>
                <span className="ml-2 text-lg ">Functionalities-Ready</span>
              </div>
              <h3 className="font-chromatic-grotesque leading-title mt-3 text-3xl md:text-4xl lg:text-4xl font-medium">
                Funcionalidades y componentes de la aplicacion
              </h3>
              <p className="mt-6 text-md lg:mt-7 text-alpha-light-8">
                He recopilado las partes mas importantes para colocarlas aqui,
                hechale un viztazo de algunas de sus funcionalidades y paginas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 ">
              <div className="mt-10 col-span-3 overflow-hidden grid grid-cols-1 gap-0 h-auto lg:mt-12 ">
                {components.map((el: any, index: any) => {
                  return (
                    <div
                      className="flex flex-col gap-3 md:gap-0 mt-8 md:mt-0"
                      key={index}
                    >
                      <div
                        onClick={() => setImage(el.urlImage)}
                        className="flex flex-col bg-gray-F7 dark:bg-[#292929] md:gap-3 md:h-[95%] cursor-pointer hover:bg-white transition-all duration-100 rounded-xl max-w-full  p-2 sm:p-5 border-1 border-solid border-gray-200 dark:border-[#434343]  shadow-lg"
                      >
                        <div className="flex gap-1">
                          <span className="flex items-center justify-center">
                            <svg
                              width={64}
                              height={64}
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 shrink-0"
                            >
                              <path
                                opacity="0.2"
                                d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                                fill="currentColor"
                              />
                              <path
                                d="M20 18C17.7938 18 16 19.7938 16 22V26C16 28.2063 17.7938 30 20 30H44C46.2063 30 48 28.2063 48 26V22C48 19.7938 46.2063 18 44 18H20ZM20 34C17.7938 34 16 35.7938 16 38V42C16 44.2063 17.7938 46 20 46H44C46.2063 46 48 44.2063 48 42V38C48 35.7938 46.2063 34 44 34H20Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="font-copy ml-1 font-bold  leading-title sm:font-headings  text-md md:text-base">
                            {el.title}
                          </span>
                        </div>
                        <p className="text-sm  ml-7 ">{el.description}</p>
                      </div>
                      <div className="block md:hidden aspect- aspect-h-1 rounded-xl overflow-hidden z-0 ">
                        <img
                          src={el.urlImage}
                          width={1200}
                          height={675}
                          className="rounded-xl  w-full object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative col-span-9">
                <div className="aspect-w-[1.8] aspect-h-1 absolute w-full"></div>
                <div className="hidden md:block bg-neutrals-light-2  rounded-xl">
                  <div className="relative z-20 max-w-screen-lg ">
                    <div className="mt-10 lg:mt-14">
                      <div className="aspect- aspect-h-1 rounded-xl overflow-hidden z-0 ">
                        <img
                          src={image}
                          width={1200}
                          height={675}
                          className="rounded-xl px-3 w-full object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funcionalities;
