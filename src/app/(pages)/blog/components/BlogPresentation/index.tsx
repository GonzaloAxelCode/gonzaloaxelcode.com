const BlogGridPresentation = () => {
  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <div className="container my-12">
        <h1 className="font-bold text-base md:text-md mb-4 block text-primary-purple">
          The Prismic Blog
        </h1>
        <span className="relative font-headings font-bold text-6xl lg:text-7xl 2xl:text-8xl">
          <div data-projection-id={123} style={{ opacity: 1 }}>
            <div data-projection-id={124}>
              <span
                className="inline"
                data-projection-id={125}
                style={{ opacity: 1, transform: "none" }}
              >
                Deliver{" "}
              </span>
              <span
                className="inline"
                data-projection-id={126}
                style={{ opacity: 1, transform: "none" }}
              >
                great{" "}
              </span>
              <span
                className="inline"
                data-projection-id={127}
                style={{ opacity: 1, transform: "none" }}
              >
                websites.{" "}
              </span>
            </div>
          </div>
        </span>
      </div>
      <section className="w-full text-gray-15 pb-10 md:pb-16 2xl:pb-20 overflow-hidden dark-copy">
        <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="hidden md:grid grid-cols-1 col-span-1 md:grid-cols-3 lg:col-span-3 xl:col-span-1 xl:grid-cols-1 gap-6 order-2 xl:order-1 xl:row-span-2">
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
                    style={{ color: "transparent" }}
                    srcSet="https://prismic-main.cdn.prismic.io/prismic-main/7812b7f1-1ef1-4e66-b11d-3170426844c9_sveltekit_tutorial.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/7812b7f1-1ef1-4e66-b11d-3170426844c9_sveltekit_tutorial.svg?fit=max&w=1080 2x"
                    src="https://prismic-main.cdn.prismic.io/prismic-main/7812b7f1-1ef1-4e66-b11d-3170426844c9_sveltekit_tutorial.svg?fit=max&w=1080"
                  />
                </div>
              </div>
              <div className="flex h-full gap-4 f p-4 flex-col">
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
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/svelte-sveltekit-tutorial"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      SvelteKit Tutorial: Build a Website From Scratch
                    </h2>
                  </a>
                </div>
              </div>
            </article>
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
                    style={{ color: "transparent" }}
                    srcSet="https://prismic-main.cdn.prismic.io/prismic-main/5ad3b8c6-fe07-46d1-8fcf-f0742ec3f650_headless.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/5ad3b8c6-fe07-46d1-8fcf-f0742ec3f650_headless.svg?fit=max&w=1080 2x"
                    src="https://prismic-main.cdn.prismic.io/prismic-main/5ad3b8c6-fe07-46d1-8fcf-f0742ec3f650_headless.svg?fit=max&w=1080"
                  />
                </div>
              </div>
              <div className="flex h-full gap-4 f p-4 flex-col">
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
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/headless-cms-intro"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      Headless CMS Explained: A Guide for Marketers and
                      Developers
                    </h2>
                  </a>
                </div>
              </div>
            </article>
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
                    style={{ color: "transparent" }}
                    srcSet="https://prismic-main.cdn.prismic.io/prismic-main/84f56ebf-ccae-4569-90c9-d2d0d05a9f58_what_is_svelte.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/84f56ebf-ccae-4569-90c9-d2d0d05a9f58_what_is_svelte.svg?fit=max&w=1080 2x"
                    src="https://prismic-main.cdn.prismic.io/prismic-main/84f56ebf-ccae-4569-90c9-d2d0d05a9f58_what_is_svelte.svg?fit=max&w=1080"
                  />
                </div>
              </div>
              <div className="flex h-full gap-4 f p-4 flex-col">
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
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/svelte-and-sveltekit"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      Beginners Guide to Svelte and SvelteKit
                    </h2>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-9 lg:grid-cols-3 gap-6 order-1 xl:order-2 xl:row-span-1">
            <div className="col-span-1 md:col-span-5 lg:col-span-2 grid">
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
                      style={{ color: "transparent" }}
                      srcSet="https://prismic-main.cdn.prismic.io/prismic-main/6531975cfbd9a45bcec81f7d_svelte_vs_react.svg?auto=compress%2Cformat&fit=max&w=2048 1x, https://prismic-main.cdn.prismic.io/prismic-main/6531975cfbd9a45bcec81f7d_svelte_vs_react.svg?auto=compress%2Cformat&fit=max&w=3840 2x"
                      src="https://prismic-main.cdn.prismic.io/prismic-main/6531975cfbd9a45bcec81f7d_svelte_vs_react.svg?auto=compress%2Cformat&fit=max&w=3840"
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
                    <span className="shrink-0 text-gray-50">Oct 20, 2023</span>
                  </div>
                  <div className="flex flex-col gap-4 flex-grow">
                    <a
                      className="after:absolute after:inset-0"
                      href="/blog/svelte-vs-react"
                    >
                      <h2 className="font-headings tracking-tight scroll-mt-[120px] text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium">
                        Svelte vs React 2024: Which is Better?
                      </h2>
                    </a>
                    <p className="text-gray-50">
                      Svelte vs React 2024 - Compare performance, features,
                      popularity, and use cases to determine which JavaScript
                      framework is better for your website.
                    </p>
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
                            className="rounded-full w-8 h-8"
                            style={{ color: "transparent" }}
                            srcSet="https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=64 1x, https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=128 2x"
                            src="https://images.prismic.io/prismic-main/6532805efbd9a45bcec820ba_Emmanuel_Uchenna_picture.jpg?auto=format%2Ccompress&fit=max&w=128"
                          />
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            By {/* */}Emmanuel Uchenna
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
                        169
                      </div>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
            <div className="grid grid-cols-1 md:col-span-4 lg:col-span-1 border-2 border-gray-EE rounded-xl overflow-hidden">
              <div
                className="border-b-2 border-gray-EE last:border-b-0"
                data-projection-id={1}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/nextjs-fonts"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          How to Add Fonts in Next.js 13 (Google Fonts, Local
                          Fonts, Tailwind CSS)
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={2}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">108</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
              <div
                className="border-b-2 border-gray-EE last:border-b-0"
                data-projection-id={3}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/what-is-react-suspense"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          Understanding React Suspense with Visuals and Code
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={4}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">88</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
              <div
                className="border-b-2 border-gray-EE last:border-b-0 border-b-0 md:border-b-2"
                data-projection-id={5}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/slice-machine-empowers-developers"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          6 Ways Slice Machine Empowers Developers to Build
                          Better Websites
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={6}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">60</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
              <div
                className="border-b-2 border-gray-EE last:border-b-0 hidden md:block"
                data-projection-id={7}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/model-mega-menu-prismic"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          How to Model a Multi-level Mega Menu with Prismic
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={8}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">60</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
              <div
                className="border-b-2 border-gray-EE last:border-b-0 hidden md:block"
                data-projection-id={9}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/minimize-main-thread-work"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          8 Ways to Minimize Main Thread Work to Improve Core
                          Web Vitals
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={10}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">39</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
              <div
                className="border-b-2 border-gray-EE last:border-b-0 hidden md:block"
                data-projection-id={11}
              >
                <article className="overflow-hidden flex w-full grow h-full relative rounded-xl sm:flex-row bg-white border-gray-EE text-gray-15">
                  <div className="flex h-full gap-4 f p-4 justify-between w-full flex-col">
                    <div className="flex flex-col gap-4 flex-grow">
                      <a
                        className="after:absolute after:inset-0"
                        href="/blog/tailwind-vs-bootstrap"
                      >
                        <h2 className="font-headings tracking-tight scroll-mt-[120px] text-base-tight 2xl:md-tight font-medium max-w-md">
                          Tailwind CSS vs. Bootstrap: Which is better?
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="w-14 h-16 relative rounded-lg shrink-0 bg-gray-F7 font-headings flex flex-col items-center justify-center overflow-hidden m-4">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-quaternary-green"
                      data-projection-id={12}
                      style={{ height: 0 }}
                    />
                    <button className="w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Upvote post</span>
                    </button>
                    <span className="relative z-10">37</span>
                    <button className="rotate-180 w-full h-8 relative before:border-gray-15 before:border-opacity-50 before:content-[''] before:border-4 before:border-r-transparent before:border-b-transparent before:w-2 before:h-2 before:-mt-2 before:rotate-45 before:-translate-x-1/2 before:block before:absolute before:top-5 before:left-1/2 disabled:opacity-20">
                      <span className="sr-only">Downvote post</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="hidden md:grid col-span-1 lg:col-span-3 grid-cols-1 md:grid-cols-3 gap-6 mt-6  order-3 xl:row-span-1">
            <article className="overflow-hidden flex w-full grow h-full relative border-b-2 pb-6 flex-col bg-white border-gray-EE text-gray-15">
              <div className="flex h-full gap-4 f mt-6 sm:mt-0 flex-col">
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
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/typescript-interfaces"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      TypeScript Interfaces: A Practical Guide with Code
                      Examples
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
                          style={{ color: "transparent" }}
                          srcSet="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=64&fit=max 1x, https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max 2x"
                          src="https://images.prismic.io/prismic-main/Mjc2N2Y2N2QtYTk4Zi00MzA1LWFmYmQtZmFiZGUyOWI3Mjk1_4a5c8696-86bf-4f89-9fa3-31318133e5f3_coner_murphy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C1126&w=128&fit=max"
                        />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          By {/* */}Coner Murphy
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
                      307
                    </div>
                  </div>
                </footer>
              </div>
            </article>
            <article className="overflow-hidden flex w-full grow h-full relative border-b-2 pb-6 flex-col bg-white border-gray-EE text-gray-15">
              <div className="flex h-full gap-4 f mt-6 sm:mt-0 flex-col">
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
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/what-is-a-webhook"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      Webhooks Explained: What is a Webhook + Examples
                    </h2>
                  </a>
                </div>
                <footer className="flex items-center">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm-flat">
                      <a
                        className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                        href="/blog/authors/ben-holmes"
                      >
                        <img
                          alt="A black and white portrait of Ben smiling."
                          loading="lazy"
                          width={64}
                          height={64}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-full w-6 h-6"
                          style={{ color: "transparent" }}
                          srcSet="https://images.prismic.io/prismic-main/NzRhY2Q4NmItMGUyZS00ZDZmLTk5YzMtMTUwMGM2Y2IyZDMy_c4e58f04-4f07-4d3e-8bd0-b85ba785efad_kvrkqlhc_200x200.png?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=64&fit=max 1x, https://images.prismic.io/prismic-main/NzRhY2Q4NmItMGUyZS00ZDZmLTk5YzMtMTUwMGM2Y2IyZDMy_c4e58f04-4f07-4d3e-8bd0-b85ba785efad_kvrkqlhc_200x200.png?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max 2x"
                          src="https://images.prismic.io/prismic-main/NzRhY2Q4NmItMGUyZS00ZDZmLTk5YzMtMTUwMGM2Y2IyZDMy_c4e58f04-4f07-4d3e-8bd0-b85ba785efad_kvrkqlhc_200x200.png?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=128&fit=max"
                        />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          By {/* */}Ben Holmes
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
                      324
                    </div>
                    <div className="flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-6 h-6 mr-1"
                      >
                        <mask id="comment_svg__a" fill="#fff">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 4a2 2 0 0 0-2 2v12.233a1 1 0 0 0 1.514.858L8 17H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5Z"
                          />
                        </mask>
                        <path
                          d="m4.514 19.09-1.029-1.714 1.03 1.715ZM8 17v-2h-.554l-.475.285L8 17ZM5 6V2a4 4 0 0 0-4 4h4Zm0 11V6H1v11h4Zm0 0H1h4Zm0 1.233V17H1v1.233h4Zm-1.514-.857A1 1 0 0 1 5 18.233H1c0 2.332 2.544 3.773 4.543 2.573l-2.058-3.43Zm3.484-2.091-3.484 2.09 2.057 3.43 3.485-2.09-2.058-3.43ZM19 15H8v4h11v-4Zm0 0v4a4 4 0 0 0 4-4h-4Zm0-9v9h4V6h-4Zm0 0h4a4 4 0 0 0-4-4v4ZM5 6h14V2H5v4Z"
                          fill="currentColor"
                          mask="url(#comment_svg__a)"
                        />
                        <path
                          d="M7 10.617h9"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                      1
                    </div>
                  </div>
                </footer>
              </div>
            </article>
            <article className="overflow-hidden flex w-full grow h-full relative border-b-2 pb-6 flex-col bg-white border-gray-EE text-gray-15">
              <div className="flex h-full gap-4 f mt-6 sm:mt-0 flex-col">
                <div className="flex justify-between items-center gap-4">
                  <span className="flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat overflow-auto relative z-10 text-gray-15">
                    <a
                      className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm max-w-full ring-offset-white ring-gray-EE"
                      href="/blog/category/announcements"
                    >
                      <svg
                        width={64}
                        height={64}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 shrink-0 text-primary-orange"
                      >
                        <path
                          opacity="0.2"
                          d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M34.9985 19C34.9985 20.6562 33.6548 22 31.9985 22C30.3423 22 28.9985 20.6562 28.9985 19C28.9985 17.3438 30.3423 16 31.9985 16C33.6548 16 34.9985 17.3438 34.9985 19ZM31.4985 38V46C31.4985 47.1063 30.6048 48 29.4985 48C28.3923 48 27.4985 47.1063 27.4985 46V32.0562L25.711 35.0312C25.1423 35.975 23.911 36.2812 22.9673 35.7125C22.0235 35.1437 21.7173 33.9125 22.286 32.9688L25.9298 26.9062C27.0173 25.1 28.9673 23.9938 31.0735 23.9938H32.9298C35.036 23.9938 36.986 25.1 38.0735 26.9062L41.7173 32.9688C42.286 33.9125 41.9798 35.1437 41.036 35.7125C40.0923 36.2812 38.861 35.975 38.2923 35.0312L36.4985 32.0562V46C36.4985 47.1063 35.6048 48 34.4985 48C33.3923 48 32.4985 47.1063 32.4985 46V38H31.4985Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                        Prismic Announcements
                      </span>
                    </a>
                  </span>
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <a
                    className="after:absolute after:inset-0"
                    href="/blog/how-we-built-the-prismic-blog"
                  >
                    <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
                      An Insider Perspective: How We Built the Prismic Blog
                    </h2>
                  </a>
                </div>
                <footer className="flex items-center">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm-flat">
                      <a
                        className="flex items-center gap-2 text-sm-flat focus:outline-none focus:ring-2 ring-offset-4 rounded-2xl ring-offset-white ring-gray-EE"
                        href="/blog/authors/nouha-chhih"
                      >
                        <img
                          alt="Nouha Chhih smiling."
                          loading="lazy"
                          width={64}
                          height={64}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-full w-6 h-6"
                          style={{ color: "transparent" }}
                          srcSet="https://images.prismic.io/prismic-main/ZWY5NGM2YWQtODcwMS00ZDgyLWEwYTItZjYwZjQwOWRkMGI0_85dd4241-f362-4728-8568-9e8e744092af_untitled28829.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=64&fit=max 1x, https://images.prismic.io/prismic-main/ZWY5NGM2YWQtODcwMS00ZDgyLWEwYTItZjYwZjQwOWRkMGI0_85dd4241-f362-4728-8568-9e8e744092af_untitled28829.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max 2x"
                          src="https://images.prismic.io/prismic-main/ZWY5NGM2YWQtODcwMS00ZDgyLWEwYTItZjYwZjQwOWRkMGI0_85dd4241-f362-4728-8568-9e8e744092af_untitled28829.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=128&fit=max"
                        />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          By {/* */}Nouha Chhih
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
                      398
                    </div>
                    <div className="flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-6 h-6 mr-1"
                      >
                        <mask id="comment_svg__a" fill="#fff">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 4a2 2 0 0 0-2 2v12.233a1 1 0 0 0 1.514.858L8 17H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5Z"
                          />
                        </mask>
                        <path
                          d="m4.514 19.09-1.029-1.714 1.03 1.715ZM8 17v-2h-.554l-.475.285L8 17ZM5 6V2a4 4 0 0 0-4 4h4Zm0 11V6H1v11h4Zm0 0H1h4Zm0 1.233V17H1v1.233h4Zm-1.514-.857A1 1 0 0 1 5 18.233H1c0 2.332 2.544 3.773 4.543 2.573l-2.058-3.43Zm3.484-2.091-3.484 2.09 2.057 3.43 3.485-2.09-2.058-3.43ZM19 15H8v4h11v-4Zm0 0v4a4 4 0 0 0 4-4h-4Zm0-9v9h4V6h-4Zm0 0h4a4 4 0 0 0-4-4v4ZM5 6h14V2H5v4Z"
                          fill="currentColor"
                          mask="url(#comment_svg__a)"
                        />
                        <path
                          d="M7 10.617h9"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                      3
                    </div>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGridPresentation;
