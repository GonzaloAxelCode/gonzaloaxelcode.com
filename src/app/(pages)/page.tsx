import LogosBg from "@/shared/components/LogosBg";

import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import siteMetadata from "@/shared/settings/sitemetdata";
import type { Metadata } from "next";
import Link from "next/link";

import PresentationPortfolio from "../PresentationPortfolio";
import MyTools from "./about/components/MyTools";
import RecentArticles from "./about/components/RecentArticles";
import TechList from "./components/TechList";

const tools_app: any = {

  ANDROID: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png",
  HONOJS: "https://seeklogo.com/images/H/hono-logo-85A5D1206D-seeklogo.com.png",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  WORKERS: "https://blog.christophetd.fr/wp-content/uploads/2022/06/Image-2022-06-29-00-24-49.png",
  CLOUDFLARE: "https://cdn.iconscout.com/icon/premium/png-256-thumb/cloudflare-2752221-2285038.png?f=webp&w=256",
  MAPBOX: "https://cdn.icon-icons.com/icons2/2699/PNG/512/mapbox_logo_icon_169974.png"
};




export const metadata: Metadata = {
  title: "Gonzalo Axel Web Junior Developer",
  description: siteMetadata.description,
  openGraph: {
    title: "Gonzalo Axel Web Junior Developer",
    description: "Pagina de inicio de portfolio personal.",
    siteName: "Gonzalo's Portfolio",
    type: "website",
    url: "https://gonzaloaxelcode.com",
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
        alt: "Gonzalo Portfolio",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Axel Web Junior Developer",
    description: "Pagina de inicio de portfolio personal.",
    siteId: "1467726470533754880",
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
        alt: "Gonzalo Portfolio",
      },
    ],
  },
  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};

const projects = [
  {
    hrefLive: "https://udemycloneplus.vercel.app/",
    title: "Clon de Udemy solo frontend UI",
    description:
      "Este proyecto es un clon de la reconocida plataforma de aprendizaje en línea Udemy, centrándose exclusivamente en la recreación de su interfaz de usuario UI en el lado del frontend.",
    aptitudes: [
      "Desarrollo de software",
      "Desarrollo Frontend",
      "React 18",
      "Nextjs 12",
      "Tailwindcss",
    ],
    imageprev:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700274329/10shots_so_bgt2yc.png",
  },
  {
    hrefLive: "https://fastfoodilo.vercel.app/fastfood",
    title: "Aplicación de comida rápida solo frontend UI",
    description:
      "Este proyecto es un clon de una web de Themeforest de comida rápida en línea FastFood Lafka, con un enfoque principal en recrear fielmente su interfaz de usuario UI en el lado del frontend.",
    aptitudes: ["Desarrollo de software", "Desarrollo Frontend", "Nextjs 12"],
    imageprev:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1675868776/Blog/fastfood_uqvurg.png",
  },
  {
    hrefLive: "https://samusystem.vercel.app/",
    title: "Aplicación de reportes SAMU Fullstack",
    description:
      "Sistema para organizar los reportes y automatización de subida de información y reportes de errores de datos, con módulos de autenticación JWT y OTP.",
    aptitudes: [
      "Desarrollo de software",
      "Desarrollo web backend",
      "Django RestFramework",
      "Angular 16",
      "JWT",
      "Docker",
    ],
    imageprev:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1713839604/SAMUAPPCAPTURE_nub9ca.png",
  },
  {
    hrefLive: "https://trackbusiloadmin.vercel.app/login",
    title: "TrackBusIlo",
    description:
      "Este proyecto es una aplicación para el control del marcaje de transportes públicos, que realiza el registro de cada ubicación designada y controla los horarios de salida y de llegada.",
    aptitudes: [
      "Desarrollo de software",
      "HonoJS",
      "React Native",
      "Typescript",
    ],
    imageprev:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1726623547/trackingapp/TrackBusIlo_pp3wve.png",
  },
];

let tools = {
  JAVASCRIPT: "https://cdn.svgporn.com/logos/javascript.svg",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  NODE: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  BOOSTRAP: "https://cdn.svgporn.com/logos/bootstrap.svg",
  MYSQL: "https://cdn.svgporn.com/logos/mysql.svg",
  ANGULAR: "https://cdn.svgporn.com/logos/angular-icon.svg",
  PYTHON: "https://cdn.svgporn.com/logos/python.svg",
  POSTMAN: "https://cdn.svgporn.com/logos/postman-icon.svg",
  POSTGRESQL: "https://cdn.svgporn.com/logos/postgresql.svg",
  FIREBASE: "https://cdn.svgporn.com/logos/firebase.svg",
  DOCKER: "https://cdn.svgporn.com/logos/docker-icon.svg",
  DJANGO: "https://cdn.svgporn.com/logos/django-icon.svg",

  BASH: "https://cdn.svgporn.com/logos/bash-icon.svg",
  LINUX: "https://cdn.svgporn.com/logos/linux-tux.svg",
  VIM: "https://cdn.svgporn.com/logos/vim.svg"
};

const PageAboutHome = () => {
  return (
    <main className="w-full max-w-[1024px] lg:max-w-[1200px]  mx-auto  px-8">

      <TechList tools={tools} />
      <PresentationPortfolio />

      <section className="w-full  py-5 md:py-10 2xl:py-15 overflow-hidden light-copy ">
        <div className="mb-4">
          <h2
            className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight"
            style={{ maxWidth: 500 }}
          >
            Mas{" "}
            <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
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
                  className="fill-black dark:fill-white "
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

        <div className=" w-full text-gray-15 overflow-hidden dark-copy">
          <div className="container md:grid md:grid-cols-12 md:gap-x-6">
            <div className="md:col-span-12  md:mb-5 flex flex-col gap-6">
              <div className="text-base 2xl:text-md font-medium copy-muted">
                <div className="text-md text-neutral-600 dark:text-neutral-400">
                  <p className="mt-6">
                    ¡Saludos! Mi nombre es Gonzalo Axel Valdez Quispe, y me
                    dedico al fascinante mundo del desarrollo de software.
                    Recientemente me gradué en Ingeniería de Sistemas e
                    Informática. Este espacio web lo he creado con el propósito
                    de documentar mis proyectos y compartir mis experiencias en
                    el campo del desarrollo web. Durante mis estudios, he adquirido habilidades tanto
                    teóricas como prácticas que me capacitan para desarrollar
                    sistemas completos. Como aspirante a desarrollador de
                    software profesional, me comprometo a mejorar continuamente,
                    explorando nuevas tecnologías en áreas como frontend,
                    backend, infraestructura, diseño UI/UX, DevOps, bases de
                    datos y mucho más cada día.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="py-10">
          <div className="mb-16">
            <h2
              className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight"
              style={{ maxWidth: 500 }}
            >
              Experiencia en{" "}
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
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
                    className="fill-black dark:fill-white "
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
              Mi experiencia como desarrollador de software.
            </p>
          </div>
          <div className="pb-10 ml-6 border-l border-gray-200 dark:border-neutral-700 gap-8 flex flex-col ">
            <div className="relative flex flex-col justify-start pl-12 ">
              <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 dark:border-neutral-700">
                <img
                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1686753544/samu/logosamuhd_a8atbw.png"
                  alt=""
                  className="w-8 h-8"
                />
              </div>
              <p className="text-xs uppercase dark:text-neutral-100 text-neutral-500 trackign-widest">
                Abril 2023 · Julio 2023
              </p>
              <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                Software developer
              </h3>
              <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                SAMU (MINSA) - Servicio de Atención Móvil de Urgencias ( ILO
                MOQUEGUA)
              </p>
              <p className="text-sm font-light text-neutral-600 max-w-[400px] dark:text-neutral-400">
                Desarrolle un sistema para el manejo de datos de pacientes como
                el registro, reportes, indicadores de fallos, graficos, manejo
                mas de 300 000 registros.
              </p>
              <p className="my-3">Use las siguientes tecnologias: </p>

              <LogosBg />
            </div>
            <div className="relative flex flex-col justify-start pl-12">
              <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 dark:border-neutral-700">
                <img
                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1700192103/Capture-removebg-preview_xtbln0.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-xs uppercase dark:text-neutral-100 text-neutral-500 trackign-widest">
                Junio 2024 · Octubre 2024
              </p>
              <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                Software Developer / React Native Developer
              </h3>
              <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                Freelance
              </p>
              <p className="text-sm font-light text-neutral-600 max-w-[400px] dark:text-neutral-400">
                Desarrolle un aplicativo movil para el control de rutas de transporte publico, integrando geolocalizacion en tiempo
                real, use clouflare workers para el despliegue y react native para la aplicacion.
              </p>
              <p className="my-3">Use las siguientes tecnologias: </p>

              <LogosBg tools={tools_app} />
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className=" py-10">
          <div className="mb-8">
            <h2
              className="mt-0  mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight  "
              style={{ maxWidth: 500 }}
            >
              Aplicaciones y proyectos
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
                {" "}
                creados por mi
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
                    className="fill-black dark:fill-white "
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
              Algunas de las aplicaciones que he creado
            </p>
          </div>

          <div className=" flex flex-col">
            <div className="  ">
              <div className="max-w-7xl mx-auto ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                  {projects.map((project, index) => (
                    <div key={index} className="card-neumorphic p-4 grid grid-cols-1 gap-2">
                      <div>
                        <Link href="#" className="flex space-x-4">
                          <img
                            className="img-neumorphic block rounded-100"
                            src={project.imageprev}
                            alt={project.title}
                          />
                        </Link>
                      </div>
                      <div className="col-span-2">
                        <div className="font-medium text-xl">
                          <p className="font-semibold">
                            <Link
                              href={project.hrefLive}
                              target="_blank"
                              className="flex space-x-4 underline-offset-4 underline"
                            >
                              {project.title}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Link>
                          </p>
                        </div>
                        <div className="pt-3 pb-5">
                          <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex">
                          <img
                            className="user-neumorphic w-10 h-10 rounded-full"
                            src={siteMetadata.photo}
                            alt="Desarrollador"
                          />
                          <div className="ml-5">
                            <span className="text-sm block">Gonzalo Axel</span>
                            <span className="text-xs font-medium block">Desarrollador</span>
                          </div>
                        </div>
                        <p className="text-sm font-light mt-5 text-neutral-600 dark:text-neutral-400">
                          <span>Aptitudes:</span>{" "}
                          <span>{project.aptitudes.join(" · ")}</span>
                        </p>
                      </div>
                    </div>
                  ))}


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-10">
          <div className="mb-16">
            <h2
              className="mt-0  mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight  "
              style={{ maxWidth: 500 }}
            >
              Certificaciones y
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
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
                    className="fill-black dark:fill-white "
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
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 ">
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
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Meta por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span>{" "}
                  <span>Desarrollo de software · Desarrollo web back end</span>
                </p>
              </div>
            </div>

            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 dark:border-neutral-700">
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
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Meta por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span>{" "}
                  <span> CSS · Diseño web · HTML · React.js</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 ">
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
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Meta por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>

            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 ">
                  <img
                    src="https://res.cloudinary.com/ddksrkond/image/upload/v1699125504/Meta-Symbol_doxi6x.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    React Native{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Meta por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full w-14 h-14 border-neutral-300 ">
                  <img
                    src="https://res.cloudinary.com/ddksrkond/image/upload/v1699125504/Meta-Symbol_doxi6x.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    JavaScript programming{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Meta por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mx-auto flex flex-col items-center ">
        <h2
          className="font-bold text-center  text-3xl     sm:text-4xl sm:leading-tight md:text-[40px]                 leading-title aos-init aos-animate"
          data-aos="fade-up"
        >
          Este es mi
          <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
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
                className="fill-black dark:fill-white "
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
      </section>
      <section className="relative z-20 overflow-hidden my-10">
        <div className="mt-4">
          <div className="mb-16 mx-auto text-center">
            <h2
              className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight mx-auto"
              style={{ maxWidth: 500 }}
            >
              Herramientas y
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
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
                    className="fill-black dark:fill-white "
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
/*****
 * 
   <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img
                    src="https://images.vexels.com/content/140583/preview/ibm-logo-9289b6.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >
                    Design of interfaces and user experiences (UI/UX){" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  IMB por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img
                    src="https://inferencelabs9.com/wp-content/uploads/2024/01/AWS2-1.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    AWS Cloud Technical Fundamentals{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Amazon Web Services por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img
                    src="https://mrover.org/sponsorImages/coe.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    Intermediate PostgreSQL{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  University Of Michigan por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img
                    src="https://d2j6dbq0eux0bg.cloudfront.net/images/24479407/3365229700.jpg"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    Building cloud services with the Java Spring Framework{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Vanderbilt University por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0  flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img
                    src="https://www.chinauniversityjobs.com/wp-content/uploads/2021/08/r%E9%A6%99%E6%B8%AF%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-logo.png"
                    alt="DevDojo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">

                </p>
                <h3 className=" my-1 flex text-lg font-bold dark:text-neutral-100">
                  <Link
                    className="flex hover:underline"
                    target="_blank"
                    href="#"
                  >

                    Software engineering: modeling software systems with UML{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="root"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  The Hong Kong University of Science and Technology por Coursera
                </p>
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <span>Aptitudes:</span> <span> Mercurial · GitHub · Git</span>
                </p>
              </div>
            </div>
 * 
 * *****/

