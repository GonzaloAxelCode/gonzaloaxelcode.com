import { Client, isFullPage } from "@notionhq/client";
import { cache } from "react";

import suglifyTitle from "../utils/suglify-title";
export const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getAllArticles = cache(
  async (
    database_id: any = process.env.NOTION_DATABASE_BLOG,
    query: any = {}
  ) => {
    const articles: any = [];
    const fullOrPartialPages = await notion.databases.query({
      database_id: database_id || "",
      filter: {
        property: "Status",
        status: {
          equals: "Done",
        },
      },
    });

    for (const page of fullOrPartialPages.results) {
      //@ts-ignore
      let isPage = isFullPage(page);
      if (!isPage) {
        continue;
      }

      articles.push(page);
    }

    return JSON.parse(JSON.stringify(articles));
  }
);

export const getTags = (articles: any) => {
  let list: any = [];
  articles?.map((art: any) => {
    list.push(art?.properties?.Tags?.multi_select);
  });

  let result = list?.reduce((acc: any, el: any) => {
    return acc.concat(el);
  }, []);

  let tagsNames = result?.reduce((acc: any, el: any) => {
    return [...acc, el.name];
  }, []);

  let objetsTags = tagsNames?.reduce((acc: any, el: any) => {
    acc[el] = (acc[el] || 0) + 1;

    return acc;
  }, {});

  let tagsKeys = Object.keys(objetsTags);

  return tagsKeys;
};

export const getArticle = async (id: string) => {
  let blocks = await notion?.blocks?.children?.list({
    block_id: id,
  });
  let content = [...blocks.results];

  return JSON.parse(JSON.stringify(content));
};

export const findArticleBySlug = async (
  database_id: any = process.env.NOTION_DATABASE_BLOG,
  slug: string
) => {
  const pages = await getAllArticles(database_id, {});

  const page = pages.find((page: any) => {
    return (
      suglifyTitle(page.properties?.Name?.title[0]?.plain_text) ===
      suglifyTitle(slug)
    );
  });

  return { idPage: page?.id, article: page };
};
