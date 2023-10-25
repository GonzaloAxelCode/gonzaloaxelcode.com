import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const topics = await getAllArticles(process.env.NOTION_DATABASE_TECNOLOGY,
    {});
  return Response.json(topics);
}


