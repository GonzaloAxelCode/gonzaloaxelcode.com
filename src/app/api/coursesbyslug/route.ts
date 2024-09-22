import { getFullArticlesByCategorySlug } from "@/shared/hooks/functions-notion";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');


    const { articles, tags } = await getFullArticlesByCategorySlug(
        slug, process.env.NOTION_DATABASE_ACADEMY
    );

    return new Response(JSON.stringify(articles), { status: 200 });
}


