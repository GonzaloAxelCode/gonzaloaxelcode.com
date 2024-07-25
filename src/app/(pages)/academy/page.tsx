import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import Title from "@/shared/UIComponents/Base/Title";
import type { Metadata } from "next";
import ListCategories from "./components/ListCategories";

export const metadata: Metadata = {
  title: "Gonzalo Axel Academy",
  description: "Academia",

  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};
const PageAcademy = () => {
  return (
    <main className="w-full ">
      <section

        className="mx-[4%]"
      >

        <div className="slice-layout w-full text-gray-15  py-8 ">
          <div className="container">
            <div className="relative p-7 md:p-12  rounded-xl  border-2  border-gray-100 dark:border-darkborder bg-white  dark:bg-[#272727] overflow-hidden  ">
              <div className="relative z-10">
                <div className="w-full max-w-[564px] sm:w-[80%] md:w-[50%]">
                  <img
                    alt=""
                    className="block sm:hidden object-contain object-left w-[250px] h-[250px] m-auto"
                    src="https://holbertonschoolpr.com/images/web_2.webp"
                    style={{
                      color: "transparent"
                    }}
                  />
                  <Title>
                    Academy: Explorando el universo de la tecnología
                  </Title>
                  <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4">
                    <p className="my-6 first:mt-0 last:mb-0 print:my-2 dark:text-white text-black">
                      Explorando el universo de la tecnología: Desde conceptos básicos hasta innovaciones avanzadas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="block -mr-12 ml-12 -mb-12 -mt-24 sm:m-0 sm:h-auto absolute sm:top-0 sm:bottom-0 sm:-right-[10%] sm:left-[60%] lg:left-[40%]">
                <img
                  alt=""
                  className="object-cover object-left"
                  src="https://holbertonschoolpr.com/images/web_2.webp"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",

                    color: "transparent"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <ListCategories />
        <div className="slice-layout w-full text-gray-15 py-12 md:py-20 2xl:py-24">
          <div className="container">
            <div className="sm:flex justify-between items-center relative z-10">

              <Title className="text-3xl">
                Nuevos temas para profundizar
              </Title>

            </div>

            <div className=" h-full mt-6 lg:mt-12 ">
              <div
                className="grid gap-5 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3"
              >
                <div
                  className=" swiper-slide flex h-full flex-col items-center group swiper-slide-active"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    July 9, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] group-first:left-0 group-first:right-0 rounded-l-full bg-secondary-purple">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className=" scroll-mt-[120px]  text-xl">
                          Translate with AI and Next.js 15 / Svelte 5 support! - June
                          Chronicles 2024
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
                <div
                  className="swiper-slide flex h-full flex-col items-center group swiper-slide-next"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    June 10, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] -left-6 -right-6 bg-secondary-purple">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className="scroll-mt-[120px]  text-xl">
                          Advanced Slice Modeling and Team Spaces in the Page Builder
                          - May 2024 Product Updates
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
                <div
                  className="swiper-slide flex h-full flex-col items-center group"

                >
                  <div className="bg-gray-15 text-base-flat relative text-white py-4 px-6 rounded-xl whitespace-nowrap after:content-[''] after:block after:w-3 after:h-3 after:bg-gray-15 after:rotate-45 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:z-10">
                    April 30, 2024
                  </div>
                  <div className="flex items-center relative mt-5 mb-7 h-[6px] w-full">
                    <div className="h-4 w-4 bg-white border-4 border-secondary-purple rounded-full z-10 absolute left-1/2 -translate-x-1/2" />
                    <div className="absolute top-0 bottom-0 flex justify-end h-[6px] group-last:left-0 group-last:right-0 rounded-r-full">
                      <div className="w-1/2 hidden group-last:block bg-secondary-purple" />
                      <div className="w-1/2 grid-cols-[repeat(19,_minmax(0,_1fr))] hidden group-last:grid overflow-hidden">
                        <div className="bg-secondary-purple col-span-2 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-4 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-7 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-10 h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[13] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[16] h-[6px] rounded-full" />
                        <div className="bg-secondary-purple col-span-2 col-start-[19] h-[6px] rounded-full" />
                      </div>
                    </div>
                  </div>
                  <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                    <div className="flex h-full gap-4 f p-8 flex-col">
                      <div className="flex flex-col gap-4 flex-grow">

                        <p className="scroll-mt-[120px]  text-xl">




                          New Revision History &amp; Media Library Search. What About
                          an AI Copywriter? – April 2024 Product Updates
                        </p>

                        <p className="text-gray-50" />
                      </div>

                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};


export default PageAcademy;

