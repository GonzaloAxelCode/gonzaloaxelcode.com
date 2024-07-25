import {
  findArticleBySlug,
  getAllArticles,
  getArticle,
  getTags,
} from "@/shared/services/notion-services";
import suglifyTitle from "../utils/suglify-title";



export const getFullAcademyArticleBySlug = async (slug: any,database_id:any = process.env.NOTION_DATABASE_ACADEMY) => {


  const { idPage, article } = await findArticleBySlug(
    database_id,
    slug
  );
  
  
  const content = await getArticle(idPage);
  return { content, article, idPage };
};















export const getFullArticleBySlug = async (slug: any,database_id:any = process.env.NOTION_DATABASE_BLOG) => {


  const { idPage, article } = await findArticleBySlug(
    database_id,
    slug
  );
  
  
  const content = await getArticle(idPage);
  return { content, article, idPage };
};

export const getFullArticlesByCategorySlug = async (categoryslug: any,database_id=process.env.NOTION_DATABASE_BLOG) => {
  const allpages = await getAllArticles(database_id, {});

  const filterpages = allpages.filter((page: any) => {
    return (
      suglifyTitle(page.properties?.Category?.select.name) ===
      suglifyTitle(categoryslug)
    );
  });
  const tags = getTags(filterpages);
  return { articles: filterpages, tags };
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

export function obtenerCategoriasUnicas(data: any) {
  const categoriasUnicas: any = new Set();
  data?.forEach((item: any) => {
    if (
      item.properties &&
      item.properties.Category &&
      item.properties.Category.select
    ) {
      categoriasUnicas.add(JSON.stringify(item?.properties?.Category?.select));
    }
  });

  const categoriasArray = [...categoriasUnicas].map((item) => JSON.parse(item));

  return categoriasArray;
}

export function filterByTagAndCategory(
  data: any,
  tagName: any,
  categoryName: any
) {
  if (
    tagName === "all-tags" ||
    tagName === "" ||
    tagName === null ||
    tagName === " "
  ) {
    return data?.filter((item: any) => {
      const tags = item?.properties?.Tags?.multi_select?.map((tag: any) => {
        if (
          suglifyTitle(item?.properties?.Category?.select?.name) ===
          suglifyTitle(categoryName)
        ) {
          return suglifyTitle(tag.name);
        }
      });
      return tags;
    });
  } else {
    return data?.filter((item: any) => {
      const tags = item?.properties?.Tags?.multi_select?.map((tag: any) => {
        if (
          suglifyTitle(item?.properties?.Category?.select?.name) ===
          suglifyTitle(categoryName)
        ) {
          return suglifyTitle(tag.name);
        }
      });
      return tags.includes(suglifyTitle(tagName));
    });
  }
}
