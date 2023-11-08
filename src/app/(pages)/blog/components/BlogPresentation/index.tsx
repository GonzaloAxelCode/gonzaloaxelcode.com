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
      <div className="container mt-6 mb-12">
        <span className="relative font-headings font-bold text-6xl lg:text-7xl 2xl:text-8xl text-blackbg dark:text-white">
          <svg
            className="absolute h-8 left-[35%] -top-3"
            viewBox="0 0 1039 260"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1030.69.04 824.86 19.27c-4.42.42-6.19 3.9-5.8 7.27a6.296 6.296 0 0 0-.8 4.38l1.89 12.72a7.453 7.453 0 0 0-1.22 1.72c-12 23.51-16 49.83-20.27 75.66l-.08.13a5.18 5.18 0 0 0-.59 3.53 6.835 6.835 0 0 0-.21 1c-.46 4.06 2.47 6.87 6.23 7.82l83.6 21a5.474 5.474 0 0 0 3.21-.21l10.95 13.56c2.85 3.54 8.42 3.78 11.23.24l124.34-156.85c3.81-4.81-.57-11.78-6.65-11.2Zm-160.9 104.6-51 9.6 19.5-33.79c.27-.482.456-1.006.55-1.55L961 41.74a1229.87 1229.87 0 0 0-91.21 62.9Zm-37.07-72.17 160.15-15-155.33 47.24c-1.613-10.733-3.22-21.48-4.82-32.24Zm-8.65 37.69.66 4.47c.039.28.099.558.18.83l-4.71 8.16c1.13-4.58 2.4-9.03 3.87-13.46Zm6.8 55.95 32.28-6.09 14.35 17.79-46.63-11.7Zm76.31 26.36a31540.184 31540.184 0 0 0-29.27-36.26 1221.856 1221.856 0 0 1 123.36-82.36l-94.09 118.62ZM145.504 165.206c2.082 3.043 7.44 4.505 10.449 1.824a294.743 294.743 0 0 1 139.255-69.28c25.661-5.004 52.425-7.084 78.489-4.513 3.689.366 7.356.918 10.989 1.653-11.927 13.083-17.992 30.444-9.449 48.277 5.182 10.808 14.18 19.886 25.956 23.087a30.197 30.197 0 0 0 31.281-10.483c7.708-9.801 9.44-23.173 6.733-35.135-2.993-13.115-11.295-23.04-22.397-30.046a69.743 69.743 0 0 1 9.175-3.225c26.917-7.366 56.421-1.45 81.975 8.124 29.598 11.094 56.49 27.956 84.106 42.971 48.128 26.164 108.4 48.163 160.909 20.277a92.401 92.401 0 0 0 15.528-10.379c7.401-6.126-1.185-18.436-8.67-12.294-21.136 17.49-48.961 22.56-75.753 19.777-33.412-3.481-63.718-18.748-92.708-34.822-29.967-16.63-59.417-34.344-92.448-44.304-28.75-8.672-62.019-11.768-90.152.825a74.587 74.587 0 0 0-9.559 5.171c-10.727-3.26-22.14-4.491-33.207-5.037a302.992 302.992 0 0 0-43.721.95 309.941 309.941 0 0 0-158.616 62.464 264.228 264.228 0 0 0-16.365 13.626c-3.024 2.762-4.283 6.882-1.8 10.492Zm279.651-29.512c-1.295 8.525-7.144 16.955-16.658 16.67-8.601-.264-15.893-7.638-19.402-14.94-7.275-15.175.331-28.333 12.086-37.58 14.901 6.249 26.747 17.346 23.929 35.83l.045.02Z"
              className=""
            />
          </svg>
          <div data-projection-id={123} style={{ opacity: 1 }}>
            <div data-projection-id={124} className="leading-title ">
              Conectando el mundo a través <br />
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
                {" "}
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "de la tecnología.",
                    1000,
                    "de la programacion.",
                    1000,
                    "del codigo.",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />{" "}
                <span
                  className="absolute top-13 right-0"
                  style={{ display: "inline-block", verticalAlign: "top" }}
                >
                  <svg
                    viewBox="0 0 24 23"
                    style={{
                      width: 26,
                      height: 26,
                      display: "block",

                      flexShrink: 0,
                    }}
                    fill="#bd73e8"
                  >
                    <g>
                      <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                      <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                    </g>
                  </svg>
                </span>
              </span>
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
                            Por {/* */}
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
