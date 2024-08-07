"use client";

import siteMetadata from "@/shared/settings/sitemetdata";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="text-sm lg:px-5 text-[#363D4E] dark:text-neutral-200  mx-auto border-t border-neutral-300/10">
        <div className="px-5 pt-9 flex flex-col lg:flex-row justify-between items-center lg:items-end ">
          <div className="relative">
            <img
              src={siteMetadata.logoUrl}
              className="filter dark:invert object-contain h-10 w-10"
              alt=""
            />{" "}
            <span>Gonzalo Axel - Fullstack junior developer.</span>
            <p className="mt-3 hidden lg:block max-w-[342px]">
              El equilibrio entre forma y función en desarrollo fullstack.
            </p>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap">
            <a
              className="hidden lg:block -mx-1 px-1"
              href="tel:+1 (201) 500-2007"
            >
              +51 (954)-399-179 {"  "}Peru
            </a>
            <a
              className="hidden lg:block -mx-1 px-1"
              href="mailto:hello@betterstack.com"
            >
              gonzaloaxelh@gmail.com
            </a>
            <div className="hidden lg:block h-4 border-l border-neutral-300/10" />
            <div className="hidden lg:flex">
              <div className="flex gap-4 text-neutral-300">
                <a
                  aria-label="Better Stack on LinkedIn"
                  href="https://www.linkedin.com/company/betterstack"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  <svg width={16} height={17}>
                    <use href="/assets/v2/linkedin-4f511cfd40812cf617fa6ca9fbeff362681a975a1f4f911261bdbeaa2b1cbe19.svg#root" />
                  </svg>
                </a>
                <a
                  aria-label="Better Stack on Twitter"
                  href="https://twitter.com/betterstackhq"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  <svg width={16} height={16}>
                    <use href="/assets/v2/twitter-c4218c9e217942ebbf4db83a3dec654ce97a94806c3d0fe7ebe31d7d7d2aa9b9.svg#root" />
                  </svg>
                </a>
                <a
                  aria-label="Better Stack on Github"
                  href="https://github.com/BetterStackHQ/"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  <svg width={16} height={17}>
                    <use href="/assets/v2/github-e74d48ed6bd519eddfaac1a76a313eed359b3ab311dccab980003682a3d3a05e.svg#root" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-2 lg:mx-3 mt-5 py-3 lg:border-t flex flex-col lg:flex-row justify-between items-center border-neutral-300/10 dark:border-[#1F2433]/70 text-[12px] leading-[18px]">
          <div className="flex items-center gap-6 whitespace-nowrap dark:text-neutral-300">
            <Link className="-mx-1 px-1 hover:underline" href="/">
              Inicio
            </Link>
            <Link className="-mx-1 px-1 hover:underline" href="/blog">
              Blog
            </Link>
            <Link className="-mx-1 px-1 hover:underline" href="/proyectos">
              Proyectos
            </Link>
            <Link className="-mx-1 px-1 hover:underline" href="/">
              Sobre mi
            </Link>
   <Link className="-mx-1 px-1 hover:underline" href="/services">
              Servicios
            </Link>
            <Link
              className=" -mx-1 px-1 hover:underline"
              href="/academy"
           
            >
             
              Academy
            </Link>
          </div>
          <div className="mt-8 mb-2 flex lg:hidden">
            <div className="flex gap-4 text-neutral-300">
              <a
                aria-label="Better Stack on LinkedIn"
                href="https://www.linkedin.com/company/betterstack"
                rel="nofollow noopener"
                target="_blank"
              >
                <svg width={16} height={17}>
                  <use href="/assets/v2/linkedin-4f511cfd40812cf617fa6ca9fbeff362681a975a1f4f911261bdbeaa2b1cbe19.svg#root" />
                </svg>
              </a>
              <a
                aria-label="Better Stack on Twitter"
                href="https://twitter.com/betterstackhq"
                rel="nofollow noopener"
                target="_blank"
              >
                <svg width={16} height={16}>
                  <use href="/assets/v2/twitter-c4218c9e217942ebbf4db83a3dec654ce97a94806c3d0fe7ebe31d7d7d2aa9b9.svg#root" />
                </svg>
              </a>
              <a
                aria-label="Better Stack on Github"
                href="https://github.com/BetterStackHQ/"
                rel="nofollow noopener"
                target="_blank"
              >
                <svg width={16} height={17}>
                  <use href="/assets/v2/github-e74d48ed6bd519eddfaac1a76a313eed359b3ab311dccab980003682a3d3a05e.svg#root" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center text-neutral-600">
            © 2023 Gonzalo Axel. All rights reserved
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="root"
              fill="none"
              height={15}
              viewBox="0 0 14 15"
              width={14}
              className="ml-2 transition hover:-rotate-[15deg] hidden lg:inline"
            >
              <mask
                id="a"
                fill="#000"
                height={14}
                maskUnits="userSpaceOnUse"
                width={14}
                x=".84082"
                y=".910156"
              >
                <path d="m.84082.910156h14v14h-14z" fill="#fff" />
                <path
                  clipRule="evenodd"
                  d="m12.4541 1.91016h-4.37651v.54686h-.54823v.54771 1.85936 1.2038h-.54617v.54725h-.87535v.54642h-.87576v.54777h-.54616v.54551h-.0011-.54589-.54734v-.65488h-.54706v2.84474h.54616v.6549h.54824v.547h.54699v.4392.6557.5469.4376.0003h.65647v-.0003h.43765v-.4376h-.43765v-.5469h.43765v-.6557h.54706v-.5478h.65609v.5472h.43768v.1982h1.09412v-.4377h-.54709v-.8541h.54701v-.5472h.54712v-.87494h.54616v-1.86076h.65821v.43832h.547v-.54706h-.0011v-.43832h-1.20411v-1.2027h.65671v-1.09465h2.1892v-.0002h.5459v-2.40707h-.5459zm-9.41064 5.25148h-.54617v-1.20358h-.65647v3.50119h.54616v.43769h.65648zm7.22294-1.74985h1.6412v.54706h-1.6412zm-1.62526-2.63729h.00042v-.00005h.80045v.00013h.26677v1.06726h-.26682v-.00107h-.8004v-.26582h-.00042zm.26682.79945h.534v-.53268h-.534z"
                  fill="#000"
                  fillRule="evenodd"
                />
              </mask>
              <path
                d="m8.07759 1.91016v-.952682h-.95268v.952682zm4.37651 0h.9527v-.952682h-.9527zm-4.37651.54686v.95268h.95268v-.95268zm-.54823 0v-.95268h-.95268v.95268zm0 3.61087v.95268h.95268v-.95268zm-.54617 0v-.95268h-.95267v.95268zm0 .54725v.95268h.95268v-.95268zm-.87535 0v-.95268h-.95267v.95268zm0 .54642v.95268h.95268v-.95268zm-.87576 0v-.95268h-.95268v.95268zm0 .54777v.95268h.95268v-.95268zm-.54616 0v-.95268h-.95268v.95268zm0 .54551v.95268h.95268v-.95268zm-1.09433 0h-.95268v.95268h.95268zm0-.65488h.95268v-.95268h-.95268zm-.54706 0v-.95268h-.95268v.95268zm0 2.84474h-.95268v.9527h.95268zm.54616 0h.95268v-.9527h-.95268zm0 .6549h-.95268v.9526h.95268zm.54824 0h.95268v-.9527h-.95268zm0 .547h-.95268v.9527h.95268zm.54699 0h.95268v-.9527h-.95268zm0 2.0797h-.95268v.9527h.95268zm.65647 0v.9527h.95268v-.9527zm0-.0003v-.9526h-.95268v.9526zm.43765 0v.9527h.95268v-.9527zm0-.4376h.95268v-.9527h-.95268zm-.43765 0h-.95268v.9527h.95268zm0-.5469v-.9527h-.95268v.9527zm.43765 0v.9527h.95268v-.9527zm0-.6557v-.9527h-.95268v.9527zm.54706 0v.9527h.95268v-.9527zm0-.5478v-.9526h-.95268v.9526zm.65609 0h.95268v-.9526h-.95268zm0 .5472h-.95267v.9527h.95267zm.43768 0h.95268v-.9527h-.95268zm0 .1982h-.95268v.9526h.95268zm1.09412 0v.9526h.95268v-.9526zm0-.4377h.95268v-.9527h-.95268zm-.54709 0h-.95267v.9527h.95267zm0-.8541v-.9527h-.95267v.9527zm.54701 0v.9527h.95268v-.9527zm0-.5472v-.9527h-.95268v.9527zm.54712 0v.9527h.95267v-.9527zm0-.87494v-.95267h-.95268v.95267zm.54616 0v.95264h.95271v-.95264zm0-1.86076v-.95268h-.95268v.95268zm.65821 0h.9527v-.95268h-.9527zm0 .43832h-.9527v.95268h.9527zm.547 0v.95268h.9527v-.95268zm0-.54706h.9527v-.95268h-.9527zm-.0011 0h-.95264v.95268h.95264zm0-.43832h.9527v-.95268h-.9527zm-1.20411 0h-.95268v.95268h.95268zm0-1.2027v-.95268h-.95268v.95268zm.65671 0v.95268h.9527v-.95268zm0-1.09465v-.95268h-.95267v.95268zm2.1892 0v.95267h.9527v-.95267zm0-.0002v-.95268h-.9527v.95268zm.5459 0v.95267h.9526v-.95267zm0-2.40707h.9526v-.95268h-.9526zm-.5459 0h-.9527v.95268h.9527zm-9.95681 4.70462h-.95268v.95268h.95268zm.54617 0h.95267v-.95268h-.95267zm-.54617-1.20358h.95268v-.95268h-.95268zm-.65647 0v-.95268h-.952678v.95268zm0 3.50119h-.952678v.95265h.952678zm.54616 0h.95268v-.95268h-.95268zm0 .43769h-.95268v.95266h.95268zm.65648 0v.95266h.95267v-.95266zm8.86414-4.48515h.9526v-.95268h-.9526zm-1.6412 0v-.95268h-.9527v.95268zm1.6412.54706v.95268h.9526v-.95268zm-1.6412 0h-.9527v.95268h.9527zm-1.62484-3.18435v.95268h.95268v-.95268zm-.00042 0v-.95268h-.95267v.95268zm.00042-.00005v-.95268h-.95268v.95268zm.80045 0h.95269v-.95268h-.95269zm0 .00013h-.95268v.95268h.95268zm.26677 0h.95272v-.95268h-.95272zm0 1.06726v.95268h.95272v-.95268zm-.26682 0h-.95268v.95268h.95268zm0-.00107h.95264v-.95268h-.95264zm-.8004 0h-.95268v.95267h.95268zm0-.26582h.95268v-.95268h-.95268zm-.00042 0h-.95267v.95268h.95267zm.26682-.001h-.95268v.95268h.95268zm.534 0v.95268h.95264v-.95268zm0-.53268h.95264v-.95268h-.95264zm-.534 0v-.95268h-.95268v.95268zm-.83037-.17844h4.37651v-1.905352h-4.37651zm.95268-.40581v-.54686h-1.90536v.54686zm-1.50091.95268h.54823v-1.90536h-.54823zm.95268-.40497v-.54771h-1.90536v.54771zm0 1.85936v-1.85936h-1.90536v1.85936zm0 1.2038v-1.2038h-1.90536v1.2038zm-1.49885.95268h.54617v-1.90536h-.54617zm.95268-.40543v-.54725h-1.90535v.54725zm-1.82803.95268h.87535v-1.90536h-.87535zm.95268-.40626v-.54642h-1.90535v.54642zm-1.82844.95268h.87576v-1.90536h-.87576zm.95268-.40491v-.54777h-1.90536v.54777zm-1.49884.95268h.54616v-1.90536h-.54616zm.95268-.40717v-.54551h-1.90536v.54551zm-.95378.95268h.0011v-1.90535h-.0011zm-.54589 0h.54589v-1.90535h-.54589zm-.54734 0h.54734v-1.90535h-.54734zm-.95268-1.60756v.65488h1.90536v-.65488zm.40562.95268h.54706v-1.90536h-.54706zm.95268 1.89206v-2.84474h-1.90536v2.84474zm-.40652-.9527h-.54616v1.9054h.54616zm.95268 1.6076v-.6549h-1.90536v.6549zm-.40444-.9527h-.54824v1.9053h.54824zm.95268 1.4997v-.547h-1.90536v.547zm-.40569-.9527h-.54699v1.9054h.54699zm.95268 1.3919v-.4392h-1.90536v.4392zm0 .6557v-.6557h-1.90536v.6557zm0 .5469v-.5469h-1.90536v.5469zm0 .4376v-.4376h-1.90536v.4376zm0 .0003v-.0003h-1.90536v.0003zm-.29621-.9526h-.65647v1.9053h.65647zm-.95268.9523v.0003h1.90536v-.0003zm1.39033-.9526h-.43765v1.9053h.43765zm-.95268.515v.4376h1.90536v-.4376zm.51503.9527h.43765v-1.9054h-.43765zm-.95268-1.4996v.5469h1.90536v-.5469zm1.39033-.9527h-.43765v1.9054h.43765zm-.95268.297v.6557h1.90536v-.6557zm1.49974-.9527h-.54706v1.9054h.54706zm-.95268.4049v.5478h1.90536v-.5478zm1.60877-.9526h-.65609v1.9053h.65609zm.95268 1.4998v-.5472h-1.90535v.5472zm-.515-.9527h-.43768v1.9054h.43768zm.95268 1.1509v-.1982h-1.90536v.1982zm.14144-.9527h-1.09412v1.9053h1.09412zm-.95268.515v.4377h1.90536v-.4377zm.40559.9527h.54709v-1.9054h-.54709zm-.95267-1.8068v.8541h1.90535v-.8541zm1.49968-.9527h-.54701v1.9054h.54701zm-.95268.4055v.5472h1.90536v-.5472zm1.4998-.9527h-.54712v1.9054h.54712zm-.95268.07776v.87494h1.90535v-.87494zm1.49884-.95267h-.54616v1.90531h.54616zm-.95268-.90809v1.86076h1.90539v-1.86076zm1.61089-.95268h-.65821v1.90536h.65821zm.9527 1.391v-.43832h-1.9054v.43832zm-.4057-.95268h-.547v1.90536h.547zm-.95264.40562v.54706h1.90534v-.54706zm.95154.95268h.0011v-1.90536h-.0011zm-.95264-1.391v.43832h1.90534v-.43832zm-.25147.95268h1.20411v-1.90536h-1.20411zm-.95268-2.15538v1.2027h1.90539v-1.2027zm1.60939-.95268h-.65671v1.90536h.65671zm-.95267-.14197v1.09465h1.90537v-1.09465zm3.14187-.95268h-2.1892v1.90535h2.1892zm-.9527.95248v.0002h1.9054v-.0002zm1.4986-.95268h-.5459v1.90535h.5459zm-.9527-1.45439v2.40707h1.9053v-2.40707zm.4068.95268h.5459v-1.90536h-.5459zm-.9527-1.49954v.54686h1.9054v-.54686zm-9.00411 6.20416h.54617v-1.90536h-.54617zm-.95268-2.15626v1.20358h1.90536v-1.20358zm.29621.95268h.65647v-1.90536h-.65647zm.95268 2.54851v-3.50119h-1.905358v3.50119zm-.40652-.95268h-.54616v1.90533h.54616zm.95268 1.39037v-.43769h-1.90536v.43769zm-.2962-.95268h-.65648v1.90534h.65648zm-.95268-1.78262v2.7353h1.90535v-2.7353zm9.81682-2.70253h-1.6412v1.90536h1.6412zm.9526 1.49974v-.54706h-1.9053v.54706zm-2.5938.95268h1.6412v-1.90536h-1.6412zm-.9527-1.49974v.54706h1.9054v-.54706zm-.67214-3.58997h-.00042v1.90536h.00042zm-.95268.95263v.00005h1.90536v-.00005zm1.75313-.95268h-.80045v1.90536h.80045zm.95269.95281v-.00013h-1.90537v.00013zm-.68592-.95268h-.26677v1.90536h.26677zm.95272 2.01994v-1.06726h-1.9054v1.06726zm-1.21954.95268h.26682v-1.90536h-.26682zm-.95268-.95375v.00107h1.90532v-.00107zm.95268-.95268h-.8004v1.90535h.8004zm.15228.95268v-.26582h-1.90536v.26582zm-.9531.68686h.00042v-1.90536h-.00042zm-.95267-1.75313v.80045h1.90535v-.80045zm1.21949 1.75213h.534v-1.90536h-.534zm-.41868-1.48536v.53268h1.90532v-.53268zm.41868.95268h.534v-1.90536h-.534zm.95268-.42v-.53268h-1.90536v.53268z"
                fill="#646e87"
                mask="url(#a)"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
