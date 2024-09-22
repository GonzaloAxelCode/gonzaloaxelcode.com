
import ContentArticle from "@/app/(pages)/blog/[slug]/components/ContentArticle";
import TableOfContent from "@/app/(pages)/blog/[slug]/components/TableOfContent";
import extractInfoArticle from "@/shared/hooks/extract-info-article";
import { getFullAcademyArticleBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";

import {
  iconsMetadata,
  othersMetadata,
  robotsDefault,
} from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
import HeaderAcademyTopic from "../../components/HeaderAcademyTopic";

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullAcademyArticleBySlug(params.slug);
  const { title, category, description, cover } = extractInfoArticle(article);

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      siteName: "Gonzalo's Academy",
      type: "website",
      url: `https://gonzaloaxelcode.com/academy/${suglifyTitle(category)}/${suglifyTitle(title)}`,
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
        },
      ],
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@GonzaloAxel",
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
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


  const { content, article } = await getFullAcademyArticleBySlug(params.slug);


  return (
    <main className="w-full">

      <HeaderAcademyTopic article={article} />


      <div className=" flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:pt-10 max-w-[768px] lg:max-w-[1280px] mx-auto px-8">
        <div className="lg:col-span-8 lg:max-w-[46rem] pb-12 xl:pl-11 xl:pr-16 order-2 min-h-screen">
          <div className="w-full flex-1 hidden">

            <iframe
              src="https://player.vimeo.com/video/840906010?app_id=122963"
              width="100%"
              height={420}
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="pa-course-overview"
              data-ready="true"
            />
          </div>


          <ContentArticle
            isAcademy

            content={content}
            id={article.id}

          />
        </div>

        <TableOfContent
          disable_raitings
          slug={article?.properties?.Nombre?.title[0]?.plain_text}
          content={content}
          id={article.id}
        />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_ACADEMY);
  const params = articles.map((el: any) => ({
    categoryslug: suglifyTitle(el?.properties?.Category?.select?.name ?? 'default-category'),
    slug: suglifyTitle(el?.properties?.Nombre?.title[0]?.plain_text ?? 'default-slug'),
  }));


  return params;
}
