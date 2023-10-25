import P from "@/shared/UIComponents/Base/P";
import Title from "@/shared/UIComponents/Base/Title";

import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function Home() {
  return (
    <main className="grow w-full flex flex-col">
      <section className="relative">
        <div className="py-8 lg:py-16 2xl:py-20 2xl:pt-28 container items-center">
          <div className="mx-auto text-center flex flex-col items-center relative z-20">
            <span className="font-copy font-bold text-md md:text-base mb-4 text-primary-purple">
              Headless page builder
            </span>
            <Title className="tracking-tight scroll-mt-[120px] text-6xl lg:text-7xl 2xl:text-8xl font-bold title-limiter">
              Build a website that keeps getting better
            </Title>
            <div className="mt-4 lg:mt-6 text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify copy-muted text-gray-50">
              <P className="mb-4 max-w-3xl mx-auto">
                Empower marketers to release pages fast and achieve website
                goals. Deliver a custom page builder that integrates into your
                tech stack.
              </P>
              <ul className="flex flex-col md:flex-row gap-6 border-2 rounded-lg p-8 border-gray-EE dark:border-darkborder mt-8">
                <li className="relative text-left text-base font-bold md:max-w-[264px] flex items-center leading-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-primary-purple shrink-0 mr-4"
                  >
                    <circle
                      opacity="0.2"
                      cx={12}
                      cy={12}
                      r={12}
                      fill="currentColor"
                    />
                    <path
                      d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                      fill="currentColor"
                    />
                  </svg>
                  <P className="text-md">Create and edit pages faster</P>
                </li>
                <li className="relative text-left text-base font-bold md:max-w-[264px] flex items-center leading-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-primary-purple shrink-0 mr-4"
                  >
                    <circle
                      opacity="0.2"
                      cx={12}
                      cy={12}
                      r={12}
                      fill="currentColor"
                    />
                    <path
                      d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                      fill="currentColor"
                    />
                  </svg>
                  <P className="text-md">Ensure design consistency</P>
                </li>
                <li className="relative text-left text-base font-bold md:max-w-[264px] flex items-center leading-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-primary-purple shrink-0 mr-4"
                  >
                    <circle
                      opacity="0.2"
                      cx={12}
                      cy={12}
                      r={12}
                      fill="currentColor"
                    />
                    <path
                      d="M17.749 8.251a.858.858 0 0 1 0 1.213l-6.856 6.857a.858.858 0 0 1-1.214 0l-3.428-3.429a.858.858 0 0 1 1.213-1.213l2.823 2.82 6.251-6.248a.858.858 0 0 1 1.214 0h-.003Z"
                      fill="currentColor"
                    />
                  </svg>
                  <P className="text-md">Achieve fast page load speed</P>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
