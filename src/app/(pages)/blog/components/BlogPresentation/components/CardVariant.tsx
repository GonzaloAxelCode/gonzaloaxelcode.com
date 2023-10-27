"use client";
import P from "@/shared/UIComponents/Base/P";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import usePostRatings from "@/shared/hooks/usePostRatings";
import { fetcherCache } from "@/shared/services/fetcher";
import siteMetadata from "@/shared/settings/sitemetdata";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
//@ts-ignore
import { cn } from "tailwind-cn";
type TYPE = "normal" | "mini-card-liked" | "mini-card";

const CardVariant = ({ article, type }: { article: any; type: TYPE }) => {
  const { tags, title, description, category, id, createdAt, cover } =
    extractInfoArticle(article);
  const {
    ratings: { like },
  } = usePostRatings(id);
  const { data } = useSWR(
    `/api/views?postId=${suglifyTitle(title)}`,
    fetcherCache
  );
 
  return (
    <>
      {type === "normal" && (
        <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white dark:bg-gray-1F border-gray-EE dark:border-gray-1F text-gray-15 dark:text-white">
          <div className="">
            <div className="aspect-[258/145] overflow-hidden relative">
              <img
                alt=""
                loading="lazy"
                width={517}
                height={290}
                decoding="async"
                data-nimg={1}
                className="object-cover w-full h-full"
                style={{ color: "transparent" }}
                src={cover}
              />
            </div>
          </div>
          <div className="flex h-full gap-4 f p-4 flex-col">
            <div className="flex justify-between items-center gap-4">
              <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                <Link
                  className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                  href={`/blog/${suglifyTitle(title)}`}
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
                  <span className="dark:text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {category}
                  </span>
                </Link>
              </span>
            </div>
            <div className="flex flex-col gap-4 flex-grow">
              <Link
                className="after:absolute after:inset-0"
                href={`/blog/${suglifyTitle(title)}`}
              >
                <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                  {title}
                </h2>
              </Link>
            </div>
          </div>
        </article>
      )}

      {type === "mini-card-liked" && (
        <div
          className="border-b-2 border-gray-EE dark:border-darkborder last:border-b-0 hidden md:block"
          data-projection-id={11}
        >
          <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row  bg-white dark:bg-gray-1F border-gray-EE dark:border-gray-1F text-gray-15 dark:text-white">
            <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
              <div className="flex flex-col gap-4 flex-grow">
                <Link
                  className="after:absolute after:inset-0"
                  href={`/blog/${suglifyTitle(title)}`}
                >
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                    Tailwind CSS vs. Bootstrap: Which is better?
                  </h2>
                </Link>
              </div>
            </div>
            <div className="w-14 h-16 bg-gray-F7 dark:bg-gray-1F relative rounded-lg shrink-0  font-headings flex flex-col items-center justify-center overflow-hidden m-4">
              <div
                className={cn(
                  " w-14 py-3 h-16 relative rounded-lg shrink-0 font-headings flex flex-col items-center justify-center overflow-hidden",
                  "bg-gray-F7 dark:bg-blackbg"
                )}
              >
                <span className=" text-xl">👍</span>
                <P className="text-sm relative z-10">{like}</P>
              </div>
            </div>
          </article>
        </div>
      )}

      {type === "mini-card" && (
        <article className="overflow-hidden flex w-full grow h-full relative border-b-2 pb-6 flex-col   bg-transparent dark:border-darkborder   text-gray-15 dark:text-white">
          <div className="flex h-full gap-4 f mt-6 sm:mt-0 flex-col">
            <div className="flex justify-between items-center gap-4">
              <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                <Link
                  className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                  href={`/blog/${suglifyTitle(title)}`}
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
                  <span className="dark:text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {category}
                  </span>
                </Link>
              </span>
            </div>
            <div className="flex flex-col gap-4 flex-grow">
              <Link
                className="after:absolute after:inset-0"
                href={`/blog/${suglifyTitle(title)}`}
              >
                <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                  {title}
                </h2>
              </Link>
            </div>
            <footer className="flex items-center">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sm-flat">
                  <Link
                    className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                    href={`/blog/${suglifyTitle(title)}`}
                  >
                    <img
                      alt="Coner Murphy profile picture."
                      loading="lazy"
                      width={64}
                      height={64}
                      decoding="async"
                      data-nimg={1}
                      className="rounded-full w-6 h-6"
                      style={{ color: "transparent" }}
                      src={siteMetadata.avatarImage}
                    />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      By {/* */}
                      {siteMetadata.author}
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
      )}
    </>
  );
};

export default CardVariant;
