"use client";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const RecentArticlesHome = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div className="mt-8">
            <div className="grid gap-3 md:gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {articles &&
                articles?.slice(0, 6).map((article: any, index: any) => {
                  const {
                    id,
                    categoryColor,
                    tags,
                    title,
                    description,
                    category,
                    createdAt,
                    cover,
                  } = extractInfoArticle(article);
                  return (
                    <Link
                      key={index}
                      className="z-0 flex flex-col relative overflow-hidden border rounded-xl dark:border-graydark"
                      href={`/blog/${suglifyTitle(title)}`}
                    >
                      <div className="flex flex-col justify-between flex-1 p-6">
                        <h3 className="min-h-[150px] text-lg font-medium leading-tight md:text-lg font-chromatic-grotesque">
                          {title}
                        </h3>
                        <div className="mt-10 md:mt-22">
                          <p className="font-chromatic-grotesque">
                            {siteMetadata.author}
                          </p>
                          <p className="font-chromatic-grotesque text-[#908F91]">
                            {category}
                          </p>
                        </div>
                      </div>
                      <div className="relative bg-neutrals-light-2 aspect-w-16 aspect-h-9">
                        <span
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                        >
                          <img alt="" src={cover} className="object-cover" />
                          <noscript />
                        </span>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="grid justify-center py-10">
              <Link href="/blog">
                <button className="text-lg leading-none px-7 h-[50px] font-semibold box-border border border-alpha-light-2 text-neutrals-opaque-13 hover:bg-alpha-light-2 hover:border-alpha-light-3 focus-visible:shadow-button-focus-gray group font-semibold whitespace-nowrap tracking-[-0.01em] transition focus:outline-none inline-flex items-center justify-center rounded-full">
                  Ver blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentArticlesHome;
