import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_ACADEMY);
  return Response.json(articles);
}


