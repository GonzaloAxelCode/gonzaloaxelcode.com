const extractContentProyect = (proyect: any) => {
  let cover = proyect?.cover?.file?.url || proyect?.cover?.external?.url;
  let title = proyect.properties.Name.title[0]?.plain_text;
  let createdtime = new Date(proyect.created_time).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let updatedTime = new Date(
    proyect.properties["Last edited time"].last_edited_time
  ).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let references = proyect?.properties?.Referencias?.rich_text[0]?.plain_text ||
    "[]";


  let tags = proyect?.properties?.Tags?.multi_select || [];
  let description = proyect.properties?.Description?.rich_text[0]?.plain_text;
  let tecnologias = proyect?.properties?.Tecnologias?.multi_select || [];
  let category = proyect?.properties?.Category?.select?.name;
  let progress = proyect.properties?.Progreso?.rich_text[0]?.plain_text;
  let linkpreview = proyect?.properties?.LivePreview?.url || "#";
  let imagesMovil = proyect?.properties?.ImagesMovil?.files;
  let imagesDesktop = proyect?.properties?.ImagesDesktop?.files;

  let imagesPages = proyect?.properties?.ImagesPages?.files;

  let linkGithubBackend = proyect?.properties?.LinkGithubBackend?.url;
  let linkGithubFull = proyect?.properties?.LinkGithubFull?.url;
  let linkGithubFrontEnd = proyect?.properties?.LinkGithubFrontend?.url;

  let indicador1 = JSON.parse(
    proyect?.properties?.Indicador1?.rich_text[0]?.plain_text || "{}"
  );
  let indicador2 = JSON.parse(
    proyect?.properties?.Indicador2?.rich_text[0]?.plain_text || "{}"
  );

  let component1 = JSON.parse(
    proyect?.properties?.Componente1?.rich_text[0]?.plain_text || "{}"
  );

  let component2 = JSON.parse(
    proyect?.properties?.Componente2?.rich_text[0]?.plain_text || "{}"
  );
  let component3 = JSON.parse(
    proyect?.properties?.Componente3?.rich_text[0]?.plain_text || "{}"
  );

  let status = proyect?.properties?.Status?.status;
  let isLocked = proyect?.properties?.Locked.status?.name === "Loked";
  let level = proyect?.properties?.Level?.select?.name;
  let peoples = proyect?.properties?.Person?.people;
  return {
    components: [
      {
        ...component1,
      },
      {
        ...component2,
      },
      {
        ...component3,
      },
    ],

    indicadores: {
      indicador1,
      indicador2,
    },
    links: {
      linkGithubBackend,
      linkGithubFull,
      linkGithubFrontEnd,
    },
    linkGithubFull,
    imagesPlatforms: {
      imagesMovil,

      imagesDesktop,
    },
    peoples,
    level,
    status,
    title,
    cover,
    createdtime,
    updatedTime,
    linkpreview,
    category,
    tecnologias,
    description,
    progress,
    tags,
    isLocked,
    references,
    imagesPages,
  };
};

export default extractContentProyect;
