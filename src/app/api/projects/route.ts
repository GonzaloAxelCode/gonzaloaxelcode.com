import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const projects = await getAllArticles(process.env.NOTION_DATABASE_PROYECTS,
    {});
  return Response.json(projects);
}

