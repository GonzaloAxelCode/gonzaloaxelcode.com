const PageCategory = () => {
  return (
    
      <main className="w-full mb-20 ">
        <div className="w-full text-center dark-copy py-14 px-6 bg-quaternary-purple ">
          <div className=" max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-primary-purple mx-auto"
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
            <h1 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold mt-6">
              Performance &amp; UX
            </h1>
            <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-6 max-w-xl mx-auto">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                Tech comparisons, guides, and tutorials to optimize your website
                load speed and user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-12 pb-20 ">
          <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
            <nav className="mb-4 relative mb-12">
              <h2 className="font-bold mb-3">Filter by tag</h2>
              <div className="w-6 bg-gradient-to-r from-transparent to-white absolute z-10 right-0 top-0 bottom-4" />
              <div className="overflow-auto">
                <div className="flex mb-4 text-sm font-semibold gap-2">
                  <button className="leading-4 whitespace-nowrap transition-all text-white bg-primary-purple p-4 bg-gray-F7 rounded-xl">
                    All
                  </button>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Headless
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Tailwind
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Bootstrap
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Next.js
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      SEO
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Nuxt
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Productivity
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Accessibility
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Jamstack
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      CMS
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Images
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Optimization
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Core Web Vitals
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      React
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Remix
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Gatsby
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Pre-rendering
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      SSG
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Svelte
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Design Systems
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      TypeScript
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Foundations
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      UX
                    </button>
                  </span>
                  <span className="last:pr-6">
                    <button className="leading-4 whitespace-nowrap transition-all p-4 bg-gray-F7 rounded-xl flex items-center relative">
                      Vue
                    </button>
                  </span>
                </div>
              </div>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="flex w-full"
                data-projection-id={38}
                style={{
                  opacity: 1,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                  <div className="">
                    <div className="aspect-[258/145] overflow-hidden relative">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/dc9317ff-fedb-4ef1-b042-ad017b0f7cba_Prismic_SEO.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/dc9317ff-fedb-4ef1-b042-ad017b0f7cba_Prismic_SEO.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/dc9317ff-fedb-4ef1-b042-ad017b0f7cba_Prismic_SEO.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f p-8 flex-col">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50">Sep 6, 2023</span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/prismic-website-seo"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium">
                          How to Boost Your Website SEO with Prismic
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/alisonbrunk"
                          >
                            <img
                              alt="A headshot of Alison Brunk"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-8 h-8"
                              srcSet="https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Alison Brunk
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          460
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={39}
                style={{
                  opacity: 1,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl flex-col bg-white border-gray-EE text-gray-15">
                  <div className="">
                    <div className="aspect-[258/145] overflow-hidden relative">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/4ed56c00-f33c-4f2f-a773-c4865f4a7d5d_nextjs-fonts.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/4ed56c00-f33c-4f2f-a773-c4865f4a7d5d_nextjs-fonts.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/4ed56c00-f33c-4f2f-a773-c4865f4a7d5d_nextjs-fonts.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f p-8 flex-col">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                        Aug 16, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/nextjs-fonts"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium">
                          How to Add Fonts in Next.js 13 (Google Fonts, Local
                          Fonts, Tailwind CSS)
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/alisonbrunk"
                          >
                            <img
                              alt="A headshot of Alison Brunk"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-8 h-8"
                              srcSet="https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NGY1ZGRlYjUtZDIyMC00NDZmLTkyNWItZDBlZjc5ODc3MDFk_1ba37fe3-bbd8-4cb9-8668-ce1ea472749a_alison.jpg?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Alison Brunk
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          7794
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-2 grid grid-cols-1 gap-6 mt-12">
              <div
                className="flex w-full"
                data-projection-id={40}
                style={{
                  opacity: 1,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Aug 1, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/nextjs-boilerplates"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          9 Next.js Boilerplates to Try in 2023
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
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          2205
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={41}
                style={{
                  opacity: 1,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Jul 25, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/nextjs-image-component-optimization"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          A Guide to Next.js Image Optimization Using next/image
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          2578
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={42}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Jul 5, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/headless-cms-seo"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Headless SEO vs. Traditional SEO: Pros, Cons, &amp;
                          Differences{" "}
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          291
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={43}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Jun 27, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/api-response-times"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          API Response Times: A Quick Guide to Improving
                          Performance
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          2946
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={44}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Jun 21, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/google-pagespeed-insights-vs-lighthouse"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Google PageSpeed Insights vs. Lighthouse: Differences,
                          Similarities and How to Use These Tools to Help
                          Optimize Your Website for Speed
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/coner-murphy"
                          >
                            <img
                              alt="Coner Murphy profile picture."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Coner Murphy
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          237
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={45}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        May 30, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/isr-in-next.js"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          A Guide to ISR in Next.js in 2023
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/coner-murphy"
                          >
                            <img
                              alt="Coner Murphy profile picture."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Coner Murphy
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          124
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={46}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Updated Oct 8, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/headless-architecture-guide"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          What is Headless Architecture and Is It Right for You?
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          293
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={47}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/5e3df70d-c91e-4378-a1f1-67e20e2b8efb_next-gen-image-formats.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/5e3df70d-c91e-4378-a1f1-67e20e2b8efb_next-gen-image-formats.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/5e3df70d-c91e-4378-a1f1-67e20e2b8efb_next-gen-image-formats.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        May 3, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/next-gen-image-formats"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Serving Images in Next-Gen Formats
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          729
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={48}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        May 2, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/structured-data"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Quickstart: Understand Structured Data in Less than 10
                          Minutes
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/paulina-gavilan"
                          >
                            <img
                              alt="Paulina Gavilán"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NDYwMDgxMzYtNzFlZC00YjNiLWExYmQtY2NjN2M4ZDNiMWU2_d4a5f4ca-42d4-47e6-aac4-affa4f272a05_t34f9ktpt-ultbrts3c-51a028909100-72.jpeg?auto=compress%2Cformat&rect=0%2C0%2C72%2C72&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NDYwMDgxMzYtNzFlZC00YjNiLWExYmQtY2NjN2M4ZDNiMWU2_d4a5f4ca-42d4-47e6-aac4-affa4f272a05_t34f9ktpt-ultbrts3c-51a028909100-72.jpeg?auto=compress%2Cformat&rect=0%2C0%2C72%2C72&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NDYwMDgxMzYtNzFlZC00YjNiLWExYmQtY2NjN2M4ZDNiMWU2_d4a5f4ca-42d4-47e6-aac4-affa4f272a05_t34f9ktpt-ultbrts3c-51a028909100-72.jpeg?auto=compress%2Cformat&rect=0%2C0%2C72%2C72&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Paulina Gavilán
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          157
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={49}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/fb623a6e-8942-41a4-9528-26c7f3feffdc_nextjs-seo-tutorial.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/fb623a6e-8942-41a4-9528-26c7f3feffdc_nextjs-seo-tutorial.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/fb623a6e-8942-41a4-9528-26c7f3feffdc_nextjs-seo-tutorial.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Apr 24, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/nextjs-seo-tutorial"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Next.js SEO Guide: Build a Next.js Site with SEO Super
                          Powers
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/alex-trost"
                          >
                            <img
                              alt="A graphic portrait of Alex Trost in a red shirt. He has brown hair and a beard with a warm smile."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=64&fit=max 1x, https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Alex Trost
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          1260
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={50}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Apr 19, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/seo-web-development"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Quick Start: How Developers Can Impact SEO
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/alex-trost"
                          >
                            <img
                              alt="A graphic portrait of Alex Trost in a red shirt. He has brown hair and a beard with a warm smile."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=64&fit=max 1x, https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/MWYwMWU3YzQtYjYxYi00MThkLWFlOTItN2FhNmRkODBhNGEw_1bc0ccca-32f0-4dbf-a7d1-8ea7dbd24196_zuh_ttba_400x400.jpeg?auto=compress%2Cformat&rect=0%2C0%2C400%2C400&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Alex Trost
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          203
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={51}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/66e1874d-7899-4ce4-b3be-559359c5fe9a_minimize-main-thread-work.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/66e1874d-7899-4ce4-b3be-559359c5fe9a_minimize-main-thread-work.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/66e1874d-7899-4ce4-b3be-559359c5fe9a_minimize-main-thread-work.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Apr 11, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/minimize-main-thread-work"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          8 Ways to Minimize Main Thread Work to Improve Core
                          Web Vitals
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          2715
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={52}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={516}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/6bb3b9ba-cdc9-4e47-9789-d1f360d38763_what-is-pre-rendering.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/6bb3b9ba-cdc9-4e47-9789-d1f360d38763_what-is-pre-rendering.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/6bb3b9ba-cdc9-4e47-9789-d1f360d38763_what-is-pre-rendering.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Apr 5, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/what-is-pre-rendering"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Prerendering: What It Is and How to Choose the Right
                          Method
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/coner-murphy"
                          >
                            <img
                              alt="Coner Murphy profile picture."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Coner Murphy
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          592
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={53}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/b83f2a73-83a4-48b1-b6bf-cea82e1b7970_create-react-app-cra-vs-nextjs.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/b83f2a73-83a4-48b1-b6bf-cea82e1b7970_create-react-app-cra-vs-nextjs.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/b83f2a73-83a4-48b1-b6bf-cea82e1b7970_create-react-app-cra-vs-nextjs.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Mar 30, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/create-react-app-cra-vs-nextjs"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Choose the Best Tool for You: Create React App (CRA)
                          vs. Next.js
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/coner-murphy"
                          >
                            <img
                              alt="Coner Murphy profile picture."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Coner Murphy
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          715
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={54}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/a5f15362-b9ab-429c-ac32-70f651d64117_how-does-nextjs-help-with-seo.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/a5f15362-b9ab-429c-ac32-70f651d64117_how-does-nextjs-help-with-seo.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/a5f15362-b9ab-429c-ac32-70f651d64117_how-does-nextjs-help-with-seo.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Mar 22, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/how-does-nextjs-help-with-seo"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          How Next.js Helps with SEO
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          1984
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={55}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] overflow-hidden relative rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        width={517}
                        height={290}
                        decoding="async"
                        data-nimg={1}
                        className="object-cover w-full h-full"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/4b2dce3b-252c-4337-b51c-b7042af5ea9e_javascript-rendering-methods.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/4b2dce3b-252c-4337-b51c-b7042af5ea9e_javascript-rendering-methods.svg?fit=max&w=1080 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/4b2dce3b-252c-4337-b51c-b7042af5ea9e_javascript-rendering-methods.svg?fit=max&w=1080"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Mar 15, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/javascript-rendering-methods"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          How JavaScript Rendering Works and How to Use It
                          Strategically
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/coner-murphy"
                          >
                            <img
                              alt="Coner Murphy profile picture."
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Coner Murphy
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          1374
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={56}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Mar 1, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/understanding-how-to-minimize-web-fonts-negative-impacts"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Minimizing Web Fonts for Better Core Web Vitals
                        </h2>
                      </a>
                    </div>
                    <footer className="flex items-center">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-sm-flat">
                          <a
                            className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                            href="/blog/authors/nefe-emadamerho-atori"
                          >
                            <img
                              alt="Nefe Emadamerho-Atori"
                              loading="lazy"
                              width={64}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-6 h-6"
                              srcSet="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                              src="https://images.prismic.io/prismic-main/NTM1MWQyY2QtNTE5OC00ZDU1LWJhMjMtYWIzZGIyNzJhZGQ0_91272abd-a752-46e6-b762-48915f3f09d2_nefe.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                              style={{ color: "transparent" }}
                            />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                              By Nefe Emadamerho-Atori
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end grow text-sm-flat font-bold gap-3">
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          342
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div
                className="flex w-full"
                data-projection-id={57}
                style={{ opacity: 1, transform: "none" }}
              >
                <article className="overflow-hidden flex w-full grow h-full relative border-2 rounded-xl py-6 px-8 sm:flex-row flex-col bg-white border-gray-EE text-gray-15">
                  <div className="shrink-0 sm:w-[160px] xl:w-[260px] ">
                    <div className="aspect-[258/145] bg-quaternary-purple rounded-md">
                      <svg
                        viewBox="0 0 516 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#blog-fallback_svg__a)">
                          <path
                            d="m-80.5 166.045 323.136 186.563M-8.316 124.371 314.82 310.933M63.863 82.697 387 269.26M136.047 41.023l323.136 186.563M208.223-.65l323.136 186.562M417.219-46.685-15.868 203.357M352.594-83.998-80.493 166.044M481.844-9.373 48.757 240.67M546.469 27.94 113.382 277.982M611.098 65.251 178.011 315.294M675.727 102.565 242.64 352.607M280.406-42.324l323.136 186.563M352.594-83.998 675.73 102.564"
                            stroke="#303030"
                            strokeWidth={2}
                            strokeDasharray="6 6"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 144.829.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.86c-4.973-2.87-4.965-7.529.017-10.406l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.33 140.531 17.078 9.859c.301.173.657.309 1.044.4v17.752a3.898 3.898 0 0 1-1.044-.401l-17.078-9.859c-2.46-1.42-3.702-3.278-3.724-5.142v-17.752a1.769 1.769 0 0 1 0-.103v.103c.022 1.864 1.264 3.722 3.724 5.143Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.408 150.39-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.855c.022 1.864 1.264 3.722 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.401V150.79a3.897 3.897 0 0 1-1.044-.4Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M247.317 150.922a.92.92 0 0 0 .453-.109c.111-.064.173-.145.185-.229v-.064a.172.172 0 0 1 0 .064v17.687c.016.105-.046.213-.185.294a.93.93 0 0 1-.453.108l-10.662.004a5.25 5.25 0 0 1-1.206-.137v-17.751c.379.089.788.136 1.206.136l10.662-.003Z"
                            fill="#151515"
                          />
                          <path
                            d="M247.77 150.813a.92.92 0 0 1-.453.109l-10.662.003c-.418 0-.827-.047-1.206-.136v17.751c.379.09.788.137 1.206.137l10.662-.004a.93.93 0 0 0 .453-.108c.139-.081.201-.189.185-.294V150.52c.016.104-.046.213-.185.293Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m224.146 127.077.308 8.207c-.001.555.211 1.081.591 1.552.308.394.742.763 1.302 1.087l21.427 12.37c.249.143.248.377-.002.521a.93.93 0 0 1-.452.108l-10.663.003c-.844.001-1.653-.192-2.249-.536l-17.078-9.859c-4.973-2.871-4.965-7.53.017-10.407l5.711-3.296a.996.996 0 0 1 .902-.001c.116.066.182.156.186.251ZM243.598 172.555l14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.991 148.836c.6-.346.938-.815.939-1.304l.015 11.595-.015 6.156c-.001.489-.339.959-.939 1.305l-17.105 9.875c-2.506 1.447-5.793 2.167-9.074 2.16v-17.751c3.281.006 6.568-.714 9.074-2.16l17.105-9.876Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m243.158 155.432 5.699 3.29c2.472 1.427 5.71 2.144 8.953 2.15v17.752c-3.243-.007-6.481-.723-8.953-2.15l-5.699-3.29c-.128-.074-.189-.172-.185-.269v-17.733c.004.091.066.181.185.25Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m243.598 154.803 14.212-.194a10.4 10.4 0 0 0 2.69-.344 7.588 7.588 0 0 0 1.885-.754l21.469-12.394a1 1 0 0 1 .903-.001c.119.069.186.162.185.26l-.014 6.156c-.001.489-.339.958-.939 1.305l-17.106 9.875c-4.983 2.876-13.053 2.881-18.026.01l-5.699-3.29c-.248-.143-.247-.377.002-.521a.924.924 0 0 1 .438-.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M223.188 121.556c.6-.346.938-.816.939-1.305v11.532c.007.022.01.044.01.067l-.01 6.153c-.001.489-.339.958-.939 1.305l-6.524 3.766c-6.032 3.482-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v.074a.913.913 0 0 1 0-.074v-17.752c.006-.978.264-1.956.773-2.923 1.028-1.953 2.589-3.577 8.621-7.06l6.524-3.766Z"
                            fill="#151515"
                          />
                          <path
                            d="M224.127 120.251c-.001.489-.339.959-.939 1.305l-6.524 3.766c-6.032 3.483-7.593 5.107-8.621 7.06-.509.967-.767 1.945-.773 2.923v17.826c-.007-1.002.251-2.005.773-2.997 1.028-1.953 2.589-3.578 8.621-7.06l6.524-3.766c.6-.347.938-.816.939-1.305l.01-6.153a.218.218 0 0 0-.01-.067v-11.532Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m217.334 140.529 17.078 9.859c.301.174.657.309 1.044.401v17.751a3.864 3.864 0 0 1-1.044-.4l-17.078-9.859c-2.46-1.421-3.702-3.279-3.724-5.142v-17.752a1.803 1.803 0 0 1 0-.104v.104c.022 1.863 1.264 3.722 3.724 5.142Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m234.412 150.388-17.078-9.859c-2.506-1.447-3.747-3.348-3.724-5.246v17.856c.022 1.863 1.264 3.721 3.724 5.142l17.078 9.859c.301.174.657.309 1.044.4v-17.751a3.898 3.898 0 0 1-1.044-.401Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M214.128 150.938h11.297v17.387c-.005.091-.068.181-.188.25a.916.916 0 0 1-.452.109l-10.657.006c-.456 0-.901-.056-1.308-.162v-17.751c.407.105.852.161 1.308.161Z"
                            fill="#151515"
                          />
                          <path
                            d="M225.425 150.938h-11.297m0 0v17.752m0-17.752c-.456 0-.901-.056-1.308-.161v17.751c.407.106.852.162 1.308.162m0 0 10.657-.006c.17 0 .332-.039.452-.109.12-.069.183-.159.188-.25v-17.774"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m208.884 148.672 2.996 1.729c.275.159.595.285.943.376v17.751a3.82 3.82 0 0 1-.943-.375l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-.687-1.312-1.027-2.64-1.019-3.967V135.304v.094c.008 1.296.348 2.592 1.019 3.873 1.362 2.602 3.435 4.766 11.463 9.401Z"
                            fill="#B382F2"
                          />
                          <path
                            d="m211.88 150.401-2.996-1.729c-8.028-4.635-10.101-6.799-11.463-9.401-.687-1.312-1.027-2.639-1.019-3.967v17.752c-.008 1.327.332 2.655 1.019 3.967 1.362 2.602 3.435 4.766 11.463 9.4l2.996 1.73c.275.158.595.285.943.375v-17.751a3.822 3.822 0 0 1-.943-.376Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 133.523-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.136c.249.144.248.377-.002.521a.919.919 0 0 1-.452.109Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m275.26 111.478 6.517 3.762c.302.175.66.31 1.049.402v17.751a3.887 3.887 0 0 1-1.049-.401l-6.517-3.762c-6.02-3.476-8.831-4.374-12.212-4.963a29.628 29.628 0 0 0-4.97-.441v-17.752c1.663.007 3.326.154 4.97.441 3.381.59 6.192 1.487 12.212 4.963Z"
                            fill="#B382F2"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m284.031 115.777 10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135ZM240.602 111.498c6.032-3.483 8.847-4.384 12.229-4.977a29.684 29.684 0 0 1 5.251-.447v17.752a29.778 29.778 0 0 0-5.251.446c-3.382.594-6.197 1.495-12.229 4.977l-8.627 4.981a.999.999 0 0 1-.902.001c-.12-.069-.186-.162-.186-.26l.01-17.686a.364.364 0 0 0 .176.194c.248.144.652.143.902-.001l8.627-4.98Z"
                            fill="#151515"
                          />
                          <path
                            d="M295.142 132.893c.118.068.18.156.186.245m0 0c.006.1-.056.2-.188.276a.919.919 0 0 1-.452.109l-10.657.006c-.416 0-.824-.047-1.201-.135v-17.752c.377.089.785.135 1.201.135l10.657-.006a.93.93 0 0 0 .452-.108c.119-.069.182-.158.188-.247v17.722Zm-42.497-26.617c-3.382.593-6.197 1.494-12.229 4.977l-8.627 4.98c-.25.144-.654.145-.902.001a.364.364 0 0 1-.176-.194l-.01 17.686c0 .098.066.191.186.26a.999.999 0 0 0 .902-.001l8.627-4.981c6.032-3.482 8.847-4.383 12.229-4.977a29.778 29.778 0 0 1 5.251-.446v-17.752a29.684 29.684 0 0 0-5.251.447Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.688 115.771-10.657.006c-.845 0-1.655-.193-2.251-.537l-6.516-3.762c-6.02-3.475-8.832-4.373-12.212-4.963a29.633 29.633 0 0 0-10.221.006c-3.382.593-6.197 1.494-12.229 4.976l-8.627 4.981c-.25.144-.654.145-.902.001-.12-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636 4.51-.791 9.12-.794 13.627-.007 4.508.786 8.256 1.983 16.284 6.617l14.093 8.137c.249.143.248.376-.002.521a.93.93 0 0 1-.452.108Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 174.262.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.144-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.634 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M299.171 125.276c6.02 3.475 7.575 5.098 8.597 7.05.439.838.689 1.685.749 2.533v17.752c.02.271.02.542 0 .813v-.813c-.06-.848-.31-1.695-.749-2.534-1.022-1.951-2.577-3.574-8.597-7.05l-8.61-4.97c-.138-.08-.199-.187-.184-.291v-17.689a.222.222 0 0 1 0-.063v.063c.013.083.074.164.184.228l8.61 4.971Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M307.768 132.326c-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.138-.08-.199-.187-.184-.291v17.752c-.015.104.046.211.184.291l8.61 4.97c6.02 3.476 7.575 5.099 8.597 7.05.579 1.107.829 2.228.749 3.347v-18.565c-.06-.848-.31-1.695-.749-2.533Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M306.878 148.617c8.043-4.643 10.123-6.81 11.494-9.413.619-1.175.959-2.362 1.021-3.55v-.795c.014.265.014.53 0 .795v16.957c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26v-17.751c0 .097.067.19.186.259a.996.996 0 0 0 .902-.001l14.122-8.152Z"
                            fill="#151515"
                          />
                          <path
                            d="M291.668 156.51c0 .098.067.191.186.26a.996.996 0 0 0 .902-.001l14.122-8.152c8.043-4.643 10.123-6.81 11.494-9.413.757-1.437 1.097-2.892 1.021-4.345v17.752c.076 1.453-.264 2.908-1.021 4.345-1.371 2.603-3.451 4.769-11.494 9.412l-14.122 8.153a.999.999 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26V156.51Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m291.664 156.51.01-6.153c.001-.489.339-.958.939-1.305l6.524-3.766c6.033-3.483 7.593-5.107 8.621-7.06 1.028-1.952 1.032-3.949.01-5.9-1.022-1.952-2.577-3.575-8.597-7.05l-8.61-4.971c-.249-.143-.248-.377.002-.521a.927.927 0 0 1 .452-.108l10.657-.006c.845-.001 1.654.193 2.25.537l2.996 1.729c8.028 4.635 10.101 6.798 11.464 9.4 1.362 2.602 1.357 5.264-.013 7.868-1.371 2.603-3.452 4.77-11.495 9.413l-14.121 8.152a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 172.584-10.657.006a.934.934 0 0 0-.453.108c-.249.144-.25.378-.001.521l14.093 8.137c8.028 4.634 11.776 5.831 16.283 6.617 4.508.787 9.118.784 13.628-.007 4.51-.792 8.262-1.993 16.305-6.636l2.997-1.73c.6-.347.938-.816.939-1.305l.01-6.154c0-.097-.067-.19-.186-.259a.996.996 0 0 0-.902.001l-8.627 4.98c-6.032 3.483-8.847 4.384-12.229 4.977a29.633 29.633 0 0 1-10.221.006c-3.381-.59-6.192-1.488-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.537Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M234.748 163.604c8.028 4.634 11.776 5.831 16.283 6.617 2.189.382 4.402.578 6.616.588v17.751a39.415 39.415 0 0 1-6.616-.587c-4.507-.786-8.255-1.984-16.283-6.618l-14.093-8.136c-.128-.073-.19-.171-.186-.267V155.2v.015c.003.092.065.183.186.252l14.093 8.137Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M220.656 172.698c-.121.07-.184.162-.187.254m0 0c-.004.096.058.194.186.267l14.093 8.136c8.028 4.634 11.776 5.832 16.283 6.618 2.189.382 4.402.578 6.616.587v-17.751a39.522 39.522 0 0 1-6.616-.588c-4.507-.786-8.255-1.983-16.283-6.617l-14.093-8.137c-.128-.073-.19-.17-.186-.267v17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M283.962 161.848c.6-.346.938-.816.939-1.305v17.752c-.001.489-.339.958-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.844-16.305 6.636-2.32.407-4.666.605-7.012.595v-17.752c2.346.01 4.692-.188 7.012-.595 4.51-.791 8.262-1.993 16.305-6.636l2.997-1.73Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m231.766 154.832-10.657.005a.945.945 0 0 0-.453.109c-.249.144-.25.377-.001.521l14.093 8.136c8.028 4.634 11.776 5.831 16.283 6.618 4.508.786 9.118.783 13.628-.008s8.262-1.992 16.305-6.636l2.997-1.73c.6-.346.938-.816.939-1.305l.01-6.153c0-.097-.067-.191-.186-.26a.999.999 0 0 0-.902.001l-8.627 4.981c-6.032 3.482-8.847 4.383-12.229 4.977a29.658 29.658 0 0 1-10.221.005c-3.381-.589-6.192-1.487-12.212-4.963l-6.516-3.762c-.597-.344-1.406-.537-2.251-.536Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 133.556-14.211.193c-.961.001-1.873.124-2.691.344a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.069-.186-.162-.186-.26l.015-6.156c.001-.489.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m258.003 115.997 14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M272.654 132.926c.122.071.184.162.186.255m0 0c.003.096-.06.193-.187.266a.936.936 0 0 1-.438.109l-14.212.193c-.961.001-1.873.124-2.691.344v-17.751c.818-.221 1.73-.344 2.691-.345l14.212-.193a.913.913 0 0 0 .438-.109c.122-.07.185-.163.187-.256v17.742Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M253.425 117.094a7.618 7.618 0 0 1 1.884-.753v17.751a7.658 7.658 0 0 0-1.884.754l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26v-17.75c0 .097.067.19.186.259a.999.999 0 0 0 .902-.001l21.47-12.395Z"
                            fill="#151515"
                          />
                          <path
                            d="M230.867 146.981c0 .098.067.192.186.26a.996.996 0 0 0 .902-.001l21.47-12.394a7.658 7.658 0 0 1 1.884-.754v-17.751a7.618 7.618 0 0 0-1.884.753l-21.47 12.395a.999.999 0 0 1-.902.001c-.119-.069-.186-.163-.186-.26v17.751Zm0 0 .015-6.156"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.961.001-1.873.124-2.691.345a7.618 7.618 0 0 0-1.884.753l-21.47 12.394a.996.996 0 0 1-.902.001c-.119-.068-.186-.162-.186-.26l.015-6.156c.001-.488.339-.958.939-1.304l17.106-9.875c4.982-2.877 13.053-2.881 18.025-.01l5.699 3.289c.249.144.248.377-.002.521a.93.93 0 0 1-.438.109ZM291.651 161.286l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251ZM291.651 143.534l-.309-8.207c.001-.555-.211-1.081-.591-1.553-.308-.394-.742-.762-1.302-1.086l-21.427-12.37c-.249-.143-.248-.377.002-.521a.93.93 0 0 1 .452-.108l10.663-.003c.845-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.966 7.53-.017 10.407l-5.71 3.296a.998.998 0 0 1-.903.001c-.115-.067-.182-.157-.185-.251Z"
                            fill="#8E44EC"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="M290.751 133.775c.38.471.592.997.591 1.552v17.744c-.001-.552-.213-1.075-.591-1.545-.308-.394-.742-.763-1.302-1.086l-21.427-12.37c-.126-.073-.188-.169-.186-.264v-17.743c.002.093.064.185.186.255l21.427 12.37c.56.324.994.693 1.302 1.087Z"
                            fill="#B382F2"
                          />
                          <path
                            d="M291.342 135.327c.001-.555-.211-1.081-.591-1.552-.308-.394-.742-.763-1.302-1.087l-21.427-12.37c-.122-.07-.184-.162-.186-.255v17.743c-.002.095.06.191.186.264l21.427 12.37c.56.323.994.692 1.302 1.086.38.472.592.998.591 1.553v-17.752Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            d="m291.348 135.328.308 8.207c.003.094.07.184.186.251.248.144.652.143.902-.001l5.71-3.296c2.472-1.427 3.719-3.293 3.742-5.161v17.752c-.023 1.868-1.27 3.733-3.742 5.16l-5.71 3.297a.999.999 0 0 1-.902.001c-.116-.067-.183-.157-.186-.252l-.308-8.206v-17.752Z"
                            fill="#151515"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            fill="#8E44EC"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            fill="#8E44EC"
                          />
                          <path
                            clipRule="evenodd"
                            d="m294.696 115.772-10.658.006c-.845 0-1.654-.193-2.25-.537l-6.516-3.762c-6.021-3.475-8.832-4.373-12.213-4.963a29.628 29.628 0 0 0-10.22.006c-3.383.593-6.197 1.494-12.229 4.976l-8.627 4.981a.998.998 0 0 1-.903.001c-.119-.069-.186-.162-.186-.26l.01-6.153c.001-.489.339-.958.939-1.305l2.997-1.73c8.043-4.643 11.795-5.844 16.305-6.636a39.53 39.53 0 0 1 13.628-.007c4.507.786 8.256 1.983 16.283 6.617l14.094 8.136c.248.144.248.377-.002.521a.919.919 0 0 1-.452.109ZM291.665 156.511l.01-6.153c.001-.489.338-.958.939-1.305l6.524-3.766c6.032-3.483 7.593-5.107 8.62-7.06 1.029-1.952 1.032-3.949.01-5.9-1.021-1.952-2.576-3.575-8.597-7.05l-8.61-4.971c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .452-.108l10.658-.006c.844-.001 1.654.193 2.25.537l2.996 1.729c8.027 4.635 10.101 6.798 11.463 9.4 1.362 2.602 1.358 5.264-.013 7.868-1.371 2.603-3.451 4.77-11.494 9.413l-14.122 8.152c-.25.144-.654.145-.902.001-.119-.069-.186-.162-.186-.26ZM221.107 154.836l10.657-.005c.845-.001 1.655.192 2.251.536l6.516 3.762c6.021 3.476 8.832 4.373 12.212 4.963 3.38.59 6.838.588 10.221-.005 3.382-.594 6.197-1.495 12.229-4.977l8.627-4.981a.999.999 0 0 1 .902-.001c.12.069.187.163.186.26l-.01 6.153c-.001.489-.339.959-.939 1.305l-2.997 1.73c-8.043 4.643-11.795 5.845-16.305 6.636-4.51.791-9.12.794-13.628.008-4.507-.787-8.255-1.984-16.283-6.618l-14.093-8.136c-.249-.144-.248-.377.002-.521a.938.938 0 0 1 .452-.109ZM224.138 114.097l-.01 6.153c-.001.489-.339.959-.939 1.305l-6.524 3.767c-6.032 3.482-7.593 5.107-8.621 7.059-1.028 1.953-1.031 3.949-.01 5.901 1.022 1.951 2.577 3.574 8.598 7.05l8.609 4.97c.249.144.248.377-.001.521a.919.919 0 0 1-.452.109l-10.658.006c-.845 0-1.654-.193-2.25-.537l-2.996-1.73c-8.028-4.634-10.101-6.798-11.463-9.4-1.362-2.602-1.358-5.264.013-7.867 1.371-2.604 3.451-4.77 11.494-9.413l14.122-8.152a.996.996 0 0 1 .902-.002c.119.069.186.163.186.26Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="m272.211 115.804-14.211.193c-.962.001-1.873.124-2.691.345a7.64 7.64 0 0 0-1.885.753l-21.469 12.394c-.25.144-.654.145-.902.001-.12-.068-.186-.162-.186-.26l.014-6.156c.002-.488.339-.958.94-1.304l17.105-9.875c4.983-2.877 13.053-2.881 18.026-.01l5.699 3.289c.248.144.248.377-.002.521a.933.933 0 0 1-.438.109ZM291.657 143.534l-.308-8.207c.001-.555-.211-1.081-.592-1.553-.307-.394-.741-.762-1.302-1.086l-21.427-12.37c-.248-.143-.247-.377.002-.521a.93.93 0 0 1 .453-.108l10.663-.003c.844-.001 1.653.192 2.249.536l17.078 9.859c4.973 2.871 4.965 7.53-.018 10.407l-5.71 3.296c-.25.144-.654.145-.902.001-.116-.066-.183-.157-.186-.251ZM243.592 154.804l14.211-.193a10.407 10.407 0 0 0 2.691-.345 7.64 7.64 0 0 0 1.885-.753l21.469-12.395a.999.999 0 0 1 .902-.001c.12.069.186.163.186.26l-.015 6.156c-.001.489-.339.959-.939 1.305l-17.106 9.875c-4.982 2.877-13.052 2.881-18.025.01l-5.699-3.29c-.248-.143-.248-.376.002-.52a.91.91 0 0 1 .438-.109ZM224.15 127.076l.308 8.207c-.001.555.211 1.081.592 1.553.307.394.741.763 1.302 1.086l21.427 12.37c.248.144.247.377-.002.521a.93.93 0 0 1-.453.108l-10.663.004c-.844 0-1.653-.193-2.249-.537l-17.078-9.859c-4.972-2.871-4.965-7.53.018-10.406l5.71-3.297c.25-.144.654-.145.902-.001.116.067.183.157.186.251Z"
                            stroke="#151515"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="blog-fallback_svg__a">
                            <path fill="#fff" d="M0 0h516v290H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-full gap-4 f justify-between w-full mt-6 sm:mt-0 flex-col sm:ml-12">
                    <div className="flex justify-between items-center gap-4">
                      <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
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
                      <span className="shrink-0 text-gray-50 mr-2">
                        Feb 15, 2023
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/advanced-nextjs-server-context"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium max-w-md">
                          Leveraging Server Context for Advanced Next.js
                          Optimization Patterns
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
                        <div className="flex items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-6 h-6 mr-1"
                          >
                            <path
                              d="M2.958 12.251c-.001 0 .001-.006.007-.02a.125.125 0 0 1-.007.02ZM3.096 12c.12-.19.301-.446.542-.75A18.495 18.495 0 0 1 5.775 9C7.598 7.374 9.86 6 12 6c2.15 0 4.417 1.332 6.231 2.924.888.779 1.622 1.58 2.127 2.228a7.39 7.39 0 0 1 .583.848 7.39 7.39 0 0 1-.583.848 16.89 16.89 0 0 1-2.127 2.228C16.417 16.668 14.151 18 12 18c-2.14 0-4.402-1.374-6.225-3a18.5 18.5 0 0 1-2.137-2.25 8.932 8.932 0 0 1-.542-.75Zm17.927.173-.003-.012a.087.087 0 0 1 .003.012Zm-.003-.334a.096.096 0 0 1 0 0Zm-18.055-.07a.105.105 0 0 1-.007-.02l.007.02Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                          </svg>
                          2785
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
            <button
              className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white mt-12 mx-auto block border transition-all"
              type="button"
            >
              Load more
            </button>
          </div>
        </div>
        
    </main>
  );
};

export default PageCategory;
