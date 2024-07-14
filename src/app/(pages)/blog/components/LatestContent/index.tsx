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
        <div className=" mt-8 2xl:mt-14 flex   overflow-hidden container max-w-[1024px] lg:max-w-[1280px]">
          <Splide
            hasTrack={false}
            options={{
              perPage: 4,
              gap: "0.5rem",
              arrows: false,
            }}
          >
            <div className="w-screen">
              <SplideTrack>
                {articles?.map((article: any, index: number) => (
                  <SplideSlide
                    key={index}
                    className="max-w-[270px] py-4 transform translate-x-11"
                  >
                    <CardArticle2 article={article} />
                  </SplideSlide>
                ))}{" "}
                 <SplideSlide
                 
                    className="max-w-[90px] py-4 transform translate-x-11"
                  >
                  
                  </SplideSlide> 
              </SplideTrack>
            </div>
          </Splide>
        </div>{" "}
      </div>
    </section>
  );
};

export default LastestContent;
