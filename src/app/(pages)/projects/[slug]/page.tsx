import Title from "@/shared/UIComponents/Base/Title";
import { getFullProjectBySlug } from "@/shared/hooks/functions-notion";
import { getAllArticles } from "@/shared/services/notion-services";
import defaultMetadata from "@/shared/settings/default-metadata";
import suglifyTitle from "@/shared/utils/suglify-title";
import { Metadata } from "next";
export const dynamicParams = false;


export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { article } = await getFullProjectBySlug(params.slug);
  let title = article.properties.Name.title[0]?.plain_text;
  let description = article.properties.Description?.rich_text[0]?.plain_text;
 
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





export default async function ProjectPage({ params }: any) {
  console.log(params.slug);
  const { content, article: project } = await getFullProjectBySlug(params.slug);

  return (
    <main>
      <Title>{project?.properties?.Name?.title[0]?.plain_text}</Title>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getAllArticles(
    process.env.NOTION_DATABASE_PROYECTS,
    {}
  );
  return projects.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}
