"use client";
import { fetcherCache } from "@/shared/services/fetcher";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useSWR from "swr";
const ChooseTechStack = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  return (
    <Splide
      hasTrack={false}
      options={{
        drag: "free",
        gap: "0.5rem",
      }}
    >
      <section className="w-full text-gray-15 py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="sm:col-span-1 z-10 relative after:bg-white after:w-[2000px] after:h-full after:absolute after:right-6 after:top-0 after:content-[''] after:block before:bg-gradient-to-l from-transparent to-white before:w-12 before:h-full before:absolute before:-right-6 before:top-0 before:content-[''] before:block">
            <div className="relative z-10 pr-12 sm:pb-20">
              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold">
                Choose your tech stack
              </h2>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-6">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  Build a solid foundation as you select the technologies and
                  tools to help you build a great website faster.{" "}
                </p>
              </div>
              <a
                className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 inline-block mt-6 md:mt-12"
                href="/blog/category/tech-stack"
              >
                Read more
              </a>
              <nav className="splide__arrows gap-2 flex blog-post-swiper-nav-a61e6647-294a-457f-9a1c-c35a20497725 mt-10 absolute bottom-0 right-0 sm:left-0 sm:right-auto">
                <button
                  aria-label="Previous"
                  className="splide__arrow splide__arrow--prev disabled:opacity-30 prev text-blackbg rounded-full border-2 h-10 w-10 transition-all  disabled:bg-transparent border-gray-15 bg-gray-15   blog-post-swiper-nav-disabled"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-90 mx-auto"
                  >
                    <path
                      d="m8 10 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="splide__arrow splide__arrow--next disabled:opacity-30 next rounded-full text-blackbg border-2 h-10 w-10 transition-all  disabled:bg-transparent border-gray-15 bg-gray-15  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-90 mx-auto"
                  >
                    <path
                      d="m8 10 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <SplideTrack>
              {articles?.map((article: any, index: number) => (
                <SplideSlide key={index} className="max-w-[286px] py-4">
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
                            className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                            href="/blog/category/tech-stack"
                          >
                            <svg
                              width={64}
                              height={64}
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 shrink-0 text-primary-blue"
                            >
                              <path
                                opacity="0.2"
                                d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                                fill="currentColor"
                              />
                              <path
                                d="M20 18C17.7938 18 16 19.7938 16 22V26C16 28.2063 17.7938 30 20 30H44C46.2063 30 48 28.2063 48 26V22C48 19.7938 46.2063 18 44 18H20ZM20 34C17.7938 34 16 35.7938 16 38V42C16 44.2063 17.7938 46 20 46H44C46.2063 46 48 44.2063 48 42V38C48 35.7938 46.2063 34 44 34H20Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                              Tech stack
                            </span>
                          </a>
                        </span>
                        <span className="shrink-0 text-gray-50">
                          Oct 19, 2023
                        </span>
                      </div>
                      <div className="flex flex-col gap-4 flex-grow">
                        <a
                          className="after:absolute after:inset-0"
                          href="/blog/svelte-vs-react"
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
                              href="/blog/authors/emmanuel-uchenna"
                            >
                              <img
                                loading="lazy"
                                width={64}
                                height={64}
                                decoding="async"
                                data-nimg={1}
                                className="rounded-full w-6 h-6"
                                srcSet="https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=64 1x, https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=128 2x"
                                src="https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=128"
                                style={{ color: "transparent" }}
                              />
                              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                By Emmanuel Uchenna
                              </span>
                            </a>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </article>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </div>
      </section>
    </Splide>
  );
};

export default ChooseTechStack;
