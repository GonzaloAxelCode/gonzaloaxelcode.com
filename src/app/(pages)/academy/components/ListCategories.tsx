'use client'

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import useSWR from 'swr';





export default function ListCategories() {
  const { data } = useSWR("/api/academytopic", fetcherCache);

  return (
      <div style={{ opacity: 1, transform: "none" }} className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
   {data?.map((el:any,index:any)=>{
    const { tags, title, description, category,subtitle, createdAt, cover } =
            extractInfoArticle(el);


    return  <div key={index} className="border-2 dark:border-darkborder  rounded-xl relative bg-gray-F7 dark:bg-blackbgsection flex items-center transition-all hover:shadow-playbook-box-hover h-full ">
      <div className="w-[70%] p-6 sm:p-12 pr-0">
        <span className="block font-bold text-base md:text-md text-primary-purple mb-4">
          {title}
        </span>
        <h2 className="text-xl lg:text-2xl  mt-2 wrap-balance">
          <a
            className="after:absolute after:inset-0"
                        href={`/academy/${suglifyTitle(title)}`}
          >
          {subtitle}
          </a>
        </h2>
        <div className="font-copy text-sm opacity-80 font-medium print:text-[10px] print:text-justify mt-4">
          <p className="my-6 first:mt-0 last:mb-0 print:my-2 ">
                      {description}
          </p>
        </div>
      </div>
      <img
        loading="lazy"
        width={628}
        height={628}
        decoding="async"
        data-nimg={1}
        className="w-[30%]"
        
        src={cover}
        style={{ color: "transparent" }}
      />
    </div>
   })}
  </div>
 
  )
}

