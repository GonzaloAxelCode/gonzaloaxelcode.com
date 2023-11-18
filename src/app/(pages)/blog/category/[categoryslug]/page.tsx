import { getFullArticlesByCategorySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata, {
  iconsMetadata,
} from "@/shared/settings/default-metadata";
import COLORS_NOTION from "@/shared/utils/colors-notion";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import Banner from "./components/Banner";
import FilterArticles from "./components/FilterArticles";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { articles } = await getFullArticlesByCategorySlug(params.categoryslug);
  const title =
    articles[0].properties.Category?.select?.name || "Articulo sin Titulo";
  const description = `Categoria - ${params.categoryslug}`;
  const ogImage = `${process.env.NEXTAUTH_URL}/api/og?title${title}`;
  return {
    title: `Blog ${title} - Gonzalo Axel`,
    description,
    openGraph: {
      title: `Blog ${title} - Gonzalo Axel`,
      description,
      siteName: "Gonzalo's Blog",
      url: suglifyTitle(title),
      images: [
        {
          url: ogImage,
        },
      ],
    },

    ...iconsMetadata,
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
