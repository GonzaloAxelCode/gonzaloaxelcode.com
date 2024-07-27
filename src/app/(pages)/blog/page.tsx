import Subscribe from "@/shared/components/Subscribe";

import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import ArticlesByTopic from "./components/ArticlesByTopic";
import BlogGridPresentation from "./components/BlogPresentation";
import ChooseTechStack from "./components/ChooseTechStack";
import LastestContent from "./components/LatestContent";

export const metadata: Metadata = {
  title: "Gonzalo Axel Blog",
  description: "Pagina de mi blog personal.",
  openGraph: {
    title: "Gonzalo Axel Blog",
    description: "Pagina de mi blog personal.",
    siteName: "Gonzalo's Blog",
    type: "website",
    url: "https://gonzaloaxelcode.com/blog",
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
        alt: "Gonzalo Blog",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Axel Blog",
    description: "Pagina de mi blog personal.",
    siteId: "1467726470533754888",
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
        alt: "Gonzalo Blog",
      },
    ],
  },
  ...iconsMetadata,
  ...robotsDefault,
  ...othersMetadata,
};

const PageBlog = () => {
  return (
    <main className="w-full overflow-x-hidden">
      
      <section className="w-full">
        <BlogGridPresentation />
      </section>
      <LastestContent />
      <ChooseTechStack />
      <ArticlesByTopic />
      <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto my-10 px-8">
        <Subscribe />
      </div>
    </main>
  );
};

export default PageBlog;
