"use client";
import LogosBg from "@/shared/components/LogosBg";
import { fetcherCache } from "@/shared/services/fetcher";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import resumirTexto from "@/shared/utils/resume-text";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
import TecnologiesProyect from "./TecnologiesProyect";
import extractContentProyect from "@/shared/hooks/extractContentProyect";

const SectionProjects = () => {
  const { data: projects } = useSWR("/api/projects", fetcherCache);

  return (
    <section className="pt-14 md:pt-32 max-w-[768px] lg:max-w-[1280px]  mx-auto  px-2 md:px-8">
      <div className="flex flex-col gap-6 justify-center items-center">
        {projects &&
          projects?.map((project: any, index: any) => {
            const { description, cover, title, indicadores, tecnologias } =
              extractContentProyect(project);

            const href = `/projects/${suglifyTitle(title)}`;
            return (
              <div key={index} className="flex flex-col">
                <div className="grid w-full grid-cols-1 gap-1 items-center pb-6   rounded-xl">
                  <div className="flex flex-col w-full">
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-1 items-center pt-8">
                      <div className="flex flex-col gap-6 px-8 lg:px-10 lg:pr-0 lg:pt-10">
                        <div className="flex flex-col gap-3">
                          <div className="lg:max-w-[511px]">
                            <h3 className="text-3xl sm:text-3xl md:text-4xl leading-title ">
                              {title}
                            </h3>
                          </div>
                          <span className="body-medium lg:body-largemd:w-10/12">
                            {resumirTexto(description, 140)}
                          </span>
                        </div>

                        <TecnologiesProyect tecnologias={tecnologias} />

                        <div className="flex gap-3 flex-wrap">
                          <button
                            className="cursor-pointer flex none box-border select-none hover:opacity-80 items-center gap-2 border px-4 py-2 rounded-[14px]  w-fit  dark:border-white/[0.12] border-black/[0.05] bg-gray-F7 dark:bg-[#303030]"
                            data-projection-id={2997}
                          >
                            <span className="body-medium font-sans !font-medium ">
                              View on GitHub
                            </span>
                            <img
                              width={20}
                              height={20}
                              className="filter invert dark:invert-0"
                              src="https://cdn.sanity.io/images/sdd9dua4/production/9b1e47098fd7b242fc4f534c89390bbb8c6053a2-20x20.svg?fit=max&auto=format"
                            />
                          </button>
                          <button
                            className="cursor-pointer flex none box-border select-none hover:opacity-80 items-center gap-2 border px-4 py-2 rounded-[14px]  w-fit dark:border-white/[0.12] border-black/[0.05] bg-gray-F7 dark:bg-[#303030] "
                            data-projection-id={2998}
                          >
                            <Link href={href}>
                              <span className="body-medium font-sans !font-medium ">
                                Ver proyecto
                              </span>
                            </Link>
                          </button>
                          <button
                            className="cursor-pointer flex none box-border select-none hover:opacity-80 items-center gap-2 border px-4 py-2 rounded-[14px]  w-fit dark:border-white/[0.12] border-black/[0.05] bg-gray-F7 dark:bg-[#303030] "
                            data-projection-id={2998}
                          >
                            <span className="body-medium font-sans !font-medium ">
                              Live Preview
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="relative md:ml-0 md:inline">
                        <Link
                          href={href}
                          className="after:absolute after:inset-0"
                        >
                          <img src={cover} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 px-5 pt-6 sm:grid-cols-2 ">
                      <div className="p-6  hover:-translate-y-1 transform transition-all duration-150  overflow-hidden  relative border-1 border-solid  dark:border-white/[0.12] border-black/[0.05] bg-[#f0f0f0] hover:bg-[#e9e9e9] dark:bg-[#282828]  rounded-xl cursor-pointer">
                        <div className="w-full">
                          <p className="font-headings text-2xl">
                            {" "}
                            <Link
                              href={indicadores.indicador1?.href || "#d"}
                              className="after:absolute after:inset-0"
                            >
                              {indicadores.indicador1?.title || "Sin titulo"}
                            </Link>
                          </p>
                          <p className="pb-8 pr-5">
                            {indicadores.indicador1?.description ||
                              "Sin descripccion"}
                          </p>
                        </div>
                        <img
                          className=""
                          src={
                            indicadores.indicador1?.urlImage ||
                            "https://res.cloudinary.com/ddksrkond/image/upload/v1699679048/features-image_a3k8sd.png"
                          }
                        />
                        <div className="justify-center-center absolute right-[3%] top-[3%]  flex aspect-square flex-col items-center rounded-full border p-0.5  border-white/[0.12] dark:border-white/[0.12]  bg-white dark:bg-[#242424]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="29"
                          >
                            <path
                              className="fill-black dark:fill-white"
                              fillRule="evenodd"
                              d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="p-6  hover:-translate-y-1 transform transition-all duration-150  overflow-hidden  relative border-1 border-solid dark:border-white/[0.12] border-black/[0.05]  bg-[#f0f0f0] hover:bg-[#e9e9e9] dark:bg-[#282828] rounded-xl cursor-pointer">
                        <div className="w-full">
                          <p className="font-headings text-2xl">
                            <Link
                              href={indicadores.indicador1?.href || "#d"}
                              className="after:absolute after:inset-0"
                            >
                              {indicadores.indicador2?.title || "Sin titulo"}
                            </Link>
                          </p>
                          <p className="pb-8 pr-5">
                            {indicadores.indicador2?.description ||
                              "Sin descripccion"}
                          </p>
                        </div>
                        <img
                          className=""
                          src={
                            indicadores.indicador2?.urlImage ||
                            "https://res.cloudinary.com/ddksrkond/image/upload/v1699679048/features-image_a3k8sd.png"
                          }
                        />
                        <div className="justify-center-center absolute right-[3%] top-[3%]  flex aspect-square flex-col items-center rounded-full border p-0.5  border-white/[0.12] dark:border-white/[0.12]  bg-white dark:bg-[#242424]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="29"
                          >
                            <path
                              className="fill-black dark:fill-white"
                              fillRule="evenodd"
                              d="M20.547 17.088V8.595h-8.493v1.666h5.648l-8.594 8.595 1.178 1.179 8.595-8.595v5.648h1.666Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SectionProjects;
