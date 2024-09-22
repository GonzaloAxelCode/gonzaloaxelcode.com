import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import type { Metadata } from "next";

import HeaderPresentation from "../../../shared/components/Header/HeaderPresentation";
import SectionProjects from "./components/SectionProjects";
export const metadata: Metadata = {
  title: "Gonzalo Axel Project",
  description: "Pagina de de proyectos personales.",
  openGraph: {
    title: "Gonzalo Axel Projects",
    description: "Pagina de de proyectos personales.",
    siteName: "Gonzalo's Projects",
    type: "website",
    url: "https://gonzaloaxelcode.com/projects",
    images: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 1800,
        height: 1600,
        alt: "Gonzalo Projects",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Axel Projects",
    description: "Pagina de de proyectos personales.",
    siteId: "1467726470533754881",
    creator: "@GonzaloAxel",
    creatorId: "1467726470533754880",
    images: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444221/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_wtlsfn.png",
        width: 1800,
        height: 1600,
        alt: "Gonzalo Ael Projects",
      },
    ],
  },
  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};

const PageProjects = () => {


  return (
    <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <section className="">
        <HeaderPresentation
          category="Proyectos"
          pretitle="  Aplicaciones y proyectos"
          sequence={[
            500,
            "Web.",
            1000,
            "Movil.",
            1000,
            "Descktop.",
            1000,
          ]}
        />
      </section>
      <div className="relative  z-10 flex flex-col min-h-dvh font-copy font-medium antialiased selection:bg-primary-purple selection:text-white">
        <div className="relative z-10 flex flex-col min-h-screen">
          <SectionProjects />
        </div>
      </div>
    </div>

  );
};

export default PageProjects;
