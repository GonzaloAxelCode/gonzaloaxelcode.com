
"use client"

import extractInfoArticle from "@/shared/hooks/extract-info-article";
import Title from "@/shared/UIComponents/Base/Title";

const HeaderAcademyTopic = ({article}) => {
    const { tags, title, description, category, createdAt, cover } =
    extractInfoArticle(article);
  return (
    <div className="container py-16 lg:py-24">
  <div className="mx-auto text-center flex flex-col items-center relative z-10">
    <span className="font-bold text-base md:text-md mb-4 text-primary-purple">
     {category}
    </span>
    <Title>
          {title}
    </Title>
    <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify max-w-3xl mx-auto mt-4 lg:mt-6">
      <p className="my-6 first:mt-0 last:mb-0 print:my-2 text-gray-50">
        {description}
      </p>
    </div>
  </div>
 

</div>
  )
}

export default HeaderAcademyTopic