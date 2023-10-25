import Title from "@/shared/UIComponents/Base/Title";
export const dynamicParams = false;
export default async function TutorialPage() {
  /*
  const { content, article: tutorial } = await getFullTutorialBySlug(
    params.slug
  );

const { contenido, tags, title, cover, description } = useExtractInfoTutorial(
  tutorial,
  content
  );
  **/
  return (
    <main>
      <Title>XD</Title>
    </main>
  );
}

/*


export async function generateStaticParams() {
  const turorials = await getAllArticles(
    process.env.NOTION_DATABASE_TUTORIALS,
    {}
  );
  return turorials.map((el: any) => ({
    slug: suglifyTitle(el.properties.Name?.title[0]?.plain_text),
  }));
}

    */
