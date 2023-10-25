import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import SectionProjects from "./components/SectionProjects";
export const metadata: Metadata = {
  ...defaultMetadata,
};

const PageProjects = () => {
  return (
    <main className="w-full">
      <section className="relative overflow-hidden  max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <div className="container items-center relative z-10 py-16 lg:py-32 2xl:py-40">
          <div className="mx-auto text-center flex flex-col items-center">
            <span className="font-bold text-base md:text-md mb-4 text-primary-blue ">
              Prismic for marketers
            </span>
            <h1 className="font-headings tracking-tight scroll-mt-[120px] text-6xl lg:text-7xl 2xl:text-8xl font-bold title-limiter leading-title">
              Create and launch on-brand pages faster
            </h1>
            <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-xl text-[#505050]">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                Get a page builder, configured to your needs.<strong> </strong>
                Easily create fast, brand consistent website pages. Release more
                to attract more visitors and convert quality leads.
              </p>
            </div>
            <nav className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10 mx-auto justify-center">
              <a
                className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white"
                rel="noreferrer"
                href="https://prismic.io/try"
              >
                Try editing a page with Prismic
              </a>
            </nav>
          </div>
        </div>
        <img
          loading="lazy"
          width={1440}
          height={642}
          decoding="async"
          data-nimg={1}
          className="absolute top-0 right-0 left-0 hidden md:block w-full"
          style={{ color: "transparent" }}
          srcSet="https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=1920 1x, https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=3840 2x"
          src="https://prismic-main.cdn.prismic.io/prismic-main/81550ec4-8233-4742-a56c-79e151342fe1_marketer-background+%282%29.svg?auto=compress%2Cformat&fit=max&w=3840"
        />
      </section>
      <section className="w-full text-gray-1F  py-10 md:py-16 2xl:py-20 overflow-hidden light-copy">
        <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="mt-8 2xl:mt-14 first:mt-0">
            <ul className="flex flex-wrap -m-2 2xl:-m-3">
              <li className="w-full p-2 2xl:p-3 md:w-1/2 lg:w-1/3 grow">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-F7 ">
                  <div>
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-primary-purple mb-6"
                    >
                      <path
                        opacity="0.2"
                        d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20 18C17.7938 18 16 19.7938 16 22V26C16 28.2063 17.7938 30 20 30H44C46.2063 30 48 28.2063 48 26V22C48 19.7938 46.2063 18 44 18H20ZM20 34C17.7938 34 16 35.7938 16 38V42C16 44.2063 17.7938 46 20 46H44C46.2063 46 48 44.2063 48 42V38C48 35.7938 46.2063 34 44 34H20Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                      Component-driven
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        You build slices, reusable website sections, as
                        components in your code.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full p-2 2xl:p-3 md:w-1/2 lg:w-1/3 grow">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-F7  ">
                  <div>
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-primary-orange mb-6"
                    >
                      <path
                        opacity="0.2"
                        d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M35.2 24.2V35.4H19.2V24.2H35.2ZM19.2 21C17.435 21 16 22.435 16 24.2V35.4C16 37.165 17.435 38.6 19.2 38.6H25.065L24.53 40.2H20.8C19.915 40.2 19.2 40.915 19.2 41.8C19.2 42.685 19.915 43.4 20.8 43.4H33.6C34.485 43.4 35.2 42.685 35.2 41.8C35.2 40.915 34.485 40.2 33.6 40.2H29.865L29.33 38.6H35.2C36.965 38.6 38.4 37.165 38.4 35.4V24.2C38.4 22.435 36.965 21 35.2 21H19.2ZM42.4 21C41.075 21 40 22.075 40 23.4V41C40 42.325 41.075 43.4 42.4 43.4H45.6C46.925 43.4 48 42.325 48 41V23.4C48 22.075 46.925 21 45.6 21H42.4ZM43.2 24.2H44.8C45.24 24.2 45.6 24.56 45.6 25C45.6 25.44 45.24 25.8 44.8 25.8H43.2C42.76 25.8 42.4 25.44 42.4 25C42.4 24.56 42.76 24.2 43.2 24.2ZM42.4 28.2C42.4 27.76 42.76 27.4 43.2 27.4H44.8C45.24 27.4 45.6 27.76 45.6 28.2C45.6 28.64 45.24 29 44.8 29H43.2C42.76 29 42.4 28.64 42.4 28.2ZM44 39.4C43.115 39.4 42.4 38.685 42.4 37.8C42.4 36.915 43.115 36.2 44 36.2C44.885 36.2 45.6 36.915 45.6 37.8C45.6 38.685 44.885 39.4 44 39.4Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                      Local
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Everything from creating new slices to previewing and
                        testing happens locally without affecting your live
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full p-2 2xl:p-3 md:w-1/2 lg:w-1/3 grow">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-F7 ">
                  <div>
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-primary-blue mb-6"
                    >
                      <path
                        opacity="0.2"
                        d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20 17.6572V44.1438C20 45.0153 20.7072 45.7153 21.5715 45.7153C22.0215 45.7153 22.4572 45.5224 22.7572 45.1796L28.6574 38.4293L32.8076 46.7368C33.3719 47.8654 34.7434 48.3225 35.872 47.7582C37.0006 47.1939 37.4577 45.8225 36.8934 44.6938L32.8433 36.5721H41.2793C42.1508 36.5721 42.8579 35.865 42.8579 34.9935C42.8579 34.5435 42.6651 34.1149 42.3293 33.8149L22.7572 16.4214C22.4501 16.15 22.0644 16 21.6572 16C20.7429 16 20 16.7429 20 17.6572Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                      Git-compatible
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        You and your team can develop simultaneously and merge
                        everything at the same time.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionProjects />
    </main>
  );
};

export default PageProjects;
