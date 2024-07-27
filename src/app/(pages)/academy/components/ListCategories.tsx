'use client'

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { obtenerCategoriasUnicas } from "@/shared/hooks/functions-notion";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from 'swr';





export default function ListCategories() {
  const { data } = useSWR("/api/academytopic", fetcherCache);
  const categorias = obtenerCategoriasUnicas(data);


  return (
    <div className="container relative z-10" id="developers">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data?.map((el: any, index: any) => {
          const { tags, title, description, category, createdAt, cover } =
            extractInfoArticle(el);


          return <article key={index} className="rounded-2xl overflow-hidden relative flex flex-col justify-between bg-gray-F7 dark:bg-[#2b2b2b]">
            <img src={cover} />
            <div className="p-8">

              <Link className="after:absolute after:inset-0" href={`/academy/${suglifyTitle(title)}`}>
                <h4 className=" tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                  {title}
                </h4>
                <div className="font-copy text-sm font-medium print:text-[10px] print:text-justify mt-4">
                  <p className="my-6 first:mt-0 last:mb-0 print:my-2 opacity-50">
                    {description}
                  </p>
                </div>
              </Link>
              <Link
                href={`/academy/${suglifyTitle(title)}`}
                className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-2 text-xs-flat leading-5 bg-gray-15 dark:bg-white text-white dark:text-black px-4 inline-block mt-6 relative z-10"

              >
                Explorar
              </Link>
            </div>

          </article>

        })}
      </div>
    </div>
  )
}

