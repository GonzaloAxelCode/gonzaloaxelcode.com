"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import Title from "@/shared/UIComponents/Base/Title";
import useExtractInfoArticle from "@/shared/hooks/useExtractInfoArticle";
import usePostViews from "@/shared/hooks/usePostViews";
import siteMetadata from "@/shared/settings/sitemetdata";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import formatDate from "@/shared/utils/format-date";
import suglifyTitle from "@/shared/utils/suglify-title";
import Image from "next/image";

const PresentationArticle2 = ({ article }: any) => {
  const { title, cover, category, createdAt, categoryColor } =
    useExtractInfoArticle(article);
  console.log(article);

  return (
    <div
      className="overflow-hidden flex py-16  rounded-3xl  items-center justify-center flex-col lg:flex-row my-8  mx-auto px-8"
      style={{
        width: 680,
        height: 357,
        backgroundImage:
          "url(https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex  flex-col space-y-3 w-[85%]">
        <div className="flex w-full items-center gap-2 flex-wrap">
          <p>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
              style={{
                color: COLORS_NOTION[categoryColor],
              }}
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
          </p>
          <p className="text-xs ">{category}</p>
          <p>&middot;</p>
          <p className="text-xs">{formatDate(createdAt)}</p>
        </div>
        <h1
          style={{
            fontSize: "30px",
          }}
          className="leading-title pr-6 w-full"
        >
          {title}
        </h1>
        <div className="w-full flex items-center gap-3 flex-wrap">
          <img
            className="rounded-full  filter dark:invert object-contain"
            src={siteMetadata.avatarImage}
            width={25}
            height={25}
            alt={siteMetadata.author}
          />
          <p className="m-0 text-xs">Por {siteMetadata.author}</p>
          <div className="flex items-center">
            <p className="text-xs flex items-center ">
              <img
                className="h-6 w-6 object-contain filter dark:invert"
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1699381028/ChatGPT-Logo_xghvfd.png"
                alt=""
              />{" "}
              Revisado{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col my-4">
        <picture>
          <img
            width={1440}
            height={810}
            src={cover}
            className="object-contain rounded-xl transform  scale-105"
            alt={title}
          />
        </picture>
      </div>
    </div>
  );
};

export default PresentationArticle2;
