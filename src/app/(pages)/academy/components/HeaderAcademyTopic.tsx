
"use client"

import extractInfoArticle from "@/shared/hooks/extract-info-article";

const HeaderAcademyTopic = ({article}) => {
    const { tags, title, description, category, createdAt, cover } =
    extractInfoArticle(article);
  return (
    <div className="container py-16 mx-auto lg:py-24">
  <div className="mx-auto text-center flex flex-col items-center relative z-10">
    <span className="font-bold text-base md:text-md mb-4 text-primary-purple">
     {category}
    </span>
    
     <p className="mb-5 px-5 lg:px-24 text-2xl sm:text-3xl md:text-4xl font-headings text-gray-A4" style={{
                  letterSpacing: "-.025em",
                  lineHeight: 1.083,
                }}>
                  <strong>
                    {title}
                  </strong>
                </p>
    <div className="font-copy px-5 text-sm lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify max-w-3xl mx-auto lg:mt-3">
      <p className="my-6 first:mt-0 last:mb-0 print:my-2 opacity-80">
        {description}
      </p>
    </div>
  </div>
 

</div>
  )
}

export default HeaderAcademyTopic