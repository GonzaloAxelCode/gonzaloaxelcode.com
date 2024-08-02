"use client";
import extractContentProyect from "@/shared/hooks/extractContentProyect";
import { fetcherCache } from "@/shared/services/fetcher";
import P from "@/shared/UIComponents/Base/P";
import resumirTexto from "@/shared/utils/resume-text";
import suglifyTitle from "@/shared/utils/suglify-title";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import TecnologiesProyect from "./TecnologiesProyect";
// <TecnologiesProyect tecnologias={tecnologias} />
const SectionProjects = () => {
  const { data: projects } = useSWR("/api/projects", fetcherCache);

  return (
              <main className="grow mx-auto flex flex-col">
        {projects &&
          projects?.map((project: any, index: any) => {
            const {
              description,
              cover,
              title,
              linkpreview,
              indicadores,
              tecnologias,
              isLocked,
              category,
              imagesPages,
              linkGithubFull,
            } = extractContentProyect(project);
            
            const href = `/projects/${suglifyTitle(title)}`;
            return (
                <div key={index} className="grid  md:grid-cols-2 container items-center overflow-hidden slice-layout w-full py-12 md:py-15 2xl:py-20">
              <div className="  md:grid md:grid-cols-6 relative z-10">
                <div className="md:col-span-6 md:pr-4">
                  <div className="flex items-center gap-1 mb-6">
                    <span className="text-sm py-0.5 px-1.5 rounded-md font-bold border-2 flex items-centers gap-1  border-gray-15 bg-gray-15 dark:bg-white text-white  dark:text-black">
                      {category}
                    </span>
                    <span className="text-sm items-center py-0.3 px-1.5 rounded-md font-bold border-2 flex items-centers gap-1 bg-quaternary-orange text-primary-orange border-tertiary-orange">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76563 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                          fill="currentColor"
                        />
                      </svg>
                      Beta
                    </span>
                  </div>
                  <div className="mr-10">



                    <p className="mb-5 text-2xl md:text-3xl font-headings text-gray-A4" style={{
                      letterSpacing: "-.025em",
                      lineHeight: 1.083,
                    }}>
                      <strong>
                        {title}
                      </strong>
                    </p>


                    <div className="font-copy mb-4 text-sm lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-lg">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2 opacity-50">
                        {resumirTexto(description,300)}
                      </p>
                    </div>
                    <TecnologiesProyect tecnologias={tecnologias} />
                    <div className="flex items-center flex-wrap gap-4 mt-6">
                      <Link href={href}>
                      
                      <button className="rounded-full  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 dark:bg-white text-white px-6 dark:text-black">
                        Ver el software completo 
                      </button>
                                            </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0">

                <div className="parent">
                  <div className="div1" >
                    <Image
                      alt=""

                      width={1440}
                      height={623}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover rounded-100 border-0"

                      src={cover}

                    />
                  </div>
                  <div className="div2">

                    <img
                      alt=""

                      width={905}
                      height={623}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover rounded-100 border-0"

                      src={imagesPages[0]?.external.url}

                    />
                  </div>
                  <div className="div3">

                    <img
                      alt=""

                      width={1220}
                      height={623}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover rounded-100 border-0"
                      src={imagesPages[1]?.external.url}
                      

                    />
                  </div>

                </div>
                <P className="text-xs italic font-light my-2">
                
                </P>
              </div>
            </div>
            );
          })}
      </main>
      
  );
};

export default SectionProjects;
