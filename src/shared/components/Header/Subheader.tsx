"use client";
import P from "@/shared/UIComponents/Base/P";
import { obtenerCategoriasUnicas } from "@/shared/hooks/functions-notion";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const Subheader = () => {
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  const fulpath = usePathname();

  const categorias = obtenerCategoriasUnicas(articles);
  if (!fulpath.startsWith("/blog")) {
    return null;
  }
  return (
    <nav className="sticky  top-0  z-30 py-2 h-[55px] flex items-center border-b border-t bg-white dark:bg-blackbg  border-gray-100 dark:border-darkborder dark:text-graywhite  w-full  px-8">
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
  );
};

export default Subheader;
