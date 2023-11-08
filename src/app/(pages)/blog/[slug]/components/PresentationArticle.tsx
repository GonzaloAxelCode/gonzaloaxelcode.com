"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import Title from "@/shared/UIComponents/Base/Title";
import useExtractInfoArticle from "@/shared/hooks/useExtractInfoArticle";
import usePostViews from "@/shared/hooks/usePostViews";
import siteMetadata from "@/shared/settings/sitemetdata";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import formatDate from "@/shared/utils/format-date";
import suglifyTitle from "@/shared/utils/suglify-title";
import Image from "next/image";

const PresentationArticle = ({ article }: any) => {
  const {
    tags,
    title,
    updatedLast,
    minRead,
    description,
    cover,
    category,
    createdAt,
    categoryColor,
  } = useExtractInfoArticle(article);
  console.log(article);
  const viewCount = usePostViews(suglifyTitle(title));
  return (
    <Flex
      full
      itemscenter
      justifycenter
      className="flex-col lg:flex-row my-8 max-w-[768px] lg:max-w-[1280px] mx-auto px-8"
    >
      <Flex col full className="space-y-3">
        <Flex full itemscenter className="gap-2 flex-wrap">
          <P>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
              style={{
                color: COLORS_NOTION[categoryColor],
              }}
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
          </P>
          <P className="text-xs sm:text-sm text-black font-bold">{category}</P>
          <P className="text-sm sm:text-md">{formatDate(createdAt)}</P>
          <P>&middot;</P>
          <P className="text-sm sm:text-md">{minRead} min read</P>
        </Flex>
        <Title className="text-3xl  lg:text-5xl max-w-lg lg:max-w-none">
          {title}
        </Title>
        <Flex full itemscenter className="space-x-3">
          <Image
            className="rounded-full object-cover"
            src={siteMetadata.avatarImage}
            width={30}
            height={30}
            alt={siteMetadata.author}
          />
          <P className="m-0 text-xs sm:text-sm">Por {siteMetadata.author}</P>
          <Flex itemscenter>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-6 h-6 mr-1 dark:text-white text-graydark"
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

            <div className="w-0.5 h-6 bg-gray"></div>
            <P className="text-xs flex items-center sm:text-sm">
              {" "}
              | {viewCount} views |{" "}
              <img
                className="h-8 w-8 object-contain"
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699381028/ChatGPT-Logo_xghvfd.png"
                alt=""
              />{" "}
              Generado y revisado{" "}
            </P>
          </Flex>
        </Flex>
      </Flex>
      <Flex full col className="my-4">
        <picture>
          <Image
            width={1280}
            height={720}
            src={cover}
            className="object-contain border-2 border-black rounded-2xl border-solid"
            alt={title}
          />
        </picture>
        <P className="text-sm italic font-light my-2">
          Article updated on {formatDate(updatedLast)}
        </P>
      </Flex>
    </Flex>
  );
};

export default PresentationArticle;
