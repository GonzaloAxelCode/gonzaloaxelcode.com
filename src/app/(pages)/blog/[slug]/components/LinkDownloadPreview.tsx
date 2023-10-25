import Flex from "@/shared/UIComponents/Base/Flex";
import P from "@/shared/UIComponents/Base/P";
import obtenerInformacionArchivo from "@/shared/utils/detect-link-download";
import Link from "next/link";

export default function LinkDownloadPreview({ url, caption }: any) {
  const { tipoArchivo, extension, nombreArchivo } =
    obtenerInformacionArchivo(url);

  return (
    <Link href={url} target="_blank" className="w-full">
      <Flex
        full
        className="border-2 p-4 rounded-2xl border-gray-100 dark:border-darkborder space-x-3"
      >
        <Flex full col className="">
          <P className="text-md font-bold-500 whitespace-normal">
            {nombreArchivo} - {tipoArchivo}
          </P>
          <P className="text-xs whitespace-normal">{caption}</P>
          <P className="text-xs whitespace-normal">{nombreArchivo}</P>
        </Flex>
        <Flex
          itemscenter
          justifycenter
          className="rounded-2xl  w-[60px] h-[60px] border-gray-100 dark:border-darkborder "
        >
          <img
            src={
              "https://cdn1.iconfinder.com/data/icons/hawcons/32/698392-icon-129-cloud-download-512.png"
            }
            className=" object-contain   w-[60px] h-[60px]"
            alt=""
          />
        </Flex>
      </Flex>
    </Link>
  );
}
