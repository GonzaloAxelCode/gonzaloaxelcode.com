import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import type { Metadata } from "next";

import React from "react";
import SectionProjects from "./components/SectionProjects";
export const metadata: Metadata = {
  title: "Gonzalo Axel Project",
  description: "Pagina de de proyectos personales.",
  openGraph: {
    title: "Gonzalo Axel Projects",
    description: "Pagina de de proyectos personales.",
    siteName: "Gonzalo's Projects",
    type: "website",
    url: "https://gonzaloaxelcode.com/projects",
    images: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 1800,
        height: 1600,
        alt: "Gonzalo Projects",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Axel Projects",
    description: "Pagina de de proyectos personales.",
    siteId: "1467726470533754881",
    creator: "@GonzaloAxel",
    creatorId: "1467726470533754880",
    images: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 1800,
        height: 1600,
        alt: "Gonzalo Ael Projects",
      },
    ],
  },
  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};

const PageProjects = () => {


  return (
    <React.Fragment>


      <section

      >
        <div className="slice-layout  w-full  py-12 md:py-20 2xl:py-24 relative overflow-hidden">
          <div className="container mx-auto items-center relative z-10 md:py-[5vh] 2xl:py-[9vh]">
            <div className="mx-10 text-center flex flex-col items-center relative z-10">
              <span className="block font-bold text-base md:text-md text-primary-purple mb-4">
                Proyectos
              </span>

              <p className="mb-5 px-5 lg:px-24 text-gray-15 dark:text-white text-3xl sm:text-3xl md:text-4xl font-headings text-gray-A4" style={{
                letterSpacing: "-.025em",
                lineHeight: 1.083,
              }}>
                <strong>

                  Proyectos personales en desarrollo

                </strong>
              </p>
              <div className="font-copy  text-sm lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2 max-w-xl mx-auto opacity-50">
                  Hize esta seccion para mostrar mis proyectos personales para demostrar mis habilidades construyendo software, cada proyecto mi tiene sus detalles como que es lo que use y como lo implemente.Echales un vistazo son gratis.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10">
                <a
                  className="rounded-lg  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 px-6 bg-gray-15 dark:bg-white text-white  dark:text-black"
                  rel="noreferrer"
                  href="#feature-proyects"
                >
                  Mostrar mis nuevos proyectos
                </a>
              </div>
            </div>
          </div>
          <img
            alt=""
            width={1440}
            height={656}
            decoding="async"
            data-nimg={1}
            className="absolute right-0 left-0 w-full hidden sm:block bottom-0"
            srcSet="https://prismic-main.cdn.prismic.io/prismic-main/6583013b531ac2845a26d231_use-cases-hero-new.svg?fit=max&w=1920 1x, https://prismic-main.cdn.prismic.io/prismic-main/6583013b531ac2845a26d231_use-cases-hero-new.svg?fit=max&w=3840 2x"
            src="https://prismic-main.cdn.prismic.io/prismic-main/6583013b531ac2845a26d231_use-cases-hero-new.svg?fit=max&w=3840"
            style={{ color: "transparent" }}
          />
        </div>

      </section>


      <div className="relative mx-10 z-10 flex flex-col min-h-dvh font-copy font-medium antialiased selection:bg-primary-purple selection:text-white">

        <div className="relative z-10 flex flex-col min-h-screen">

         <SectionProjects/>

        </div>

      </div>


    </React.Fragment>

  );
};

export default PageProjects;
