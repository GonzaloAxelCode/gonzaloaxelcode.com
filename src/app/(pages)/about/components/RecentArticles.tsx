"use client";
import React from "react";
import { fetcherCache } from "@/shared/services/fetcher";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
import CardArticle from "../../blog/components/CardArticle";

const RecentArticles = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <div className=" mt-8 2xl:mt-14 flex w-full overflow-hidden">
      <Splide
        hasTrack={false}
        options={{
          drag: "free",
          gap: "0.5rem",
          arrows: false,
        }}
      >
        <div className="w-full">
          <SplideTrack>
            {articles?.map((article: any, index: number) => (
              <SplideSlide
                key={index}
                className="max-w-[314px] py-4  dark:text-white text-gray-1F"
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
