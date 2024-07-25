'use client'

import { obtenerCategoriasUnicas } from "@/shared/hooks/functions-notion";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from 'swr';





export default function ListCategories() {
  const { data } = useSWR("/api/academy", fetcherCache);
  const categorias = obtenerCategoriasUnicas(data);


  return (
    <div className="container relative z-10" id="developers">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {categorias?.map((el: any, index: any) => {
          return <article key={index} className="rounded-2xl overflow-hidden relative flex flex-col justify-between bg-quaternary-blue dark:bg-[#2b2b2b]">
            <div className="p-8">
              <div className="py-1 px-2 rounded-md text-white inline-block text-xs font-bold absolute bottom-8 left-8 bg-primary-blue ">
                Featured
              </div>
              <Link className="after:absolute after:inset-0"                           href={`/academy/${suglifyTitle(el.name)}`}>
                <p className=" tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                 Python desde Cero a Experto
                </p>
                <div className="font-copy text-base font-medium print:text-[10px] print:text-justify mt-4">
                  <p className="my-6 first:mt-0 last:mb-0 print:my-2 opacity-50">
                    This complete guide will provide you with everything you need to
                    understand headless concepts and leverage them in your projects.
                  </p>
                </div>
              </Link>
              <Link
                          href={`/academy/${suglifyTitle(el.name)}`}
                className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-2 text-xs-flat leading-5 bg-gray-15 dark:bg-white text-white dark:text-black px-4 inline-block mt-6 relative z-10"
                
              >
                Read the guide
              </Link>
            </div>
            <img
              alt=""
              
              width={517}
              height={290}
              decoding="async"
              data-nimg={1}
              className="w-full"

              src="https://prismic-main.cdn.prismic.io/prismic-main/5c2448e1-3966-4216-86b3-ab92bb811cb5_headless.svg?fit=max&w=1080"
              style={{ color: "transparent" }}
            />
          </article>

        })}


      </div>






    </div>
  )
}

