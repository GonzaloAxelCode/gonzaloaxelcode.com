"use client";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import { useState } from "react";

const News = ({ article }: any) => {
  const [news, setNews] = useState(false);

  if (!news) {
    return null;
  }

  return (
    <div className="flex">
      <div className="w-[93%] pl-6 pr-1 py-1 mt-2 text-xs rounded-lg sm:rounded-3xl flex flex-col sm:flex-row overflow-hidden relative md:justify-between mx-auto bg-gray-30 bg-gray-F7 dark:bg-[#323232]">
        <div className="text-center justify-center flex flex-row items-center ">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-primary-purple"
          >
            <path
              opacity="0.2"
              d="M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16C7.163 64 0 56.837 0 48V16Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.565 15.435a2 2 0 0 1 0 2.828c-7.42 7.42-7.42 19.45 0 26.87a2 2 0 0 1-2.829 2.829c-8.982-8.982-8.982-23.545 0-32.527a2 2 0 0 1 2.829 0Zm26.87 0a2 2 0 0 1 2.828 0c8.983 8.982 8.983 23.545 0 32.527a2 2 0 1 1-2.828-2.829c7.42-7.42 7.42-19.45 0-26.87a2 2 0 0 1 0-2.828Zm-4.95 5.05a2 2 0 0 1 2.829 0c6.248 6.249 6.248 16.38 0 22.628a2 2 0 0 1-2.829-2.829c4.687-4.686 4.687-12.284 0-16.97a2 2 0 0 1 0-2.829Zm-16.97 2.829a2 2 0 1 0-2.829-2.829c-6.248 6.249-6.248 16.38 0 22.628a2 2 0 0 0 2.829-2.829c-4.687-4.686-4.687-12.284 0-16.97ZM32 38a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
              fill="currentColor"
            />
          </svg>
          <span>Nuevo Articulo</span>
        </div>
        <div className="items-center flex justify-center flex-wrap gap-x-4 gap-y-2">
          <span className="text-center m-auto flex">
            👉{" "}
            {article?.properties.Name?.title[0]?.plain_text ||
              "Articulo sin Titulo"}<span>


          <Link
            className="font-bold underline inline-block underline-offset-4 hover:underline-offset-2"
            onClick={() => setNews(false)}
            href={`/blog/${suglifyTitle(
              article?.properties.Name?.title[0]?.plain_text ||
                "Articulo sin Titulo"
            )}`}
          >
            Ver
          </Link></span>
          </span>

        </div>
       <button
          onClick={() => setNews(false)}
          className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 sm:mr-4"
          type="button"
          aria-label="Close banner"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-gray-EE"
          >
            <path
              d="m7.757 7.757 8.486 8.486M7.757 16.243l8.486-8.486"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button> 
      </div>
      
    </div>
  );
};

export default News;
