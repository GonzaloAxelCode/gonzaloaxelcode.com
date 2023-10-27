import Title from "@/shared/UIComponents/Base/Title";
import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};
const PageTutorials = () => {
  return (
    <main className="w-full">
      <div className="grow flex flex-col  lg:max-w-[1280px]  mx-auto  px-8">
        <article className="container text-md">
          <section
            data-slice-type="video_header"
            data-slice-variation="default"
            className="slice"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 dark:text-white text-blackbg">
              <div>
                <h1 className="mb-6">
                  Build a website with Next.js &amp; Prismic
                </h1>
                <Title className="text-4xl lg:text-5xl ">
                  <p className="mb-5  font-headings ">
                    Next.js Explorando desde Cero: Creando Aplicaciones Web de
                    Alto Rendimiento
                  </p>
                </Title>
                <a
                  className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 text-white bg-gray-15 inline-block mb-5"
                  href="/academy/prismic-and-nextjs/1-overview/1-intro"
                >
                  Start course
                </a>
                <div className="flex flex-wrap items-center gap-3 text-sm ">
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-5 "
                    >
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                    </svg>
                    <span>9 Lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 "
                    >
                      <path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    <span>2 Hours 10 Minutes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-5 "
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                    <span>Beginner friendly</span>
                  </div>
                </div>
              </div>
              <div className="grid w-full">
                <div className="video-container">
                  <iframe
                    src="https://player.vimeo.com/video/840906010?app_id=122963"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="pa-course-overview"
                    data-ready="true"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          <section
            className="slice pt-5 pb-20 dark:text-white text-blackbg"
            data-slice-type="lesson_summaries"
            data-slice-variation="default"
          >
            <h2 className="mb-6">46 topics in 9 lessons</h2>
            <div className="grid grid-cols-1 gap-6 mt-12">
              <div className="w-full flex">
                <div className="flex w-full p-6 sm:flex-row   border-2 rounded-xl border-gray-30 hover:border-gray-1F">
                  <a
                    className="shrink-0 sm:w-[160px] xl:w-[260px]"
                    href="/academy/prismic-and-nextjs/1-overview/1-intro"
                  >
                    <div
                      className="aspect-[258/145] bg-primary-purple bg-cover bg-no-repeat bg-center rounded-md"
                      style={{
                        backgroundImage:
                          'url("https://images.prismic.io/prismic-academy/652831d1fbd9a45bcec81520_00000.png?auto=format%2Ccompress&rect=10%2C0%2C3820%2C2160&w=260&h=147")',
                      }}
                    />
                  </a>
                  <div className="flex h-full gap-4 f justify-between w-full flex-col sm:ml-12">
                    <div className="flex  justify-between items-center gap-4">
                      <span className=" flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat dark:text-white text-blackbg">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm ring-offset-white ring-gray-EE"
                          href="/academy/prismic-and-nextjs/1-overview/1-intro"
                        >
                          <div className="flex shrink-0 w-5 h-5 bg-primary-green bg-opacity-20 rounded-[3px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                              className="w-3 mx-auto fill-primary-green"
                            >
                              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                            </svg>
                          </div>
                          <span className="text-base dark:text-white text-blackbg">
                            Lesson one
                          </span>
                        </a>
                      </span>
                      <div className="flex items-center gap-1.5 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="inline-block w-5 h-5 "
                        >
                          <path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <span className="shrink-0  text-sm">17:12</span>
                      </div>
                    </div>
                    <a
                      className="flex flex-col flex-grow"
                      href="/academy/prismic-and-nextjs/1-overview/1-intro"
                    >
                      <span className="max-w-md mb-2 font-headings tracking-tight text-xl-tight lg:text-2xl-tight font-medium ">
                        Prismic and Next.js 101
                      </span>
                      <span className="block ">
                        A crash course on how a Next.js project is connected to
                        Prismic and how the content is managed.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="flex w-full p-6 sm:flex-row   border-2 rounded-xl border-gray-30 hover:border-gray-1F">
                  <a
                    className="shrink-0 sm:w-[160px] xl:w-[260px]"
                    href="/academy/prismic-and-nextjs/2-content-modeling/1-lesson-2-overview"
                  >
                    <div
                      className="aspect-[258/145] bg-primary-purple bg-cover bg-no-repeat bg-center rounded-md"
                      style={{
                        backgroundImage:
                          'url("https://images.prismic.io/prismic-academy/652e3a43fbd9a45bcec8176b_00000.png?auto=format%2Ccompress&rect=10%2C0%2C3820%2C2160&w=260&h=147")',
                      }}
                    />
                  </a>
                  <div className="flex h-full gap-4 f justify-between w-full flex-col sm:ml-12">
                    <div className="flex  justify-between items-center gap-4">
                      <span className=" flex tracking-tight items-center gap-1.5 relative h-6 font-bold text-sm-flat dark:text-white text-blackbg">
                        <a
                          className="flex items-center gap-1.5 focus:outline-none focus:ring-2 ring-offset-2 rounded-sm ring-offset-white ring-gray-EE"
                          href="/academy/prismic-and-nextjs/2-content-modeling/1-lesson-2-overview"
                        >
                          <div className="flex shrink-0 w-5 h-5 bg-primary-green bg-opacity-20 rounded-[3px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                              className="w-3 mx-auto fill-primary-green"
                            >
                              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5 12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z" />
                            </svg>
                          </div>
                          <span className="text-base dark:text-white text-blackbg">
                            Lesson two
                          </span>
                        </a>
                      </span>
                      <div className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="inline-block w-5 h-5 text-white dark:text-black "
                        >
                          <path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <span className="shrink-0  text-sm">22:36</span>
                      </div>
                    </div>
                    <a
                      className="flex flex-col flex-grow"
                      href="/academy/prismic-and-nextjs/2-content-modeling/1-lesson-2-overview"
                    >
                      <span className="max-w-md mb-2 font-headings tracking-tight text-xl-tight lg:text-2xl-tight font-medium ">
                        Turn your design into Slices
                      </span>
                      <span className="block ">
                        This lesson will explain how to take a web design and
                        convert it into Slices.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="slice"
            data-slice-type="cta_banner"
            data-slice-variation="default"
          >
            <div className="py-20">
              <div
                className="relative w-full p-0 md:py-24 md:px-12 bg-no-repeat rounded-xl overflow-hidden bg-quaternary-purple bg-cover bg-[30px_center] md:bg-[-90%_center] lg:bg-[size:91%] lg:bg-[310%_center] xl:bg-[220%_center]"
                style={{
                  backgroundImage:
                    'url("/academy/_next/static/media/defaultCtaBackground.79b079d8.png")',
                }}
              >
                <div className="p-12 md:p-0 bg-opacity-80 md:bg-opacity-0 w-full md:w-[360px] lg:w-[512px]  bg-quaternary-purple">
                  <h3 className="mb-4 lg:mb-6 text-4xl lg:text-6xl text-gray-15">
                    Are you ready?
                  </h3>
                  <p className="m-0 text-xl text-gray-50">
                    Learn to build fast, scalable websites that deliver more
                    power in less time.
                  </p>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white inline-block mt-10"
                    href="/academy/prismic-and-nextjs/1-overview/1-intro"
                  >
                    Start course
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PageTutorials;
