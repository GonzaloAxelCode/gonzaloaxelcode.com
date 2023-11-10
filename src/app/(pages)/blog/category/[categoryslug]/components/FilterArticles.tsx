"use client";

import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import suglifyTitle from "@/shared/utils/suglify-title";
import { useEffect, useState } from "react";
import { cn } from "tailwind-cn";
import ArticleCard from "./ArticleCard";
import ArticleCardBig from "./ArticleCardBig";

const FilterArticles = ({ articles, tags }: any) => {
  const [filterArticles, setFilterArticles] = useState(articles);
  const [changeTag, setChangeTag] = useState("all-tags");
  useEffect(() => {
    const filterArticlesByTag = filterByTag(articles, suglifyTitle(changeTag));
    const sortArticlesByDate = filterArticlesByTag.sort(sortByCreatedTime);
    setFilterArticles(sortArticlesByDate);
  }, [changeTag]);

  function filterByTag(data: any, tagName: any) {
    if (
      tagName === "all-tags" ||
      tagName === "" ||
      tagName === null ||
      tagName === " "
    ) {
      return data;
    } else {
      return data.filter((item: any) => {
        const tags = item?.properties?.Tags?.multi_select?.map((tag: any) =>
          suglifyTitle(tag.name)
        );
        return tags.includes(suglifyTitle(tagName));
      });
    }
  }
  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <nav className="mb-4 relative mb-12">
        <h2 className="font-bold mb-3">Filtrar por tag</h2>
        <div className="w-6 bg-gradient-to-r from-transparent to-white  dark:to-gray-1F absolute z-10 right-0 top-0 bottom-4" />
        <div className="overflow-auto">
          <div className="flex mb-4 text-sm font-semibold gap-2">
            <div className="flex items-center">
              <span className="">
                <button
                  onClick={() => setChangeTag("all-tags")}
                  className={cn(
                    changeTag === "all-tags"
                      ? "bg-primary-purple text-white"
                      : "bg-gray-F7  dark:bg-gray-1F dark:text-white text-blackbg",
                    "leading-4 whitespace-nowrap font-normal  transition-all duration-300    p-4  rounded-xl"
                  )}
                >
                  All
                </button>
              </span>
            </div>

            {tags &&
              tags?.map((tagname: any, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => setChangeTag(suglifyTitle(tagname))}
                    className="h-full flex items-center"
                  >
                    <span className="">
                      <button
                        className={cn(
                          changeTag === suglifyTitle(tagname)
                            ? "bg-primary-purple text-white"
                            : "bg-gray-F7 dark:bg-gray-1F dark:text-white text-blackbg",
                          "leading-4 whitespace-nowrap  transition-all duration-300 p-4  font-normal  rounded-xl  relative"
                        )}
                      >
                        {tagname}
                      </button>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filterArticles &&
          filterArticles?.slice(0, 2).map((el: any, index: any) => {
            return (
              <div key={index} className="w-full">
                <ArticleCardBig article={el} />
              </div>
            );
          })}
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2 grid grid-cols-1 gap-6 mt-12">
        {filterArticles &&
          filterArticles?.slice(2).map((el: any, index: any) => {
            return (
              <div key={index} className="w-full">
                <ArticleCard article={el} />
              </div>
            );
          })}
      </div>
      <button
        className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white mt-12 mx-auto block border transition-all dark:border-white"
        type="button"
      >
        Load more
      </button>
    </div>
  );
};

export default FilterArticles;
