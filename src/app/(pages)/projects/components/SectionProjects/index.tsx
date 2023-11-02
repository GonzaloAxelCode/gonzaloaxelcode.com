"use client";
import { fetcherCache } from "@/shared/services/fetcher";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import resumirTexto from "@/shared/utils/resume-text";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
const SectionProjects = () => {
  const { data: projects } = useSWR("/api/projects", fetcherCache);

  return (
    <section className="w-full  text-gray-15 dark:text-white py-10 md:py-16 2xl:py-20 overflow-hidden light-copy">
      {projects &&
        projects?.map((project: any, index: any) => {
          let description =
            project?.properties?.Description.rich_text[0]?.plain_text ||
            "Articulo aun no terminado.Intenta mas tarde.";
          const title =
            project?.properties.Name?.title[0]?.plain_text ||
            "Articulo sin Titulo";
          const tags = project?.properties?.Tags?.multi_select || [];

          return (
            <section
              key={index}
              className="w-full  dark:text-white text-blackbg py-10 md:py-16 2xl:py-20 overflow-hidden light-copy
              max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8
              "
            >
              <div className="container flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/2 order-2 md:order-first md:pr-14">
                  <span className="text-xs mb-4 dark:text-white gap-1 flex flex-wrap">
                    {tags.map((el: any, index: number) => {
                      return (
                        <span
                          key={index}
                          style={{
                            background: COLORS_NOTION[el.color].colorDM,
                          }}
                          className=" rounded-3xl opacity-90  border-solid py-1 px-3"
                        >
                          {el.name}
                        </span>
                      );
                    })}
                  </span>
                  <h2 className="font-headings leading-10  text-4xl lg:text-4xl 2xl:text-5xl font-bold mt-2 first:mt-0 ">
                    {title}
                  </h2>
                  <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-6 max-w-lg">
                    <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                      {resumirTexto(description, 150)}
                      <br />
                      <br />
                      As we grow together, we invest in our partners:
                    </p>
                    <ul>
                      <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
                        >
                          <circle
                            opacity="0.2"
                            cx={12}
                            cy={12}
                            r={12}
                            fill="currentColor"
                          />
                          <path
                            d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                            fill="currentColor"
                          />
                        </svg>
                        Win more projects
                      </li>
                      <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
                        >
                          <circle
                            opacity="0.2"
                            cx={12}
                            cy={12}
                            r={12}
                            fill="currentColor"
                          />
                          <path
                            d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                            fill="currentColor"
                          />
                        </svg>
                        Get revenue share
                      </li>
                      <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
                        >
                          <circle
                            opacity="0.2"
                            cx={12}
                            cy={12}
                            r={12}
                            fill="currentColor"
                          />
                          <path
                            d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                            fill="currentColor"
                          />
                        </svg>
                        Get technical support
                      </li>
                    </ul>
                  </div>
                  <nav className="flex items-center flex-wrap gap-4 mt-8">
                    <Link
                      className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 underline-offset-4 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5"
                      href={`/projects/${suglifyTitle(title)}`}
                    >
                      Visit Project
                    </Link>
                  </nav>
                </div>
                <figure className="md:w-1/2">
                  <div className="border-2 border-gray-15 bg-gray-15 rounded-2xl overflow-hidden shadow-image-fix">
                    <img
                      loading="lazy"
                      width={1024}
                      height={1024}
                      decoding="async"
                      data-nimg={1}
                      src={
                        project?.cover?.file?.url ||
                        project?.cover?.external?.url ||
                        ""
                      }
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figure>
              </div>
            </section>
          );
        })}
    </section>
  );
};

export default SectionProjects;
