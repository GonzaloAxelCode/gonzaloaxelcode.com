import LogosBg from "@/shared/components/LogosBg";
import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import Link from "next/link";
import SectionProjects from "./components/SectionProjects";
export const metadata: Metadata = {
  ...defaultMetadata,
};

const PageProjects = () => {
  return (
    <main className="w-full">
      <section className="relative overflow-hidden  max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <div className="container items-center relative z-10 py-16 lg:py-16 2xl:py-40">
          <div className="mx-auto text-center flex flex-col items-center">
            <span className="font-bold text-base md:text-md mb-4 text-primary-blue ">
              Projects
            </span>

            <h1 className="font-headings text-6xl lg:text-7xl 2xl:text-8xl font-bold title-limiter leading-title bg-clip-text text-transparent bg-gradient-to-b dark:from-white from-[#505050]  to-[#505050]">
              Echale un vistazo a mis{" "}
              <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#ebe532] via-[#f46762] to-[#c41c70]">
                proyectos
              </span>
            </h1>

            <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-xl text-[#505050]">
              <p className="my-6 dark:text-graywhite first:mt-0 last:mb-0 print:my-2">
                Descubre mi trabajo como desarrollador web. Muestra de proyectos
                destacando diseño, usabilidad y rendimiento. ¡Contáctame para
                saber más!
              </p>
            </div>
            <nav className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10 mx-auto justify-center">
              <Link
                className="rounded-3xl  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 dark:border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white"
                rel="noreferrer"
                href="#"
              >
                Explora mis proyectos
              </Link>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <LogosBg />
      </section>

      <SectionProjects />
    </main>
  );
};

export default PageProjects;

/*

  <img
          loading="lazy"
          width={1440}
          height={642}
          decoding="async"
          data-nimg={1}
          className="absolute top-0 right-0 left-0 hidden md:block w-full"
          style={{ color: "transparent" }}
          srcSet="https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=1920 1x, https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=3840 2x"
          src="https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=3840"
        />
*/
