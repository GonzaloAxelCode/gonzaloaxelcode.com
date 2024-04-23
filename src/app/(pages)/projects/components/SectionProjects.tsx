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
            const {
              description,
              cover,
              title,
              linkpreview,
              indicadores,
              tecnologias,
              isLocked,
              linkGithubFull,
            } = extractContentProyect(project);

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
                        {isLocked ? (
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className=" flex items-center gap-2  px-4 py-2  w-fi">
                              <img
                                width={20}
                                height={20}
                                className=""
                                src="https://cdn-icons-png.flaticon.com/512/456/456112.png"
                              />
                              <span>Acceso Privado</span>
                            </div>

                            <button className="cursor-pointer flex items-center gap-2  px-4 py-2  w-fi">
                              <Link
                                target="_blank"
                                href={linkpreview}
                                className=" hover:underline"
                              >
                                <span className="flex items-center body-medium font-sans !font-medium ">
                                  Live Preview
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="root"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </button>
                          </div>
                        ) : null}
                        {!isLocked ? (
                          <div className="flex gap-3 flex-wrap">
                            <button className="cursor-pointer flex items-center gap-2  px-4 py-2  w-fi">
                              <Link
                                href={linkGithubFull}
                                target="_blank"
                                className=" flex items-center hover:underline"
                              >
                                <span className="flex items-center body-medium font-sans !font-medium ">
                                  <span className="mx-3">
                                    Ver repositorio GitHub
                                  </span>
                                  <img
                                    width={20}
                                    height={20}
                                    className="filter invert dark:invert-0"
                                    src="https://cdn.sanity.io/images/sdd9dua4/production/9b1e47098fd7b242fc4f534c89390bbb8c6053a2-20x20.svg?fit=max&auto=format"
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="root"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </button>

                            <button className="cursor-pointer flex items-center gap-2  px-4 py-2  w-fi">
                              <Link href={href} className=" hover:underline">
                                <span className="flex items-center body-medium font-sans !font-medium ">
                                  Detalles
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="root"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </button>

                            <button className="cursor-pointer flex items-center gap-2  px-4 py-2  w-fi">
                              <Link
                                target="_blank"
                                href={linkpreview}
                                className=" hover:underline"
                              >
                                <span className="flex items-center body-medium font-sans !font-medium ">
                                  Live Preview
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="root"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </button>
                          </div>
                        ) : null}
                      </div>
                      <div className="relative md:ml-0 md:inline">
                        <Link
                          href={isLocked ? "#" : href}
                          className="after:absolute after:inset-0"
                        >
                          <img src={cover} alt="" />
                        </Link>
                      </div>
                    </div>
                    {!isLocked ? (
                      <div className="grid grid-cols-1 gap-5 px-5 pt-6 sm:grid-cols-2 ">
                        <div className="p-6  hover:-translate-y-1 transform transition-all duration-150  overflow-hidden  relative border-1 border-solid  dark:border-white/[0.12] border-black/[0.05] bg-[#f0f0f0] hover:bg-[#e9e9e9] dark:bg-[#282828]  rounded-xl cursor-pointer">
                          <div className="w-full">
                            <p className="font-headings text-2xl">
                              {" "}
                              <Link
                                href={indicadores.indicador1?.href || "#d"}
                                className="after:absolute after:inset-0"
                                target="_blank"
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
                                href={indicadores.indicador2?.href || "#d"}
                                target="_blank"
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
                    ) : null}
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
