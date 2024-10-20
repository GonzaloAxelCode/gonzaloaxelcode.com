import P from "@/shared/components/Base/P";
import Title from "@/shared/components/Base/Title";
import resumirTexto from "@/shared/utils/resume-text";
import Link from "next/link";
import useLinkPreview from "use-link-preview";

export default function LinkPreview({ url }: any) {
  const { metadata, isLoading, isError } = useLinkPreview(url);

  // Usage example
  return (
    <>
      {metadata && (
        <Link href={metadata.requestUrl || "#"} target="_blank">
          <div className="flex w-full border-2 p-6 rounded-2xl border-gray-100 dark:border-darkborder space-y-3  sm:space-x-3  flex-wrap sm:flex-nowrap">
            <div className="flex flex-col space-y-2">
              <Title className="text-lg">{metadata?.title}</Title>
              <P className="text-sm">
                {resumirTexto(metadata?.description || "")}
              </P>
              <P className="text-sm">{metadata?.domain}</P>
            </div>
            <img
              src={metadata?.img || ""}
              height={127}
              className="rounded-xl object-cover w-full  sm:w-[250px]"
              alt=""
            />
          </div>
        </Link>
      )}
    </>
  );
}
