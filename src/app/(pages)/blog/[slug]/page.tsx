import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { getFullArticleBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import ContentArticle from "./components/ContentArticle";
import PresentationArticle from "./components/PresentationArticle";
import TableOfContent from "./components/TableOfContent";
export const dynamicParams = false;


export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullArticleBySlug(params.slug);
  const { title, description, cover } = extractInfoArticle(article);
  const ogImage = `${process.env.NEXTAUTH_URL}/api/og?title${title}`;
  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function PageSlugBlog({ params }: any) {
  const { content, article } = await getFullArticleBySlug(params.slug);

  return (
    <main className="max-w-[768px] lg:max-w-[1280px] mx-auto px-8">
      <PresentationArticle article={article} />
      <div className="container flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:pt-10">
        <div className="lg:col-span-8 lg:max-w-[46rem] pb-24 xl:pl-11 xl:pr-16 order-2 min-h-screen">
          <ContentArticle content={content} id={article.id} />
        </div>
        <TableOfContent content={content} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}
