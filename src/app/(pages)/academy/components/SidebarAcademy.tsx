"use client"

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { fetcherCache } from "@/shared/services/fetcher";


import suglifyTitle from "@/shared/utils/suglify-title";
import { useEffect, useState } from "react";
import useSWR from 'swr';
import ListCourses from "./ListCourses";
const SidebarAcademy = () => {
    const { data, isLoading } = useSWR("/api/academytopic", fetcherCache);

    const [slugSelected, setSlugSelected] = useState("")
    useEffect(() => {
        if (data) {

            setSlugSelected(suglifyTitle(extractInfoArticle(data[0]).title))
        }
    }, [data])
    return (
        <section className="mt-20 flex gap-5 relative flex-wrap md:flex-nowrap">

            <div className="flex items-start justify-center md:sticky relative md:top-[100px]">
                <div aria-label="card" className="  w-full">
                    <div aria-label="header" className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 shrink-0"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                        </svg>
                        <div className="space-y-0.5 flex-1">
                            <h3 className="font-medium text-lg tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                                Tecnologias & Lenguajes
                            </h3>
                            <p className="text-sm font-normal text-gray-400 leading-none">
                                Basico - Intermedio - Avanzado
                            </p>
                        </div>

                    </div>





                    <div aria-label="content" className="mt-5 grid gap-2.5">
                        {data?.map((el: any, index: any) => {
                            const { tags, title, icon, description, category, subtitle, createdAt, cover } =
                                extractInfoArticle(el);
                            return <div onClick={() => setSlugSelected(suglifyTitle(title))} key={index} className="cursor-pointer">
                                <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100 dark:bg-[#2b2b2b] min-w-[300px]">
                                    <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">

                                        <img src={icon} className="w-8 4 h-8" alt="" />
                                    </span>
                                    <div className="flex flex-col flex-1">
                                        <p className="text-md font-copy font-bold">{title}</p>
                                        <div className="divide-x divide-gray-200 mt-auto">
                                            <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                                                {subtitle}
                                            </span>

                                        </div>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 6l6 6l-6 6" />
                                    </svg>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <ListCourses slug={slugSelected} />
        </section>


    )
}

export default SidebarAcademy