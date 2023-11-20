"use client";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import formatDate from "@/shared/utils/format-date";
import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const BestArticle = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  const sortArticlesByDate: any = articles?.sort(sortByCreatedTime) || [];

  const { category, title, description, cover, createdAt } = extractInfoArticle(
    sortArticlesByDate[0]
  );

  return (
    <section className="hidden md:flex flex-col items-center justify-center w-full mx-auto my-10 ">
      <div className="w-[60vw]">
        <div className="border-google">
          <img src={cover} className="image mx-auto" alt="" />
        </div>
        <div className="flex h-full gap-1 py-6 pb-3 flex-col">
          <div className="flex flex-col justify-between gap-1">
            <span className="flex tracking-tight items-center gap-1.5 h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15 dark:text-white">
              <Link
                className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                href="#"
              >
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    opacity="0.2"
                    d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 18C17.7938 18 16 19.7938 16 22V26C16 28.2063 17.7938 30 20 30H44C46.2063 30 48 28.2063 48 26V22C48 19.7938 46.2063 18 44 18H20ZM20 34C17.7938 34 16 35.7938 16 38V42C16 44.2063 17.7938 46 20 46H44C46.2063 46 48 44.2063 48 42V38C48 35.7938 46.2063 34 44 34H20Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="whitespace-nowrap text-sm overflow-ellipsis overflow-hidden">
                  {category}
                </span>
              </Link>
            </span>
            <span className="shrink-0 text-gray-50 text-sm dark:text-graywhite">
              {formatDate(createdAt)}
            </span>
          </div>
          <div className="flex flex-col flex-grow">
            <Link
              href={`/blog/${suglifyTitle(title)}`}
              target="_blank"
              className=""
            >
              <p className="font-headings scroll-mt-[120px] dark:text-white text-2xl leading-title 2xl:2xl-tight font-medium">
                {title}
              </p>
            </Link>
          </div>
          <footer className="flex items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm-flat">
                <div className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE">
                  <img
                    loading="lazy"
                    width={64}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="w-6 h-6 object-contain filter dark:invert"
                    src={siteMetadata.avatarImage}
                    style={{ color: "transparent" }}
                  />
                  <span className="overflow-hidden text-xs dark:text-graywhite text-ellipsis whitespace-nowrap">
                    By {siteMetadata.author}
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default BestArticle;
