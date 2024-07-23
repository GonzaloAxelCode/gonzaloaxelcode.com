import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import Title from "@/shared/UIComponents/Base/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gonzalo Axel Academy",
  description: "Academia Personal de Cursos Online (No disponible)",

  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};
const PageTutorials = () => {
  return (
    <main className="w-full ">
      <section
  
  className="mx-[4%]"
>
  
  <div className="slice-layout w-full text-gray-15  py-12 ">
    <div className="container">
      <div className="relative px-12 rounded-xl  border-2  border-gray-100 dark:border-darkborder bg-white  dark:bg-blackbg overflow-hidden  py-12">
        <div className="relative z-10">
          <div className="w-full max-w-[564px] sm:w-[80%] md:w-[50%]">
            <Title>
              Release pages faster with our tried and tested process
            </Title>
            <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2 text-gray-50">
                Check out our playbook to learn how you can set release pages
                faster.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-[300px] relative -mr-12 ml-12 -mb-12 -mt-24 sm:m-0 sm:h-auto sm:absolute sm:top-0 sm:bottom-0 sm:-right-[10%] sm:left-[60%] lg:left-[40%]">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover object-left"
            sizes="50vw"
            srcSet="https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=384 384w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=640 640w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=750 750w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=828 828w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=1080 1080w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=1200 1200w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=1920 1920w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=2048 2048w, https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=3840 3840w"
            src="https://prismic-main.cdn.prismic.io/prismic-main/ZiokBPPdc1huKx2C_release.svg?auto=compress%2Cformat&fit=max&w=3840"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent"
            }}
          />
        </div>
      </div>
    </div>
  </div>

  <div className="container relative z-10" id="developers">
  <div className="flex flex-col xl:grid xl:grid-cols-5 gap-12 pb-20 relative">
    <form className="xl:col-span-1 z-10 xl:z-auto" data-cb-wrapper="true">
      <div className="flex gap-6 flex-col md:flex-row xl:flex-col sticky xl:top-[120px]">
        <div className="w-full z-20">
          <label className="font-bold block mb-3">Located in</label>
          <div className="relative">
            <button
              className="relative cursor-pointer w-full rounded-lg border-2 px-4 py-2 leading-7 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-tertiary-purple"
              id="headlessui-listbox-button-:r6j:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="block truncate">Any country</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full z-10">
          <label className="font-bold block mb-3">Using</label>
          <div className="relative">
            <button
              className="relative cursor-pointer w-full rounded-lg border-2 px-4 py-2 leading-7 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-tertiary-purple"
              id="headlessui-listbox-button-:r6k:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="block truncate">Any technology</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div className="xl:col-span-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-primary-purple bg-quaternary-purple hover:bg-tertiary-purple">
          <svg
            className="absolute -top-[70px] -right-[16px] w-16"
            width={166}
            height={162}
            viewBox="0 0 166 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33964 31.3945L30.0774 8.99744L157.722 132.884L135.989 155.276C135.426 155.856 134.573 156.047 133.817 155.763L106.628 145.56C105.811 145.253 104.889 145.503 104.338 146.18L92.8817 160.251C92.1082 161.201 90.6763 161.256 89.8326 160.368L66.9737 136.306C66.328 135.626 65.4672 135.191 64.5372 135.073L38.8201 131.82C36.5758 131.536 34.7897 129.803 34.4389 127.568L30.4317 102.04C30.2787 101.065 29.7761 100.179 29.0179 99.5475L5.38395 79.8614C4.36132 79.0095 4.27966 77.4677 5.20661 76.5126L18.673 62.6378C19.0931 62.2049 19.2184 61.565 18.9925 61.0057L7.91358 33.5707C7.61242 32.8249 7.77947 31.9717 8.33964 31.3945Z"
              fill="#151515"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
            <path
              d="M8.28347 31.4532L30.0821 8.99341L93.7773 70.8136L35.9168 130.429C35.9168 130.429 34.6159 129.166 34.2811 126.529L30.199 100.523L3.41597 78.3584L1.81331 77.0083C0.801664 76.1561 0.722234 74.6257 1.64023 73.6734L16.1843 58.5846L7.81416 33.5119C7.57378 32.7919 7.75478 31.9979 8.28347 31.4532Z"
              fill="#B382F2"
            />
            <path
              d="M16.1843 58.5846L7.81416 33.5119C7.57378 32.7919 7.75478 31.9979 8.28347 31.4532L30.0821 8.99341L93.7773 70.8136L35.9168 130.429C35.9168 130.429 34.6159 129.166 34.2811 126.529L30.199 100.523M16.1843 58.5846L1.64023 73.6734C0.722234 74.6257 0.801664 76.1561 1.81331 77.0083L3.41597 78.3584M16.1843 58.5846L23.9426 50.591M30.199 100.523L51.5036 78.5726M30.199 100.523L3.41597 78.3584M3.41597 78.3584L25.1567 55.9582"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
            <path
              d="M163.569 91.5739C165.276 90.4879 164.356 87.2501 161.721 85.0697L137.948 65.3991C136.51 64.2094 135.489 62.6004 135.277 61.1903L131.762 37.8759C131.373 35.2917 128.414 32.4205 125.82 32.1083L102.411 29.2921C100.995 29.1217 99.3562 28.1488 98.1241 26.7473L77.7522 3.57261C75.4941 1.00387 72.2302 0.181236 71.1957 1.92012L61.8632 17.608C61.2988 18.5568 60.0026 18.7899 58.4727 18.2178L33.1766 8.75834C30.3728 7.70983 28.7152 9.41766 29.847 12.189L40.0579 37.1912C40.6754 38.7033 40.4811 40.0059 39.5496 40.5985L24.1475 50.3954C22.4403 51.4813 23.36 54.7192 25.9951 56.8995L49.7679 76.5702C51.2057 77.7598 52.2271 79.3689 52.4396 80.7789L55.9538 104.093C56.3434 106.678 59.3017 109.549 61.8964 109.861L85.3053 112.677C86.7211 112.847 88.3599 113.82 89.592 115.222L109.964 138.397C112.222 140.965 115.486 141.788 116.52 140.049L125.853 124.361C126.417 123.412 127.714 123.179 129.243 123.751L154.54 133.211C157.343 134.259 159.001 132.552 157.869 129.78L147.658 104.778C147.041 103.266 147.235 101.963 148.167 101.371L163.569 91.5739Z"
              fill="#8E44EC"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
          </svg>
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/dpdk"
              >
                <img
                  alt="DPDK"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/e8cad633-7249-4f65-b729-89d874cec48c_DPDK+logo.jpg?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=640&fit=max 1x, https://images.prismic.io/prismic-main/e8cad633-7249-4f65-b729-89d874cec48c_DPDK+logo.jpg?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/e8cad633-7249-4f65-b729-89d874cec48c_DPDK+logo.jpg?auto=compress%2Cformat&rect=0%2C0%2C500%2C500&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    DPDK
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Rotterdam, The Netherlands
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/dpdk">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="DPDK"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/6f51097a-d6b8-46bb-930c-60d6c7a8d162_DPDK+website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
          <footer className="mt-4 flex gap-1 flex-wrap text-xs font-bold">
            <div className="bg-primary-purple py-1 px-2 rounded-md text-white">
              Featured
            </div>
            <button data-state="closed">
              <div className="p-1 px-2 rounded-md flex bg-gray-F7 items-center bg-primary-purple text-white">
                <svg
                  viewBox="0 0 32 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline-block text-[#FFD600] w-4 h-4 mr-1"
                >
                  <path
                    d="M26.4 22.4H5.6c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h20.8c.44 0 .8-.36.8-.8v-1.6c0-.44-.36-.8-.8-.8Zm3.2-16a2.4 2.4 0 0 0-2.4 2.4c0 .355.08.685.22.99l-3.62 2.17c-.77.46-1.765.2-2.21-.58l-4.075-7.13c.535-.44.885-1.1.885-1.85a2.4 2.4 0 0 0-4.8 0c0 .75.35 1.41.885 1.85l-4.075 7.13a1.599 1.599 0 0 1-2.21.58L4.585 9.79c.135-.3.22-.635.22-.99a2.4 2.4 0 0 0-2.4-2.4A2.405 2.405 0 0 0 0 8.8a2.4 2.4 0 0 0 2.4 2.4c.13 0 .26-.02.385-.04L6.4 20.8h19.2l3.615-9.64c.125.02.255.04.385.04a2.4 2.4 0 0 0 0-4.8Z"
                    fill="currentColor"
                  />
                </svg>
                Gold Partner
              </div>
            </button>
          </footer>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-primary-purple bg-quaternary-purple hover:bg-tertiary-purple">
          <svg
            className="absolute -top-[70px] -right-[16px] w-16"
            width={166}
            height={162}
            viewBox="0 0 166 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33964 31.3945L30.0774 8.99744L157.722 132.884L135.989 155.276C135.426 155.856 134.573 156.047 133.817 155.763L106.628 145.56C105.811 145.253 104.889 145.503 104.338 146.18L92.8817 160.251C92.1082 161.201 90.6763 161.256 89.8326 160.368L66.9737 136.306C66.328 135.626 65.4672 135.191 64.5372 135.073L38.8201 131.82C36.5758 131.536 34.7897 129.803 34.4389 127.568L30.4317 102.04C30.2787 101.065 29.7761 100.179 29.0179 99.5475L5.38395 79.8614C4.36132 79.0095 4.27966 77.4677 5.20661 76.5126L18.673 62.6378C19.0931 62.2049 19.2184 61.565 18.9925 61.0057L7.91358 33.5707C7.61242 32.8249 7.77947 31.9717 8.33964 31.3945Z"
              fill="#151515"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
            <path
              d="M8.28347 31.4532L30.0821 8.99341L93.7773 70.8136L35.9168 130.429C35.9168 130.429 34.6159 129.166 34.2811 126.529L30.199 100.523L3.41597 78.3584L1.81331 77.0083C0.801664 76.1561 0.722234 74.6257 1.64023 73.6734L16.1843 58.5846L7.81416 33.5119C7.57378 32.7919 7.75478 31.9979 8.28347 31.4532Z"
              fill="#B382F2"
            />
            <path
              d="M16.1843 58.5846L7.81416 33.5119C7.57378 32.7919 7.75478 31.9979 8.28347 31.4532L30.0821 8.99341L93.7773 70.8136L35.9168 130.429C35.9168 130.429 34.6159 129.166 34.2811 126.529L30.199 100.523M16.1843 58.5846L1.64023 73.6734C0.722234 74.6257 0.801664 76.1561 1.81331 77.0083L3.41597 78.3584M16.1843 58.5846L23.9426 50.591M30.199 100.523L51.5036 78.5726M30.199 100.523L3.41597 78.3584M3.41597 78.3584L25.1567 55.9582"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
            <path
              d="M163.569 91.5739C165.276 90.4879 164.356 87.2501 161.721 85.0697L137.948 65.3991C136.51 64.2094 135.489 62.6004 135.277 61.1903L131.762 37.8759C131.373 35.2917 128.414 32.4205 125.82 32.1083L102.411 29.2921C100.995 29.1217 99.3562 28.1488 98.1241 26.7473L77.7522 3.57261C75.4941 1.00387 72.2302 0.181236 71.1957 1.92012L61.8632 17.608C61.2988 18.5568 60.0026 18.7899 58.4727 18.2178L33.1766 8.75834C30.3728 7.70983 28.7152 9.41766 29.847 12.189L40.0579 37.1912C40.6754 38.7033 40.4811 40.0059 39.5496 40.5985L24.1475 50.3954C22.4403 51.4813 23.36 54.7192 25.9951 56.8995L49.7679 76.5702C51.2057 77.7598 52.2271 79.3689 52.4396 80.7789L55.9538 104.093C56.3434 106.678 59.3017 109.549 61.8964 109.861L85.3053 112.677C86.7211 112.847 88.3599 113.82 89.592 115.222L109.964 138.397C112.222 140.965 115.486 141.788 116.52 140.049L125.853 124.361C126.417 123.412 127.714 123.179 129.243 123.751L154.54 133.211C157.343 134.259 159.001 132.552 157.869 129.78L147.658 104.778C147.041 103.266 147.235 101.963 148.167 101.371L163.569 91.5739Z"
              fill="#8E44EC"
              stroke="#151515"
              strokeWidth={2}
              strokeLinejoin="round"
            />
          </svg>
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/convert-digital"
              >
                <img
                  alt="Convert Digital"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/ZpjXhx5LeNNTxQlr_Convert_Icon_ClearSpace_Black.jpg?auto=format%2Ccompress&rect=0%2C49%2C1411%2C1411&w=640&fit=max 1x, https://images.prismic.io/prismic-main/ZpjXhx5LeNNTxQlr_Convert_Icon_ClearSpace_Black.jpg?auto=format%2Ccompress&rect=0%2C49%2C1411%2C1411&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/ZpjXhx5LeNNTxQlr_Convert_Icon_ClearSpace_Black.jpg?auto=format%2Ccompress&rect=0%2C49%2C1411%2C1411&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Convert Digital
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Victoria, Australia
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/convert-digital">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/ZpoTIx5LeNNTxS1W_Prismic-image.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
          <footer className="mt-4 flex gap-1 flex-wrap text-xs font-bold">
            <div className="bg-primary-purple py-1 px-2 rounded-md text-white">
              Featured
            </div>
            <button data-state="closed">
              <div className="p-1 px-2 rounded-md flex bg-gray-F7 items-center bg-primary-purple text-white">
                <svg
                  viewBox="0 0 32 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline-block text-gray-A4 w-4 h-4 mr-1"
                >
                  <path
                    d="M26.4 22.4H5.6c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h20.8c.44 0 .8-.36.8-.8v-1.6c0-.44-.36-.8-.8-.8Zm3.2-16a2.4 2.4 0 0 0-2.4 2.4c0 .355.08.685.22.99l-3.62 2.17c-.77.46-1.765.2-2.21-.58l-4.075-7.13c.535-.44.885-1.1.885-1.85a2.4 2.4 0 0 0-4.8 0c0 .75.35 1.41.885 1.85l-4.075 7.13a1.599 1.599 0 0 1-2.21.58L4.585 9.79c.135-.3.22-.635.22-.99a2.4 2.4 0 0 0-2.4-2.4A2.405 2.405 0 0 0 0 8.8a2.4 2.4 0 0 0 2.4 2.4c.13 0 .26-.02.385-.04L6.4 20.8h19.2l3.615-9.64c.125.02.255.04.385.04a2.4 2.4 0 0 0 0-4.8Z"
                    fill="currentColor"
                  />
                </svg>
                Silver Partner
              </div>
            </button>
          </footer>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/14seconds"
              >
                <img
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/ZmMp-pm069VX1j0S_14s-profile-picture.png?auto=format%2Ccompress&rect=0%2C0%2C640%2C640&w=640&fit=max 1x, https://images.prismic.io/prismic-main/ZmMp-pm069VX1j0S_14s-profile-picture.png?auto=format%2Ccompress&rect=0%2C0%2C640%2C640&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/ZmMp-pm069VX1j0S_14s-profile-picture.png?auto=format%2Ccompress&rect=0%2C0%2C640%2C640&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    14 Seconds
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Portland, United States
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/14seconds">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Matter Supply Co."
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=256&fit=max 256w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=384&fit=max 384w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=640&fit=max 640w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=750&fit=max 750w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=828&fit=max 828w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/882542bd-9802-4fc7-93d9-380135c7ebf6_MSCo-website-preview.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/3ap-ag"
              >
                <img
                  alt="3ap agency"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/653117f9fbd9a45bcec81ecf_3aplogo.jpeg?auto=format%2Ccompress&rect=0%2C0%2C200%2C200&w=640&fit=max 1x, https://images.prismic.io/prismic-main/653117f9fbd9a45bcec81ecf_3aplogo.jpeg?auto=format%2Ccompress&rect=0%2C0%2C200%2C200&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/653117f9fbd9a45bcec81ecf_3aplogo.jpeg?auto=format%2Ccompress&rect=0%2C0%2C200%2C200&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    3ap AG
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Zürich, Switzerland
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/3ap-ag">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="3ap agency"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/6532519cfbd9a45bcec8207c_3apwebsite.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/akqa"
              >
                <img
                  alt="AKQA profile picture"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://prismic-main.cdn.prismic.io/prismic-main/e31953ef-b6d0-4eab-a6de-c24bd3548ce8_AKQA-profile.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/e31953ef-b6d0-4eab-a6de-c24bd3548ce8_AKQA-profile.svg?fit=max&w=1080 2x"
                  src="https://prismic-main.cdn.prismic.io/prismic-main/e31953ef-b6d0-4eab-a6de-c24bd3548ce8_AKQA-profile.svg?fit=max&w=1080"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    AKQA
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/akqa">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="AKQA website screenshot"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=256&fit=max 256w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=384&fit=max 384w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=640&fit=max 640w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=750&fit=max 750w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=828&fit=max 828w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/b6da5139-ff31-4278-b425-54687e8d5939_akqa-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/backpack-works"
              >
                <img
                  alt="Backpack Works"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/65cfb9c19be9a5b998b5f344_backpack-logo-profile.jpg?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=640&fit=max 1x, https://images.prismic.io/prismic-main/65cfb9c19be9a5b998b5f344_backpack-logo-profile.jpg?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/65cfb9c19be9a5b998b5f344_backpack-logo-profile.jpg?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Backpack Works
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    San Diego, California
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/backpack-works">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Backpack Works"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/65cfb9d39be9a5b998b5f345_backpack-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/bruno"
              >
                <img
                  alt="Bruno profile picture"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/a04b578e-8aa3-4b04-b4e5-94e52df7ddd7_bruno-profile.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=640&fit=max 1x, https://images.prismic.io/prismic-main/a04b578e-8aa3-4b04-b4e5-94e52df7ddd7_bruno-profile.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/a04b578e-8aa3-4b04-b4e5-94e52df7ddd7_bruno-profile.png?auto=compress%2Cformat&rect=0%2C0%2C512%2C512&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Bruno
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/bruno">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Callbruno website screenshot"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=256&fit=max 256w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=384&fit=max 384w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=640&fit=max 640w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=750&fit=max 750w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=828&fit=max 828w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/44f76f0c-8161-419b-b262-0834b59ac1f8_callbruno-website.png?auto=compress%2Cformat&rect=0%2C0%2C3200%2C2400&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/fineart-design-agency"
              >
                <img
                  alt="FineArt Design Agency "
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/65a6f09e7a5e8b1120d5978b_Fineart-Logo-C-B-PNG-512x512.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=640&fit=max 1x, https://images.prismic.io/prismic-main/65a6f09e7a5e8b1120d5978b_Fineart-Logo-C-B-PNG-512x512.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/65a6f09e7a5e8b1120d5978b_Fineart-Logo-C-B-PNG-512x512.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Fineart Design Agency
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Toronto, Canada
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a
            className="mt-4 block"
            href="#/hire-a-developer/fineart-design-agency"
          >
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/65a079dc7a5e8b1120d576ca_Fineart-banner-PNG.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/gaspardbruno"
              >
                <img
                  alt="Gaspard Bruno"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/36db6e71-b022-479a-b6cf-8e0f015fb38d_gb.png?auto=compress%2Cformat&rect=0%2C0%2C300%2C300&w=640&fit=max 1x, https://images.prismic.io/prismic-main/36db6e71-b022-479a-b6cf-8e0f015fb38d_gb.png?auto=compress%2Cformat&rect=0%2C0%2C300%2C300&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/36db6e71-b022-479a-b6cf-8e0f015fb38d_gb.png?auto=compress%2Cformat&rect=0%2C0%2C300%2C300&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Gaspard+Bruno
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    London, United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/gaspardbruno">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Gaspard+Bruno"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=256&fit=max 256w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=384&fit=max 384w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=640&fit=max 640w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=750&fit=max 750w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=828&fit=max 828w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/cf8c1081-7c8c-4f69-ba10-becdc49a9a12_Prismic_GB.png?auto=compress%2Cformat&rect=0%2C0%2C1280%2C960&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/i-com"
              >
                <img
                  alt="I-com"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/ad1531e2-2e63-4d89-be7c-b62de1861e53_i-com+logo.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=640&fit=max 1x, https://images.prismic.io/prismic-main/ad1531e2-2e63-4d89-be7c-b62de1861e53_i-com+logo.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/ad1531e2-2e63-4d89-be7c-b62de1861e53_i-com+logo.jpeg?auto=compress%2Cformat&rect=0%2C0%2C200%2C200&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    I-COM
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Manchester, United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/i-com">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="I-com"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=256&fit=max 256w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=384&fit=max 384w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=640&fit=max 640w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=750&fit=max 750w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=828&fit=max 828w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/4d0f0193-a71d-4c8f-ab92-7975e2b37cc0_i-com.png?auto=compress%2Cformat&rect=380%2C0%2C1571%2C1178&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/jibe"
              >
                <img
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/659ea6e27a5e8b1120d5696d_Untitled.png?auto=format%2Ccompress&rect=0%2C0%2C540%2C540&w=640&fit=max 1x, https://images.prismic.io/prismic-main/659ea6e27a5e8b1120d5696d_Untitled.png?auto=format%2Ccompress&rect=0%2C0%2C540%2C540&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/659ea6e27a5e8b1120d5696d_Untitled.png?auto=format%2Ccompress&rect=0%2C0%2C540%2C540&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    JIBE
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Vancouver, Canada
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/jibe">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Jibe "
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/659ef2b57a5e8b1120d56c6b_Untitled.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/julius"
              >
                <img
                  alt="Julius logo "
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/ZnSjk5m069VX172-_LogoJuliusPng-01.png?auto=format%2Ccompress&rect=128%2C0%2C439%2C439&w=640&fit=max 1x, https://images.prismic.io/prismic-main/ZnSjk5m069VX172-_LogoJuliusPng-01.png?auto=format%2Ccompress&rect=128%2C0%2C439%2C439&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/ZnSjk5m069VX172-_LogoJuliusPng-01.png?auto=format%2Ccompress&rect=128%2C0%2C439%2C439&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Julius
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    , United States
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/julius">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/ZnSjkZm069VX1728_Agency_website_image_2_-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/lord"
              >
                <img
                  alt="Call me Lord"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/2e8f2320-b960-4eb2-a8cb-10d146b1aeeb_Photo+profil.jpg?auto=compress%2Cformat&rect=0%2C0%2C321%2C321&w=640&fit=max 1x, https://images.prismic.io/prismic-main/2e8f2320-b960-4eb2-a8cb-10d146b1aeeb_Photo+profil.jpg?auto=compress%2Cformat&rect=0%2C0%2C321%2C321&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/2e8f2320-b960-4eb2-a8cb-10d146b1aeeb_Photo+profil.jpg?auto=compress%2Cformat&rect=0%2C0%2C321%2C321&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    LORD{" "}
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/lord">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Lord"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/c1c74cec-4a3b-4ae1-9ae8-f9c78adcb4b9_HOME.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/ecocea"
              >
                <img
                  alt="Ecocea"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/65b12f29615e73009ec3e40a_logo-ecocea-miniature.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=640&fit=max 1x, https://images.prismic.io/prismic-main/65b12f29615e73009ec3e40a_logo-ecocea-miniature.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/65b12f29615e73009ec3e40a_logo-ecocea-miniature.png?auto=format%2Ccompress&rect=0%2C0%2C512%2C512&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    La Fabrique Ecocea
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/ecocea">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Ecocea"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=256&fit=max 256w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=384&fit=max 384w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=640&fit=max 640w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=750&fit=max 750w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=828&fit=max 828w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/65b12f90615e73009ec3e415_Ecocea-WorkSpace.jpg?auto=format%2Ccompress&rect=344%2C0%2C5501%2C4126&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/cru"
              >
                <img
                  alt="CRU"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/9c5d6131-6f59-484a-80a7-9c19e489e560_cru-logo.png?auto=compress%2Cformat&rect=0%2C0%2C1024%2C1024&w=640&fit=max 1x, https://images.prismic.io/prismic-main/9c5d6131-6f59-484a-80a7-9c19e489e560_cru-logo.png?auto=compress%2Cformat&rect=0%2C0%2C1024%2C1024&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/9c5d6131-6f59-484a-80a7-9c19e489e560_cru-logo.png?auto=compress%2Cformat&rect=0%2C0%2C1024%2C1024&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Made by CRU
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Berlin, Germany
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/cru">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="CRU"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/bbf05563-5005-428c-81f5-a6d9d420962d_cru-website.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/major-digital"
              >
                <img
                  alt="Major Digital"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/650c3335fbd9a45bcec80186_logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=640&fit=max 1x, https://images.prismic.io/prismic-main/650c3335fbd9a45bcec80186_logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/650c3335fbd9a45bcec80186_logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C300%2C300&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Major Digital
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Brighton, United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/major-digital">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="Major Digital"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=256&fit=max 256w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=384&fit=max 384w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=640&fit=max 640w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=750&fit=max 750w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=828&fit=max 828w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/650c4657fbd9a45bcec80191_Major.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C1200&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors border-gray-EE hover:bg-gray-EE">
          <header className="flex gap-4 justify-between items-center relative grow">
            <div className="flex items-start sm:items-center gap-3">
              <a
                className="shrink-0 after:absolute after:inset-0"
                href="#/hire-a-developer/make-me-pulse"
              >
                <img
                  alt="make me pulse"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-12 h-12"
                  srcSet="https://images.prismic.io/prismic-main/656f26eb531ac2845a25aedd_mmp-logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C1200%2C1200&w=640&fit=max 1x, https://images.prismic.io/prismic-main/656f26eb531ac2845a25aedd_mmp-logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C1200%2C1200&w=1080&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/656f26eb531ac2845a25aedd_mmp-logo-square.png?auto=format%2Ccompress&rect=0%2C0%2C1200%2C1200&w=1080&fit=max"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Make me pulse
                  </h2>
                </div>
                <div className="flex flex-col text-xs-flat gap-x-3 gap-y-1 whitespace-nowrap text-ellipsis text-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </header>
          <a className="mt-4 block" href="#/hire-a-developer/make-me-pulse">
            <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <img
                alt="makemepulse"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-top"
                sizes="(max-width: 639px) 70vw, 33vw"
                srcSet="https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=256&fit=max 256w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=384&fit=max 384w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=640&fit=max 640w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=750&fit=max 750w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=828&fit=max 828w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=1080&fit=max 1080w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=1200&fit=max 1200w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=1920&fit=max 1920w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=2048&fit=max 2048w, https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=3840&fit=max 3840w"
                src="https://images.prismic.io/prismic-main/656f28e8531ac2845a25aef8_64ab5dec912a1056bfe9f1b8_makemepulse.webp?auto=format%2Ccompress&rect=491%2C34%2C2456%2C1842&w=3840&fit=max"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
              />
            </div>
          </a>
        </div>
      </div>
   
      
    </div>
  </div>
  
</div>

</section>

    </main>
  );
};

export default PageTutorials;

