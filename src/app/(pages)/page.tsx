
import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import siteMetadata from "@/shared/settings/sitemetdata";
import type { Metadata } from "next";

import PresentationPortfolio from "../PresentationPortfolio";
import AboutBlog from "./components/AboutBlog";
import AboutMe from "./components/AboutMe";
import AppsAndProyectsSection from "./components/AppsAndProyectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ExperienceSection from "./components/ExperienceSection";
import UsedTecnologies from "./components/UsedTecnologies";

export const metadata: Metadata = {
  title: "Gonzalo Axel Web Junior Developer",
  description: siteMetadata.description,
  openGraph: {
    title: "Gonzalo Axel Web Junior Developer",
    description: "Pagina de inicio de portfolio personal.",
    siteName: "Gonzalo's Portfolio",
    type: "website",
    url: "https://gonzaloaxelcode.com",
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
        alt: "Gonzalo Portfolio",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Axel Web Junior Developer",
    description: "Pagina de inicio de portfolio personal.",
    siteId: "1467726470533754880",
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
        alt: "Gonzalo Portfolio",
      },
    ],
  },
  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};



const PageAboutHome = () => {
  return (
    <main className="w-full max-w-[1024px] lg:max-w-[1200px]  mx-auto  px-8">
      <PresentationPortfolio />
      <AboutMe />
      <ExperienceSection />
      <AppsAndProyectsSection />
      <CertificationsSection />
      <AboutBlog />
      <UsedTecnologies />
    </main>
  );
};

export default PageAboutHome;

