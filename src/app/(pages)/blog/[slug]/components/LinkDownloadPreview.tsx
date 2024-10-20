import P from "@/shared/components/Base/P";
import obtenerInformacionArchivo from "@/shared/utils/detect-link-download";
import Link from "next/link";

export default function LinkDownloadPreview({ url, caption }: any) {
  const { tipoArchivo, extension, nombreArchivo } =
    obtenerInformacionArchivo(url);

  return (
    <Link href={url} target="_blank" className="w-full">
      <div className="flex w-full border-2 p-4 rounded-2xl border-gray-100 dark:border-darkborder space-x-3">
        <div className="flex w-full flex-col">
          <P className="text-md font-bold-500 whitespace-normal">
            {nombreArchivo} - {tipoArchivo}
          </P>
          <P className="text-xs whitespace-normal">{caption}</P>
          <P className="text-xs whitespace-normal">{nombreArchivo}</P>
        </div>
        <div className="flex items-center justify-center rounded-2xl  w-[60px] h-[60px] border-gray-100 dark:border-darkborder ">
          <img
            src={
              "https://cdn1.iconfinder.com/data/icons/hawcons/32/698392-icon-129-cloud-download-512.png"
            }
            className=" object-contain   w-[60px] h-[60px]"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}
