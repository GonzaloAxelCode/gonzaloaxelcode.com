import P from "@/shared/components/Base/P";
import HeaderPresentation from "@/shared/components/Header/HeaderPresentation";
import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import SidebarAcademy from "./components/SidebarAcademy";

export const metadata: Metadata = {
  title: "Gonzalo Axel Academy",
  description: "Academia",

  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};
const PageAcademy = () => {
  return (
    <div className="max-w-[1024px] lg:max-w-[1280px]  mx-auto  px-4">
      <section className="my-5">
        <HeaderPresentation
          category="Academy"
          pretitle="Academia de programacion"
          sequence={[
            500,
            "Web.",
            1000,
            "Movil.",
            1000,
            "Desktop.",
            1000,
          ]}
        />
        <P className="max-w-xl">Este es un apartado donde subo mi aprendizaje constante sobre tecnologias, programacion, temas avanzados y mas.</P>
      </section>
      <SidebarAcademy />
    </div>
  );
};


export default PageAcademy;

