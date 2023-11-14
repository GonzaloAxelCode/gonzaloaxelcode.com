"use client";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const RelatedArticles = () => {
  const { data: relatedArticles } = useSWR("/api/blog", fetcherCache);

  return (
    <section className="px-4 pb-20 lg:px-7 lg:py-35 text-neutrals-opaque-2">
      <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
        <h2 className="mb-10  mt-10  leading-title text-3xl  sm:text-4xl font-medium text-center lg:text-left lg:max-w-none max-w-[80%] mx-auto lg:mb-16">
          Articulos relacionados
        </h2>
        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {relatedArticles &&
            relatedArticles?.slice(0, 3).map((article: any, index: any) => {
              const { tags, title, description, category, createdAt, cover } =
                extractInfoArticle(article);

              const href = `/blog/${suglifyTitle(title)}`;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-y-3 lg:gap-y-6 lg:text-lg group"
                >
                  <Link
                    className="aspect-[386/215] w-full relative"
                    href={href}
                  >
                    <figure className="inset-0 absolute rounded-[14px] overflow-hidden z-0">
                      <img
                        alt="AI Templates"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="100vw"
                        src={cover}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          color: "transparent",
                        }}
                      />
                    </figure>
                  </Link>
                  <div className="flex justify-between w-full lg:block gap-x-8">
                    <Link href={href}>
                      <h3 className="mb-1 font-sans font-semibold lg:mb-2">
                        {category}
                      </h3>
                      <p className="text-neutrals-opaque-8">{title}</p>
                    </Link>
                    <Link
                      className="lg:hidden font-semibold text-sm px-4 h-9 text-white bg-alpha-dark-3 hover:bg-alpha-dark-4  focus-visible:shadow-button-focus-gray group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full"
                      href={href}
                    >
                      Ver articulo
                    </Link>
                  </div>
                  <Link
                    className="hidden lg:flex text-md lg:text-base h-11  bg-alpha-dark-3 hover:bg-alpha-dark-4  focus-visible:shadow-button-focus-gray group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full"
                    href={href}
                  >
                    Explore templates
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 transition group-hover:translate-x-0.5"
                    >
                      <path
                        d="M13 19L20 12M20 12L13 5M20 12L3 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
