"use client";
import ContentArticle from "./ContentArticle";
import TableOfContent from "./TableOfContent";

const BodyArticle = ({ content, article }: any) => {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:pt-10 max-w-[768px] lg:max-w-[1280px] mx-auto px-8">
      <div className="lg:col-span-8 lg:max-w-[46rem] pb-12 xl:pl-11 xl:pr-16 order-2 min-h-screen">
        <ContentArticle content={content} id={article.id} />
      </div>
      <TableOfContent content={content} id={article.id} />
    </div>
  );
};

export default BodyArticle;
