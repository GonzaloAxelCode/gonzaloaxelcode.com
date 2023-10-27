"use client";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
import CardArticle2 from "../CardArticle2";
const ChooseTechStack = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <Splide
      hasTrack={false}
      options={{
        drag: "free",
        gap: "0.5rem",
      }}
    >
      <section className="w-full dark:bg-blackbgsection text-gray-15 dark:text-white py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="sm:col-span-1 z-10 relative">
            <div className="relative z-10 pr-12 sm:pb-20">
              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                Choose your tech stack
              </h2>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-6">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  Build a solid foundation as you select the technologies and
                  tools to help you build a great website faster.{" "}
                </p>
              </div>
              <a
                className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 inline-block mt-6 md:mt-12"
                href="#"
              >
                Read more
              </a>
              <nav className="splide__arrows gap-2 flex blog-post-swiper-nav-a61e6647-294a-457f-9a1c-c35a20497725 mt-10 absolute bottom-0 right-0 sm:left-0 sm:right-auto">
                <button
                  aria-label="Previous"
                  className="splide__arrow splide__arrow--prev disabled:opacity-50 prev dark:text-gray-700 text-graywhite disable:text-gray-15 rounded-full border-2 h-10 w-10 transition-all  disabled:bg-transparent border-gray-15 bg-gray-15 dark:bg-white  blog-post-swiper-nav-disabled"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-90 mx-auto"
                  >
                    <path
                      d="m8 10 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="splide__arrow splide__arrow--next disabled:opacity-50 next rounded-full dark:text-gray-700 text-graywhite disable:text-gray-15 border-2 h-10 w-10 transition-all  disabled:bg-transparent border-gray-15 bg-gray-15 dark:bg-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-90 mx-auto"
                  >
                    <path
                      d="m8 10 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <SplideTrack>
              {articles?.map((article: any, index: number) => (
                <SplideSlide key={index} className="max-w-[286px] py-4">
                  <CardArticle2 article={article} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </div>
      </section>
    </Splide>
  );
};

export default ChooseTechStack;
