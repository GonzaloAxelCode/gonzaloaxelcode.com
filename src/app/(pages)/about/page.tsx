import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};
import TextChange from "./components/TextChange";
import siteMetadata from "@/shared/settings/sitemetdata";
import LogosBg from "@/shared/components/LogosBg";
import RecentArticles from "./components/RecentArticles";

const PageAbout = () => {
  return (
    <main className="w-full max-w-[768px] lg:max-w-[1200px]  mx-auto  px-8">
      <div className="relative z-20 w-full  mt-4  md:mt-8 lg:mt-8 xl:px-0 ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full md:w-1/2 ">
            <h1 className="mb-5 leading-title text-4xl font-bold md:text-5xl lg:text-5xl dark:text-white">
              Hola, soy{" "}
              <span className="relative ">
                <svg
                  className="absolute -top-6 left-0 h-8 transform -rotate-12"
                  viewBox="0 0 244 243"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M240.74 62.55a5.623 5.623 0 0 0-2.36-1.67 7.29 7.29 0 0 0-2.7-1.43 12.07 12.07 0 0 0-13.81 6 11.54 11.54 0 0 0-.66 8.74 298.468 298.468 0 0 0-62.32 40.89 519.522 519.522 0 0 1-21-92.64 8.106 8.106 0 0 0-.72-2.47c.23-.2.46-.4.68-.62 5.31-5.44 3.46-14.51-2.7-18.36a7.5 7.5 0 0 0-8.53.77 3.021 3.021 0 0 0-.32.09 11.325 11.325 0 0 0-7.11 7.06 10.25 10.25 0 0 0 2.32 10c.51.57 1.08 1.083 1.7 1.53a706.029 706.029 0 0 0-46.9 98.16 247.303 247.303 0 0 1-49.76-32.85c1.37-3 1.534-6.412.46-9.53-1.59-4.63-6-8.14-11-7.89a13.08 13.08 0 0 1-4.52-.12c-8.14.71-13 8.6-11.08 16.34A13.25 13.25 0 0 0 12.9 94.4l21.18 79.67c2.43 9.14 16.63 5.27 14.19-3.91l-16.38-61.53A258.06 258.06 0 0 0 76.63 135c4.57 2.1 9 .35 10.8-4.4a679.583 679.583 0 0 1 39.12-86 535.947 535.947 0 0 0 21.77 85.25 7.447 7.447 0 0 0 9.002 5.073 7.448 7.448 0 0 0 3.288-1.833 284.916 284.916 0 0 1 56.09-40.06 783.367 783.367 0 0 0-20.27 82.15A285.825 285.825 0 0 0 56.82 179c-6.51 1.83-7.49 13 0 14.18 21.33 3.48 43 7 63.76 13.17a505.4 505.4 0 0 0-110 20.43c-7.85 2.39-6.49 14.4 2 14.44l193 1c9.47.05 9.48-14.66 0-14.71l-131.47-.69a491.019 491.019 0 0 1 82.26-7.13c7 0 10.44-10.36 3.71-13.7-20-9.92-41.2-15.94-62.83-20.45a270.142 270.142 0 0 1 103.07 5.63c3.59.91 8.33-1.15 9-5.13a783.243 783.243 0 0 1 26.34-104.27 11.67 11.67 0 0 0 5.75-4 12.001 12.001 0 0 0 2.48-7.31 12.26 12.26 0 0 0-3.15-7.91ZM132.45 9a1.573 1.573 0 0 1-.2-.2c.13.14.22.2.2.2Z"
                    fill="currentColor"
                  />
                </svg>
                Gonzalo
              </span>{" "}
              desarrollador <br />
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
                <TextChange />
                <span
                  className="absolute top-13 right-0"
                  style={{ display: "inline-block", verticalAlign: "top" }}
                >
                  <svg
                    viewBox="0 0 24 23"
                    style={{
                      width: 26,
                      height: 26,
                      display: "block",

                      flexShrink: 0,
                    }}
                    fill="#bd73e8"
                  >
                    <g>
                      <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                      <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                    </g>
                  </svg>
                </span>
              </span>
            </h1>
            <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
              Desarrollador / Programador Fullstack Junior en Peru.
              <br className="hidden lg:block" />
              Me especializo en en el desarrollo Frontend con Nextjs y Angular
              16.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://twitter.com/tnylea"
                className="inline-flex w-auto px-4 py-2 mt-5 text-md font-bold  duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100  border-neutral-900"
              >
                Sigueme en Github
              </a>
              <a
                href="https://twitter.com/tnylea"
                className="inline-flex w-auto px-4 py-2 mt-5 text-md font-bold duration-300 ease-out border rounded-full   dark:text-neutral-900  border-neutral-700 dark:border-neutral-300 bg-white dark:bg-black dark>text-white dark:text-white text-neutral-900"
              >
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
            <div className="relative z-20 w-full transform">
              <div className="absolute bottom-0 z-30 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
                <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
                  <span className="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">
                    👋
                  </span>
                </span>
              </div>
              <div className="relative z-30 px-10">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-web-development-4651980-3856001.png?f=webp"
                  className="relative z-30 w-full md:max-w-md mx-auto dark:-translate-y-0.5"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700" />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full  py-10 md:py-16 2xl:py-20 overflow-hidden light-copy">
        <div className="">
          <div className="mb-16">
            <h2
              className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight"
              style={{ maxWidth: 500 }}
            >
              Mas{" "}
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
                {" "}
                sobre mi
                <span
                  className="absolute -top-3 right-0"
                  style={{ display: "inline-block", verticalAlign: "top" }}
                >
                  <svg
                    viewBox="0 0 24 23"
                    style={{
                      width: 26,
                      height: 26,
                      display: "block",

                      flexShrink: 0,
                    }}
                    fill="#bd73e8"
                  >
                    <g>
                      <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                      <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                    </g>
                  </svg>
                </span>
              </span>
            </h2>
            <p
              className="w-full text-base font-normal leading-relaxed text-body-color"
              style={{ maxWidth: 600 }}
            >
              Una breve presentacion de quie soy y porque cree mi sitio web.
            </p>
          </div>

          <div className="mt-8 2xl:mt-14 first:mt-0">
            <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 2xl:gap-6">
              <li className="row-span-1 col-span-1 order-1">
                <div className="p-6 rounded-xl h-full flex flex-col md:p-12  bg-gray-F7 dark:bg-gray-1F ">
                  <div>
                    <div className="flex flex-col">
                      <svg
                        width={64}
                        height={64}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-primary-purple mb-6"
                      >
                        <path
                          opacity="0.2"
                          d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M31.6363 16C32.2454 16 32.8181 16.2545 33.2363 16.7L42.6908 26.8818C43.2817 27.5182 43.4363 28.4455 43.0908 29.2364C42.7454 30.0273 41.9544 30.5455 41.0908 30.5455H35.9999V45.3333C35.9999 46.8061 34.806 48 33.3332 48H29.9393C28.4665 48 27.2726 46.8061 27.2726 45.3333V30.5455H22.1817C21.3181 30.5455 20.5272 30.0273 20.1817 29.2364C19.8363 28.4455 19.9908 27.5182 20.5817 26.8818L30.0363 16.7C30.4544 16.2545 31.0272 16 31.6363 16Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                        Level up
                      </h3>
                    </div>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Access all the resources you need to grow your skills
                        and optimize your stack.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    rel="noreferrer"
                    href="https://prismic.io/blog"
                  >
                    Read our blog
                  </a>
                </div>
              </li>
              <li className="row-span-1 col-span-1 order-2 md:order-3">
                <div className="p-6 rounded-xl h-full flex flex-col md:p-12 bg-gray-F7 dark:bg-gray-1F ">
                  <div>
                    <div className="flex flex-col">
                      <svg
                        width={64}
                        height={64}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-primary-green mb-6"
                      >
                        <path
                          opacity="0.2"
                          d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20 20C20 18.8937 19.1063 18 18 18C16.8937 18 16 18.8937 16 20V41C16 43.7625 18.2375 46 21 46H46C47.1063 46 48 45.1063 48 44C48 42.8938 47.1063 42 46 42H21C20.45 42 20 41.55 20 41V20ZM45.4125 25.4125C46.1938 24.6313 46.1938 23.3625 45.4125 22.5813C44.6313 21.8 43.3625 21.8 42.5812 22.5813L36 29.1687L32.4125 25.5813C31.6313 24.8 30.3625 24.8 29.5813 25.5813L22.5813 32.5812C21.8 33.3625 21.8 34.6313 22.5813 35.4125C23.3625 36.1938 24.6313 36.1938 25.4125 35.4125L31 29.8313L34.5875 33.4188C35.3687 34.2 36.6375 34.2 37.4188 33.4188L45.4188 25.4187L45.4125 25.4125Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                        Master Prismic with the Academy
                      </h3>
                    </div>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Learn how to turn a Next.js website into a page builder
                        powered by Prismic.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    rel="noreferrer"
                    href="https://prismic.io/academy"
                  >
                    Start course
                  </a>
                </div>
              </li>
              <li className="row-span-1 col-span-1 md:row-span-2 order-3 md:order-2">
                <div className="p-6 rounded-xl h-full flex flex-col md:p-12 bg-gray-F7 dark:bg-gray-1F ">
                  <div>
                    <div className="w-full mb-10 relative">
                      <svg viewBox="0 0 639 345" />
                      <img
                        loading="lazy"
                        width={639}
                        height={345}
                        decoding="async"
                        data-nimg={1}
                        className="scale-[1.2] h-auto w-full origin-bottom absolute bottom-0 left-0"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=1920 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=1920"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <svg
                        width={64}
                        height={64}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-primary-blue mb-6"
                      >
                        <path
                          opacity="0.2"
                          d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M32 48C40.8375 48 48 40.8375 48 32C48 23.1625 40.8375 16 32 16C23.1625 16 16 23.1625 16 32C16 40.8375 23.1625 48 32 48ZM29.5 37H31V33H29.5C28.6688 33 28 32.3313 28 31.5C28 30.6688 28.6688 30 29.5 30H32.5C33.3313 30 34 30.6688 34 31.5V37H34.5C35.3313 37 36 37.6688 36 38.5C36 39.3313 35.3313 40 34.5 40H29.5C28.6688 40 28 39.3313 28 38.5C28 37.6688 28.6688 37 29.5 37ZM32 28C30.8938 28 30 27.1063 30 26C30 24.8938 30.8938 24 32 24C33.1063 24 34 24.8938 34 26C34 27.1063 33.1063 28 32 28Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                        Join the community
                      </h3>
                    </div>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Get support from thousands of enthusiastic users.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    rel="noreferrer"
                    href="https://community.prismic.io"
                  >
                    Join our community
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="py-10">
        <div className="mb-16">
          <h2
            className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight"
            style={{ maxWidth: 500 }}
          >
            Experiencia en{" "}
            <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
              {" "}
              desarrollo
              <span
                className="absolute -top-3 right-0"
                style={{ display: "inline-block", verticalAlign: "top" }}
              >
                <svg
                  viewBox="0 0 24 23"
                  style={{
                    width: 26,
                    height: 26,
                    display: "block",

                    flexShrink: 0,
                  }}
                  fill="#bd73e8"
                >
                  <g>
                    <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                    <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                  </g>
                </svg>
              </span>
            </span>
          </h2>
          <p
            className="w-full text-base font-normal leading-relaxed text-body-color"
            style={{ maxWidth: 600 }}
          >
            Te presento mi corta experiencia profesional en desarollo.
          </p>
        </div>
        <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
          <div className="relative flex flex-col justify-start pl-12">
            <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
              <img
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1686753544/samu/logosamuhd_a8atbw.png"
                alt="DevDojo"
                className="w-8 h-8"
              />
            </div>
            <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
              Abril 2023 · Julio 2023
            </p>
            <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
              Desarrollador Full-stack
            </h3>
            <p className="mb-1 text-sm font-medium dark:text-neutral-300">
              SAMU (MINSA) - Servicio de Atención Móvil de Urgencias ( ILO
              MOQUEGUA)
            </p>
            <p className="text-sm font-light text-neutral-600 max-w-[400px] dark:text-neutral-400">
              Desarrolle un sistema para el manejo de datos de pacientes como el
              registro, reportes, indicadores de fallos, graficos, manejo mas de
              300 000 registros.
            </p>
            <p className="my-3">Use las siguientes tecnologias: </p>
            <p>
              <LogosBg />
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <div className="mb-16">
          <h2
            className="mt-0  mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight  "
            style={{ maxWidth: 500 }}
          >
            Certificaciones y
            <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
              {" "}
              cursos
              <span
                className="absolute -top-3 right-0"
                style={{ display: "inline-block", verticalAlign: "top" }}
              >
                <svg
                  viewBox="0 0 24 23"
                  style={{
                    width: 26,
                    height: 26,
                    display: "block",

                    flexShrink: 0,
                  }}
                  fill="#bd73e8"
                >
                  <g>
                    <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                    <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                  </g>
                </svg>
              </span>
            </span>
          </h2>
          <p
            className="w-full text-base font-normal leading-relaxed text-body-color "
            style={{ maxWidth: 600 }}
          >
            Te presento mis certificaciones y algunos cursos que he cursado.
          </p>
        </div>
        <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
          <div className="relative flex flex-col justify-start pl-12">
            <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
              <img
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699125504/Meta-Symbol_doxi6x.png"
                alt="DevDojo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
              Octubre 2023
            </p>
            <h3 className="my-1 flex text-lg font-bold dark:text-neutral-100">
              Introduction to Back-End Development{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="root"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </h3>
            <p className="mb-1 text-sm font-medium dark:text-neutral-300">
              Meta por Coursera
            </p>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
              <p>Aplictudes:</p>{" "}
              <span>Desarrollo de software · Desarrollo web back end</span>
            </p>
          </div>
        </div>

        <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
          <div className="relative flex flex-col justify-start pl-12">
            <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
              <img
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699125504/Meta-Symbol_doxi6x.png"
                alt="DevDojo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
              Octubre 2023
            </p>
            <h3 className="my-1 flex text-lg font-bold dark:text-neutral-100">
              Introduction to frontend developmentIntroduction to Back-End
              Development{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="root"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </h3>
            <p className="mb-1 text-sm font-medium dark:text-neutral-300">
              Meta por Coursera
            </p>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
              <p>Aptitudes:</p> <span> CSS · Diseño web · HTML · React.js</span>
            </p>
          </div>
        </div>
        <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
          <div className="relative flex flex-col justify-start pl-12">
            <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
              <img
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699125504/Meta-Symbol_doxi6x.png"
                alt="DevDojo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
              Octubre 2023
            </p>
            <h3 className="my-1 flex text-lg font-bold dark:text-neutral-100">
              Version control certificate By Meta{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="root"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </h3>
            <p className="mb-1 text-sm font-medium dark:text-neutral-300">
              Meta por Coursera
            </p>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
              <p>Aptitudes:</p> <span> Mercurial · GitHub · Git</span>
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto flex flex-col items-center max-w-[950px]">
        <h3
          className="font-bold text-center  text-[28px] md:text-[40px] lg:text-[44px] leading-[105%] aos-init aos-animate"
          data-aos="fade-up"
        >
          Este es mi
          <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
            {" "}
            blog{" "}
            <span
              className="absolute -top-3 right-0"
              style={{ display: "inline-block", verticalAlign: "top" }}
            >
              <svg
                viewBox="0 0 24 23"
                style={{
                  width: 26,
                  height: 26,
                  display: "block",

                  flexShrink: 0,
                }}
                fill="#bd73e8"
              >
                <g>
                  <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                  <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                </g>
              </svg>
            </span>
          </span>
          personal
          <br />
          con mas de 10+ articulos ya publicados.
        </h3>
        <p
          className="mt-3 text-center md:text-large-18 max-w-[459px] aos-init aos-animate"
          data-aos="fade-up"
        >
          Descubre mi blog personal, aqui es donde escribo sobre algunas
          novedades, curiosidades y sobre tecnologia.Puedes hecharle un vistazo.
        </p>
        <div className="mt-7 md:mz-8 lg:mt-16 text-[#363D4E] w-screen md:w-auto">
          <RecentArticles />
        </div>
        <div className="mt-5 mb-9 md:hidden flex gap-1">
          <a
            aria-label="A Complete Guide to Task Scheduling in Laravel"
            className="py-2 block"
            href="#laravel-task-scheduling"
          >
            <div className="rounded transition bg-[#E0E4EB] target:bg-[#363D4E] w-[39px] h-[2px]" />
          </a>
          <a
            aria-label="6 Factors to Consider When Choosing a Logging Framework"
            className="py-2 block"
            href="#logging-framework"
          >
            <div className="rounded transition bg-[#E0E4EB] target:bg-[#363D4E] w-[39px] h-[2px]" />
          </a>
          <a
            aria-label="Terraform provider for Better Stack"
            className="py-2 block"
            href="#terraform-provider-better-uptime"
          >
            <div className="rounded transition bg-[#E0E4EB] target:bg-[#363D4E] w-[39px] h-[2px]" />
          </a>
        </div>
      </section>
      <section className="relative z-20 overflow-hidden my-10">
        <div className="mt-4">
          <div className="mb-16 mx-auto text-center">
            <h2
              className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight mx-auto"
              style={{ maxWidth: 500 }}
            >
              Herramientas y
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#5c3de6]  to-[#fe97dc]">
                {" "}
                tecnologias{" "}
                <span
                  className="absolute top-12 right-4"
                  style={{ display: "inline-block", verticalAlign: "top" }}
                >
                  <svg
                    viewBox="0 0 24 23"
                    style={{
                      width: 26,
                      height: 26,
                      display: "block",

                      flexShrink: 0,
                    }}
                    fill="#bd73e8"
                  >
                    <g>
                      <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                      <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                    </g>
                  </svg>
                </span>
              </span>
            </h2>
            <p
              className="w-full text-base font-normal leading-relaxed text-body-color mx-auto"
              style={{ maxWidth: 600 }}
            >
              Te presento las tecnologias, frameworks, herramientas con las que
              he trabajado desde que empeze.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-[-18px] flex flex-wrap justify-center">
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_971_8241)">
                        <path
                          d="M4.1875 4.1875H27.8125V27.8125H4.1875V4.1875Z"
                          fill="#ECEFF1"
                        />
                        <path
                          d="M16 18.4842L27.8125 27.8122V9.39648L16 18.4842Z"
                          fill="#CFD8DC"
                        />
                        <path
                          d="M28.7969 4.1875H27.8125L16 13.5154L4.1875 4.1875H3.20312C1.573 4.1875 0.25 5.5105 0.25 7.14062V24.8594C0.25 26.4895 1.573 27.8125 3.20312 27.8125H4.1875V9.39681L16 18.4826L27.8125 9.39484V27.8125H28.7969C30.427 27.8125 31.75 26.4895 31.75 24.8594V7.14062C31.75 5.5105 30.427 4.1875 28.7969 4.1875Z"
                          fill="#F44336"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_971_8241">
                          <rect
                            width="31.5"
                            height="31.5"
                            fill="white"
                            transform="translate(0.25 0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">Email</h3>
                </div>
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_971_7112)">
                        <path
                          d="M11.9651 16.832C10.2424 16.832 8.76587 18.3086 8.76587 20.0312V28.0047C8.76587 29.7273 10.2424 31.2039 11.9651 31.2039C13.6877 31.2039 15.1643 29.7273 15.1643 28.0047V20.0312C15.1643 18.2102 13.7862 16.832 11.9651 16.832Z"
                          fill="#D81C57"
                        />
                        <path
                          d="M0.743164 20.0313C0.743164 21.7539 2.21973 23.2305 3.94238 23.2305C5.66504 23.2305 7.1416 21.7539 7.1416 20.0313V16.832H3.9916C2.21973 16.832 0.743164 18.2102 0.743164 20.0313Z"
                          fill="#D81C57"
                        />
                        <path
                          d="M11.9651 0.738281C10.2424 0.738281 8.76587 2.21484 8.76587 3.9375C8.76587 5.66016 10.2424 7.13672 11.9651 7.13672H15.1643C15.1643 5.31563 15.1643 5.75859 15.1643 3.9375C15.1643 2.21484 13.7862 0.738281 11.9651 0.738281Z"
                          fill="#34BFE9"
                        />
                        <path
                          d="M3.94238 15.1602H11.965C13.6877 15.1602 15.1643 13.6836 15.1643 11.9609C15.1643 10.2383 13.6877 8.76172 11.965 8.76172H3.94238C2.21973 8.76172 0.743164 10.2383 0.743164 11.9609C0.743164 13.6836 2.12129 15.1602 3.94238 15.1602Z"
                          fill="#34BFE9"
                        />
                        <path
                          d="M28.0104 8.76172C26.2877 8.76172 24.8112 10.2383 24.8112 11.9609V15.1602H28.0104C29.733 15.1602 31.2096 13.6836 31.2096 11.9609C31.2096 10.2383 29.7822 8.76172 28.0104 8.76172Z"
                          fill="#2CB07A"
                        />
                        <path
                          d="M16.8376 3.9375V11.9602C16.8376 13.6828 18.3142 15.1594 20.0369 15.1594C21.7595 15.1594 23.2361 13.6828 23.2361 11.9602V3.9375C23.2361 2.21484 21.7595 0.738281 20.0369 0.738281C18.2158 0.738281 16.8376 2.21484 16.8376 3.9375Z"
                          fill="#2CB07A"
                        />
                        <path
                          d="M23.2361 28.0547C23.2361 26.332 21.7595 24.8555 20.0369 24.8555H16.8376V28.0547C16.8376 29.7773 18.3142 31.2539 20.0369 31.2539C21.7595 31.2539 23.2361 29.7773 23.2361 28.0547Z"
                          fill="#E4AC2C"
                        />
                        <path
                          d="M28.0595 16.832H20.0369C18.3142 16.832 16.8376 18.3086 16.8376 20.0313C16.8376 21.7539 18.3142 23.2305 20.0369 23.2305H28.0595C29.7822 23.2305 31.2587 21.7539 31.2587 20.0313C31.2587 18.2102 29.7822 16.832 28.0595 16.832Z"
                          fill="#E4AC2C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_971_7112">
                          <rect
                            width="31.5"
                            height="31.5"
                            fill="white"
                            transform="translate(0.250977 0.246094)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">Slack</h3>
                </div>
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.99643 5.69471C6.9866 6.49919 7.35806 6.43781 9.21747 6.31374L26.7467 5.26119C27.1185 5.26119 26.8094 4.8903 26.6853 4.82867L23.7741 2.72407C23.2163 2.29098 22.4731 1.79502 21.0488 1.91909L4.07514 3.15709C3.45611 3.21846 3.33248 3.52798 3.57899 3.77605L5.99643 5.69471ZM7.04886 9.77991V28.2237C7.04886 29.215 7.54419 29.5858 8.65906 29.5245L27.9237 28.4098C29.0392 28.3484 29.1634 27.6667 29.1634 26.8614V8.54135C29.1634 7.73743 28.8541 7.30391 28.1714 7.36579L8.03959 8.54135C7.29662 8.60379 7.04879 8.97543 7.04879 9.77991H7.04886ZM26.0669 10.7693C26.1904 11.3269 26.0669 11.8839 25.5082 11.9466L24.5801 12.1316V25.748C23.7741 26.1811 23.031 26.4288 22.4117 26.4288C21.4202 26.4288 21.1719 26.1191 20.4292 25.1912L14.3577 15.6596V24.8817L16.2789 25.3152C16.2789 25.3152 16.2789 26.4288 14.7289 26.4288L10.4557 26.6767C10.3315 26.4288 10.4557 25.8104 10.8891 25.6865L12.0042 25.3774V13.1841L10.456 13.06C10.3318 12.5024 10.641 11.6984 11.5089 11.6361L16.0931 11.327L22.4117 20.9827V12.441L20.8007 12.2562C20.677 11.5745 21.1719 11.0795 21.7914 11.0182L26.0669 10.7693ZM2.65001 1.48607L20.3053 0.185878C22.4734 -6.92619e-05 23.0312 0.124501 24.3939 1.11436L30.0297 5.07549C30.9596 5.75665 31.2696 5.9421 31.2696 6.68463V28.4098C31.2696 29.7713 30.7736 30.5765 29.0395 30.6997L8.53637 31.9379C7.23462 31.9999 6.61508 31.8144 5.93336 30.9474L1.78309 25.5626C1.03949 24.5714 0.730225 23.8298 0.730225 22.9623V3.65155C0.730225 2.53812 1.22638 1.60932 2.65001 1.48607V1.48607Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">Notion</h3>
                </div>
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.62207"
                        y="0.636719"
                        width="36.75"
                        height="36.75"
                        rx="18.375"
                        fill="#E91E63"
                      />
                      <path
                        d="M18.9955 10.2969C16.7058 10.2969 14.8412 12.1615 14.8412 14.4512C14.8412 15.8176 15.5195 17.0169 16.5419 17.7747L14.4907 21.1631C14.4744 21.1582 14.4566 21.155 14.4387 21.1501C14.0103 21.0349 13.564 21.0982 13.1794 21.3189C12.3859 21.7781 12.1116 22.7972 12.5693 23.5908C12.876 24.1231 13.4358 24.4216 14.0103 24.4216C14.2927 24.4216 14.5799 24.3519 14.8412 24.2009C15.2258 23.9786 15.5049 23.6167 15.6201 23.1883C15.7353 22.7599 15.6737 22.3136 15.4513 21.929C15.3816 21.809 15.2858 21.7019 15.1917 21.6045L17.4506 17.8915L17.6713 17.528L17.3078 17.3203C16.3293 16.7426 15.672 15.6732 15.672 14.4512C15.672 12.611 17.1553 11.1277 18.9955 11.1277C20.8358 11.1277 22.319 12.611 22.319 14.4512C22.319 14.7936 22.2719 15.1149 22.1762 15.4249L22.9681 15.6716C23.0882 15.2837 23.1499 14.8764 23.1499 14.4512C23.1499 12.1615 21.2853 10.2969 18.9955 10.2969ZM18.9955 12.7895C18.0786 12.7895 17.3338 13.5343 17.3338 14.4512C17.3338 15.3681 18.0786 16.113 18.9955 16.113C19.1335 16.113 19.2698 16.0935 19.398 16.061L21.3973 19.6831L21.592 20.0466L21.9685 19.8519C22.444 19.589 22.9827 19.4364 23.5653 19.4364C25.4055 19.4364 26.8888 20.9197 26.8888 22.7599C26.8888 24.6002 25.4055 26.0834 23.5653 26.0834C22.6679 26.0834 21.8533 25.7248 21.2544 25.1487L20.6832 25.7458C21.4297 26.4647 22.4488 26.9143 23.5653 26.9143C25.8551 26.9143 27.7196 25.0497 27.7196 22.7599C27.7196 20.4702 25.8551 18.6056 23.5653 18.6056C22.9892 18.6056 22.4553 18.7565 21.9555 18.9691L20.125 15.6586C20.4495 15.3551 20.6573 14.9299 20.6573 14.4512C20.6573 13.5343 19.9124 12.7895 18.9955 12.7895ZM12.9977 18.7224C11.1883 19.1735 9.85596 20.8174 9.85596 22.7599C9.85596 25.0497 11.7205 26.9143 14.0103 26.9143C16.1524 26.9143 17.8677 25.2606 18.0868 23.1753H21.9685C22.1535 23.891 22.7929 24.4216 23.5653 24.4216C24.4822 24.4216 25.227 23.6768 25.227 22.7599C25.227 21.843 24.4822 21.0982 23.5653 21.0982C22.7929 21.0982 22.1535 21.6288 21.9685 22.3445H17.3338V22.7599C17.3338 24.6002 15.8505 26.0834 14.0103 26.0834C12.1701 26.0834 10.6868 24.6002 10.6868 22.7599C10.6868 21.1988 11.7611 19.9006 13.2054 19.5403L12.9977 18.7224Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">
                    Webhooks
                  </h3>
                </div>
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.623047"
                        y="0.632812"
                        width="36.75"
                        height="36.75"
                        rx="18.375"
                        fill="url(#paint0_linear_971_7149)"
                      />
                      <g clipPath="url(#clip0_971_7149)">
                        <path
                          d="M27.457 13.1898L24.8755 25.2733C24.6833 26.1247 24.1889 26.3169 23.4749 25.9324L19.6027 23.0763L17.7078 24.8888C17.5155 25.0811 17.3233 25.2733 16.8839 25.2733L17.186 21.2912L24.4086 14.7277C24.7107 14.4256 24.3262 14.3157 23.9418 14.5629L14.9615 20.2202L11.0893 19.0393C10.2379 18.7647 10.2379 18.188 11.2815 17.8035L26.331 11.954C27.0725 11.7343 27.7041 12.1187 27.457 13.1898Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_971_7149"
                          x1="0.623047"
                          y1="0.632812"
                          x2="37.373"
                          y2="37.3828"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1D91C2" />
                          <stop offset={1} stopColor="#1FADF5" />
                        </linearGradient>
                        <clipPath id="clip0_971_7149">
                          <rect
                            width="17.5761"
                            height="17.5761"
                            fill="white"
                            transform="translate(10.2104 10.2246)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">
                    Telegram
                  </h3>
                </div>
                <div className="inline-block w-auto px-4">
                  <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] border border-fb-stroke bg-fb-gray">
                    <svg
                      width={26}
                      height={6}
                      viewBox="0 0 26 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={3} cy={3} r={3} fill="#6A64F1" />
                      <circle cx={13} cy={3} r={3} fill="#6A64F1" />
                      <circle cx={23} cy={3} r={3} fill="#6A64F1" />
                    </svg>
                  </div>
                  <h3 className="text-center text-base font-medium ">More</h3>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-[22px] mt-10 h-px w-full max-w-[570px] bg-gradient-to-r from-transparent via-fb-gray to-transparent" />
            <div className="w-full px-4">
              <div className="mx-auto mb-5 w-full max-w-[390px]">
                <p className="text-center text-sm text-body-color"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageAbout;
