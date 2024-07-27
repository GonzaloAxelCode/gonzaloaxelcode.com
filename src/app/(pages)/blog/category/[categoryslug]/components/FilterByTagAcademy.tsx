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
  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <article className="text-md ">
        <div className="py-12   rounded-xl">
          <header className="container grid lg:grid-cols-12 gap-6 items-center px-5 md:px-12">
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
                <a
                  className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-black dark:bg-white dark:text-gray-15 text-white inline-block mb-5"
                  href="/academy/prismic-and-nextjs/1-overview/1-intro"
                >
                  Aprender
                </a>
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
              <div className="rounded-2xl border-2 border-gray-15 overflow-hidden">
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
        <div className="container pt-12 lg:pt-24">
          <div className="lg:max-w-[46rem] pb-24 mx-auto">
            
            <div className="flex flex-col gap-4 p-8 -mx-8 rounded-2xl bg-gray-F7 dark:bg-blackbgsection">
              <h2>{articles.length} Lecciones</h2>
              {articles?.map((el: any, index: any) => {
                const { tags, title, description, category, createdAt, cover } =
                  extractInfoArticle(el);

                return <article key={index} className="h-full relative border-2 rounded-xl bg-white border-gray-EE   dark:bg-[#2b2b2b] dark:border-darkborder transition-colors ease-in-out duration-200 text-white dark:text-gray-15 group">
                  <div className="flex gap-4 p-6 justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <span className="w-10 h-10 rounded-lg shrink-0 font-bold text-md flex items-center justify-center group-hover:bg-gray-F7 transition-colors ease-in-out duration-200 bg-quaternary-purple text-primary-purple">
                        <svg
                          width={641}
                          height={449}
                          viewBox="0 0 641 449"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 transition-colors ease-in-out duration-200"
                        >
                          <path
                            d="M320.015 0C311.915 0 303.915 1.4 296.315 4.1L15.8154 105.4C6.31539 108.9 0.0153923 117.9 0.0153923 128C0.0153923 138.1 6.31539 147.1 15.8154 150.6L73.7154 171.5C57.3154 197.3 48.0154 227.8 48.0154 259.9V288C48.0154 316.4 37.2154 345.7 25.7154 368.8C19.2154 381.8 11.8154 394.6 3.21539 406.4C0.0153923 410.7 -0.884608 416.3 0.915392 421.4C2.71539 426.5 6.91539 430.3 12.1154 431.6L76.1154 447.6C80.3154 448.7 84.8154 447.9 88.5154 445.6C92.2154 443.3 94.8154 439.5 95.6154 435.2C104.215 392.4 99.9154 354 93.5154 326.5C90.3154 312.3 86.0154 297.8 80.0154 284.5V259.9C80.0154 229.7 90.2154 201.2 107.915 178.4C120.815 162.9 137.515 150.4 157.115 142.7L314.115 81C322.315 77.8 331.615 81.8 334.815 90C338.015 98.2 334.015 107.5 325.815 110.7L168.815 172.4C156.415 177.3 145.515 184.8 136.615 194L296.215 251.6C303.815 254.3 311.815 255.7 319.915 255.7C328.015 255.7 336.015 254.3 343.615 251.6L624.215 150.6C633.715 147.2 640.015 138.1 640.015 128C640.015 117.9 633.715 108.9 624.215 105.4L343.715 4.1C336.115 1.4 328.115 0 320.015 0ZM128.015 376C128.015 411.3 214.015 448 320.015 448C426.015 448 512.015 411.3 512.015 376L496.715 230.6L354.515 282C343.415 286 331.715 288 320.015 288C308.315 288 296.515 286 285.515 282L143.315 230.6L128.015 376Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <Link
                        className="after:absolute after:inset-0"
                        href={`/academy/${suglifyTitle(category)}/${suglifyTitle(title)}`}
                      >
                        <P className="dark:text-white text-gray-15 font-headings scroll-mt-[120px]  2xl:md-tight  max-w-[320px] wrap-balance">
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
