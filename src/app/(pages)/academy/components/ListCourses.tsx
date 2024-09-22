'use client'

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from 'swr';

export default function ListCourses({ slug }: any) {

  const { data, error } = useSWR(slug ? `/api/coursesbyslug?slug=${slug}` : null, fetcherCache);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div className="relative m-3 flex flex-wrap min-h-lg">
        {data?.map((el: any, index: any) => {
          const { tags, icon, title, description, category, createdAt, cover } =
            extractInfoArticle(el);


          return <Link
            href={`/academy/${suglifyTitle(category)}/${suglifyTitle(title)}`}

            key={index} className="relative max-w-sm min-w-[240px] bg-white dark:bg-[#2b2b2b] shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img
                className="h-40 rounded-2xl w-full object-cover"
                src={cover || icon}
              />
              <p className="absolute right-2 top-2 bg-white dark:bg-[#2b2b2b] rounded-full p-1 cursor-pointer group">
                <img src={icon} alt="" className="w-8 h-8" />
              </p>
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-0">
                  {title}
                </p>
                <p className="text-md text-gray-800 dark:text-gray-300 mt-0">{description}</p>
              </div>
              <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">

              </div>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}

