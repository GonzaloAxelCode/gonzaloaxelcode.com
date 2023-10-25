import Subscribe from "@/shared/components/Subscribe";

import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import ArticlesByTopic from "./components/ArticlesByTopic";
import BlogGridPresentation from "./components/BlogPresentation";
import ChooseTechStack from "./components/ChooseTechStack";
import LastestContent from "./components/LatestContent";
export const metadata: Metadata = {
  ...defaultMetadata,
};
const PageBlog = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <BlogGridPresentation />
      <LastestContent />
      <ChooseTechStack />
      <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <Subscribe />
      </div>
      <ArticlesByTopic />
    </main>
  );
};

export default PageBlog;
