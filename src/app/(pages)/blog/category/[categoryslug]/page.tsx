import { getFullArticlesByCategorySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import {
    iconsMetadata,
    othersMetadata,
    robotsDefault,
} from "@/shared/settings/default-metadata";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import Banner from "./components/Banner";
import FilterArticles from "./components/FilterArticles";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { articles } = await getFullArticlesByCategorySlug(params.categoryslug);

  let category = articles[0].properties?.Category?.select?.name;

  return {
    title: category,
    description: `Articulos de la categoria de ${category}`,
    openGraph: {
      title: category,
      description: `Articulos de la categoria de ${category}`,
      siteName: "Gonzalo's Blog",
      type: "website",
      url: `https://gonzaloaxelcode.com/category/${suglifyTitle(
        category
      )}`,
      images: [
        {
          url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png",
          width: 1800,
          height: 1600,
          alt: "Gonzalo Blog",
        },
      ],
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title: category,
      description: `Articulos de la categoria de ${category}`,
      siteId: "1467726470533754887",
      creator: "@GonzaloAxel",
      creatorId: "1467726470533754880",
      images: [
        {
          url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700444328/Presentacion_Propuesta_de_Proyecto_de_Startup_Empresarial_Profesional_negro_y_celeste_1_lrshjz.png",
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
}

export default async function PageCategory({ params }: any) {
  const { articles, tags } = await getFullArticlesByCategorySlug(
    params.categoryslug
  );
  const titleCategory =
    articles[0].properties.Category?.select?.name || "Articulo sin Titulo";
  const colorCategory =
    COLORS_NOTION[articles[0].properties.Category?.select?.color || "default"];

  return (
    <main className="w-full mb-20 ">
      <Banner colorCategory={colorCategory} titleCategory={titleCategory} />
      <div className="w-full pt-12 pb-20 ">
        <FilterArticles articles={articles} tags={tags} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((el: any) => ({
    categoryslug: suglifyTitle(el.properties.Category?.select?.name),
  }));
}
