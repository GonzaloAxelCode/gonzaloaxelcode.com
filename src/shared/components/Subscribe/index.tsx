import { BoxBgOpacityClasses } from "@/shared/styles/custom-tw-classes";
import { cn } from "tailwind-cn";

const Subscribe = () => {
  return (
    <div className="container  ">
      <div
        className={cn(
          "flex justify-between  dark:text-white text-gray-15  items-center gap-12 relative p-12 rounded-xl object-cover",
          BoxBgOpacityClasses
        )}
        style={{
          backgroundImage: "url()",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col light-copy max-w-xl light-copy">
          <div className="text-primary-blue w-12 h-12">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M0 16C0 7.163 7.163 0 16 0h32c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16C7.163 64 0 56.837 0 48V16Z"
                fill="currentColor"
              />
              <path
                d="M19 20a3 3 0 0 0-1.8 5.4l13.6 10.2a2.006 2.006 0 0 0 2.4 0l13.6-10.2A3.002 3.002 0 0 0 45 20H19Zm-3 7v13c0 2.206 1.794 4 4 4h24c2.206 0 4-1.794 4-4V27L34.4 37.2a3.994 3.994 0 0 1-4.8 0L16 27Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium mt-6">
            Stay on Top of New Tools, Frameworks, and More
          </h2>
          <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-3">
            <p className="my-6 first:mt-0 last:mb-0 print:my-2">
              Research shows that we learn better by doing. Dive into a monthly
              tutorial with the Optimized Dev Newsletter that helps you decide
              which new web dev tools are worth adding to your stack.
            </p>
          </div>
          <div className="mt-6 ">
            <form className="flex flex-wrap">
              <label htmlFor="EMAIL" className="sr-only">
                Email Address <span className="asterisk">*</span>
              </label>
              <div className="min-w-[260px] mr-4 mt-4">
                <input
                  type="email"
                  id="EMAIL"
                  placeholder="mail@example.com"
                  className="rounded-lg border-2 px-4 py-2 leading-7 focus:outline-none focus:ring-4 focus:ring-tertiary-purple w-full dark:bg-gray-15 bg-gray-100 dark:border-gray-50 border-graywhite"
                  name="EMAIL"
                  defaultValue=""
                />
              </div>
              <div />
              <button
                className="text-blackbg rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-white text-gray-15 mt-4"
                type="submit"
                name="subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <img
          src="https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg"
          srcSet="https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg?width=640 640w, https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg?width=828 828w, https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg?width=1200 1200w, https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg?width=2048 2048w, https://prismic-main.cdn.prismic.io/prismic-main/843667ae-d988-49ea-81f6-544d7da7ec85_home_optimized_dev.svg?width=3840 3840w"
          className="grow max-w-sm min-w-[300px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Subscribe;
