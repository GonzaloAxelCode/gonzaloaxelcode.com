"use client";

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import {
  BorderOpacity,
  BoxBgOpacityClasses,
} from "@/shared/styles/custom-tw-classes";
import formatDate from "@/shared/utils/format-date";
import resumirTexto from "@/shared/utils/resume-text";
import sortByCreatedTime from "@/shared/utils/sort-createdtime";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import useSWR from "swr";
import { cn } from "tailwind-cn";
import CardVariant from "./components/CardVariant";

const BlogGridPresentation = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);

  const sortArticlesByDate: any = articles?.sort(sortByCreatedTime) || [];
  const sortArticlesByLiked = sortArticlesByDate;
  const articlesByViews = sortArticlesByDate;
  const sortArticlesByRecents = sortArticlesByDate;
  const articleRecent = extractInfoArticle(sortArticlesByDate[0]);

  const { data: viewsArticleRecent } = useSWR(
    `/api/views?postId=${suglifyTitle(articleRecent.title)}`,
    fetcherCache
  );

  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <div className="container my-12">
        <h1 className="font-bold text-base md:text-md mb-4 block text-primary-purple">
          The Prismic Blog
        </h1>
        <span className="relative font-headings font-bold text-6xl lg:text-7xl 2xl:text-8xl text-blackbg dark:text-white">
          <div data-projection-id={123} style={{ opacity: 1 }}>
            <div data-projection-id={124}>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "We produce food for Mice", // initially rendered starting point
                  1000,
                  "We produce food for Hamsters",
                  1000,
                  "We produce food for Guinea Pigs",
                  1000,
                  "We produce food for Chinchillas",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </span>
      </div>
      <section className="w-full text-gray-15 pb-10 md:pb-16 2xl:pb-20 overflow-hidden dark-copy">
        <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="hidden md:grid grid-cols-1 col-span-1 md:grid-cols-3 lg:col-span-3 xl:col-span-1 xl:grid-cols-1 gap-6 order-2 xl:order-1 xl:row-span-2">
            {sortArticlesByRecents &&
              sortArticlesByRecents
                .slice(1, 4)
                .map((el: any, index: number) => {
                  return <CardVariant article={el} key={index} type="normal" />;
                })}
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-9 lg:grid-cols-3 gap-6 order-1 xl:order-2 xl:row-span-1">
            <div className="col-span-1 md:col-span-5 lg:col-span-2 grid">
              <article
                className={cn(
                  "overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col    text-gray-15 dark:text-white",
                  BoxBgOpacityClasses
                )}
                style={{
                  backgroundImage: "url()",
                  backgroundSize: "contain",
                }}
              >
                <div className="">
                  <div className="aspect-[258/145] overflow-hidden relative">
                    <img
                      alt=""
                      loading="lazy"
                      width={2000}
                      height={2000}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      style={{ color: "transparent" }}
                      src={articleRecent.cover}
                    />
                  </div>
                </div>
                <div className="flex h-full gap-4 f p-8 flex-col">
                  <div className="flex justify-between items-center gap-4">
                    <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                      <Link
                        className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                        href={`/blog/${suglifyTitle(articleRecent.title)}`}
                      >
                        <svg
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 shrink-0 text-primary-blue"
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
                        <span className="whitespace-nowrap dark:text-white overflow-ellipsis overflow-hidden">
                          {articleRecent.category}
                        </span>
                      </Link>
                    </span>
                    <span className="shrink-0 text-gray-50 dark:text-graywhite">
                      {" "}
                      {formatDate(articleRecent.createdAt)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 flex-grow">
                    <Link
                      className="after:absolute after:inset-0"
                      href={`/blog/${suglifyTitle(articleRecent.title)}`}
                    >
                      <h2 className="font-headings tracking-tight scroll-mt-[120px] text-2xl lg:text-3xl 2xl:text-4xl font-medium">
                        {articleRecent.title}
                      </h2>
                    </Link>
                    <p className="text-gray-50 dark:text-graywhite">
                      {resumirTexto(articleRecent.description, 160)}
                    </p>
                  </div>
                  <footer className="flex items-center">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-sm-flat">
                        <a
                          className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                          href="/blog/authors/emmanuel-uchenna"
                        >
                          <img
                            loading="lazy"
                            width={64}
                            height={64}
                            decoding="async"
                            data-nimg={1}
                            className="rounded-full w-8 h-8"
                            style={{ color: "transparent" }}
                            src={siteMetadata.avatarImage}
                          />
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            By {/* */}
                            {siteMetadata.author}
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                      <div className="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block w-6 h-6 mr-1"
                        >
                          <path
                            d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                          <path
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                        </svg>
                        {viewsArticleRecent?.views}
                      </div>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
            <div
              className={cn(
                "grid grid-cols-1 md:col-span-4 lg:col-span-1 rounded-xl overflow-hidden",
                BorderOpacity
              )}
            >
              {sortArticlesByLiked &&
                sortArticlesByLiked
                  .slice(1, 7)
                  .map((el: any, index: number) => {
                    return (
                      <CardVariant
                        article={el}
                        key={index}
                        type="mini-card-liked"
                      />
                    );
                  })}
            </div>
          </div>
          <div className="hidden md:grid col-span-1 lg:col-span-3 grid-cols-1 md:grid-cols-3 gap-6 mt-6  order-3 xl:row-span-1">
            {articlesByViews &&
              articlesByViews.slice(1, 4).map((el: any, index: number) => {
                return (
                  <CardVariant article={el} key={index} type="mini-card" />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGridPresentation;
