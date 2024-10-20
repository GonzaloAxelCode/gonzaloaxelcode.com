"use client";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { cn } from "tailwind-cn";

export const fillColorDark = cn("");
export const fillColorWhite = cn("");
export const SvgStyles = cn("w-[30px] h-[30px] object-contain");
let tecnologys = {
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  PYTHON: "https://cdn.svgporn.com/logos/python.svg",
  POSTGRESQL: "https://cdn.svgporn.com/logos/postgresql.svg",
  VERCEL: "https://cdn.svgporn.com/logos/vercel-icon.svg",
  DJANGO: "https://cdn.svgporn.com/logos/django-icon.svg",
};

const LogosBg = ({ tools = tecnologys }) => {
  const toolsArray = Object.entries(tools);

  return (
    <div className="flex flex-wrap  w-full gap-3 ">
      {toolsArray.map(([tech, url]) => (
        <span key={tech} data-tooltip-id={tech}>
          <Tooltip id={tech} place="bottom"
            content={tech} />

          <img src={url} alt="" className={SvgStyles} />
        </span>
      ))}
    </div>
  );
};

export default LogosBg;
