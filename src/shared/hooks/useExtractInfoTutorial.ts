const useExtractInfoTutorial = (tutorial: any, content: any = []) => {
  let tags = tutorial?.properties.Tags?.multi_select;
  let cover = tutorial?.cover?.external?.url;
  const title = tutorial?.properties.Name.title[0].plain_text;
  const description = tutorial?.properties.Summary.rich_text[0].plain_text;
  const topic = tutorial?.properties.Asignatura.select?.name;
  const createdAt = tutorial?.properties?.Created?.created_time;
  const level = tutorial?.properties?.Nivel?.select?.name;
  const type = tutorial?.properties?.Type?.select?.name;
  const Indicador1 = tutorial?.properties?.Indicador1?.rich_text[0]?.plain_text;
  const Indicador2 = tutorial?.properties?.Indicador2?.rich_text[0]?.plain_text;
  const Indicador3 = tutorial?.properties?.Indicador3?.rich_text[0]?.plain_text;

  const contenido = content.reduce((acc: any, item: any) => {
    if (item.heading_2) {
      const text = item.heading_2.rich_text[0].text.content;
      acc.push({
        name: text,
        link: "#",
      });
    }
    return acc;
  }, [] || []);

  return {
    contenido,
    tags,
    title,
    cover,
    description,
    type,
    level,
    createdAt,
    topic,
    indicadores: [Indicador1, Indicador2, Indicador3],
  };
};

export default useExtractInfoTutorial;
