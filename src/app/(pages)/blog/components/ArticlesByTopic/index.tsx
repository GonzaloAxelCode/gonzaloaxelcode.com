"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
const ArticlesByTopic = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <section className="w-full text-gray-15 py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy  max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <div className="container">
        <div className="">
          <div className="relative z-10 flex justify-between items-end">
            <div className="max-w-lg">
              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                Articles by topic
              </h2>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-6 copy-muted">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  Dive into our top content categories like headless CMS,
                  Jamstack, CSS frameworks, technical SEO, and more - learn from
                  industry experts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="relative">
            <div
              className="before:content-[''] before:block before:w-[1000px] before:mr-2 before:absolute before:top-0 before:-left-0.5 before:-translate-x-full before:h-full before:z-10 before:pointer-events-none before:bg-white"
              role="tablist"
              aria-orientation="horizontal"
            >
              <Splide
                hasTrack
                options={{
                  drag: "free",
                  gap: "0.5rem",
                  arrows: false,
                }}
              >
                <SplideTrack>
                  {articles?.map((article: any, index: number) => (
                    <SplideSlide key={index} className="max-w-[264px]">
                      <div
                        className="swiper-slide"
                        style={{ width: "auto", marginRight: 10 }}
                      >
                        <button
                          className="px-6 py-4 lg:px-12 lg:py-6 border-2 focus:outline-none rounded-t-xl flex items-center gap-3 bg-white border-gray-EE"
                          id="headlessui-tabs-tab-:r0:"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          type="button"
                          aria-controls="headlessui-tabs-panel-:r5:"
                        >
                          <svg
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                          >
                            <path
                              opacity="0.2"
                              d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                              fill="currentColor"
                            />
                            <path
                              d="M23 22.5C23.8313 22.5 24.5 21.8313 24.5 21C24.5 20.1688 23.8313 19.5 23 19.5C22.1688 19.5 21.5 20.1688 21.5 21C21.5 21.8313 22.1688 22.5 23 22.5ZM28 21C28 23.05 26.7688 24.8125 25 25.5813V31.0688C26.175 30.3875 27.5438 30 29 30H35C37.2063 30 39 28.2063 39 26V25.5813C37.2313 24.8125 36 23.05 36 21C36 18.2375 38.2375 16 41 16C43.7625 16 46 18.2375 46 21C46 23.05 44.7688 24.8125 43 25.5813V26C43 30.4188 39.4188 34 35 34H29C26.7938 34 25 35.7938 25 38V38.4188C26.7688 39.1875 28 40.95 28 43C28 45.7625 25.7625 48 23 48C20.2375 48 18 45.7625 18 43C18 40.95 19.2313 39.1875 21 38.4188V25.5813C19.2313 24.8125 18 23.05 18 21C18 18.2375 20.2375 16 23 16C25.7625 16 28 18.2375 28 21ZM42.5 21C42.5 20.1688 41.8313 19.5 41 19.5C40.1688 19.5 39.5 20.1688 39.5 21C39.5 21.8313 40.1688 22.5 41 22.5C41.8313 22.5 42.5 21.8313 42.5 21ZM23 44.5C23.8313 44.5 24.5 43.8313 24.5 43C24.5 42.1688 23.8313 41.5 23 41.5C22.1688 41.5 21.5 42.1688 21.5 43C21.5 43.8313 22.1688 44.5 23 44.5Z"
                              fill="currentColor"
                            />
                          </svg>
                          Developer Workflow
                        </button>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
          </div>
          <div className="-mt-0.5">
            <div
              className="relative p-6 lg:p-12 border-2 rounded-bl-xl before:border-r-2 before:ml-0.5 before:content-[''] before:block before:w-[1000px] before:absolute before:top-0 before:-left-0.5 before:-translate-x-full before:bottom-10 before:z-10 before:pointer-events-none after:border-y-2 after:ml-0.5 after:content-[''] after:block after:w-[1000px] after:absolute after:-top-0.5 after:-bottom-0.5 after:right-0.5 after:pointer-events-none after:translate-x-full border-gray-EE bg-white before:bg-white before:border-gray-EE after:bg-white after:border-gray-EE"
              id="headlessui-tabs-panel-:r7:"
              role="tabpanel"
              aria-labelledby="headlessui-tabs-tab-:r2:"
              tabIndex={0}
              data-headlessui-state="selected"
            >
              <nav className="mb-4 relative">
                <div className="w-6 bg-gradient-to-r from-transparent to-white absolute z-10 right-0 top-0 bottom-4" />
                <div className="overflow-auto">
                  <div className="flex mb-4 text-sm font-semibold gap-2">
                    <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0 underline underline-offset-4 text-primary-blue">
                      All
                    </button>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Svelte
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        React
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Next.js
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        SvelteKit
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        TypeScript
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Slice Machine
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Foundations
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Headless
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Jamstack
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        SSG
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        UX
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Nuxt
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Remix
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        API
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        CSS
                      </button>
                    </span>
                    <span className="last:pr-6">
                      <button className="leading-4 whitespace-nowrap transition-all border-r-2 border-gray-EE pr-2 last:pr-0 last:border-0">
                        Vue
                      </button>
                    </span>
                  </div>
                </div>
              </nav>
              <Splide
                hasTrack={false}
                options={{
                  drag: "free",
                  gap: "0.5rem",
                }}
              >
                <Flex full>
                  <Flex className="ml-auto space-x-2 splide__arrows">
                    <button className="splide__arrow splide__arrow--prev disabled:opacity-30">
                      <svg
                        className="w-[18px] h-[18px]"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"></path>
                      </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next disabled:opacity-30">
                      <svg
                        className="w-[18px] h-[18px]"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"></path>
                      </svg>
                    </button>
                  </Flex>
                </Flex>

                <SplideTrack>
                  {articles?.map((article: any, index: number) => (
                    <SplideSlide key={index} className="max-w-[274px] py-4">
                      <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                        <div className="">
                          <div className="aspect-[258/145] overflow-hidden relative">
                            <img
                              alt=""
                              loading="lazy"
                              width={2000}
                              height={2000}
                              decoding="async"
                              data-nimg={1}
                              className="object-cover w-full h-full"
                              src={
                                article?.properties?.CoverItem?.url ||
                                article?.cover?.external?.url
                              }
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                        <div className="flex h-full gap-4 f p-8 flex-col">
                          <div className="flex justify-between items-center gap-4">
                            <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                              <a
                                className="flex items-center gap-1.5  text-sm focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                                href="/blog/category/performance-and-ux"
                              >
                                <svg
                                  width={64}
                                  height={64}
                                  viewBox="0 0 64 64"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 shrink-0 text-primary-purple"
                                >
                                  <path
                                    opacity="0.2"
                                    d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M39.8394 18.788C40.2081 17.9317 39.9331 16.9318 39.1769 16.3818C38.4207 15.8318 37.3895 15.8818 36.6833 16.4943L20.6838 30.4938C20.0588 31.0438 19.8338 31.925 20.1276 32.7C20.4213 33.4749 21.1713 33.9999 22.0025 33.9999H28.971L24.1649 45.212C23.7962 46.0683 24.0712 47.0682 24.8274 47.6182C25.5836 48.1682 26.6149 48.1182 27.3211 47.5057L43.3205 33.5062C43.9455 32.9562 44.1705 32.075 43.8767 31.3C43.583 30.5251 42.8393 30.0063 42.0018 30.0063H35.0333L39.8394 18.788Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                                  Performance &amp; UX
                                </span>
                              </a>
                            </span>
                            <span className="shrink-0 text-gray-50">
                              Aug 1, 2023
                            </span>
                          </div>
                          <div className="flex flex-col gap-4 flex-grow">
                            <a
                              className="after:absolute after:inset-0"
                              href="/blog/nextjs-boilerplates"
                            >
                              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                                {article.properties.Name.title[0]?.plain_text}
                              </h2>
                            </a>
                          </div>
                          <footer className="flex items-center">
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 text-sm-flat">
                                <a
                                  className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                                  href="/blog/authors/eric-burel"
                                >
                                  <img
                                    alt="Eric Burel"
                                    loading="lazy"
                                    width={64}
                                    height={64}
                                    decoding="async"
                                    data-nimg={1}
                                    className="rounded-full w-6 h-6"
                                    srcSet="https://images.prismic.io/prismic-main/ZjdmMDI2ODItMWY3NS00MGY3LWJjZmItMjFkNDhhMTg5Yzdm_91735183-94a9-4c85-87cc-becfdc5773c7_eric_burel.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=64&fit=max 1x, https://images.prismic.io/prismic-main/ZjdmMDI2ODItMWY3NS00MGY3LWJjZmItMjFkNDhhMTg5Yzdm_91735183-94a9-4c85-87cc-becfdc5773c7_eric_burel.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max 2x"
                                    src="https://images.prismic.io/prismic-main/ZjdmMDI2ODItMWY3NS00MGY3LWJjZmItMjFkNDhhMTg5Yzdm_91735183-94a9-4c85-87cc-becfdc5773c7_eric_burel.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max"
                                    style={{ color: "transparent" }}
                                  />
                                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                    By Eric Burel
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                              <span>5 min read</span>
                            </div>
                          </footer>
                        </div>
                      </article>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesByTopic;
