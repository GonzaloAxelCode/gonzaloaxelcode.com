"use client";
import LogosBg from "@/shared/components/LogosBg";
import { fetcherCache } from "@/shared/services/fetcher";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import resumirTexto from "@/shared/utils/resume-text";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
import TecnologiesProyect from "../TecnologiesProyect";
const SectionProjects = () => {
  const { data: projects } = useSWR("/api/projects", fetcherCache);

  return (
    <section className="pt-14 md:pt-32 max-w-[768px]  lg:max-w-[1280px]  mx-auto  px-8">
      <div className="flex flex-col gap-6 justify-center items-center">
        {projects &&
          projects?.map((project: any, index: any) => {
            let description =
              project?.properties?.Description.rich_text[0]?.plain_text ||
              "Articulo aun no terminado.Intenta mas tarde.";
            const title =
              project?.properties.Name?.title[0]?.plain_text ||
              "Articulo sin Titulo";
            const tags = project?.properties?.Tags?.multi_select || [];
            const cover =
              project?.cover?.file?.url || project?.cover?.external?.url || "";
            const href = `/projects/${suglifyTitle(title)}`;
            return (
              <div
                key={index}
                className="relative z-10 overflow-hidden  px-6 py-12 sm:px-8 md:px-14"
              >
                <div className="flex items-center  flex-wrap flex-col lg:flex-row">
                  <div className="w-full">
                    <div className="relative z-20 mb-10 text-center lg:mb-0 lg:text-left">
                      <div className="mb-4.5 inline-flex items-center rounded-3xl  py-2.5">
                        <span className="pr-2.5">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z"
                              fill="#F27430"
                            />
                          </svg>
                        </span>
                        <p className="font-heading text-sm font-medium text-fb-orange ">
                          En desarrollo actualmente
                        </p>
                        <span
                          style={{
                            background: "rgb(254, 240, 138)",
                            color: "rgb(113, 63, 18)",
                            padding: "2px 6px",

                            borderRadius: 5,
                            fontSize: 11,
                          }}
                          className="font-headings font-bold mx-1"
                        >
                          PRO
                        </span>
                      </div>
                      <h2 className="mx-auto mb-5 max-w-[490px] font-heading text-2xl font-black  sm:text-4xl sm:leading-[45px] lg:ml-0">
                        {title}
                      </h2>
                      <p className="mx-auto max-w-[530px] mb-4 text-sm leading-[24px] text-body-color lg:ml-0">
                        {resumirTexto(description, 200)}
                      </p>
                      <TecnologiesProyect />
                    </div>
                  </div>
                  <div className="w-full h-[40vw]">
                    <div className="container  transform translate-y-[70%]">
                      <div className="grid grid-cols-12 gap-x-6">
                        <img
                          loading="lazy"
                          width={1030}
                          height={1300}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-2xl border-2 border-gray-15 relative z-10 border-opacity-10 shadow-image-fix col-span-5"
                          style={{ color: "transparent" }}
                          src={cover}
                        />
                        <div className="col-span-9 relative col-start-4 -mt-[50%]">
                          <img
                            loading="lazy"
                            width={1896}
                            height={1140}
                            decoding="async"
                            data-nimg={1}
                            className="rounded-2xl border-2 border-gray-15  border-opacity-10 shadow-image-fix"
                            style={{ color: "transparent" }}
                            src={cover}
                          />
                          <span className="block text-xs-flat text-sm   leading-4 mt-2 absolute max-w-[45%]">
                            Capturas.
                          </span>
                        </div>
                        <img
                          loading="lazy"
                          width={816}
                          height={468}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-2xl border-2 border-opacity-10 border-gray-15 col-start-8 z-10  shadow-image-fix col-span-4 -mt-[32%]"
                          src={cover}
                          style={{ color: "transparent" }}
                        />
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
