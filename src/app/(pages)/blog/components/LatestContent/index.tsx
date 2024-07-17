"use client";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
import CardArticle2 from "../CardArticle2";
const LastestContent = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <section className="w-full dark:text-white text-gray-15  py-10 md:py-16 2xl:py-20 light-copy">
      <div className="">
        <div className="container max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-[740px] pr-6">
              <h2 className="font-headings leading-title scroll-mt-[120px] text-3xl md:text-4xl font-bold mt-4 mb-3 first:mt-0 title-limiter">
                Los articulos mas vistos
              </h2>
              <p>
                Este es el listado de los articuloas mas vistos de mi blog.Con
                todas las categorias.
              </p>
            </div>
          </div>
        </div>
     <Splide
      hasTrack={false}
      options={{
        perPage: 1,
        gap: "0.5rem",
        arrows: false,
      }}
    >
      <section className="w-full  text-gray-15 dark:text-white py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy ">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
         
        
          <div className="w-full">
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
      </div>
    </section>
  );
};

export default LastestContent;
