import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { getFullArticleBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata, {
  iconsMetadata,
} from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import BodyArticle from "./components/BodyArticle";
import PresentationArticle from "./components/PresentationArticle";
import PresentationArticle2 from "./components/PresentationArticle2";
import { format } from "path";
import formatDate from "@/shared/utils/format-date";
export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullArticleBySlug(params.slug);
  const { title, description, cover } = extractInfoArticle(article);
  /*
  const ogImage = `${
    process.env.NEXTAUTH_URL
  }/api/og?title=${title}&cover=${cover}&category=${category}&createdat=${formatDate(
    createdAt
  )}&categorycolor=${categoryColor}`;
  console.log(ogImage);
*/
  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: cover,
        },
      ],
    },
    twitter: {
      card: "player",
      title: title,
      description,
      siteId: "1467726470533754880",
      creator: "Gonzalo Axel",
      creatorId: "1467726470533754880",
      images: [cover],
    },
    ...iconsMetadata,
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
