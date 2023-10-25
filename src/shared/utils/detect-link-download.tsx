function obtenerExtension(url: any) {
  return url.split(".").pop().toLowerCase();
}

export default function obtenerInformacionArchivo(url: any) {
  const partesURL = url.split("/");
  const nombreArchivo = partesURL[partesURL.length - 1].split("?")[0];
  const extension: any = obtenerExtension(nombreArchivo);

  const tiposValidos: any = {
    jpg: "Imagen JPEG",
    jpeg: "Imagen JPEG",
    png: "Imagen PNG",
    gif: "Imagen GIF",
    bmp: "Imagen BMP",
    webp: "Imagen WebP",
    pdf: "Documento PDF",
    doc: "Documento Word",
    docx: "Documento Word",
    xls: "Documento Excel",
    xlsx: "Documento Excel",
    ppt: "Presentación PowerPoint",
    pptx: "Presentación PowerPoint",
    txt: "Archivo de Texto",
    zip: "Archivo ZIP",
    html: "Documento HTML",
    css: "Archivo CSS",
    js: "Archivo JavaScript",
    ts: "Archivo TypeScript",
    jsx: "Archivo JavaScript (React)",
    tsx: "Archivo TypeScript (React)",
    json: "Archivo JSON",
    xml: "Archivo XML",
    csv: "Archivo CSV",
    sql: "Archivo SQL",
    py: "Archivo Python",
    c: "Archivo C",
    cpp: "Archivo C++",
    h: "Archivo de Encabezado",
    php: "Archivo PHP",
    rb: "Archivo Ruby",
    java: "Archivo Java",
    swift: "Archivo Swift",
    pl: "Archivo Perl",
    sh: "Script Shell",
    bat: "Script de Windows",
    jar: "Archivo JAR",
    class: "Archivo de Clase Java",
    war: "Archivo WAR (Web Application Archive)",
    ear: "Archivo EAR (Enterprise Archive)",
    exe: "Archivo Ejecutable",
    dll: "Biblioteca de Enlace Dinámico",
    tar: "Archivo TAR",
    gz: "Archivo GZIP",
    rpm: "Paquete RPM (Red Hat Package Manager)",
    deb: "Paquete DEB (Debian)",
    iso: "Archivo ISO (Imagen de Disco)",
    img: "Archivo de Imagen de Disco",
    log: "Archivo de Registro",
    bak: "Copia de Seguridad",
    conf: "Archivo de Configuración",
    yaml: "Archivo YAML",
    yml: "Archivo YAML",
    svg: "Imagen SVG",

    asp: "Archivo ASP (Active Server Pages)",

    jsp: "Archivo JSP (JavaServer Pages)",
    aspx: "Archivo ASPX",
    htaccess: "Archivo .htaccess",

    tif: "Imagen TIFF",
    tiff: "Imagen TIFF",
    psd: "Archivo PSD (Adobe Photoshop)",
    ai: "Archivo AI (Adobe Illustrator)",
    eps: "Archivo EPS (PostScript Encapsulado)",

    md: "Archivo Markdown",
    woff: "Fuente Web (WOFF)",
    woff2: "Fuente Web (WOFF2)",
    ttf: "Fuente TrueType",
    otf: "Fuente OpenType",
    apk: "Archivo APK (Android Package)",
    flac: "Archivo de Audio FLAC",
    mp3: "Archivo de Audio MP3",
    wav: "Archivo de Audio WAV",
    avi: "Archivo de Video AVI",
    mp4: "Archivo de Video MP4",
    mkv: "Archivo de Video MKV",
    mov: "Archivo de Video MOV",

    scss: "Archivo SCSS",
    less: "Archivo LESS",

    r: "Archivo R",
    go: "Archivo Go",

    rs: "Archivo Rust",

    cs: "Archivo C#",
    vb: "Archivo Visual Basic",
    lua: "Archivo Lua",

    ini: "Archivo INI",
  };

  const tipoArchivo = tiposValidos[extension] || "Tipo de archivo desconocido";

  return {
    tipoArchivo,
    extension,
    nombreArchivo,
    size: 0,
  };
}


