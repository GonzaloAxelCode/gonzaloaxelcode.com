import { useEffect, useState } from "react";

const useExtractContentProyect = (content: any, proyect: any) => {
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [tecnologias, setTecnologias] = useState([]);
  const [paginas, setPaginas] = useState([]);
  const [progress, setProgress] = useState("");
  const [funcionalidades, setFuncionalidades] = useState([]);
  const [colorsTheme, setColorsTheme] = useState([]);
  const [imagesMovil, setImagesMovil] = useState([]);
  const [linkPreview, setLinkPreview] = useState("#");
  const [dateCreated, setDateCreated] = useState("");
  const [title_1, setTitle_1] = useState("");
  const [paragraph_1, setParagraph_1] = useState("");
  const [title_2, setTitle_2] = useState("");
  const [paragraph_2, setParagraph_2] = useState("");
  const [title_3, setTitle_3] = useState("");
  const [paragraph_3, setParagraph_3] = useState("");
  const [title_4, setTitle_4] = useState("");
  const [paragraph_4, setParagraph_4] = useState("");
  const [title_5, setTitle_5] = useState("");
  const [paragraph_5, setParagraph_5] = useState("");

  const titlesAndParrafos = {
    title_1,
    paragraph_1,
    title_2,
    paragraph_2,
    title_3,
    paragraph_3,
    title_4,
    paragraph_4,
    title_5,
    paragraph_5,
  };
  let title = proyect.properties.Name.title[0]?.plain_text;
  let cover = proyect?.cover?.file?.url || proyect?.cover?.external?.url;
  let description = proyect.properties.Description?.rich_text[0]?.plain_text;
  let tags = proyect?.properties?.Tags?.multi_select || [];
  function crearObjetosConDatos() {
    const resultado = [];
    let data = [];
    let contarDividers = false;
    for (const obj of content) {
      if (obj.type === "divider") {
        if (data.length > 0) {
          resultado.push({ divider: false, data });
          data = [];
        }
        contarDividers = true;
      } else {
        data.push(obj);
      }
    }
    if (data.length > 0) {
      resultado.push({ divider: false, data });
    }
    const contador = contarDividers ? resultado.length - 1 : resultado.length;
    return { contador, objetos: resultado };
  }

  function extractCaracteristicas() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[0].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        text1: obj.bulleted_list_item.rich_text[0].text.content,
        text2: obj.bulleted_list_item.rich_text[1].text.content,
      };
    });

    const objetosFiltradosPandT: any = data.objetos[0].data.filter(
      (obj: any) => obj.type === "paragraph" || obj.type === "heading_1"
    );

    setTitle_1(
      objetosFiltradosPandT[0]?.heading_1?.rich_text[0]?.plain_text || ""
    );
    setParagraph_1(
      objetosFiltradosPandT[1]?.paragraph?.rich_text[0]?.plain_text || ""
    );

    setCaracteristicas(objetosConTextos || []);
  }

  function exractTecnologias() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[1].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        text1: obj.bulleted_list_item.rich_text[0].text.content.trim(),
        urlimage: obj.bulleted_list_item.rich_text[1].plain_text,
        urlimagedark:
          obj.bulleted_list_item.rich_text[2]?.plain_text ||
          obj.bulleted_list_item.rich_text[1].plain_text,
      };
    });

    setTecnologias(objetosConTextos || []);
  }

  function extractImagePages() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[2].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        text1: obj.bulleted_list_item.rich_text[0].plain_text,
        urlimage: obj.bulleted_list_item.rich_text[1].plain_text,
      };
    });
    const objetosFiltradosPandT: any = data.objetos[2].data.filter(
      (obj: any) => obj.type === "paragraph" || obj.type === "heading_1"
    );

    setTitle_2(
      objetosFiltradosPandT[0]?.heading_1?.rich_text[0]?.plain_text || ""
    );
    setParagraph_2(
      objetosFiltradosPandT[1]?.paragraph?.rich_text[0]?.plain_text || ""
    );

    setPaginas(objetosConTextos || []);
  }

  function extractFuncionalidades() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[3].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        text: obj.bulleted_list_item.rich_text[0].plain_text.split(/\[|\]/)[0],
        description:
          obj.bulleted_list_item.rich_text[0].plain_text.split(/\[|\]/)[1],
        urlimage: obj.bulleted_list_item.rich_text[1].plain_text,
      };
    });
    const objetosFiltradosPandT: any = data.objetos[3].data.filter(
      (obj: any) => obj.type === "paragraph" || obj.type === "heading_1"
    );

    setTitle_3(
      objetosFiltradosPandT[0]?.heading_1?.rich_text[0]?.plain_text || ""
    );
    setParagraph_3(
      objetosFiltradosPandT[1]?.paragraph?.rich_text[0]?.plain_text || ""
    );

    setFuncionalidades(objetosConTextos || []);
  }

  function extractColorsTheme() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[5].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        color: obj.bulleted_list_item.rich_text[0].plain_text,
      };
    });
    const objetosFiltradosPandT: any = data.objetos[5].data.filter(
      (obj: any) => obj.type === "paragraph" || obj.type === "heading_1"
    );

    setTitle_4(
      objetosFiltradosPandT[0]?.heading_1?.rich_text[0]?.plain_text || ""
    );
    setParagraph_4(
      objetosFiltradosPandT[1]?.paragraph?.rich_text[0]?.plain_text || ""
    );

    setColorsTheme(objetosConTextos || []);
  }

  function extractImagesMovil() {
    const data = crearObjetosConDatos();
    const objetosFiltrados: any = data.objetos[4].data.filter(
      (obj: any) => obj.type === "bulleted_list_item"
    );

    const objetosConTextos = objetosFiltrados.map((obj: any) => {
      return {
        text: obj.bulleted_list_item.rich_text[0].plain_text,
        urlimage: obj.bulleted_list_item.rich_text[1].plain_text,
      };
    });
    const objetosFiltradosPandT: any = data.objetos[4].data.filter(
      (obj: any) => obj.type === "paragraph" || obj.type === "heading_1"
    );

    setTitle_5(
      objetosFiltradosPandT[0]?.heading_1?.rich_text[0]?.plain_text || ""
    );
    setParagraph_5(
      objetosFiltradosPandT[1]?.paragraph?.rich_text[0]?.plain_text || ""
    );

    setImagesMovil(objetosConTextos || []);
  }

  useEffect(() => {
    setProgress(proyect.properties.Progreso.rich_text[0].plain_text);
    setLinkPreview(proyect?.properties?.LivePreview?.url || "#");
    setDateCreated(
      new Date(proyect.created_time).toLocaleDateString("es-PE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    extractCaracteristicas();
    extractImagePages();
    extractFuncionalidades();
    extractImagesMovil();
    extractColorsTheme();
    exractTecnologias();
  }, []);

  return {
    title,
    cover,
    titlesAndParrafos,
    description,
    caracteristicas,
    tecnologias,
    paginas,
    imagesMovil,
    colorsTheme,
    funcionalidades,
    progress,
    linkPreview,
    dateCreated,
    tags,
  };
};

export default useExtractContentProyect;
