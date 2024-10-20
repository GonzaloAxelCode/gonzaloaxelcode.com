"use client";
import extractContentProyect from "@/shared/hooks/extractContentProyect";
import { fetcherCache } from "@/shared/services/fetcher";
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
    <main className="grid grid-cols-1 md:grid-cols-2  gap-5 w-full">
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
            <div key={index} className="grid  md:grid-cols-1 container items-start overflow-hidden slice-layout w-full py-12 md:py-15 2xl:py-20">
              <div className="  md:grid md:grid-cols-6 relative z-10 items-start">
                <div className="md:col-span-6 md:pr-4">
                  <div className="flex items-center gap-1 mb-2"> <span className="text-sm py-0.5 px-1.5 rounded-md  border-2 flex items-centers gap-1 bg-gray-15 border-gray-15 text-white"> {category} </span> <span className="items-center text-sm py-0.5 px-1.5 border-0 rounded-md font-bold  flex items-centers gap-1 bg-quaternary-green text-primary-green "> <svg width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76563 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="currentColor"
                    />
                  </svg>
                    <span>
                      En ejecucion
                    </span>
                  </span>
                  </div>
                  <div className="mr-10">



                    <Link href={href} className="hover:underline hover:underline-offset-3 mb-5 text-2xl md:text-3xl font-headings text-gray-A4 flex items-center gap-2" style={{
                      letterSpacing: "-.025em",
                      lineHeight: 1.083,
                    }}>
                      <span className="">
                        {title}

                      </span>
                      <span>
                        <svg
                          className="dark:fill-white "
                          width={16}
                          height={16}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_146_2669)">
                            <path
                              d="M8.00008 0C7.73486 0 7.48051 0.105357 7.29297 0.292893C7.10544 0.48043 7.00008 0.734784 7.00008 1C7.00008 1.26522 7.10544 1.51957 7.29297 1.70711C7.48051 1.89464 7.73486 2 8.00008 2H10.5861L4.29308 8.293C4.19757 8.38525 4.12139 8.49559 4.06898 8.6176C4.01657 8.7396 3.98898 8.87082 3.98783 9.0036C3.98668 9.13638 4.01198 9.26806 4.06226 9.39095C4.11254 9.51385 4.18679 9.6255 4.28069 9.71939C4.37458 9.81329 4.48623 9.88754 4.60913 9.93782C4.73202 9.9881 4.8637 10.0134 4.99648 10.0123C5.12926 10.0111 5.26048 9.98351 5.38249 9.9311C5.50449 9.87869 5.61483 9.80251 5.70708 9.707L12.0001 3.414V6C12.0001 6.26522 12.1054 6.51957 12.293 6.70711C12.4805 6.89464 12.7349 7 13.0001 7C13.2653 7 13.5197 6.89464 13.7072 6.70711C13.8947 6.51957 14.0001 6.26522 14.0001 6V1C14.0001 0.734784 13.8947 0.48043 13.7072 0.292893C13.5197 0.105357 13.2653 0 13.0001 0H8.00008Z"
                              fill="currentColor"
                            />
                            <path
                              d="M2 2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10C10.5304 14 11.0391 13.7893 11.4142 13.4142C11.7893 13.0391 12 12.5304 12 12V9C12 8.73478 11.8946 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8C10.7348 8 10.4804 8.10536 10.2929 8.29289C10.1054 8.48043 10 8.73478 10 9V12H2V4H5C5.26522 4 5.51957 3.89464 5.70711 3.70711C5.89464 3.51957 6 3.26522 6 3C6 2.73478 5.89464 2.48043 5.70711 2.29289C5.51957 2.10536 5.26522 2 5 2H2Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_146_2669">
                              <rect width={14} height={14} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                    </Link>


                    <div className="min-h-[95px] font-copy mb-4 text-sm lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-lg">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2 text-gray-800 dark:text-gray-300">
                        {resumirTexto(description, 300)}
                      </p>
                    </div>
                    <TecnologiesProyect tecnologias={tecnologias} />

                    <div className="flex items-center flex-wrap gap-4 mt-6">

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
                      className="object-contain rounded-100 border-1 dark:border-0"

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
                      className="object-cover rounded-100 border-1 dark:border-0"

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
                      className="object-cover rounded-100 border-1 dark:border-0"
                      src={imagesPages[1]?.external.url}


                    />
                  </div>

                </div>

              </div>
            </div>
          );
        })}
    </main>

  );
};

export default SectionProjects;
