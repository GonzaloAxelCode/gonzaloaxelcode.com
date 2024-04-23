"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import CommentsBlock from "./CommentsBlock ";
import ContentBlock from "./ContentBlokcs";
import siteMetadata from "@/shared/settings/sitemetdata";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import Link from "next/link";
import suglifyTitle from "@/shared/utils/suglify-title";

const ContentArticle = ({ content, id, similarArticles }: any) => {
  return (
    <div>
      <div className="w-full">
        {content &&
          content?.map((block: any, index: number) => {
            return (
              <div className="flex" key={index}>
                <ContentBlock block={block} />
              </div>
            );
          })}
      </div>
      <div id="end-id" />
      <div className="bg-gray-F7 dark:bg-gray-1F text-blackbg dark:text-white  rounded-xl p-8 dark-copy flex gap-4 my-12">
        <div>
          <span className="text-sm">Articulo escrito por</span>
          <h3 className="text-blackbg dark:text-white font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium mt-1">
            <Link target="_blank" href="/about">
              {siteMetadata.author}
            </Link>
          </h3>
          <div className="text-sm 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
            <p className="my-6 first:mt-0 last:mb-0 print:my-2">
              {siteMetadata.description}
            </p>
          </div>
          <a
            className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-4 focus:ring-4  border-gray-15  px-2 text-sm leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5  mt-4 inline-block -mb-2"
            href="/blog"
          >
            Mas posts
          </a>
        </div>
        <img
          alt="Coner Murphy profile picture."
          loading="lazy"
          width={1200}
          height={1126}
          decoding="async"
          data-nimg={1}
          className="w-20 h-20 rounded-full filter dark:invert object-contain"
          style={{ color: "transparent" }}
          src={siteMetadata.avatarImage}
        />
      </div>
      <div className="my-12 first:mt-0 last:mb-0 bg-gray-F7 dark:bg-blackbg p-6 rounded-xl">
        <h2 className="text-blackbg dark:text-white font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
          También podría gustarte
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {similarArticles?.slice(0, 2).map((article: any, index: any) => {
            const {
              tags,
              title,
              description,
              categoryColor,
              category,
              id,
              createdAt,
              cover,
            } = extractInfoArticle(article);
            return (
              <article
                key={index}
                className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-gray-F7 dark:bg-[#242424] border-gray-EE dark:border-gray-1F dark:text-white text-gray-15"
              >
                <div className="">
                  <div className=" bg-quaternary-purple">
                    <img src={cover} alt="h-full" />
                  </div>
                </div>
                <div className="flex h-full gap-4 f p-4 flex-col">
                  <div className="flex justify-between items-center gap-4">
                    <span className="flex tracking-tight font-normal items-center gap-1.5  h-6  text-sm overflow-auto relative z-10 text-gray-15">
                      <Link
                        className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                        href={`/blog/${suglifyTitle(title)}`}
                        target="_blank"
                      >
                        <svg
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 shrink-0"
                          style={{
                            color:
                              COLORS_NOTION[categoryColor] ||
                              COLORS_NOTION["default"].colorDM,
                          }}
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
                        <span className="  dark:text-white text-gray-15 whitespace-nowrap overflow-ellipsis overflow-hidden">
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
            );
          })}
        </div>
      </div>

      <CommentsBlock idArticle={id} />
    </div>
  );
};

export default ContentArticle;
