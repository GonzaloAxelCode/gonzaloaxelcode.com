import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_BLOG);
  return Response.json(articles);
}

