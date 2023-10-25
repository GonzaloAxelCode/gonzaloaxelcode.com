import {
  findArticleBySlug,
  getArticle,
} from "@/shared/services/notion-services";

export const getFullArticleBySlug = async (slug: any) => {
  const { idPage, article } = await findArticleBySlug(
    process.env.NOTION_DATABASE,
    slug
  );

  const content = await getArticle(idPage);
  return { content, article, idPage };
};

export const getFullTutorialBySlug = async (slug: any) => {
  const { idPage, article } = await findArticleBySlug(
    process.env.NOTION_DATABASE_TUTORIALS,
    slug
  );
  const content = await getArticle(idPage);
  return { content, article, idPage };
};

export const getFullProjectBySlug = async (slug: any) => {
  const { idPage, article } = await findArticleBySlug(
    process.env.NOTION_DATABASE_PROYECTS,
    slug
  );
  const content = await getArticle(idPage);
  return { content, article, idPage };
};

export const getFullTopicBySlug = async (slug: any) => {
  const { idPage } = await findArticleBySlug(
    process.env.NOTION_DATABASE_TECNOLOGY,
    slug
  );
  const topic = await getArticle(idPage);
  return topic;
};
