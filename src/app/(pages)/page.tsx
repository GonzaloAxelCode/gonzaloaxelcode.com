import FloatLaptop from "@/shared/3DComponents/FloatLaptop";
import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import TitlePresentation from "./components/TitlePresentation";
export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden dark:text-white text-blackbg max-w-[840px]  lg:max-w-[1280px]  mx-auto  px-1 sm:px-4 min-h-screen">
      <div className="flex flex-col">
        <div className="flex  relative z-1 flex-wrap mt-10">
          <TitlePresentation />
        </div>

        <div className="hidden relative sm:block md:absolute z-1 left-[50%]  md:top-0 top-[40%] transform -translate-x-[50%] md:translate-x-[5%]">
          <FloatLaptop />
        </div>
      </div>
    </main>
  );
}
