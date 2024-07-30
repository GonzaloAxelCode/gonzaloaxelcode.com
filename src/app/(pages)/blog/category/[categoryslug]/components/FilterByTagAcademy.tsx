"use client";

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import P from "@/shared/UIComponents/Base/P";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import ContentBlock from "../../../[slug]/components/ContentBlokcs";


const FilterByTagAcademy = ({ articles,  articleTopic, articleTopicContent }: any) => {
  const{ tags, title, description,subtitle, category, createdAt, cover ,


    lessons,duration,
  } = extractInfoArticle(articleTopic)

     let firstTitle  =articles[0]?.properties.Name?.title[0]?.plain_text ||  articles[0]?.properties.Nombre?.title[0]?.plain_text || "Articulo sin Titulo"
  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <article className="text-md ">
        <div className="pb-12   rounded-xl">
          <header className="container grid pt-3 sm:pt-12 lg:grid-cols-12 gap-6 items-center px-5 md:px-12">
            <div className="col-span-6 flex flex-col pr-12 gap-6">


              <div>
                <p className="mb-6">{subtitle}</p>
                <p className="mb-5 text-3xl md:text-4xl font-headings text-gray-A4" style={{
                  letterSpacing: "-.025em",
                  lineHeight: 1.083,
                }}>
                  <strong>
                    {title}
                  </strong>
                </p>
                <div className="dark-copy pb-3">
              <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify">
                <P className="font-medium my-6 text-md first:mt-0 last:mb-0 print:my-2 ">
                  {description}
                </P>
              </div>
            </div>
                <Link
                  className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-black dark:bg-white dark:text-gray-15 text-white inline-block mb-5"
                  
                     href={`/academy/${suglifyTitle(category)}/${suglifyTitle(firstTitle)}`}
                >
               

                  Aprender 
                </Link>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-A4">
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-5 fill-gray-A4 dark:fill-white"
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                    </svg>
                    <span>{lessons}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 fill-gray-A4 dark:fill-white"
                    >
                      <path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-5 fill-gray-A4 dark:fill-white"
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                    <span>Intermedio</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-span-6 relative">
              <div className="rounded-2xl border-0 border-gray-15 overflow-hidden">
                <div className="-m-px">
                  <img
                    alt=""


                    height={290}
                    decoding="async"
                    data-nimg={1}
                    className="w-full object-contain"
                    
                    src={cover}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="container ">
          <div className="lg:max-w-[46rem] pb-24 mx-auto">
            
            <div className="flex flex-col gap-4 p-8 -mx-8 rounded-2xl bg-gray-F7 dark:bg-blackbgsection">
              <h2>{articles.length} Lecciones</h2>
              {articles?.map((el: any, index: any) => {
                const { tags, icon,title, description, category, createdAt, cover } =
                  extractInfoArticle(el);

                return <article key={index} className="h-full relative border-0 rounded-xl bg-white border-gray-EE   dark:bg-[#2b2b2b] dark:border-darkborder transition-colors ease-in-out duration-200 text-white dark:text-gray-15 group">
                  <div className="flex gap-4 p-6 justify-between items-center">
                    <div className="flex gap-4 items-center">
                                            <span className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center ">

                                          
                      <img className="" src={icon} alt="" />
                       </span>
                      <Link
                        className="after:absolute after:inset-0"
                        href={`/academy/${suglifyTitle(category)}/${suglifyTitle(title)}`}
                      >
                        <P className="dark:text-white text-gray-15 font-headings scroll-mt-[120px]  2xl:md-tight   wrap-balance">
                          {title}
                        </P>
                        <P className="text-xs">{description}</P>  
                      </Link>
                      
                    </div>
                    <div className="rounded-lg -mr-2 -my-2 ">
                    
                    </div>
                  </div>
                </article>
              })}


            </div>
              <div className="w-full">
        {articleTopicContent &&
          articleTopicContent?.map((block: any, index: number) => {
            return (
              <div className="flex" key={index}>
                <ContentBlock block={block} />
              </div>
            );
          })}
      </div>
          </div>
        </div>
      </article>

    </div>
  );
};

export default FilterByTagAcademy;
