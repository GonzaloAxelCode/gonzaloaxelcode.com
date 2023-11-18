import Subscribe from "@/shared/components/Subscribe";

import { iconsMetadata } from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
import ArticlesByTopic from "./components/ArticlesByTopic";
import BlogGridPresentation from "./components/BlogPresentation";
import ChooseTechStack from "./components/ChooseTechStack";
import LastestContent from "./components/LatestContent";

export const metadata: Metadata = {
  title: "Blog | Gonzalo Axel",
  description: "Blog personal profesional construido por mi.",
  openGraph: {
    title: "Blog | Gonzalo Axel",
    description: "Pagina profesional de blog.",
    siteName: "Gonzalo's Blog",
    url: "https://gonzaloaxelcode.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/ddksrkond/image/upload/v1700019246/SEO/banner1aboutme_nygjwy.png",
        width: 1366,
        height: 768,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  ...iconsMetadata,
};

const PageBlog = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full">
        <BlogGridPresentation />
      </section>
      <LastestContent />
      <ChooseTechStack />

      <ArticlesByTopic />
      <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto my-10 px-8">
        <Subscribe />
      </div>
    </main>
  );
};

export default PageBlog;
