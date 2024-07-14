"use client";
import { fetcherCache } from "@/shared/services/fetcher";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
import CardArticle from "../../blog/components/CardArticle";

const RecentArticles = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <div className=" mt-8 2xl:mt-14  w-screen overflow-hidden">
      <Splide
        hasTrack={false}
        options={{
          perPage: 1,
          gap: "0.5rem",
          arrows: false,
          marginLeft:20
        }}
      >
        <div className="w-full ">
          <SplideTrack>
            {articles?.map((article: any, index: number) => (
              <SplideSlide
                key={index}
                className=" sm:translate-x-0 max-w-[300px] mr-2 py-4  dark:text-white text-gray-1F"
              >
                <CardArticle article={article} />
              </SplideSlide>
            ))}{" "}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

export default RecentArticles;
