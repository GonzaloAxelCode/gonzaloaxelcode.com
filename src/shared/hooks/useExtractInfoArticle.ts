const useExtractInfoArticle = (article: any) => {
  const title =
    article.properties.Name?.title[0]?.plain_text || "Articulo sin Titulo";
  let cover = article?.cover?.file?.url || article?.cover?.external?.url;
  let description =
    article.properties?.Summary.rich_text[0]?.plain_text ||
    "Articulo aun no terminado.Intenta mas tarde.";

  let category = article.properties?.Category?.select?.name;

  let createdAt = article.properties?.Created?.created_time;

  const tags = article?.properties?.Tags?.multi_select || [];
  return {
    tags,
    title,
    description,
    category,
    createdAt,
    cover: cover,
  };
};

export default useExtractInfoArticle;
