"use client";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
import CardArticle from "../CardArticle";
const LastestContent = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <section className="w-full dark:text-white text-gray-15  py-10 md:py-16 2xl:py-20 light-copy">
      <div className="">
        <div className="container max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-[740px] pr-6">
              <h2 className="font-headings leading-title scroll-mt-[120px] text-4xl font-bold mt-4 mb-3 first:mt-0 title-limiter">
                Los articulos mas vistos
              </h2>
            </div>
          </div>
        </div>
        <div className=" mt-8 2xl:mt-14 flex w-full overflow-hidden">
          <Splide
            hasTrack={false}
            options={{
              drag: "free",
              gap: "0.5rem",
              arrows: false,
            }}
          >
            <div className="w-full ">
              <SplideTrack>
                {articles?.map((article: any, index: number) => (
                  <SplideSlide
                    key={index}
                    className="max-w-[314px] py-4 transform translate-x-11"
                  >
                    <CardArticle article={article} />
                  </SplideSlide>
                ))}{" "}
              </SplideTrack>
            </div>
          </Splide>
        </div>{" "}
      </div>
    </section>
  );
};

export default LastestContent;
