"use client";
import P from "@/shared/components/Base/P";
import { obtenerCategoriasUnicas } from "@/shared/hooks/functions-notion";
import useScrollCalc from "@/shared/hooks/useScrollCalc";
import { fetcherCache } from "@/shared/services/fetcher";
import suglifyTitle from "@/shared/utils/suglify-title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { cn } from "tailwind-cn";
import Switcher from "../SwitcherDark";

const Subheader = () => {
  const { scrolledPast } = useScrollCalc();
  const { data: articles } = useSWR("/api/blog", fetcherCache);
  const fulpath = usePathname();

  const categorias = obtenerCategoriasUnicas(articles);
  if (!fulpath.startsWith("/blog")) {
    return null;
  }
  return (
    <nav
      className={cn(
        "sticky top-0 z-30 py-2 h-[60px] flex items-center border-b border-t  border-gray-100 border-opacity-20  dark:border-graydark dark:border-opacity-20 dark:text-graywhite w-full px-8 sm:backdrop-blur-lg",
        " bg-opacity-1 dark:bg-opacity-1 sm:bg-opacity-50   dark:sm:bg-opacity-70",
        !scrolledPast ? "bg-transparent" : " bg-white dark:bg-blackbg"
      )}
    >
      <span className="absolute right-[3.6%] z-40">
        {scrolledPast && <Switcher />}
      </span>
      <div className="container flex items-center relative justify-center  gap-2 mx-auto ">
        <div className="overflow-hidden relative transition-all w-auto">
          <div className="relative overflow-x-auto overflow-y-hidden py-2 scroll-personalizado">
            <div className="flex z-30 gap-6 items-center  border-gray-EE border-opacity-20 whitespace-nowrap">
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
