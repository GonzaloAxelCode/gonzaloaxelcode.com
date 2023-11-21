import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { getFullArticleBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata, {
  iconsMetadata,
  robotsDefault,
  othersMetadata,
} from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import BodyArticle from "./components/BodyArticle";
import PresentationArticle from "./components/PresentationArticle";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullArticleBySlug(params.slug);
  const { title, description, cover } = extractInfoArticle(article);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Gonzalo's Blog",
      type: "website",
      url: "https://gonzaloaxelcode.vercel.app",
      images: [
        {
          url: cover,
          width: 800,
          height: 600,
        },
        {
          url: cover,

          width: 1800,
          height: 1600,
          alt: "Gonzalo Blog",
        },
      ],
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      siteId: "1467726470533754880",
      creator: "@GonzaloAxel",
      creatorId: "1467726470533754880",
      images: [
        {
          url: cover,

          width: 800,
          height: 600,
        },
        {
          url: cover,

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

export default async function PageSlugBlog({ params }: any) {
  const { content, article } = await getFullArticleBySlug(params.slug);

  return (
    <main className="w-full">
      <PresentationArticle article={article} />
      <BodyArticle
        category={article?.properties?.Category?.select}
        content={content}
        article={article}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}
