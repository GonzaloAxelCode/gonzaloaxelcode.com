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
              Academy: Explorando el universo de la tecnología



            </Title>
            <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2 dark:text-white text-black">
                              Explorando el universo de la tecnología: Desde conceptos básicos hasta innovaciones avanzadas.
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
          <label className=" block mb-3">Lenguajes</label>
          <div className="relative">
            <button
              className="relative cursor-pointer w-full rounded-lg border-2 px-4 py-2 leading-7 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-tertiary-purple border-gray-50"
              id="headlessui-listbox-button-:r6j:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="block truncate">Python</span>
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
          <label className=" block mb-3">Tecnologias & Frameworks</label>
          <div className="relative">
            <button
              className="relative cursor-pointer w-full rounded-lg border-2 px-4 py-2 leading-7 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-tertiary-purple border-gray-50"
              id="headlessui-listbox-button-:r6k:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="block truncate">Django RestFramework</span>
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
    <div className="xl:col-span-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      
     
      <div className="flex flex-col" style={{ opacity: 1 }}>
        <div className="border-2 p-4 rounded-2xl relative grow flex flex-col transition-colors max-h-[100px] border-gray-50">
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
                
                  className="rounded-full w-12 h-12"
                  
                  src="https://www.pngall.com/wp-content/uploads/5/Python-PNG.png"
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="flex flex-col gap-0.5 mt-2 sm:mt-0">
                <div className="flex flex-wrap gap-x-3 items-baseline">
                  <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
                    Python 3
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
                   Python 2024
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
      
    
   
      
    </div>
  </div>
  
</div>

</section>

    </main>
  );
};

export default PageTutorials;

