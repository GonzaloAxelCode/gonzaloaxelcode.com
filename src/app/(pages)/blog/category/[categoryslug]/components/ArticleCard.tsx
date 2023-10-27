"use client";

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import formatDate from "@/shared/utils/format-date";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";

const ArticleCard = ({ article }: any) => {
  const el = article;
  const { tags, title, description, category, createdAt, cover } =
    extractInfoArticle(el);
  const { data } = useSWR(
    `/api/views?postId=${suglifyTitle(title)}`,
    fetcherCache
  );
 
  return (
    <div
      className="flex w-full"
      data-projection-id={40}
      style={{
        opacity: 1,
        transform: "none",
        transformOrigin: "50% 50% 0px",
      }}
    >
      <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col dark:border-gray-1F bg-white  text-gray-15 dark:text-white dark:bg-gray-1F">
        <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
          <div className="aspect-[258/145] overflow-hidden relative rounded-lg">
            <img
              alt=""
              loading="lazy"
              width={517}
              height={290}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full"
              src={cover}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
          <div className="flex justify-between items-center gap-4">
            <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
              <Link
                className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                href="/blog/category/performance-and-ux"
              >
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0 text-primary-purple"
                >
                  <path
                    opacity="0.2"
                    d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M39.8394 18.788C40.2081 17.9317 39.9331 16.9318 39.1769 16.3818C38.4207 15.8318 37.3895 15.8818 36.6833 16.4943L20.6838 30.4938C20.0588 31.0438 19.8338 31.925 20.1276 32.7C20.4213 33.4749 21.1713 33.9999 22.0025 33.9999H28.971L24.1649 45.212C23.7962 46.0683 24.0712 47.0682 24.8274 47.6182C25.5836 48.1682 26.6149 48.1182 27.3211 47.5057L43.3205 33.5062C43.9455 32.9562 44.1705 32.075 43.8767 31.3C43.583 30.5251 42.8393 30.0063 42.0018 30.0063H35.0333L39.8394 18.788Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="dark:text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {category}
                </span>
              </Link>
            </span>
            <span className="shrink-0 text-gray-50 mr-2 dark:text-white">
              {formatDate(createdAt)}
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <Link
              className="after:absolute after:inset-0"
              href={`/blog/${suglifyTitle(title)}`}
            >
              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                {title}
              </h2>
            </Link>
          </div>
          <footer className="flex items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm-flat">
                <Link
                  className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                  href="/blog/authors/eric-burel"
                >
                  <img
                    alt="Eric Burel"
                    loading="lazy"
                    width={64}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-full w-6 h-6"
                    src={siteMetadata.avatarImage}
                    style={{ color: "transparent" }}
                  />
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    By {siteMetadata.author}
                  </span>
                </Link>
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
                {data?.views}
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
