"use client";
import P from "@/shared/UIComponents/Base/P";
import Subtitle from "@/shared/UIComponents/Base/Subtitle";
import Image from "next/image";

import Flex from "@/shared/UIComponents/Base/Flex";
//@ts-ignore
import Title from "@/shared/UIComponents/Base/Title";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import suglifyTitle from "@/shared/utils/suglify-title";
//@ts-ignore
import { atomOneDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import LinkDownloadPreview from "./LinkDownloadPreview";
import LinkPreview from "./LinkPreview";

const ContentBlock = ({ block }: any) => {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <P className="text-md my-3">
          <Text texts={value.rich_text} />
        </P>
      );
    case "heading_1":
      const textReferenceH1 = value?.rich_text
        ?.map((el: any, index: number) => {
          return `${el.text?.content}`;
        })
        .join("");
      return (
        <Title
          id={suglifyTitle(textReferenceH1)}
          className="wrap-balance  tracking-tight text-3xl lg:text-4xl font-bold mb-2 mt-2 my-4"
        >
          <Text texts={value.rich_text} />
        </Title>
      );
    case "heading_2":
      const textReferenceH2 = value?.rich_text
        ?.map((el: any, index: number) => {
          return `${el.text?.content}`;
        })
        .join("");
      return (
        <Subtitle
          id={suglifyTitle(textReferenceH2)}
          className="wrap-balance  tracking-tight text-2xl lg:text-2xl font-bold mb-2 mt-1 my-2"
        >
          <Text texts={value.rich_text} />
        </Subtitle>
      );
    case "heading_3":
      return (
        <Subtitle className=" tracking-tight text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-bold mb-6 mt-12 first:mt-0 scroll-mt-[120px]">
          <Text texts={value.rich_text} />
        </Subtitle>
      );

    case "numbered_list_item":
    case "bulleted_list_item":
      return (
        <li className="my-2 flex">
          {" - "}{" "}
          <P className="text-md ml-2">
            <Text texts={value.rich_text || ""} />
          </P>
        </li>
      );

    case "to_do":
      return <></>;
    case "toggle":
      return <></>;
    case "child_page":
      return <></>;
    case "image":
      const src =
        value.type === "external" ? value.external?.url : value.file?.url;
      const caption =
        value.caption?.length >= 1 ? value.caption[0]?.plain_text : "";

      return (
        <figure>
          <Image
            quality={100}
            src={src}
            style={{ borderRadius: "1em", objectFit: "cover" }}
            blurDataURL={src}
            width={1200}
            height={500}
            placeholder="blur"
            alt={
              caption
                ? caption
                : "A visual depiction of what is being written about"
            }
            priority
          />

          <P className="text-center text-xs w-ful m-1">
            <Text
              texts={
                value.caption ||
                "A visual depiction of what is being written about"
              }
            />
          </P>
        </figure>
      );
    case "code":
      return (
        <CodeBlock
          language={value.language}
          code={value?.rich_text || []}
          caption={value?.caption}
        />
      );

    case "callout":
      console.log(value);
      const text = value?.rich_text
        ?.map((el: any, index: number) => {
          return `${el.text?.content} `;
        })
        .join("");
      return (
        <div className="w-full p-4 md:p-6 rounded-lg mt-5 mb-6 flex flex-col  bg-quaternary-blue dark:bg-gray-1F">
          <div className="flex flex-col sm:flex-row gap-6 ">
            <span className="text-2xl">{value?.emoji || "💡"}</span>
            <p>{text}</p>
          </div>
        </div>
      );
    //   {value?.icon && <span>{value.icon?.emoji}</span>}
    case "embed":
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf("/") + 1);
      return <Codepen codePenEmbedKey={codePenEmbedKey} url={value.url} />;
    case "table_of_contents":
      return <div>TOC</div>;
    case "video":
      return (
        <div className="relative overflow-hidden">
          <iframe
            style={{ border: "none", borderRadius: "8px" }}
            width="100%"
            height={400}
            src={value.external.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );
    case "quote":
      return <></>;
    case "divider":
      return <></>;
    case "file":
      return (
        <div className="my-3 flex w-full">
          <LinkDownloadPreview
            url={value.file.url}
            caption={
              value?.caption[0]?.plain_text || "File is download caption."
            }
          />
        </div>
      );
    case "bookmark":
      return (
        <div className="flex my-3">
          <LinkPreview url={value.url} />
        </div>
      );
    default:
      return <></>;
  }
};

export default ContentBlock;

function Codepen({ url, codePenEmbedKey }: any) {
  return (
    <div className="w-full">
      <iframe
        style={{ border: "none", width: "100%" }}
        height={400}
        className="w-full"
        title="codepen-embed"
        src={`https://codepen.io/gonzaloaxelh/embed/preview/${codePenEmbedKey}?default-tab=result`}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}

const Text = ({ texts }: any) => {
  if (!texts) {
    return null;
  }
  return texts?.map((value: any, index: number) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    return (
      <span
        key={index}
        className={[
          "",
          bold && "font-bold",
          italic && "font-italic",
          code && "",
          strikethrough && "",
          underline && "underline",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text?.link ? (
          <a
            className="text-primary-purple hover:text-secondary-purple underline underline-offset-4"
            href={text?.link?.url || "#"}
            target="_blank"
          >
            {text?.content}
          </a>
        ) : code ? (
          <code className="truncate   overflow-x-auto break-all whitespace-normal p-[3px] leading-[1] bg-primary-orange rounded bg-opacity-20 text-primary-orange font-mono  font-medium">
            {text?.content || ""}
          </code>
        ) : (
          text?.content || ""
        )}
      </span>
    );
  });
};

const CodeBlock = ({ code, language, caption }: any) => {
  const CODE = code.reduce((acc: any, el: any) => {
    return acc + `${el.plain_text}`;
  }, ``);

  return (
    <div className="w-full">
      <div className="grid bg-[#151515] p-4  text-sm rounded-xl w-full">
        <SyntaxHighlighter
          language={language}
          customStyle={{
            background: "transparent",
            width: "100%",
          }}
          style={theme}
          wrapLines={true}
          showLineNumbers
          showInlineLineNumbers
        >
          {CODE}
        </SyntaxHighlighter>
      </div>
      <P className="text-center text-xs w-ful m-1">
        <Text texts={caption || "Description to code"} />
      </P>
    </div>
  );
};

/*

   lineProps={(lineNumber: any) => {
          let style: any = { display: "flex" };
          style.paddingLeft = "30px";
          style.paddingRight = "30px";
          if (ADDED.includes(lineNumber)) {
            style.backgroundColor = "rgba(53,175,31,0.10)";

            style.width = "130%";
          } else if (REMOVED.includes(lineNumber)) {
            style.backgroundColor = "rgba(229,83,75,0.10)";

            style.width = "130%";
          }

          return { style };
        }}
 */

function extraerValores(cadena: any) {
  const regex = /\[(.*?)\]/g;
  const matches = [];
  let match;

  while ((match = regex.exec(cadena)) !== null) {
    matches.push(match[1]);
  }

  if (matches.length === 4) {
    const addedLinesMatches = matches[2].match(/\((.*?)\)/);
    const removeLinesMatches = matches[3].match(/\((.*?)\)/);

    if (addedLinesMatches && removeLinesMatches) {
      const addedLines = addedLinesMatches[1]
        .split(",")
        .map((val) => parseInt(val))
        .filter((val) => !isNaN(val));

      const removeLines = removeLinesMatches[1]
        .split(",")
        .map((val) => parseInt(val))
        .filter((val) => !isNaN(val));

      return {
        caption: matches[0],
        language: matches[1],
        addedLines,
        removeLines,
      };
    }
  }

  return null; // La cadena de entrada no tiene el formato esperado.
}
