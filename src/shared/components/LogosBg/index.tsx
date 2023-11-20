"use client";
import { cn } from "tailwind-cn";
export const fillColorDark = cn("");
export const fillColorWhite = cn("");
export const SvgStyles = cn("w-[30px] h-[30px]");
let tecnologys = {
  JAVASCRIPT: "https://cdn.svgporn.com/logos/javascript.svg",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  PYTHON: "https://cdn.svgporn.com/logos/python.svg",
  POSTMAN: "https://cdn.svgporn.com/logos/postman-icon.svg",
  POSTGRESQL: "https://cdn.svgporn.com/logos/postgresql.svg",
  DOCKER: "https://cdn.svgporn.com/logos/docker-icon.svg",
  VERCEL: "https://cdn.svgporn.com/logos/vercel-icon.svg",
  DJANGO: "https://cdn.svgporn.com/logos/django-icon.svg",
};

const LogosBg = () => {
  const toolsArray = Object.entries(tecnologys);

  return (
    <div className="flex flex-wrap  w-full gap-3 ">
      {toolsArray.map(([tech, url]) => (
        <span key={tech}>
          <img src={url} alt="" className={SvgStyles} />
        </span>
      ))}
    </div>
  );
};

export default LogosBg;
