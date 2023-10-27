"use client";
import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import useSWR from "swr";
import { cn } from "tailwind-cn";
import Logo from "../Logo/Index";
import Switcher from "../SwitcherDark";

const paths = [
  {
    text: "Inicio",
    path: "/",
  },
  {
    text: "Sobre mi",
    path: "/about",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Academy",
    path: "/academy",
  },
];

const Header = () => {
  function obtenerCategoriasUnicas(data: any) {
    const categoriasUnicas: any = new Set();
    data?.forEach((item: any) => {
      if (
        item.properties &&
        item.properties.Category &&
        item.properties.Category.select
      ) {
        categoriasUnicas.add(
          JSON.stringify(item?.properties?.Category?.select)
        );
      }
    });

    const categoriasArray = [...categoriasUnicas].map((item) =>
      JSON.parse(item)
    );

    return categoriasArray;
  }
  const { data: articles } = useSWR("/api/blog", fetcherCache);

  const categorias = obtenerCategoriasUnicas(articles);

  return (
    <Flex full col className="lg:max-w-screen">
      <Flex full itemscenter between className="mx-auto px-8 py-2">
        <Flex>
          <div className="relative flex items-center z-10  self-stretch  lg:pr-8">
            <Link className="focus:outline-none" href="/">
              <Logo />
            </Link>
            <Link
              className="ml-2 text-2xl font-medium font-headings text-gray-50 block"
              href="/blog"
            >
              <svg
                width={65}
                height={25}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m.056 20.67 7-20 1.888.66-7 20-1.888-.66Z"
                  fill="#505050"
                />
                <path
                  d="M26.384 10.312c2.256.552 3.672 1.896 3.672 4.152 0 2.784-2.256 4.536-5.688 4.536h-7.992V2.2h8.112c3.12 0 5.112 1.68 5.112 4.104 0 2.064-1.296 3.336-3.216 4.008ZM19.28 4.384v4.92h4.296c2.352 0 3.24-1.128 3.24-2.448 0-1.536-1.152-2.472-2.832-2.472H19.28Zm4.536 12.432c1.776 0 3.432-.84 3.432-2.712 0-1.344-.888-2.736-3.24-2.736H19.28v5.448h4.536ZM33.04 2.2h2.688V19H33.04V2.2ZM44.263 6.616c3.744 0 6.144 2.64 6.144 6.336s-2.4 6.336-6.144 6.336c-3.72 0-6.144-2.64-6.144-6.336s2.424-6.336 6.144-6.336Zm0 2.184c-2.184 0-3.528 1.752-3.528 4.152 0 2.376 1.344 4.152 3.528 4.152 2.208 0 3.552-1.776 3.552-4.152 0-2.4-1.344-4.152-3.552-4.152ZM61.415 6.904h2.688v12.144c0 2.952-2.472 4.992-6 4.992-3.312 0-5.736-1.704-6.024-4.512h2.832c.264 1.44 1.464 2.376 3.264 2.376 1.848 0 3.24-1.056 3.24-2.76V16.96h-.024c-.6.936-1.944 1.776-3.768 1.776-3.432 0-5.76-2.616-5.76-6.096 0-3.552 2.352-6.024 5.712-6.024 1.92 0 3.168.912 3.816 1.848h.024v-1.56Zm-3.384 9.72c2.064 0 3.528-1.68 3.528-4.008v-.168c0-2.112-1.464-3.672-3.528-3.672-2.112 0-3.528 1.584-3.528 3.816 0 2.28 1.416 4.032 3.528 4.032Z"
                  fill="#505050"
                />
              </svg>
            </Link>
          </div>
        </Flex>
        <Flex full className="hidden lg:flex space-x-8 ml-auto justify-end">
          {paths.map((el: any, index: any) => {
            return (
              <Link key={index} href={el.path} className="">
                <P className={cn("text-md", "")}>{el.text}</P>
              </Link>
            );
          })}
        </Flex>
        <Flex itemscenter className="space-x-4">
          <button
            className="lg:hidden w-12 h-12 relative -mr-2 z-20"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 left-2 transition-opacity"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 left-2 transition-opacity opacity-0"
            >
              <path
                d="m7.757 7.757 8.486 8.486M7.757 16.243l8.486-8.486"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div>
            <Switcher />
          </div>
        </Flex>
      </Flex>

      <nav className="sticky z-30 top-0 py-2 border-b border-t  border-gray-100 dark:border-darkborder  w-full  px-8">
        <div className="container flex items-center relative justify-center  gap-2 mx-auto ">
          <div className="overflow-hidden relative transition-all w-auto">
            <div className="relative overflow-x-auto overflow-y-hidden py-2 scroll-personalizado">
              <div className="flex z-30 gap-6 items-center  border-gray-EE whitespace-nowrap">
                {categorias.map((el: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      className="last:pr-10"
                      href={`/blog/category/${suglifyTitle(el.name)}`}
                    >
                      <P className="text-sm">{el.name}</P>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Flex>
  );
};

export default Header;
