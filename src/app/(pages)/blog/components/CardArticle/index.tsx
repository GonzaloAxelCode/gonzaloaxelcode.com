import Flex from "@/shared/UIComponents/Base/Flex";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import { BoxBgOpacityClasses } from "@/shared/styles/custom-tw-classes";
import formatDate from "@/shared/utils/format-date";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
import { cn } from "tailwind-cn";

const CardArticle = ({ article }: any) => {
  const { tags, title, description, category, createdAt, cover } =
    extractInfoArticle(article);
  const { data } = useSWR(
    `/api/views?postId=${suglifyTitle(title)}`,
    fetcherCache
  );
  return (
    <Flex col>
      <article
        className={cn(
          "rounded-xl overflow-hidden border-2 relative w-full",
          BoxBgOpacityClasses
        )}
      >
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-w-16 aspect-h-9 block"
        >
          <img
            alt="Nuxt 3 Crash Course - Full Website Tutorial - 2023"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover rounded-lg h-[228px] w-full"
            sizes="100vw"
            src={cover}
          />
        </Link>
        <div className="mt-3 p-6">
          <footer className="flex justify-between text-base-flat font-medium text-gray-A4">
            <p className="text-sm text-gray-500 flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-4 h-4 mr-2"
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
              {data?.views} views
            </p>
            <p className="text-sm text-gray-500">{formatDate(createdAt)}</p>
          </footer>
          <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium mt-4">
            <Link
              href={`/blog/${suglifyTitle(title)}`}
              target="_blank"
              className="after:absolute after:inset-0"
              rel="noopener noreferrer"
            >
              <div>{title}</div>
            </Link>
          </h3>
        </div>
      </article>
    </Flex>
  );
};

export default CardArticle;
