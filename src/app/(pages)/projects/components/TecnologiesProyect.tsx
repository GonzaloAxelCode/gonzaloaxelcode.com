import tecnologys from "@/shared/utils/tecnologies";
import React from "react";

const Tool = ({ url, name }: any) => {
  return (
    <div
      className="avatar"
      style={{
        width: "40px",
        height: "40px",
      }}
    >
      <img alt={name} aria-hidden src={url} className="background" />
      <img alt={name} src={url} width="100" height="100" />
    </div>
  );
};

let listTec = {
  JAVASCRIPT: "https://cdn.svgporn.com/logos/javascript.svg",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
};

const TecnologiesProyect = () => {
  const toolsArray = Object.entries(listTec);

  return (
    <div
      className="all-tools justify-center lg:justify-start"
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "10px",
        rowGap: "10px",
      }}
    >
      {toolsArray.map(([tech, url]) => (
        <Tool key={tech} name={tech} url={url} />
      ))}
    </div>
  );
};

export default TecnologiesProyect;
