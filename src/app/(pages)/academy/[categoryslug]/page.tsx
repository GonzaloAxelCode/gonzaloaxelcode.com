import { getFullArticleBySlug, getFullArticlesByCategorySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import FilterByTagAcademy from "../../blog/category/[categoryslug]/components/FilterByTagAcademy";

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { articles } = await getFullArticlesByCategorySlug(params.categoryslug, process.env.NOTION_DATABASE_ACADEMY);

  let category = articles[0]?.properties?.Category?.select?.name;

  return {
    title: category,
    description: `Articulos de la categoria de ${category}`,
    openGraph: {
      title: category,
      description: `Articulos de la categoria de ${category}`,
      siteName: "Gonzalo's Academy",
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
          alt: "Gonzalo Academy",
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
          alt: "Gonzalo Academy",
        },
      ],
    },
    ...iconsMetadata,
    ...robotsDefault,
    ...othersMetadata,
  };
}


export default async function PageSlugAcademy({ params }: any) {
  
  
 const { articles, tags } = await getFullArticlesByCategorySlug(
    params.categoryslug,process.env.NOTION_DATABASE_ACADEMY
  );

  const {article,content} = await getFullArticleBySlug(params.categoryslug,
    process.env.NOTION_DATABASE_ACADEMY_TOPIC
  )

    return (
     <main className="w-full mb-20 ">
    <FilterByTagAcademy articles={articles} articleTopic={article} articleTopicContent={content}/>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles(
     process.env.NOTION_DATABASE_ACADEMY,
  );
  return articles.map((el: any) => ({
    categoryslug: suglifyTitle(el.properties.Category?.select?.name),
  }));
}

