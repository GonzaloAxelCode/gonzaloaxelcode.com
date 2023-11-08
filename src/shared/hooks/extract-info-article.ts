const extractInfoArticle = (article: any) => {
  const id = article?.id;
  const title =
    article?.properties.Name?.title[0]?.plain_text || "Articulo sin Titulo";
  let cover = article?.cover?.file?.url || article?.cover?.external?.url;
  let description =
    article?.properties?.Summary.rich_text[0]?.plain_text ||
    "Articulo aun no terminado.Intenta mas tarde.";

  let category = article?.properties?.Category?.select?.name;
  let categoryColor = article?.properties?.Category?.select?.color;

  let createdAt = article?.properties?.Created?.created_time;

  const tags = article?.properties?.Tags?.multi_select || [];

  return {
    id,
    categoryColor,
    tags,
    title,
    description,
    category,
    createdAt,
    cover,
  };
};

export default extractInfoArticle;
