let tecnologys = {
  JAVASCRIPT: "https://cdn.svgporn.com/logos/javascript.svg",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  NODE: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  BOOSTRAP: "https://cdn.svgporn.com/logos/bootstrap.svg",
  MYSQL: "https://cdn.svgporn.com/logos/mysql.svg",
  ANGULAR: "https://cdn.svgporn.com/logos/angular-icon.svg",
  PYTHON: "https://cdn.svgporn.com/logos/python.svg",
  POSTMAN: "https://cdn.svgporn.com/logos/postman-icon.svg",
  POSTGRESQL: "https://cdn.svgporn.com/logos/postgresql.svg",
  FIREBASE: "https://cdn.svgporn.com/logos/firebase.svg",
  DOCKER: "https://cdn.svgporn.com/logos/docker-icon.svg",
  DJANGO: "https://cdn.svgporn.com/logos/django-icon.svg",
  SASS: "https://cdn.svgporn.com/logos/sass.svg",
  BASH: "https://cdn.svgporn.com/logos/bash-icon.svg",
  LINUX: "https://cdn.svgporn.com/logos/linux-tux.svg",
  VIM: "https://cdn.svgporn.com/logos/vim.svg",
};



const MyTools = ({ items = tecnologys }: any) => {
  const toolsArray: any = Object.entries(items);

  return (
    <div
      className="all-tools w-full flex flex-wrap"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {toolsArray.map(([tech, url]) => (

        <div key={tech}
          className="avatar w-[50px] h-[50px] md:w-[80px] md:h-[80px] m-1 md:m-3">
          <img src={url} alt={tech} className="background" />
          <img src={url} alt={tech} />
        </div>
      ))}
    </div>
  );
};

export default MyTools;
