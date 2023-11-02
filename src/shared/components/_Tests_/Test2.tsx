const imagesData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc6a3c58c0bde4f43b1fd6a350f491bdf",
    name: "Next",
  },

  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F91433a8232dc4a16bee10e691e6fcc2d%2F086c7415befc416194a0d0fada58fe6e",
    name: "Qwik",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F2f3409f4f8b64d5f880195061aa481ab",
    name: "React",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd3e7739f05c5462bad48687394709cb2%2F497d2d634a44407493fb729cf41f3c69",
    name: "Remix",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F60ec83a3c22c4249992c85bf52a0368c",
    name: "Hydrogen",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F73f47f47e0cc46cd95dbf72c26728858",
    name: "Nuxt",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7cc6d5b6fc4045d5a9f9b12ddcc65407",
    name: "Vue",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd47e360aebc14a6db389404016274955",
    name: "Svelte",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F45e59fc603574e708dcb79e45ef72d02",
    name: "Gatsby",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa91e9e437203442d8ed481eef94a99dc",
    name: "Angular",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7c16907175964f5dada038f6cceef77b",
    name: "REST API",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5e5316b4de0d4504be4a01efe5809820",
    name: "Android",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb403a2aab9c147708109b6e1c00e922f",
    name: "Swift",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff7f23f464c2f4b74885351c2e14ecd78",
    name: "React Native",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0f577e84eb4e4aa4a69d602dd376aa11",
    name: "Shopify",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb739b409e5b94937b5b11e3cf62cfae4",
    name: "GraphQL",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd09e5d3e78654f34964b8ff30988fd2e",
    name: "JS",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5613cb3536be4c108b32c34bf06f1c59",
    name: "Web components",
  },
];

const Test2 = () => {
  return (
    <div className="flex gap-3 w-full">
      {imagesData.map((image, index) => (
        <button key={index} className="flex flex-col items-center justify-center">
          <img className="w-[50px] object-contain" src={image.src} />
          <div className="text-center text-xs">{image.name}</div>
        </button>
      ))}
    </div>
  );
};

export default Test2;
