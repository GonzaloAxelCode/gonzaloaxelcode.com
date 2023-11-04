import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};
import TextChange from "./components/TextChange";

const PageAbout = () => {
  return (
    <main className="w-full max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
      <div className="relative z-20 w-full  mt-4  md:mt-12 lg:mt-14 xl:px-0 ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full md:w-1/2 ">
            <h1 className="mb-5 leading-title text-4xl font-bold md:text-5xl lg:text-6xl dark:text-white">
              Hola, soy Gonzalo desarrollador{" "}
              <span>
                <TextChange />
              </span>
            </h1>
            <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
              Desarrollador / Programador Fullstack Junior en Peru.
              <br className="hidden lg:block" />
              Me especializo en en el desarrollo Frontend con Nextjs y Angular
              16.
            </p>
            <p className="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
              En mi sitio web encontraras:
            </p>
            <ul className="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
              <li>- Un blog personal sobre tecnologia </li>
              <li>- Aplicaciones en javascript</li>
              <li>- Diseño de sistios webs</li>
              <li>- Desarrollo de aplicaciones Fullstack</li>
              <li>- Projectos personales</li>
              <li>- Tutoriales de programacion</li>
              <li>- y mucho mas...</li>
            </ul>
            <a
              href="https://twitter.com/tnylea"
              className="inline-flex w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
            >
              Sigueme en Github 𝕏
            </a>
          </div>
          <div className="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
            <div className="relative z-20 w-full transform">
              <div className="absolute bottom-0 z-30 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
                <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
                  <span className="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">
                    👋
                  </span>
                </span>
              </div>
              <div className="relative z-30 px-10">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-web-development-4651980-3856001.png?f=webp"
                  className="relative z-30 w-full md:max-w-md mx-auto dark:-translate-y-0.5"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageAbout;
