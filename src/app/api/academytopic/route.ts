import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_ACADEMY_TOPIC);
  return Response.json(articles);
}


