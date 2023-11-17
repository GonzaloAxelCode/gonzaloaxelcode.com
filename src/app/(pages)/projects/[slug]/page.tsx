import Title from "@/shared/UIComponents/Base/Title";

import { getFullProjectBySlug } from "@/shared/hooks/functions-notion";
import extractContentProyect from "@/shared/hooks/extractContentProyect";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import RelatedArticles from "../components/RelatedArticles";
import BGradient from "./components/BGradient";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import Link from "next/link";
import CarrouselPage from "./components/CarrouselPage";
export const dynamicParams = false;

const Components = [
  {
    title: "Menu de navegacion",
    description: "Menu de navegacion adpatable pa todas las pantallas",
  },
  {
    title: "Pantalla principal",
    description: "Menu de navegacion adpatable pa todas las pantallas",
  },
  {
    title: "Menu de navegacion",
    description: "Menu de navegacion adpatable pa todas las pantallas",
  },
  {
    title: "Pantalla principal",
    description: "Menu de navegacion adpatable pa todas las pantallas",
  },
];

const newFuncionalitys = [
  {
    title: "Nueva pagina de inicio",
    icon: "https://res.cloudinary.com/ddksrkond/image/upload/v1699751846/62bc4bd6cede115ca195c43f_Feature_Image_01_o6yjeg.svg",
    description:
      "Esta nueva pagina de inicio integrara con algunas animaciones leves.Ademas de mejoras en el contenido adicional.",
  },
  {
    title: "Nueva pagina de inicio",
    icon: "https://res.cloudinary.com/ddksrkond/image/upload/v1700191628/Black_and_Blue_Technology_Logo-removebg-preview_sbhcvg.png",
    description:
      "Esta nueva pagina de inicio integrara con algunas animaciones leves.Ademas de mejoras en el contenido adicional.",
  },
  {
    title: "Nueva pagina de inicio",
    icon: "https://res.cloudinary.com/ddksrkond/image/upload/v1700191628/Black_and_Blue_Technology_Logo-removebg-preview_sbhcvg.png",
    description:
      "Esta nueva pagina de inicio integrara con algunas animaciones leves.Ademas de mejoras en el contenido adicional.",
  },
];

const imagesPages = [
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700240689/450shots_so_brpfts.png",
  },
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1699834473/278shots_so_ghlgta.png",
  },
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700240760/485shots_so_ulakb9.png",
  },
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700240791/194shots_so_ctukeu.png",
  },
];

const imagesMovil = [
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700243875/Pixel_7_PRO_czb53c.png",
  },
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700243857/iPhone_SE_hvk8y9.png",
  },
  {
    urlImage:
      "https://res.cloudinary.com/ddksrkond/image/upload/v1700243854/iPhone_15_Plus_hp3gzm.png",
  },
];

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullProjectBySlug(params.slug);
  let title = article.properties.Name.title[0]?.plain_text;
  let description = article.properties.Description?.rich_text[0]?.plain_text;

  const ogImage = `${process.env.NEXTAUTH_URL}/api/og?title${title}`;
  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: any) {
  const { content, article: project } = await getFullProjectBySlug(params.slug);
  const {
    peoples,
    level,
    status,
    caracteristicas,
    title,
    cover,
    createdtime,
    updatedTime,
    linkpreview,
    category,
    tecnologias,
    description,
    progress,
    tags,
    imagesTablet,
  } = extractContentProyect(project);
  console.log(status);
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
              <div className="flex w-full object-contain  text-center sm:text-left my-4 gap-2 flex-wrap">
                <p className="max-w-3xl mt-4  text-sm sm:text-md ">
                  {description}
                </p>
                <div className="flex gap-2 my-3">
                  <Link href="#" className="flex gap-2 hover:underline">
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
                  <Link href="#" className="flex gap-2 hover:underline">
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
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699834962/888shots_so_z7ns1q.png"
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
            src="https://res.cloudinary.com/ddksrkond/image/upload/v1699843371/621shots_so_h42it4.png"
            alt=""
          />
          <div className="absolute top-[30%] right-[10%] w-[17.5vw] h-[37.58vw] z-1 overflow-hidden">
            <img
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1699846615/807shots_so_v6bfvu.png"
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
              Un festival de paginas
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
        <div className="px-4 max-w-screen-xl mx-auto">
          <h3 className="text-center leading-title font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
            Algunas Caracteristicas.
          </h3>
          <p className=" text-center mx-auto text-md mt-6 max-w-[716px] text-neutrals-opaque-6">
            Learn how to use Airtable as a data source for your Glide project in
            three easy steps.
          </p>
          <div className=" mx-auto sm:px-7 px-4  max-w-screen-xl grid grid-cols-2 my-8 md:my-12 lg:my-15 lg:grid-cols-3 gap-x-8 sm:gap-x-12">
            {[].map((el: any, index: any) => {
              return (
                <div key={index} className="grid lg:justify-items-center">
                  <div className="grid bg-gray-200 dark:bg-gray-200 bg-opacity-80 w-14 h-14 place-content-center rounded-2xl">
                    <svg
                      width={22}
                      height={22}
                      className="text-white"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 10.01L17.378 1.62104C17.7759 1.22338 18.3154 1 18.878 1C19.4406 1 19.9801 1.22338 20.378 1.62104C20.7757 2.01895 20.999 2.55848 20.999 3.12104C20.999 3.68359 20.7757 4.22313 20.378 4.62104L12 13"
                        stroke="#202124"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M6.514 10.941C6.81121 10.637 7.16575 10.3951 7.55711 10.2292C7.94846 10.0632 8.36884 9.97654 8.79392 9.97417C9.219 9.9718 9.64032 10.0538 10.0335 10.2154C10.4267 10.3769 10.7839 10.6149 11.0845 10.9155C11.3851 11.2161 11.623 11.5733 11.7846 11.9665C11.9462 12.3596 12.0282 12.781 12.0258 13.206C12.0234 13.6311 11.9367 14.0515 11.7708 14.4428C11.6048 14.8342 11.3629 15.1887 11.059 15.486C9.8 16.74 5 17 5 17C5 17 5.26 12.2 6.514 10.941Z"
                        stroke="#202124"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="square"
                      />
                      <path
                        d="M11 1H1V21H21V11"
                        stroke="#202124"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <h6 className="mt-4 lg:text-center font-chromatic-grotesque text-2xl font-headings ">
                    {el.text1}
                  </h6>
                  <p className="max-w-sm text-sm py-2 sm:max-w-md lg:text-center text-neutrals-light-10">
                    {el.text2}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
                <div className="mt-10 space-y-4">
                  <div>
                    <p className="font-semibold text-neutrals-opaque-13">
                      Se ve muy bien en diferentes telefonos moviles
                    </p>
                    <p className="text-neutrals-opaque-10">
                      Con un diseño muy cuidado, logre hacer que la aplicacion
                      pudea ser responsiva a todos los dispositovos moviles,
                      diferentes tamaños tambien.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3">
                {imagesMovil.slice(0, 3).map((el: any, index: any) => {
                  return (
                    <div>
                      <img
                        key={index}
                        alt=""
                        width={1640}
                        height={2360}
                        className="object-contain"
                        src={el.urlImage}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
          <div className="max-w-screen-xl mx-auto mt-12 md:mt-18 lg:mt-[120px] xl:mt-[180px]">
            <div>
              <div className="max-w-[648px] mt-6">
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
                  <span className="ml-2 text-lg ">Functionalities-Ready</span>
                </div>
                <h3 className="font-chromatic-grotesque leading-title mt-3 text-3xl md:text-4xl lg:text-4xl font-medium">
                  Funcionalidades y paginas de la aplicacion
                </h3>
                <p className="mt-6 text-md lg:mt-7 text-alpha-light-8">
                  He recopilado las partes mas importantes para colocarlas aqui,
                  hechale un viztazo de algunas de sus funcionalidades y
                  paginas.
                </p>
              </div>
              <div className="mt-10 overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:mt-12 ">
                {Components.map((el: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col bg-gray-F7 dark:bg-[#292929] cursor-pointer hover:bg-white transition-all duration-100 rounded-xl w-full sm:max-w-[290px] p-2 sm:p-5 border-1 border-solid border-gray-200 dark:border-[#434343]  shadow-lg"
                    >
                      <div className="flex gap-2">
                        <span className="flex items-center justify-center">
                          <svg
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 shrink-0"
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
                        </span>
                        <span className="font-copy font-bold  sm:font-headings  text-sm sm:text-md ">
                          {el.title}
                        </span>
                      </div>
                      <p className="text-sm ml-7 hidden sm:block">
                        {el.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="relative">
                <div className="aspect-w-[1.8] aspect-h-1 absolute w-full"></div>
                <div className="px-4 pb-10  lg:pb-22 bg-neutrals-light-2  rounded-xl">
                  <div className="relative z-20 max-w-screen-lg ">
                    <div className="mt-10 lg:mt-14">
                      <div className="aspect- aspect-h-1 rounded-xl overflow-hidden z-0 ">
                        <img
                          src="https://res.cloudinary.com/ddksrkond/image/upload/v1699376661/pageindex_y4n8wm.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-16 md:py-20 lg:py-24">
          <div className="mx-auto sm:px-7 px-4  max-w-screen-xl">
            <div className="max-sm:px-4">
              <h2 className="text-center leading-title max-w-xl w-full mx-auto  font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
                Futuras mejoras y nuevas{" "}
                <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
                  funcionalidades
                </span>
              </h2>
              <div className="grid gap-6 mt-8 md:grid-cols-3 lg:mt-20  ">
                {newFuncionalitys.map((el: any, index: any) => {
                  return (
                    <div key={index} className="flex flex-col text-center">
                      <img
                        src={el.icon}
                        className="mx-auto  w-[70px] h-[70px] object-contain"
                        alt=""
                      />
                      <p className="mt-6 font-headings text-xl">{el.title}</p>
                      <p className="mt-1.5 flex-1 max-md:max-w-sm mx-auto">
                        {el.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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
