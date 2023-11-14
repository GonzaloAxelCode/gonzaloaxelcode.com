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
export const dynamicParams = false;

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
      <section className="relative h-[90vh] sm:min-h-[100vh]   sm:overflow-hidden">
        <div className="absolute top-0 px-6 md:px-12 mx-auto">
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
              <span className="ml-2 text-lg ">Mobile-Ready</span>
            </div>
            <h3 className="mt-8 leading-title lg:mt-6 text-neutrals-opaque-13 font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
              Tambien en dispositivos moviles
            </h3>
            <div className="mt-10 space-y-4">
              <div>
                <p className="font-semibold text-neutrals-opaque-13">
                  On-demand knowledge in your pocket
                </p>
                <p className="text-neutrals-opaque-10">
                  Access critical information like pricing, specs, manuals, and
                  everything you need with one intuitive mobile app.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[100%]  absolute top-[30%] sm:top-[14%]  md:top-[5%] lg:top-[0%] "
          src="https://res.cloudinary.com/ddksrkond/image/upload/v1699847225/229shots_so_xfvm9o.png"
          alt=""
        />
      </section>

      <section>
        <div className="px-4 max-w-screen-xl mx-auto mt-0 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-40">
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
                  Hola xd
                </h3>
                <div className="mt-10 space-y-4">
                  <div>
                    <p className="font-semibold text-neutrals-opaque-13">
                      On-demand knowledge in your pocket
                    </p>
                    <p className="text-neutrals-opaque-10">
                      Access critical information like pricing, specs, manuals,
                      and everything you need with one intuitive mobile app.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-w-[0.848] aspect-h-1 bg-neutrals-opaque-11 rounded-3xl overflow-hidden z-0">
                <img
                  alt=""
                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1699835474/817shots_so_ubsdyf.png"
                />
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
                <h3 className="font-chromatic-grotesque leading-title text-3xl md:text-4xl lg:text-4xl font-medium">
                  Advanced functionality without advanced expertise.
                </h3>
                <p className="mt-6 text-md lg:mt-7 text-alpha-light-8">
                  Whether you’re a beginner or a programming master, Glide’s
                  intuitive interface allows you to customize and style each
                  component to build what you need quickly.
                </p>
              </div>
              <div className="mt-10 overflow-hidden lg:mt-12">
                <div className="flex space-x-6 overflow-x-auto no-scrollbar">
                  <button className="border-2 border-solid border-graywhite text-md  h-11 px-5   text-neutrals-opaque-13 focus-visible:shadow-button-focus-gray group  whitespace-nowrap tracking-[-0.01em] transition focus:outline-none inline-flex items-center justify-center rounded-full">
                    <span>Computed Columns</span>
                  </button>
                  <button className="border-2 border-solid border-graywhite text-md  h-11 px-5   text-neutrals-opaque-13 group  whitespace-nowrap tracking-[-0.01em] transition focus:outline-none inline-flex items-center justify-center rounded-full">
                    <span>Custom Actions</span>
                  </button>
                  <button className="border-2 border-solid border-graywhite text-md  h-11 px-5  text-neutrals-opaque-13 group  whitespace-nowrap tracking-[-0.01em] transition focus:outline-none inline-flex items-center justify-center rounded-full">
                    <span>Data Security</span>
                  </button>
                </div>
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
                    <div className="grid w-10 h-10 bg-black rounded-full place-content-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M11.45 14.1667H4.13116C3.28443 14.1667 2.81822 13.1801 3.35874 12.5283L12.1765 1.8959C12.831 1.10674 14.1076 1.69622 13.9313 2.70618L12.6875 9.83333H19.9122C20.752 9.83333 21.2178 10.8058 20.6914 11.4601L12.1268 22.1075C11.4864 22.9036 10.2051 22.3401 10.359 21.3301L11.45 14.1667Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="max-w-[600px] mt-6">
                      <p className="text-2xl leading-title font-bold font-headings">
                        Unleash your data’s potential
                      </p>
                      <p className="text-md md:h-20 text-neutrals-opaque-8">
                        Create relationships, perform calculations, look up
                        values across other tables, create messages, generate QR
                        codes, call APIs, and more – without writing code or
                        formulas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black py-16 md:py-20 lg:py-24">
          <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
            <div className="max-sm:px-4">
              <h2 className="text-center leading-title text-white font-chromatic-grotesque text-3xl md:text-4xl lg:text-4xl font-medium">
                Purpose-fit for your enterprise
              </h2>
              <div className="grid gap-6 mt-8 md:grid-cols-3 lg:mt-20  text-white">
                <div className="flex flex-col max-md:text-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-md:mx-auto w-12 h-12 text-white"
                  >
                    <path
                      d="M22 17V16.1667C22 13.8655 20.1062 12 17.7702 12C16.7515 12 15.817 12.3547 15.0869 12.9455C14.638 13.3088 14.2664 13.7614 14 14.2757M16 21V20C16 16.134 12.866 13 9 13C5.13401 13 2 16.134 2 20V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx={18}
                      cy={7}
                      r={2}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx={9}
                      cy={7}
                      r={3}
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="mt-6 font-semibold text-neutrals-opaque-2">
                    Glide Solutions Consulting
                  </p>
                  <p className="mt-1.5 flex-1 max-md:max-w-sm mx-auto">
                    Access 1:1 time with Glide specialists to provide hands-on
                    onboarding and guidance to build your first app or optimize
                    existing ones.
                  </p>
                </div>
                <div className="flex flex-col max-md:text-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-md:mx-auto w-12 h-12 text-white"
                  >
                    <path
                      d="M11.0621 2.53451C11.3843 1.66389 12.6157 1.66389 12.9378 2.53451L15.0815 8.32767C15.1828 8.60139 15.3986 8.8172 15.6723 8.91849L21.4655 11.0622C22.3361 11.3843 22.3361 12.6157 21.4655 12.9379L15.6723 15.0815C15.3986 15.1828 15.1828 15.3986 15.0815 15.6723L12.9378 21.4655C12.6157 22.3361 11.3843 22.3361 11.0621 21.4655L8.91847 15.6723C8.81719 15.3986 8.60138 15.1828 8.32766 15.0815L2.53449 12.9379C1.66388 12.6157 1.66388 11.3843 2.53449 11.0622L8.32766 8.91849C8.60138 8.8172 8.81719 8.60139 8.91847 8.32767L11.0621 2.53451Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-6 font-semibold text-neutrals-opaque-2">
                    Customer Success Manager
                  </p>
                  <p className="mt-1.5 flex-1 max-md:max-w-sm mx-auto text-neutrals-opaque-6">
                    With over a decade of experience in the enterprise software
                    space, our team will ensure the successful launch of your
                    business apps.
                  </p>
                </div>
                <div className="flex flex-col max-md:text-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-md:mx-auto w-12 h-12 text-white"
                  >
                    <path
                      d="M8 18.5C8 18.5 9.5 14 14.75 14.75C20 15.5 21.5 11 21.5 11L16.5 2C16.5 2 15 6.5 9.75 5.75C4.5 5 3 9.5 3 9.5L10 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-6 font-semibold text-neutrals-opaque-2">
                    Priority Support
                  </p>
                  <p className="mt-1.5 flex-1 max-md:max-w-sm mx-auto text-neutrals-opaque-6">
                    Our team is committed to your success with Glide. Any
                    account or technical issues you encounter will always move
                    to the front of the queue.
                  </p>
                </div>
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
