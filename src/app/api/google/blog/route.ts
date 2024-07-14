import { getAllArticles } from "@/shared/services/notion-services";

export async function GET(request: Request) {
  const articles = await getAllArticles();
  return Response.json(articles);
}

