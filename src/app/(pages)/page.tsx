import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};

import siteMetadata from "@/shared/settings/sitemetdata";
import LogosBg from "@/shared/components/LogosBg";

import Link from "next/link";
import TextChange from "./about/components/TextChange";
import RecentArticles from "./about/components/RecentArticles";
import MyTools from "./about/components/MyTools";

const PageAboutHome = () => {
  return (
    <main className="w-full max-w-[768px] lg:max-w-[1200px]  mx-auto  px-8">
      <div
        className="absolute top-0 right-0"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddksrkond/image/upload/v1699677416/hero-illustration_odblid.svg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      ></div>
      <div className="relative z-20 w-full  mt-10 sm:mt-0 md:mt-24 mb-12   xl:px-0 ">
        <div className="flex  flex-col-reverse items-center md:flex-row justify-between  ">
          <div className="relative w-full md:w-1/2 lg:w-3/4">
            <h1 className="mb-5 leading-title text-center md:text-left mt-5 md:mt-0 w-full text-3xl sm:text-4xl font-bold md:text-5xl lg:text-5xl dark:text-white">
              Hola 👋, soy{" "}
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
                Gonzalo Axel
              </span>{" "}
              desarrollador de software <br />
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
            <p className="mb-6 text-md text-neutral-600  text-center md:text-left dark:text-neutral-400">
              Desarrollador / Programador Fullstack Junior en Peru.
              <br className="hidden lg:block" />
              Me especializo en en el desarrollo Frontend con Nextjs y Angular
              16.
            </p>

            <div className="flex gap-2 justify-center md:justify-normal lg:justify-normal">
              <Link
                href="https://github.com/GonzaloAxelCode"
                target="_blank"
                className="inline-flex w-auto px-4 py-2 mt-5  text-sm sm:text-md font-bold  duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100  border-neutral-900"
              >
                Sigueme en Github
              </Link>
              <Link
                href="/CURRICULUM2.pdf"
                target="_blank"
                className="inline-flex w-auto px-4 py-2 mt-5 text-sm sm:text-md font-bold duration-300 ease-out border rounded-full   dark:text-neutral-900  border-neutral-700 dark:border-neutral-300 bg-white dark:bg-black dark>text-white dark:text-white text-neutral-900"
              >
                Descarga mi CV
              </Link>
            </div>
          </div>

          <div className="py-5 p-1  mx-auto lg:m-auto lg:mt-0 lg:ml-0">
            <img
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1699676589/default-avatar-icon-of-social-media-user-vector_ga3tpd.jpg"
              className="h-[150px] w-[150px]  md:h-[200px] md:w-[200px]  rounded-full  border-2 border-dashed border-graydark"
            />
          </div>
        </div>
      </div>

      <section className="w-full  py-10 md:py-16 2xl:py-20 overflow-hidden light-copy ">
        <div className="">
          <div className="mb-4">
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
          </div>

          <div>
            <section className=" w-full text-gray-15 overflow-hidden dark-copy">
              <div className="container md:grid md:grid-cols-12 md:gap-x-6">
                <div className="md:col-span-5 mb-10 md:mb-20 flex flex-col gap-6">
                  <div className="text-base 2xl:text-md font-medium copy-muted">
                    <p className="my-6  text-md first:mt-0 last:mb-0 text-neutral-600 dark:text-neutral-400">
                      Mi nombre es Gonzalo Axel Valdez Quispe, soy un
                      desarrollador de Peru, actualmente egresado de la carrera
                      de Ingeneria de sistemas e informatica. He establecido
                      este sitio web con el propósito de documentar mis
                      proyectos y compartir mis experiencias en el ámbito de
                      desarrollo web. Aquí, encontrarás contenido relacionado
                      con mi aprendizaje constante en cuanto a frameworks,
                      bibliotecas y otras tecnologías de gran relevancia en la
                      actualidad.
                    </p>
                    <p className="my-6 text-md first:mt-0 last:mb-0 text-neutral-600 dark:text-neutral-400">
                      Actualemnte cuento con una corta experiencia en el
                      desarrollo de software pero con muchas ganas de seguir
                      aprendiendo y tener muchas experiencias desarrollando todo
                      tipo de aplicaciones.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5 md:col-start-7 md:mt-[0%] mb-10 md:-mb-32 ">
                  <div className="text-md 2xl:text-md font-medium print:text-[12px] bg-gray-F7 dark:bg-blackbg  print:text-justify copy-muted p-12  rounded-xl">
                    <p className="my-6 first:mt-0 last:mb-0 print:my-2 text-neutral-600 dark:text-neutral-400">
                      A lo largo de mis estudios he desarrollado habilidades
                      teorico/practico que me permiten desarrollar sistemas
                      completos. Como aspirante a desarrollador de software
                      profesional, me dedico a mejorar cada dia aprendiendo
                      nuevas tecnologias desde el lado del frontend, backend,
                      infraestructura, diseño UI UX, Devops,bases de datos y
                      muchas cosas mas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="grid grid-cols-12 gap-x-6">
                  <img
                    loading="lazy"
                    width={1030}
                    height={1300}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-2xl border-2 border-gray-15 relative z-10 border-opacity-10 shadow-image-fix col-span-5"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/ddksrkond/image/upload/v1699376918/Capture_xbif1k.png"
                  />
                  <div className="col-span-9 relative col-start-4 -mt-[50%]">
                    <img
                      loading="lazy"
                      width={1896}
                      height={1140}
                      decoding="async"
                      data-nimg={1}
                      className="rounded-2xl border-2 border-gray-15  border-opacity-10 shadow-image-fix"
                      style={{ color: "transparent" }}
                      src="https://res.cloudinary.com/ddksrkond/image/upload/v1675868776/Blog/fastfood_uqvurg.png"
                    />
                    <span className="block text-xs-flat text-sm   leading-4 mt-2 absolute max-w-[45%]">
                      Algunos de mis proyectos personales.
                    </span>
                  </div>
                  <img
                    loading="lazy"
                    width={816}
                    height={768}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-2xl border-2 border-opacity-10 border-gray-15 col-start-8 z-10  shadow-image-fix col-span-4 -mt-[32%]"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/ddksrkond/image/upload/v1699377009/dddd_onuqbj.png"
                  />
                </div>
              </div>
            </section>
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
        <div className="pb-10 ml-6 border-l border-gray-200 dark:border-neutral-700">
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

            <LogosBg />
          </div>
        </div>
      </div>
      <div className=" py-10">
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

        <div className="ml-6 flex flex-col">
          <div className="pb-10  border-l border-gray-200 dark:border-neutral-700">
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
                <Link
                  className="flex hover:underline"
                  target="_blank"
                  href="https://www.coursera.org/account/accomplishments/verify/U9Y8T282ZPB2"
                >
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
                </Link>
              </h3>
              <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                Meta por Coursera
              </p>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                <p>Aptitudes:</p>{" "}
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
                <Link
                  className="flex hover:underline"
                  target="_blank"
                  href="https://www.coursera.org/account/accomplishments/verify/HDT2Q95T6QKT"
                >
                  Introduction to frontend Development
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
                </Link>
              </h3>
              <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                Meta por Coursera
              </p>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                <p>Aptitudes:</p>{" "}
                <span> CSS · Diseño web · HTML · React.js</span>
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
              <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                <Link
                  className="flex hover:underline"
                  target="_blank"
                  href="https://www.coursera.org/account/accomplishments/verify/ECTVTSGHGRYQ"
                >
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
                </Link>
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
      </div>
      <section className="container mx-auto flex flex-col items-center max-w-[950px]">
        <h2
          className="font-bold text-center  text-3xl     sm:text-4xl sm:leading-tight md:text-[40px]                 leading-title aos-init aos-animate"
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
          con mas de 13+ articulos ya publicados.
        </h2>
        <p
          className="mt-3 text-center md:text-large-18 max-w-[459px] aos-init aos-animate"
          data-aos="fade-up"
        >
          Descubre mi blog personal, aqui es donde escribo sobre algunas
          novedades, curiosidades y sobre tecnologia.Puedes hecharle un vistazo.
        </p>
        <RecentArticles />
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
            <MyTools />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageAboutHome;
