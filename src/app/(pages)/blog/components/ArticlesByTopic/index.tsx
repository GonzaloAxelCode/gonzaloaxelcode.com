"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import COLORS_NOTION from "@/shared/utils/colors-notion";
//@ts-ignore
import { getTags } from "@/shared/services/notion-services";
import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import suglifyTitle from "@/shared/utils/suglify-title";
//@ts-ignore
import {
  filterByTagAndCategory,
  obtenerCategoriasUnicas,
} from "@/shared/hooks/functions-notion";
//@ts-ignore
import { BoxBgOpacityClasses } from "@/shared/styles/custom-tw-classes";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { cn } from "tailwind-cn";
import CardArticle2 from "../CardArticle2";
const ArticlesByTopic = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  const categorias = obtenerCategoriasUnicas(articles);

  const [filterArticles, setFilterArticles] = useState(articles);
  const [changeTag, setChangeTag] = useState("all-tags");
  const [allTags, setAllTags] = useState<any>([]);

  const [changeCategorySlug, setChangeCategorySlug] = useState(
    suglifyTitle(categorias[0]?.name)
  );
  useEffect(() => {
    const cate = obtenerCategoriasUnicas(articles);
    setChangeCategorySlug(cate[0]?.name);
  }, [articles]);
  //cuando cambia el tag
  useEffect(() => {
    const filterArticlesByTag = filterByTagAndCategory(
      articles,
      suglifyTitle(changeTag),
      changeCategorySlug
    );
    const sortArticlesByDate =
      filterArticlesByTag?.sort(sortByCreatedTime) || [];
    setFilterArticles(sortArticlesByDate);
  }, [changeTag]);

  //cuando cambia la categoria
  useEffect(() => {
    const filterpages = articles?.filter((page: any) => {
      return (
        suglifyTitle(page.properties?.Category?.select.name) ===
        suglifyTitle(changeCategorySlug)
      );
    });
    const tags = getTags(filterpages);
    const sortArticlesByDate = filterpages?.sort(sortByCreatedTime);
    setFilterArticles(sortArticlesByDate);
    setAllTags(tags);
  }, [changeCategorySlug]);

  return (
    <section className="w-full text-gray-15 py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy dark:text-white ">
      <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <div className="">
          <div className="relative z-10 flex justify-between items-end">
            <div className="max-w-lg">
              <h2 className="font-headings leading-title text-3xl md:text-4xl  font-bold">
                Articulos por categoria
              </h2>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-6 copy-muted">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  Aqui estan todos los articulos organizados por categorias y
                  tags para que puedas escoger.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="relative z-3  w-screen ">
            <div className="absolute -bottom-0 z-28   h-[1px] border-t-2 dark:border-darkborder  border-gray-EE w-full grid bg-transparent"></div>

            <Splide
              hasTrack={false}
              options={{
                perPage: 1,
                gap: "0.5rem",
                arrows: false,
              }}
            >
              <div className="w-full ">
                <SplideTrack>
                  {categorias &&
                    categorias?.map((el: any, index: number) => {
                      const colorCategory =
                        COLORS_NOTION[el?.color || "default"];

                      return (
                        <SplideSlide
                          onClick={() => {
                            setChangeCategorySlug(suglifyTitle(el.name));
                            setChangeTag("all-tags");
                          }}
                          key={index}
                          className="max-w-[200px]"
                        >
                          <button
                            className={cn(
                              "w-[200px] relative z-10 px-6 py-4 pb-5 lg:px-12 lg:py-6  border-1   focus:outline-none rounded-t-xl flex items-center gap-3 h-full",
                              BoxBgOpacityClasses,
                              changeCategorySlug === suglifyTitle(el.name) &&
                                "border-b-0"
                            )}
                          >
                            <svg
                              width={64}
                              height={64}
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8"
                              style={{
                                color: colorCategory.colorDM,
                              }}
                            >
                              <path
                                opacity="0.2"
                                d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                                fill="currentColor"
                              />
                              <path
                                d="M23 22.5C23.8313 22.5 24.5 21.8313 24.5 21C24.5 20.1688 23.8313 19.5 23 19.5C22.1688 19.5 21.5 20.1688 21.5 21C21.5 21.8313 22.1688 22.5 23 22.5ZM28 21C28 23.05 26.7688 24.8125 25 25.5813V31.0688C26.175 30.3875 27.5438 30 29 30H35C37.2063 30 39 28.2063 39 26V25.5813C37.2313 24.8125 36 23.05 36 21C36 18.2375 38.2375 16 41 16C43.7625 16 46 18.2375 46 21C46 23.05 44.7688 24.8125 43 25.5813V26C43 30.4188 39.4188 34 35 34H29C26.7938 34 25 35.7938 25 38V38.4188C26.7688 39.1875 28 40.95 28 43C28 45.7625 25.7625 48 23 48C20.2375 48 18 45.7625 18 43C18 40.95 19.2313 39.1875 21 38.4188V25.5813C19.2313 24.8125 18 23.05 18 21C18 18.2375 20.2375 16 23 16C25.7625 16 28 18.2375 28 21ZM42.5 21C42.5 20.1688 41.8313 19.5 41 19.5C40.1688 19.5 39.5 20.1688 39.5 21C39.5 21.8313 40.1688 22.5 41 22.5C41.8313 22.5 42.5 21.8313 42.5 21ZM23 44.5C23.8313 44.5 24.5 43.8313 24.5 43C24.5 42.1688 23.8313 41.5 23 41.5C22.1688 41.5 21.5 42.1688 21.5 43C21.5 43.8313 22.1688 44.5 23 44.5Z"
                                fill="currentColor"
                              />
                            </svg>
                            {el.name}
                          </button>
                        </SplideSlide>
                      );
                    })}
                </SplideTrack>
              </div>
            </Splide>
          </div>

          <div
            className={cn(
              "relative z-1 p-6 z-1  lg:p-12 border-1 border-t-0 rounded-bl-xl dark:border-darkborder"
            )}
          >
            <nav className="mb-4 relative">
              <div className="overflow-auto">
                <div className="flex mb-4 text-sm font-semibold gap-2">
                  <button
                    onClick={() => setChangeTag("all-tags")}
                    className={cn(
                      "leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0 ",
                      changeTag === "all-tags"
                        ? "text-primary-blue underline underline-offset-4 "
                        : ""
                    )}
                  >
                    All
                  </button>

                  {allTags &&
                    allTags?.map((tagname: any, index: number) => {
                      return (
                        <span
                          key={index}
                          onClick={() => setChangeTag(suglifyTitle(tagname))}
                          className="last:pr-6 cursor-pointer"
                        >
                          <button
                            className={cn(
                              " font-normal leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0 ",
                              changeTag === suglifyTitle(tagname)
                                ? "text-primary-blue underline underline-offset-4 "
                                : ""
                            )}
                          >
                            {tagname}
                          </button>
                        </span>
                      );
                    })}
                </div>
              </div>
            </nav>

            <Splide
              hasTrack={false}
              options={{
                perPage: 1,
                gap: "0.5rem",
                arrows: false,
              }}
            >
              <div className="flex w-full">
                <div className="flex ml-auto space-x-2 splide__arrows">
                  <button className="splide__arrow splide__arrow--prev disabled:opacity-30 dark:text-white">
                    <svg
                      className="w-[18px] h-[18px]"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"></path>
                    </svg>
                  </button>
                  <button className="splide__arrow splide__arrow--next disabled:opacity-30 dark:text-white">
                    <svg
                      className="w-[18px] h-[18px]"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <SplideTrack>
                  {filterArticles &&
                    filterArticles?.map((article: any, index: number) => (
                      <SplideSlide key={index} className="max-w-[274px] py-4">
                        <CardArticle2 article={article} key={index} />
                      </SplideSlide>
                    ))}
                </SplideTrack>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesByTopic;
