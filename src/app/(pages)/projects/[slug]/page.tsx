import Title from "@/shared/UIComponents/Base/Title";

import { getFullProjectBySlug } from "@/shared/hooks/functions-notion";
import extractContentProyect from "@/shared/hooks/extractContentProyect";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata, {
  iconsMetadata,
  robotsDefault,
  othersMetadata,
} from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import RelatedArticles from "../components/RelatedArticles";
import BGradient from "./components/BGradient";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import Link from "next/link";
import CarrouselPage from "./components/CarrouselPage";
import Funcionalities from "./components/Funcionalities";
import CarrouselMovil from "./components/CarrouselMovil";
import TecnologiesProyect from "../components/TecnologiesProyect";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { useEffect } from "react";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullProjectBySlug(params.slug);

  const { title, description, cover } = extractInfoArticle(article);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Gonzalo's Projects",
      type: "article",
      url: `https://gonzaloaxelcode.vercel.app/projects/${suglifyTitle(title)}`,
      images: [
        {
          url: cover,
          width: 800,
          height: 600,
        },
        {
          url: cover,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,

      creator: "@GonzaloAxel",

      images: [
        {
          url: cover,
          width: 800,
          height: 600,
        },
        {
          url: cover,
          width: 1800,
          height: 1600,
          alt: "Gonzalo Projects",
        },
      ],
    },

    ...iconsMetadata,
    ...robotsDefault,
    ...othersMetadata,
  };
}

export default async function ProjectPage({ params }: any) {
  const { content, article: project } = await getFullProjectBySlug(params.slug);
  const {
    status,

    title,
    cover,

    linkpreview,
    category,

    description,
    tecnologias,

    imagesPlatforms,
    imagesPages,
    links,
    isLocked,
    components,
  } = extractContentProyect(project);

  if (isLocked) {
    return null;
  }

  return (
    <main>
      <section>
        <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
          <div className="gap-x-6 px-4  pb-0 md:pb-16 mb-[-20px] lg:mb-0 mx-auto mt-4 lg:pt-20 lg:grid xl:px-0 lg:grid-cols-12">
            <h1 className="font-semibold  lg:col-span-12">
              <span className="relative py-1 mr-2 text-sm ">
                <span
                  className="absolute rounded-2xl py-1  top-0 w-full h-full"
                  style={{
                    background:
                      COLORS_NOTION[status?.color || "default"].colorDM,
                    opacity: "0.7",
                  }}
                ></span>

                <span className="relative px-3 py-2 font-medium font-copy z-2 text-center mx-auto">
                  <span
                    className="absolute rounded-full left-2 transform top-[50%] -translate-y-[50%]"
                    style={{
                      background:
                        COLORS_NOTION[status?.color || "default"].colorDM,
                      opacity: "1",
                      width: "3px",
                      height: "3px",
                      padding: "3px",
                    }}
                  ></span>
                  <span className="ml-2">{status?.name}</span>
                </span>
              </span>
              {category} <span></span>
            </h1>
            <div className="mt-3 lg:col-span-6 lg:mt-6">
              <BGradient img={cover} />
              <h2 className="text-3xl sm:text-4xl font-medium  leading-title">
                {title}
              </h2>
              <div className="flex w-full flex-col object-contain  text-center sm:text-left my-4 gap-2 flex-wrap">
                <p className="max-w-3xl mt-4  text-sm sm:text-md ">
                  {description}
                </p>

                <TecnologiesProyect tecnologias={tecnologias} />

                <div className="flex gap-2 my-3">
                  <Link
                    href={linkpreview}
                    target="_blank"
                    className="flex gap-2 hover:underline"
                  >
                    Link preview
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
                  <Link
                    href={links.linkGithubFull}
                    target="_blank"
                    className="flex gap-2 hover:underline"
                  >
                    Link Github
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
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src={
                  imagesPlatforms.imagesDesktop[0]?.external?.url ||
                  "https://res.cloudinary.com/ddksrkond/image/upload/v1691020441/Cross-platform_software-pana_mdfkmj.svg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative my-6">
          <img
            className="max-w-screen transform md:-translate-y-20"
            src={cover}
            alt=""
          />
          <div className="absolute top-[30%] right-[10%] w-[17.5vw] h-[37.58vw] z-1 overflow-hidden">
            <img
              src={
                imagesPlatforms.imagesMovil[0]?.external?.url ||
                "https://res.cloudinary.com/ddksrkond/image/upload/v1699751846/62bc5afca6c2178c70737e28_Apple_iPhone_12_Pro_Silver_zmwzxv.png"
              }
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="relative  sm:overflow-hidden">
        <div className="px-6 md:px-12 mx-auto">
          <div className="max-w-lg">
            <div className="flex items-center text-neutrals-opaque-13">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18V18.01M10 22H14C16.2091 22 18 20.2091 18 18V6C18 3.79086 16.2091 2 14 2H10C7.79086 2 6 3.79086 6 6V18C6 20.2091 7.79086 22 10 22Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="square"
                />
              </svg>
              <span className="ml-2 text-lg ">Desktop-Ready</span>
            </div>
            <h3 className="mt-8 leading-title lg:mt-6 text-neutrals-opaque-13 font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
              Paginas principales
            </h3>
            <div className="mt-10 space-y-4">
              <div>
                <p className="text-neutrals-opaque-10">
                  Te muestro las mejores paginas con un exelelente diseño de
                  interfaz de la aplicacion.Ademas de sus diferentes diseños en
                  diferentes pantallas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CarrouselPage images={imagesPages} />
      </section>

      <section>
        <div className="py-4 md:py-6 lg:py-8">
          <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
            <div className="grid items-center lg:grid-cols-2 gap-y-10 gap-x-6">
              <div className="max-w-lg max-sm:px-4">
                <div className="flex items-center text-neutrals-opaque-13">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 18V18.01M10 22H14C16.2091 22 18 20.2091 18 18V6C18 3.79086 16.2091 2 14 2H10C7.79086 2 6 3.79086 6 6V18C6 20.2091 7.79086 22 10 22Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="square"
                    />
                  </svg>
                  <span className="ml-2 text-lg ">Mobile-Ready</span>
                </div>
                <h3 className="mt-8 leading-title lg:mt-6 text-neutrals-opaque-13 font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
                  Aplicacion responsiva a telefonos moviles
                </h3>
                <div className="mt-10 space-y-4 d">
                  <div>
                    <p className="text-neutrals-opaque-10">
                      Con un diseño muy cuidado, logre hacer que la aplicacion
                      pueda ser responsiva a todos los dispositivos moviles,
                      diferentes tamaños tambien.Puedes arrastrar las imagenes y
                      veras todos los modelos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 text-xs">
                <div className="flex flex-col">
                  <CarrouselMovil images={imagesPlatforms?.imagesMovil} />
                  <span className="text-center mx-auto w-full">iPhone</span>
                </div>
                <div className="flex flex-col">
                  <CarrouselMovil images={imagesPlatforms?.imagesMovil} />
                  <span className="text-center mx-auto w-full">Samsung</span>
                </div>
                <div className="flex flex-col">
                  <CarrouselMovil images={imagesPlatforms?.imagesMovil} />
                  <span className="text-center mx-auto w-full">Otros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Funcionalities components={components} />

      <RelatedArticles />
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getAllArticles(
    process.env.NOTION_DATABASE_PROYECTS,
    {}
  );
  return projects.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}
