"use client";
import P from "@/shared/UIComponents/Base/P";
import Title from "@/shared/UIComponents/Base/Title";
import suglifyTitle from "@/shared/utils/suglify-title";
//@ts-ignore
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "tailwind-cn";
import SvgCompletedArticle from "./SvgCompletedArticle";
//@ts-ignore
import usePostRatings from "@/shared/hooks/usePostRatings";
import useTheme from "@/shared/hooks/useTheme";
import Confetti from "./Confetti";

function extractHeading1Text(inputArray: any) {
  const extractedArray = inputArray
    .filter((obj: any) => obj.type === "heading_1" || obj.type === "heading_2")
    .map((obj: any) => ({
      slugtext: suglifyTitle(
        obj[obj?.type || ""]?.rich_text
          .map((el: any, index: number) => {
            return `${el.text?.content}`;
          })
          .join("")
      ),
      type: obj?.type || "",
      text: obj[obj?.type || ""]?.rich_text
        .map((el: any, index: number) => {
          return `${el.text?.content}`;
        })
        .join(""),
    }));
  return extractedArray;
}
const TableOfContent = ({ content, id, slug }: any) => {
  const extractedArray = extractHeading1Text(content);
  const [title, setTitle] = useState("");
  const { themeGlobal } = useTheme();
  const { ratings, handleToggleLike } = usePostRatings(id);
  useEffect(() => {
    const handleScroll = () => {
      const divs: any = document.querySelectorAll(".id-ref");

      for (const div of divs) {
        if (isElementInViewport(div)) {
          if (div.id !== "" && div.id !== null) {
            setTitle(div.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function isElementInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const isLiked = (type: any) => {
    return Cookies.get(`rated_${id}_${type}`) === "true";
  };
  return (
    <div className="pb-6 lg:col-span-4 order-1 lg:sticky  lg:top-[55px] lg:h-[700px]">
      <div className=" overflow-hidden pt-6 px-6 pb-2.5 relative rounded-xl  border-2  border-gray-100 dark:border-darkborder bg-white  dark:bg-blackbg ">
        <header className="pb-4">
          <button className="flex justify-between items-center w-full">
            <Title className=" scroll-mt-[120px] text-xl font-medium">
              Contenido
            </Title>
            <div onClick={() => scrollToTop()}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 -mr-2 transition-transform -rotate-90 dark:text-white text-black"
              >
                <path
                  d="M7 11.25h-.75v1.5H7v-1.5Zm9.75 1.5h.75v-1.5h-.75v1.5Zm-3.22-5.78L13 6.44 11.94 7.5l.53.53 1.06-1.06ZM17.5 12l.53.53.53-.53-.53-.53-.53.53Zm-5.03 3.97-.53.53L13 17.56l.53-.53-1.06-1.06ZM7 12.75h9.75v-1.5H7v1.5Zm5.47-4.72 4.5 4.5 1.06-1.06-4.5-4.5-1.06 1.06Zm4.5 3.44-4.5 4.5 1.06 1.06 4.5-4.5-1.06-1.06Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </header>
        <div className="relative">
          <div className="overflow-hidden" style={{ height: "auto" }}>
            <div className="relative" style={{ transform: "none" }}>
              <div className="w-1 bg-quaternary-purple absolute top-0 left-4 bottom-0 hidden lg:block" />
              <div
                style={{
                  height:
                    35 +
                    35 *
                      (extractedArray.findIndex(
                        (item: any) => item.slugtext === title
                      ) +
                        1),
                }}
                className="w-1 origin-top bg-primary-purple absolute top-0 left-4 hidden lg:block transition-all duration-400"
              />
              <div className="w-1 origin-top bg-secondary-purple opacity-30 absolute top-0 left-4 hidden lg:block transition-all duration-100" />
              <ul className="list-none text-sm">
                {extractedArray &&
                  extractedArray?.map((el: any, index: any) => {
                    return (
                      <li
                        key={index}
                        className="first:pt-0 last:pb-6 text-base "
                      >
                        <Link
                          href={`#${suglifyTitle(el.text)}`}
                          className={cn(
                            "inline-block lg:ml-8 rounded-sm  hover:text-primary-purple leading-6 px-2 relative transition-colors duration-200 focus:outline-none focus:ring-2 ring-gray-EE pl-2",
                            suglifyTitle(title) === suglifyTitle(el.text)
                              ? "text-primary-purple"
                              : "text-gray-50"
                          )}
                        >
                          <P
                            className={cn(
                              "hover:text-primary-purple",

                              el.type == "heading_1" && "text-md py-1",
                              el.type == "heading_2" && "text-sm ml-4",
                              suglifyTitle(title) === suglifyTitle(el.text)
                                ? "text-[#151515] underline"
                                : "text-[#151515] opacity-50"
                            )}
                          >
                            {el.text}
                          </P>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="absolute transition-opacity w-full inset-0 lg:left-7 bottom-auto hidden lg:block h-4 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-0" />
        </div>

        <div className="items-center bg-gray-F7 dark:bg-gray-1F rounded-lg z-10 relative -mx-3.5 py-2.5 pl-16 -mt-2 hidden lg:flex">
          <SvgCompletedArticle
            active={
              extractedArray.findIndex(
                (item: any) => item.slugtext === title
              ) ===
              extractedArray.length - 1
            }
          />

          <div className="text-base-tight flex flex-col">
            <P className="font-bold text-md text-black">Felicitaciones!</P>
            <P className="text-sm">¡Has explorado a fondo este tema!</P>
          </div>
        </div>
        {extractedArray.findIndex((item: any) => item.slugtext === title) ===
          extractedArray.length - 1 && <Confetti />}
        <div className="absolute bottom-10 left-10">
          <div style={{ position: "relative" }} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-1 flex items-center justify-between">
          <nav className="flex gap-2.5 items-center flex-wrap">
            <P className="font-semibold text-sm leading-tight">
              Compartir articulo
            </P>
            <div className="flex gap-2.5 items-center">
              <Link
                className="block cursor-pointer w-10 h-10  p-2 dark:text-white text-black"
                href={`https://twitter.com/intent/tweet?url=https://gonzaloaxelcode.com/blog/${suglifyTitle(
                  slug
                )}&text=Texto+para+tweet`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
              >
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-auto pointer-events-none"
                >
                  <path
                    d="M51.066 21.716c.03.426.03.853.03 1.279 0 13.005-9.898 27.99-27.99 27.99-5.573 0-10.75-1.614-15.106-4.416.792.091 1.553.121 2.376.121 4.599 0 8.832-1.553 12.213-4.203a9.855 9.855 0 0 1-9.198-6.822c.609.091 1.218.152 1.858.152.883 0 1.766-.122 2.589-.335a9.839 9.839 0 0 1-7.889-9.655v-.121a9.907 9.907 0 0 0 4.447 1.248 9.83 9.83 0 0 1-4.386-8.193c0-1.827.487-3.502 1.34-4.964A27.963 27.963 0 0 0 31.635 24.09a11.103 11.103 0 0 1-.244-2.253c0-5.422 4.386-9.838 9.837-9.838a9.814 9.814 0 0 1 7.188 3.107 19.369 19.369 0 0 0 6.244-2.376 9.81 9.81 0 0 1-4.325 5.421c1.98-.213 3.899-.761 5.665-1.523a21.146 21.146 0 0 1-4.934 5.087Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                className="block cursor-pointer w-10 h-10 p-2  dark:text-white text-black"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://gonzaloaxelcode.com/blog/${suglifyTitle(
                  slug
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-auto pointer-events-none -mt-0.5"
                >
                  <path
                    d="M18.744 56H8.793V23.953h9.951V56Zm-4.98-36.419C10.58 19.581 8 16.946 8 13.763a5.763 5.763 0 0 1 11.527 0c0 3.183-2.582 5.818-5.764 5.818ZM55.99 56h-9.93V40.4c0-3.718-.075-8.486-5.174-8.486-5.174 0-5.967 4.04-5.967 8.218V56h-9.94V23.953h9.544v4.371h.139c1.329-2.518 4.574-5.175 9.416-5.175C54.15 23.15 56 29.782 56 38.396V56h-.01Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                className="block cursor-pointer w-10 h-10  p-2  dark:text-white text-black"
                href={`mailto:?subject=Asunto+del+correo&body=Aquí+está+el+enlace+de+mi+blog:%0D%0Ahttps://gonzaloaxelcode.com/blog/${suglifyTitle(
                  slug
                )} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-auto pointer-events-none"
                >
                  <path
                    d="M12.5 14a4.501 4.501 0 0 0-2.7 8.1l20.4 15.3a3.01 3.01 0 0 0 3.6 0l20.4-15.3a4.501 4.501 0 0 0-2.7-8.1h-39ZM8 24.5V44c0 3.31 2.69 6 6 6h36c3.31 0 6-2.69 6-6V24.5L35.6 39.8a5.99 5.99 0 0 1-7.2 0L8 24.5Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex gap-3 my-1 ">
          <button onClick={() => handleToggleLike("like")}>
            <div
              className="w-16 py-3 h-20 relative rounded-lg shrink-0 bg-gray-F7 dark:bg-gray-1F  font-headings flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundColor: !isLiked("like")
                  ? ""
                  : !themeGlobal
                  ? "#E9E9E9"
                  : "black",
              }}
            >
              <span className=" text-2xl">👍</span>
              <P className="text-sm relative z-10">{ratings.like}</P>
            </div>
          </button>
          <button onClick={() => handleToggleLike("heart")}>
            <div
              className="w-16 py-3 h-20 relative rounded-lg shrink-0 bg-gray-F7 dark:bg-gray-1F font-headings flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundColor: !isLiked("heart")
                  ? ""
                  : !themeGlobal
                  ? "#E9E9E9"
                  : "black",
              }}
            >
              <span className=" text-2xl">❤️</span>
              <P className="text-sm relative z-10">{ratings.heart}</P>
            </div>
          </button>

          <button onClick={() => handleToggleLike("applause")}>
            <div
              className="w-16 py-3 h-20 relative rounded-lg shrink-0 bg-gray-F7 dark:bg-gray-1F font-headings flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundColor: !isLiked("applause")
                  ? ""
                  : !themeGlobal
                  ? "#E9E9E9"
                  : "black",
              }}
            >
              <span className=" text-2xl">👏</span>
              <P className="text-sm relative z-10">{ratings.applause}</P>
            </div>
          </button>

          <button onClick={() => handleToggleLike("confetti")} className="">
            <div
              className="w-16 py-3 h-20 relative rounded-lg shrink-0 bg-gray-F7 dark:bg-gray-1F font-headings flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundColor: !isLiked("confetti")
                  ? ""
                  : !themeGlobal
                  ? "#E9E9E9"
                  : "black",
              }}
            >
              {/*
              <span className="text-2xl">🎉</span>
               */}
              <span className="text-2xl">
                <img
                  src="https://res.cloudinary.com/ddksrkond/image/upload/v1700430086/dancing-duck-acegifcom-37_lji80g.gif"
                  className="w-[40px] h-[40px] object-contain"
                  alt=""
                />
              </span>
              <P className="text-sm relative z-10">{ratings.confetti}</P>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
