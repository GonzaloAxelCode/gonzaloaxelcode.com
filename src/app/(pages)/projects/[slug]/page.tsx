
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import extractContentProyect from "@/shared/hooks/extractContentProyect";
import { getFullProjectBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import P from "@/shared/UIComponents/Base/P";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentArticle from "../../blog/[slug]/components/ContentArticle";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullProjectBySlug(params.slug);
  const { title, description, cover } = extractInfoArticle(article);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Gonzalo's Projects",
      type: "article",
      url: `https://gonzaloaxelcode.com/projects/${suglifyTitle(title)}`,
      images: [
        {
          url: cover,
          width: 800,
          height: 600,
        },
        {
          url: cover,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,

      creator: "@GonzaloAxel",

      images: [
        {
          url: cover,
          width: 800,
          height: 600,
        },
        {
          url: cover,
          width: 1800,
          height: 1600,
          alt: "Gonzalo Projects",
        },
      ],
    },
    ...iconsMetadata,
    ...robotsDefault,
    ...othersMetadata,
  };
}

export default async function ProjectPage({ params }: any) {
  const { content, article: project } = await getFullProjectBySlug(params.slug);
  const {
    title,
    cover,
    linkpreview,
    category,
    description,
    imagesPages,
    isLocked,
    references, updatedTime
  } = extractContentProyect(project);

  if (isLocked) {
    return null;
  }
  const referencesArray = JSON.parse(references)
  return (
    <main className="px-5 md:px-10">
      <section className="relative z-10 my-12 flex flex-col min-h-dvh font-copy font-medium antialiased selection:bg-primary-purple selection:text-white">
        <div className=" mx-auto flex flex-col">
          <div className="flex gap-3   justify-center flex-wrap lg:flex-nowrap items-center overflow-hidden slice-layout w-full md:px-10">
            <div className="md:grid md:grid-cols-8 relative z-10 w-full justify-around">
              <div className="md:col-span-8 md:pr-4">
                <div className="flex items-center gap-1 mb-6"> <span className="text-sm py-0.5 px-1.5 rounded-md  border-2 flex items-centers gap-1 bg-gray-15 border-gray-15 text-white"> {category} </span> <span className="items-center text-sm py-0.5 px-1.5 border-0 rounded-md font-bold  flex items-centers gap-1 bg-quaternary-green text-primary-green "> <svg width={16}
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

                <p className="mb-5 text-2xl md:text-3xl font-headings text-gray-900 dark:text-gray-200" style={{
                  letterSpacing: "-.025em",
                  lineHeight: 1.083,
                }}>
                  <strong>
                    {title}
                  </strong>
                </p>
                <div className="font-copy text-sm lg:text-sm 2xl:text-md font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-lg">
                  <p className="my-6 first:mt-0 last:mb-0 print:my-2 text-gray-800 dark:text-gray-400">
                    {description}
                  </p>
                </div>
                <div className="flex items-center flex-wrap gap-4 mt-6">

                  <button className="shiny-cta">
                    <Link
                      href={linkpreview}
                      target="_blank"
                      className="flex gap-2 items-center"
                    >
                      <span>Live Preview</span>
                      <span>
                        <svg
                          className="fill-white"
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

                  </button>
                </div>
              </div>
            </div>
            <div className=" mt-6 sm:mt-0">
              <picture>
                <Image
                  width={1080}
                  height={720}

                  src={cover}
                  className="object-cover  border-1 dark:border-0  border-gray-100 dark:border-darkborder rounded-200 border-solid"
                  alt="s"
                />
              </picture>
              <P className="text-xs italic font-light my-2">
                Ultima actualizacion el {updatedTime}
              </P>
            </div>
          </div>


        </div>
      </section>
      <section>

        <div className="container grid grid-cols-12 mx-auto ">
          <div
            className="grid grid-cols-subgrid col-span-12 md:col-span-10 md:col-start-2 pb-16 relative group last:pb-0"
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="absolute top-0 bottom-0 left-6 w-1 -ml-[2px] -z-10 hidden"
              style={{
                background:
                  "radial-gradient(circle closest-side, rgb(142, 68, 236) 98%, rgba(0, 0, 0, 0)) 0px 0px / 100% 15px, linear-gradient(rgb(142, 68, 236) 50%, rgba(0, 0, 0, 0) 0px) 0px calc(7.5px) / 100% calc(30px)"
              }}
            />
            <div className="absolute top-0 bottom-0 left-6 w-1 -ml-[2px] -z-10 bg-primary-purple group-last:hidden" />
            <div className="col-span-3 md:col-span-4">
              <div className="flex gap-4 items-center sticky top-[120px]">
                <img
                  loading="lazy"
                  width={1024}
                  height={1024}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain w-12 h-12 rounded-full border-gray-300 border-1 dark:border-0 "

                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1726626928/me_yb8gfc_u_image_upload_mo34ahsr8fu71_bcysnc_c_thumb_w_1.0_h_1.0_fl_relative.layer_apply-fotor-20240917213026_ekk4jr.png"
                  style={{ color: "transparent" }}
                />
                <div className="relative hidden md:flex md:flex-col md:gap-1 pt-3">
                  <h4 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium leading-tight wrap-balance">
                    Gonzalo Axel
                  </h4>
                  <div className=" text-base font-medium print:text-[10px] print:text-justify text-gray-800 dark:text-gray-100">

                    {updatedTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-9 md:col-span-6 pt-1">
              <header className="flex flex-col gap-1 mb-10">
                <div className="relative md:hidden mb-6">
                  <h4 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium wrap-balance">
                    Gonzalo Axel
                  </h4>
                  <div className="font-copy text-xs font-medium text-gray-800 dark:text-gray-100">
                    {updatedTime}
                  </div>
                </div>
                <p className=" scroll-mt-[120px] lg:text-3xl-tight 2xl:text-4xl  wrap-balance text-gray-800 dark:text-gray-200">
                  Feferencias y recursos que use en el proyecto
                </p>
                <div className="flex flex-col">
                  {referencesArray?.map((reference: any, index: number) => {
                    return <div key={index} className="flex gap-x-2 items-center flex-wrap font-normal">
                      <svg
                        className="dark:fill-white "
                        width={14}
                        height={14}
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
                      {reference.description}:
                      <span className="after:content-[','] last:after:content-none">
                        <a
                          target="_blank"
                          className="underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 font-normal"
                          href={reference.link}
                        >
                          {reference.textlink}
                        </a>
                      </span>
                    </div>
                  })}

                </div>

              </header>
              <div className="mt-6 sm:mt-0 mb-10">
                <div className="parent2">
                  <div className="div1_inde" >
                    <Image
                      alt=""

                      width={1220}
                      height={623}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover rounded-100 border-1 dark:border-0"



                      src={imagesPages[1]?.external.url}

                    />
                  </div>

                  <div className="div2_inde">
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
                  <div className="div3_inde">
                    <img
                      alt=""

                      width={1220}
                      height={623}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover rounded-100 border-1 dark:border-0"
                      src={cover}
                    />
                  </div>

                </div>

              </div>
              <ContentArticle
                isAcademy
                content={content}
                id={project.id}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getAllArticles(
    process.env.NOTION_DATABASE_PROYECTS,
    {}
  );
  return projects.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}
