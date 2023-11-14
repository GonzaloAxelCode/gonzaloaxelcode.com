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
  console.log(proyect.properties);
  let tags = proyect?.properties?.Tags?.multi_select || [];
  let description = proyect.properties?.Description?.rich_text[0]?.plain_text;
  let tecnologias = proyect?.properties?.Tecnologias?.multi_select || [];
  let category = proyect?.properties?.Category?.select?.name;
  let progress = proyect.properties?.Progreso?.rich_text[0].plain_text;
  let linkpreview = proyect?.properties?.LivePreview?.url || "#";
  let urlimage1 = proyect?.Image1?.url;
  let urlimage2 = proyect?.Image2?.url;
  let urlimage3 = proyect?.Image3?.url;

  let imagesMovil = proyect?.ImagesMovil?.files;
  let imagesTablet = proyect?.ImagesTablet?.files;
  let imagesDesktop = proyect?.ImagesDesktop?.files;

  let linkGithubBackend = proyect?.properties?.LinkGithubBackend?.url;
  let linkGithubFull = proyect?.properties?.LinkGithubFull?.url;
  let linkGithubFrontEnd = proyect?.properties?.LinkGithubFrontend?.url;

  let indicador1 = proyect?.properties?.Indicador1?.rich_text;
  let indicador2 = proyect?.properties?.Indicador2?.rich_text;
  let indicador3 = proyect?.properties?.Indicador3?.rich_text;

  let caracteristicas = extractFeatures(
    proyect?.properties?.ListCaracteristicas?.rich_text || ""
  );
  function extractFeatures(cadena) {
    var patron = /\[{(.*?)}(.*?)\]/g;
    var resultados = [];
    var coincidencia;
    while ((coincidencia = patron.exec(cadena)) !== null) {
      resultados.push({
        titulo: coincidencia[1],
        texto: coincidencia[2].trim(),
      });
    }
    return resultados;
  }
  let component1 = proyect?.properties?.Componente1?.rich_text;
  let component2 = proyect?.properties?.Componente2?.rich_text;
  let component3 = proyect?.properties?.Componente3?.rich_text;

  let status = proyect?.properties?.Status?.status;

  let level = proyect?.properties?.Level?.select?.name;
  let peoples = proyect?.properties?.Person?.people;
  return {
    components: {
      component1,
      component2,
      component3,
    },
    indicadores: {
      indicador1,
      indicador2,
      indicador3,
    },
    links: {
      linkGithubBackend,
      linkGithubFull,
      linkGithubFrontEnd,
    },
    imagesURL: {
      urlimage1,
      urlimage2,
      urlimage3,
    },
    imagesPlatforms: {
      imagesMovil,
      imagesTablet,
      imagesDesktop,
    },
    peoples,
    level,
    status,
    caracteristicas,
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
    imagesTablet,
  };
};

export default extractContentProyect;
