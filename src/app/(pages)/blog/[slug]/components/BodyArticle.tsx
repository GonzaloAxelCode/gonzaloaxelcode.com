"use client";
import { fetcherCache } from "@/shared/services/fetcher";
import ContentArticle from "./ContentArticle";
import TableOfContent from "./TableOfContent";
import useSWR from "swr";
import suglifyTitle from "@/shared/utils/suglify-title";

const BodyArticle = ({ content, article, category }: any) => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);

  const similarArticles = articles?.filter((art: any) => {
    return (
      suglifyTitle(art.properties?.Category?.select.name) ===
      suglifyTitle(category?.name)
    );
  });

  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:pt-10 max-w-[768px] lg:max-w-[1280px] mx-auto px-8">
      <div className="lg:col-span-8 lg:max-w-[46rem] pb-12 xl:pl-11 xl:pr-16 order-2 min-h-screen">
        <ContentArticle
          similarArticles={similarArticles}
          content={content}
          id={article.id}
        />
      </div>
      <TableOfContent content={content} id={article.id} />
    </div>
  );
};

export default BodyArticle;
