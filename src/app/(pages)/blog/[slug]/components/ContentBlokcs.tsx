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
      return (
        <div className="w-full my-12 first:mt-0 last:mb-0 p-4 md:p-6 rounded-2xl flex flex-col  bg-quaternary-blue dark:bg-gray-1F">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-primary-blue shrink-0"
            >
              <path
                opacity="0.2"
                d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                fill="currentColor"
              />
              <path
                d="M39.8394 18.788C40.2081 17.9317 39.9331 16.9318 39.1769 16.3818C38.4207 15.8318 37.3895 15.8818 36.6833 16.4943L20.6838 30.4938C20.0588 31.0438 19.8338 31.925 20.1276 32.7C20.4213 33.4749 21.1713 33.9999 22.0025 33.9999H28.971L24.1649 45.212C23.7962 46.0683 24.0712 47.0682 24.8274 47.6182C25.5836 48.1682 26.6149 48.1182 27.3211 47.5057L43.3205 33.5062C43.9455 32.9562 44.1705 32.075 43.8767 31.3C43.583 30.5251 42.8393 30.0063 42.0018 30.0063H35.0333L39.8394 18.788Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="mb-3 text-black dark:text-white tracking-tight text-xl 2xl:text-4xl font-2xl">
              Nota
            </h2>
          </div>

          <div className=" sm:pl-[72px]  2xl:text-md  print:text-[12px] print:text-justify">
            <P className="dark:text-white text-graydark my-4 first:mt-0 last:mb-0 print:my-2 text-md ">
              XDDDD
            </P>
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
        <Flex full className="my-3">
          <LinkDownloadPreview
            url={value.file.url}
            caption={
              value?.caption[0]?.plain_text || "File is download caption."
            }
          />
        </Flex>
      );
    case "bookmark":
      return (
        <Flex className="my-3">
          <LinkPreview url={value.url} />
        </Flex>
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
