const extractInfoArticle = (article: any) => {
  const id = article?.id;
  const title =
    article?.properties?.Name?.title[0]?.plain_text || article?.properties?.Nombre?.title[0]?.plain_text || "Articulo sin Titulo";


  let cover = article?.cover?.file?.url || article?.cover?.external?.url;
  let description =
    article?.properties?.Summary?.rich_text[0]?.plain_text ||
    "Articulo aun no terminado.Intenta mas tarde.";
  let lessons =
    article?.properties?.Lessons?.rich_text[0]?.plain_text ||
    "0 Lessons";
  let duration =
    article?.properties?.Duration?.rich_text[0]?.plain_text ||
    "0 Lessons";

  let subtitle =
    article?.properties?.Subtitle?.rich_text[0]?.plain_text ||
    "";

  let icon = article?.icon?.external?.url || ""
  let category = article?.properties?.Category?.select?.name;
  let categoryColor = article?.properties?.Category?.select?.color;

  let createdAt = article?.properties?.Created?.created_time;

  const tags = article?.properties?.Tags?.multi_select || [];

  return {
    id,
    lessons, duration, subtitle,
    categoryColor,
    tags,
    title,
    description,
    category,
    createdAt,
    icon,
    cover,
  };
};

export default extractInfoArticle;
