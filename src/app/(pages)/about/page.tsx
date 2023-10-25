
import defaultMetadata from "@/shared/settings/default-metadata";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...defaultMetadata,
};
const PageAbout = () => {
  return (
    <main className="w-full">
      <section className="relative overflow-hidden  max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
        <div className="container items-center relative z-10 py-16 lg:py-16 2xl:py-20">
          <div className="mx-auto flex flex-col ">
            <span className="font-bold text-base md:text-md mb-4 text-primary-orange">
              Hola, soy Gonzalo Axel
            </span>
            <h1 className="font-headings tracking-tight scroll-mt-[120px] text-6xl lg:text-7xl 2xl:text-8xl font-bold title-limiter leading-title">
              Desarrollador de software, programador junior y apasionado porla
              tecnologia.
            </h1>
            <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6 max-w-xl text-[#505050]">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                Soy Gonzalo Axel, un apasionado desarrollador web en constante
                crecimiento y formación. Mi objetivo es convertirme en un
                destacado creador de software web, contribuyendo con soluciones
                innovadoras y eficientes en el mundo digital.
              </p>
            </div>
            <nav className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10 ">
              <a
                target=""
                className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white"
                rel="noreferrer"
                href="https://prismic.io/try"
              >
                Ver mis projectos
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="w-full  py-10 md:py-16 2xl:py-20 overflow-hidden transition-opacity duration-500 light-copy ">
        <div className=" max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <h2 className="font-headings tracking-tight scroll-mt-[120px] text-md-tight 2xl:text-lg font-medium">
            7,107 developers and CTOs are empowering their marketing team with
            Prismic
          </h2>
          <div className="flex flex-wrap items-center gap-y-6 gap-x-6 lg:gap-x-10 mt-8 2xl:mt-14 first:mt-0 justify-start md:flex-nowrap md:justify-between">
            <div className="">
              <svg
                width={147}
                height={39}
                viewBox="0 0 147 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-h-10"
              >
                <path
                  d="M53.8977 29.1907H57.2169L56.6538 26.6125V11.291H53.4828V18.285C52.5345 17.1885 51.2009 16.5365 49.6599 16.5365C46.4889 16.5365 44.0292 19.174 44.0292 22.997C44.0292 26.8495 46.4889 29.4574 49.6599 29.4574C51.2306 29.4574 52.5938 28.7758 53.5421 27.6201L53.8977 29.1907ZM116.606 19.9742C117.258 19.9742 117.851 20.152 118.384 20.5372L119.895 17.1588C119.184 16.7143 118.384 16.5365 117.584 16.5365C116.161 16.5365 114.946 17.1885 114.205 18.4035L113.879 16.8328H110.62L111.153 19.2629V29.2204H114.324V21.3077C114.739 20.478 115.539 19.9742 116.606 19.9742ZM125.882 26.1383C124.044 26.1383 122.681 24.9233 122.681 23.0266C122.681 21.1003 124.044 19.9149 125.882 19.9149C127.749 19.9149 129.082 21.1003 129.082 23.0266C129.082 24.8936 127.749 26.1383 125.882 26.1383ZM47.1113 22.997C47.1113 21.0707 48.4745 19.8853 50.3119 19.8853C52.1789 19.8853 53.5125 21.0707 53.5125 22.997C53.5125 24.8936 52.1789 26.1087 50.3119 26.1087C48.4745 26.1383 47.1113 24.8936 47.1113 22.997ZM139.959 26.1383C138.121 26.1383 136.758 24.9233 136.758 23.0266C136.758 21.1003 138.121 19.9149 139.959 19.9149C141.826 19.9149 143.159 21.1003 143.159 23.0266C143.129 24.8936 141.796 26.1383 139.959 26.1383ZM64.922 19.7074C66.552 19.7074 67.6189 20.478 67.9745 21.9005H61.8696C62.1956 20.4483 63.2921 19.7074 64.922 19.7074ZM102.826 19.7074C104.455 19.7074 105.522 20.478 105.878 21.9005H99.7731C100.158 20.4483 101.225 19.7074 102.826 19.7074ZM87.3559 29.1907H92.4532L95.7723 16.7736H92.305L89.9046 26.8495L87.4745 16.8032H84.0664L87.3559 29.1907ZM79.2062 29.1907H82.3772V16.7736H79.2062V29.1907ZM65.3962 29.4278C67.1743 29.4278 68.8932 28.924 70.3453 28.0053L69.1303 25.2789C68.0041 25.9012 66.7002 26.2272 65.4258 26.2272C63.7663 26.2272 62.6105 25.5752 62.0771 24.3602H71.0269C71.1158 23.886 71.1751 23.4711 71.1751 22.9081C71.1751 19.0555 68.5079 16.5068 64.9813 16.5068C61.3955 16.5068 58.7876 19.1147 58.7876 22.9673C58.7579 26.9088 61.3658 29.4278 65.3962 29.4278ZM146.212 22.997C146.212 19.1444 143.544 16.5365 139.959 16.5365C136.343 16.5365 133.705 19.174 133.705 22.997C133.705 26.8199 136.373 29.4574 139.959 29.4574C143.544 29.4574 146.212 26.8495 146.212 22.997ZM103.27 29.4574C105.048 29.4574 106.767 28.9833 108.219 28.035L107.004 25.3085C105.878 25.9308 104.574 26.2568 103.3 26.2568C101.64 26.2568 100.484 25.6049 99.9509 24.3898H108.901C108.99 23.9157 109.049 23.5008 109.049 22.9377C109.049 19.0851 106.382 16.5365 102.855 16.5365C99.2693 16.5365 96.6614 19.1444 96.6614 22.997C96.6614 26.9681 99.2397 29.4574 103.27 29.4574ZM125.882 29.4574C129.497 29.4574 132.135 26.8199 132.135 22.997C132.135 19.174 129.468 16.5365 125.882 16.5365C122.266 16.5365 119.629 19.174 119.629 22.997C119.629 26.8199 122.266 29.4574 125.882 29.4574ZM73.1903 29.1907H76.3613V11.291H73.1903V29.1907ZM80.8065 15.0843C81.9031 15.0843 82.7921 14.1953 82.7921 13.0691C82.7921 11.943 81.9327 11.054 80.8065 11.054C79.6804 11.054 78.7913 11.943 78.7913 13.0691C78.7913 14.1953 79.6508 15.0843 80.8065 15.0843ZM26.3073 0L24.4996 17.1884L21.4175 2.69681L11.6971 4.74164L14.7496 19.2333L0.761719 22.1968L3.25108 33.7546L27.878 39L33.5087 26.405L36.1759 1.03723L26.3073 0ZM18.5132 24.9529C18.0094 25.4271 17.3575 25.3678 16.6166 25.1307C15.9053 24.8936 15.609 24.0638 15.8461 22.997C16.0535 22.2264 16.9722 22.1079 17.476 22.1079C17.6538 22.1079 17.8316 22.1375 18.0094 22.2264C18.3354 22.3746 18.8985 22.7006 19.017 23.1748C19.1948 23.886 19.017 24.4787 18.5132 24.9529ZM25.6553 25.7234C25.2701 26.3754 24.3217 26.4643 23.3438 25.9901C22.6918 25.6641 22.6918 24.8936 22.7807 24.3898C22.8104 24.1231 22.9289 23.8564 23.1067 23.6489C23.3438 23.3526 23.729 22.9673 24.1439 22.9673C24.8848 22.9377 25.4775 23.2637 25.8331 23.8564C26.1888 24.4491 26.011 25.1011 25.6553 25.7234Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="">
              <svg
                width={117}
                height={39}
                viewBox="0 0 117 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-h-10"
              >
                <path
                  d="M49.8722 20.5008C49.8722 25.9798 45.5859 30.0172 40.3257 30.0172C35.0655 30.0172 30.7793 25.9798 30.7793 20.5008C30.7793 14.9832 35.0655 10.9844 40.3257 10.9844C45.5859 10.9844 49.8722 14.9832 49.8722 20.5008ZM45.6932 20.5008C45.6932 17.0769 43.209 14.7343 40.3257 14.7343C37.4425 14.7343 34.9583 17.0769 34.9583 20.5008C34.9583 23.8903 37.4425 26.2673 40.3257 26.2673C43.209 26.2673 45.6932 23.886 45.6932 20.5008Z"
                  fill="currentColor"
                />
                <path
                  d="M70.462 20.4969C70.462 25.9759 66.1758 30.0133 60.9156 30.0133C55.6554 30.0133 51.3691 25.9759 51.3691 20.4969C51.3691 14.9835 55.6554 10.9805 60.9156 10.9805C66.1758 10.9805 70.462 14.9793 70.462 20.4969ZM66.2831 20.4969C66.2831 17.073 63.7988 14.7304 60.9156 14.7304C58.0323 14.7304 55.5481 17.073 55.5481 20.4969C55.5481 23.8864 58.0323 26.2634 60.9156 26.2634C63.7988 26.2634 66.2831 23.8821 66.2831 20.4969Z"
                  fill="currentColor"
                />
                <path
                  d="M90.2024 11.5593V28.6442C90.2024 35.6721 86.0577 38.5425 81.1579 38.5425C76.5456 38.5425 73.7696 35.4576 72.7227 32.9348L76.3611 31.4202C77.009 32.9691 78.5965 34.7969 81.1536 34.7969C84.29 34.7969 86.2336 32.8618 86.2336 29.2192V27.8505H86.0877C85.1524 29.0046 83.3504 30.0129 81.0764 30.0129C76.3182 30.0129 71.959 25.8683 71.959 20.5351C71.959 15.1634 76.3182 10.9844 81.0764 10.9844C83.3461 10.9844 85.1481 11.9927 86.0877 13.1125H86.2336V11.5636H90.2024V11.5593ZM86.5297 20.5351C86.5297 17.1842 84.2943 14.7343 81.4497 14.7343C78.5664 14.7343 76.1508 17.1842 76.1508 20.5351C76.1508 23.8517 78.5664 26.2673 81.4497 26.2673C84.2943 26.2673 86.5297 23.8517 86.5297 20.5351Z"
                  fill="currentColor"
                />
                <path
                  d="M96.7459 1.54297V29.4315H92.6699V1.54297H96.7459Z"
                  fill="currentColor"
                />
                <path
                  d="M112.631 23.6294L115.874 25.7918C114.827 27.3407 112.305 30.0094 107.945 30.0094C102.539 30.0094 98.502 25.8304 98.502 20.493C98.502 14.8338 102.574 10.9766 107.478 10.9766C112.416 10.9766 114.832 14.9067 115.621 17.0305L116.055 18.1117L103.333 23.3805C104.307 25.2898 105.822 26.2638 107.945 26.2638C110.074 26.2638 111.549 25.2169 112.631 23.6294ZM102.647 20.2055L111.15 16.6744C110.683 15.4859 109.275 14.6578 107.619 14.6578C105.496 14.6578 102.539 16.5328 102.647 20.2055Z"
                  fill="currentColor"
                />
                <path
                  d="M15.3482 18.0225V13.9851H28.9535C29.0865 14.6888 29.1551 15.5211 29.1551 16.4221C29.1551 19.4512 28.3271 23.1969 25.6583 25.8656C23.0626 28.5686 19.746 30.0103 15.3525 30.0103C7.20903 30.0103 0.361328 23.3771 0.361328 15.2336C0.361328 7.0902 7.20903 0.457031 15.3525 0.457031C19.8575 0.457031 23.0669 2.22473 25.4781 4.52875L22.6292 7.37767C20.9001 5.75585 18.5575 4.49443 15.3482 4.49443C9.40149 4.49443 4.75055 9.28696 4.75055 15.2336C4.75055 21.1803 9.40149 25.9729 15.3482 25.9729C19.2054 25.9729 21.4021 24.424 22.8094 23.0167C23.9507 21.8754 24.7016 20.245 24.9976 18.0182L15.3482 18.0225Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="">
              <svg
                width={108}
                height={33}
                viewBox="0 0 108 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-h-10"
              >
                <path
                  d="M86.8042 27.335H21.7383L26.928 32.5247L86.8042 27.335Z"
                  fill="currentColor"
                />
                <path
                  d="M97.2486 24.0239V13.6445C97.2486 11.6983 98.6109 10.0766 100.557 10.0766C102.503 10.0766 103.865 11.6983 103.865 13.6445V24.0239H107.887V13.6445C107.887 9.36298 104.968 5.9248 100.687 5.9248C98.7406 5.9248 97.2486 7.02762 97.2486 7.02762V6.31403H93.2266V23.959H97.2486V24.0239Z"
                  fill="currentColor"
                />
                <path
                  d="M83.9518 5.8584C79.2811 5.8584 75.9727 9.94529 75.9727 15.135C75.9727 20.5842 80.1244 24.4116 84.341 24.4116C86.4818 24.4116 89.1415 23.698 91.412 20.4544L87.8441 18.3786C85.1195 22.4006 80.5136 20.3896 79.9947 16.3027H91.5418C92.5797 10.075 88.4928 5.8584 83.9518 5.8584ZM87.4549 12.8645H80.2542C81.0975 8.77761 86.6764 8.51812 87.4549 12.8645Z"
                  fill="currentColor"
                />
                <path
                  d="M74.6759 19.8058C74.2866 20.0653 73.8325 20.2599 73.3136 20.2599C72.6649 20.2599 71.4323 19.741 71.4323 18.1192V10.5292H74.8705V6.31261H71.4323V1.90137H67.4103V6.31261H65.2695V10.5292H67.4103V18.1192C67.4103 22.0763 70.3944 24.4117 73.3784 24.4117C74.4813 24.4117 76.0382 24.0225 77.2707 23.3089L74.6759 19.8058Z"
                  fill="currentColor"
                />
                <path
                  d="M59.885 6.31543V16.6948C59.885 18.641 58.5227 20.2628 56.5766 20.2628C54.6304 20.2628 53.2681 18.641 53.2681 16.6948V6.31543H49.2461V16.6948C49.2461 20.9763 52.1653 24.4145 56.4468 24.4145C58.3929 24.4145 59.885 23.3117 59.885 23.3117V23.9604H63.907V6.31543H59.885Z"
                  fill="currentColor"
                />
                <path
                  d="M41.7212 14.6175L48.5976 6.314H43.0186L38.1533 12.4768V0.475586H34.0664V24.0239H38.1533V16.7583L44.1215 24.0239H49.7004L41.7212 14.6175Z"
                  fill="currentColor"
                />
                <path
                  d="M27.7714 6.3125V7.09095C26.5389 6.3125 25.5009 5.8584 24.0089 5.8584C19.4679 5.8584 15.9648 10.0102 15.9648 15.135C15.9648 20.2598 19.403 24.4116 24.0089 24.4116C25.5009 24.4116 26.6037 23.9575 27.7714 23.179V23.9575H31.7934V6.3125H27.7714ZM23.944 20.1949C21.6735 20.1949 20.0517 17.9893 20.0517 15.1999C20.0517 12.4104 21.6735 10.2048 23.944 10.2048C26.2145 10.2048 27.7714 12.4104 27.7714 15.1999C27.8363 17.9893 26.2145 20.1949 23.944 20.1949Z"
                  fill="currentColor"
                />
                <path
                  d="M4.41976 24.0225V17.1461H7.33896L12.4638 23.9576H17.7184L11.4907 15.7189C13.4369 14.3567 14.6694 12.0862 14.6694 9.49131C14.6694 5.27467 11.2312 1.90137 7.07948 1.90137H0.203125V23.9576H4.41976V24.0225ZM4.41976 6.118H7.14435C9.02562 6.118 10.5825 7.67491 10.5825 9.55618C10.5825 11.4374 9.02562 12.9944 7.14435 12.9944H4.41976V6.118Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="">
              <svg
                width={76}
                height={30}
                viewBox="0 0 76 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-h-10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M75.8822 20.157C72.7063 25.5415 67.6766 23.9791 66.166 22.7558C65.5231 23.192 64.3958 24.1481 62.8926 24.0377C59.6913 23.8027 58.5449 19.2279 58.5449 19.2279C58.5679 19.2462 57.5913 19.5649 57.0635 19.5592C57.0567 20.9008 55.897 24.1056 52.7672 24.0646C49.2551 24.0188 48.5411 18.7864 48.5411 18.7864C48.5411 18.7864 48.1916 19.2717 46.8627 19.7551C46.9296 18.7244 46.8807 23.9077 42.6713 23.9839C39.3435 24.0442 38.4452 18.7057 38.4452 18.7057C38.4452 18.7057 37.8679 19.3054 36.7491 19.5134C36.8202 18.4659 36.7046 24.0015 32.4947 23.9839C29.6497 23.9721 28.6775 20.6954 28.7531 20.2406C28.8496 19.661 27.7916 24.0654 25.0281 23.9968C23.8877 23.9633 23.0375 23.1376 22.504 22.0368C21.7898 22.854 20.7529 23.9968 19.5897 23.9968C17.5017 23.9968 16.5812 22.2504 16.7371 17.2624C16.7504 16.6708 16.7077 16.4381 16.1196 16.3496C15.7666 16.2907 15.4051 16.1792 15.0226 16.1204C14.9 16.5295 13.8602 23.8637 10.2847 24.0029C9.08519 24.0496 8.4293 23.0105 7.89066 22.2393C7.06497 23.3316 5.97501 24.0377 4.42227 24.0377C1.79205 24.0377 0 21.9114 0 19.2885C0 16.6655 1.79205 14.5394 4.42227 14.5394C4.88732 14.5394 5.01787 14.6061 5.44272 14.73C4.569 6.77504 6.63238 5.53179 8.43739 5.53179C10.1703 5.53179 13.1308 9.55384 8.96512 19.7559C9.88998 22.7989 11.8838 22.6268 12.8419 16.3626C13.0369 15.0893 12.5155 13.371 13.3265 13.1312C14.809 12.6929 14.9663 14.0079 15.6614 14.227C16.3964 14.4585 16.8254 14.4359 17.531 14.5833C18.7367 14.8187 19.2072 15.4664 19.0603 16.909C18.8839 18.7343 18.5753 21.391 19.5162 21.7148C20.1947 21.95 21.4335 20.5429 21.6509 19.773C21.8682 19.0031 21.9136 18.7396 21.9329 18.1749C21.9623 16.968 21.9992 16.0833 22.205 15.1706C22.2931 14.8174 22.3935 14.5835 22.7931 14.5675C23.1219 14.5591 23.7232 14.4601 23.9879 14.6661C24.3407 14.9312 24.2966 15.2002 24.2561 15.9081C23.8458 26.0015 27.0038 20.9628 27.9454 16.9283C27.6101 12.3662 27.8403 5.61533 30.6991 5.5021C32.1859 5.44322 32.8432 6.63431 32.9155 7.52335C33.12 10.0343 31.9745 14.1937 30.468 16.9909C29.607 22.6984 34.2325 23.8269 34.9722 19.2712C33.762 18.6958 32.4541 16.3668 33.5184 15.2318C34.1156 14.5948 36.6015 15.5099 36.6422 17.5057C37.8616 17.1796 38.0244 16.4911 38.0413 16.6052C37.7061 12.0431 38.017 5.61539 40.876 5.50216C42.3626 5.44328 43.0198 6.63437 43.0921 7.52341C43.2966 10.0344 42.1511 14.1938 40.6448 16.991C39.7837 22.6984 44.4093 23.827 45.1488 19.2713C44.2528 19.0984 42.3614 16.6212 43.4527 15.2319C44.0359 14.4894 46.5127 16.0334 46.79 17.5718C47.9614 17.2403 48.1205 16.5737 48.1373 16.6859C47.802 12.124 48.1129 5.69624 50.9719 5.58301C52.4585 5.52413 53.1157 6.71522 53.188 7.60426C53.3925 10.1152 52.247 14.2747 50.7405 17.0719C49.8796 22.7794 54.5051 23.9077 55.2448 19.352C54.0135 19.147 52.2636 16.5314 53.672 15.1933C54.2347 14.6587 56.3848 16.0465 56.8881 17.6298C57.5874 17.6029 58.0227 17.3617 58.116 17.3374C56.9996 11.9818 57.8307 5.55588 60.9062 5.50224C62.5685 5.47327 64.1936 6.4009 63.4803 11.496C62.7994 16.3574 60.3519 18.3975 60.3576 18.4287C60.5 19.0111 61.7559 23.8851 64.9185 21.3134C64.7548 20.9427 64.5909 20.564 64.4993 20.1052C63.9751 17.4327 65.0047 14.4141 67.8032 13.9262C69.4066 13.6467 70.917 14.4273 71.1558 16.1872C71.5487 19.0669 68.9484 21.1524 67.9596 21.6048C67.5167 21.3532 71.9742 24.212 74.6196 18.4829C74.773 18.1558 74.9579 18.1835 75.1975 18.3521C75.3667 18.4712 76.3305 19.3842 75.8822 20.157ZM6.33552 18.5809C6.20092 18.1785 5.92469 17.2918 5.82701 16.9076C5.28905 16.4398 4.90507 16.3638 4.21455 16.3638C2.68 16.3638 1.77679 17.7826 1.77679 19.3125C1.77679 20.8423 2.76077 22.2613 4.29533 22.2613C5.6252 22.2613 6.63735 21.3571 6.94615 20.0771C6.73001 19.5781 6.5156 19.1195 6.33552 18.5809ZM8.39979 7.63753C7.32153 7.63753 6.95576 10.2097 7.02674 12.4041C7.08953 14.3441 7.63164 16.0521 7.91286 16.8174C7.98426 16.9133 7.971 16.8509 8.03474 16.9526C9.90694 12.8505 9.13041 7.63753 8.39979 7.63753ZM30.8531 7.71833C29.4595 7.5585 29.4685 13.3639 29.6415 14.6661C30.3653 13.5082 31.6226 8.03009 30.8531 7.71833ZM41.0297 7.71833C39.6361 7.5585 39.6451 13.3639 39.8182 14.6661C40.5419 13.5082 41.7993 8.03009 41.0297 7.71833ZM51.1257 7.7991C49.732 7.63927 49.741 13.4447 49.9141 14.747C50.6378 13.589 51.8952 8.11084 51.1257 7.7991ZM61.06 7.37849C58.8887 7.81451 59.3943 15.054 59.7241 16.3237C62.2817 12.8108 62.3344 7.24654 61.06 7.37849ZM69.1975 16.4254C69.0871 15.9638 68.5351 15.7171 68.1541 15.7779C67.0639 15.9268 66.0065 17.2846 66.4158 19.3518C66.5069 19.8122 66.7349 20.236 66.7312 20.2219C69.1711 18.585 69.3785 17.2951 69.1975 16.4254ZM23.2205 12.9696C22.9089 12.9696 22.6043 12.8773 22.3452 12.7042C22.0861 12.5311 21.8841 12.2851 21.7648 11.9973C21.6455 11.7094 21.6143 11.3926 21.6751 11.087C21.7358 10.7814 21.8859 10.5007 22.1062 10.2803C22.3265 10.06 22.6072 9.90989 22.9128 9.84909C23.2184 9.78829 23.5352 9.81948 23.8231 9.93873C24.111 10.058 24.357 10.2599 24.5301 10.519C24.7032 10.7781 24.7956 11.0827 24.7956 11.3943C24.7956 11.6011 24.7549 11.806 24.6757 11.9971C24.5966 12.1882 24.4806 12.3619 24.3343 12.5082C24.188 12.6544 24.0144 12.7705 23.8233 12.8496C23.6322 12.9288 23.4274 12.9696 23.2205 12.9696Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="">
              <svg
                width={434}
                height={120}
                viewBox="0 0 434 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-h-10"
              >
                <path
                  d="M396.454 47.7473V95.0075L396.61 95.0056C399.696 71.1324 413.426 55.5293 434 48.1016V0C410.343 4.24416 396.454 19.6291 396.454 47.7473Z"
                  fill="currentColor"
                />
                <path
                  d="M314.851 34.0334C311.989 33.2307 309.124 32.8294 306.651 32.8294C300.013 32.8294 296.108 36.0413 297.149 46.0822V48.3582H314.851V63.2124H297.149V118.374H278.667V63.2124H251.711V118.374H233.227V63.2124H225.157V48.3582H233.227V43.4047C233.227 23.5913 245.463 16.8974 257.698 16.8974C261.994 16.8974 266.289 17.7017 269.413 18.7722V34.0334C266.549 33.2307 263.685 32.8294 261.213 32.8294C254.574 32.8294 250.669 36.0413 251.711 46.0822V48.3582H278.667V43.4047C278.667 23.5913 290.902 16.8974 303.138 16.8974C307.433 16.8974 311.728 17.7017 314.851 18.7722V34.0334Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.4746 83.5675C72.4746 62.5486 87.0541 46.8855 107.619 46.8855C128.316 46.8855 143.544 61.2101 142.633 89.3239H90.9592C91.8691 97.8912 99.2893 104.05 108.791 104.05C116.861 104.05 122.457 100.167 125.191 94.679L138.951 102.375C133.508 112.567 122.057 119.713 108.66 119.713C87.5741 119.713 72.4746 105.254 72.4746 83.5675ZM107.619 62.1474C98.3785 62.1474 91.4791 67.904 90.8283 76.0696H123.89C123.5 67.904 116.861 62.1474 107.619 62.1474Z"
                  fill="currentColor"
                />
                <path
                  d="M20.0453 48.3586C31.8905 82.0944 35.4048 92.9386 36.9673 100.837C38.2681 92.0011 41.3924 81.4247 52.5858 48.3579H72.2412L46.2082 118.374H27.4646L0 48.3586H20.0453Z"
                  fill="currentColor"
                />
                <path
                  d="M216.826 48.3591H198.343V118.375H216.826V48.3591Z"
                  fill="currentColor"
                />
                <path
                  d="M170.294 69.8133V67.0793L168.283 48.3591H152.201V118.375H170.294V90.0021C170.294 75.2019 180.229 66.0233 191.131 66.0233V47.5557C178.331 48.8658 170.294 56.4452 170.294 69.8133Z"
                  fill="currentColor"
                />
                <path
                  d="M198.194 23.0679H216.975V38.3061H198.194V23.0679Z"
                  fill="currentColor"
                />
                <path
                  d="M389.88 120L352.334 88.1689V25.036L389.88 56.8671V120Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-gray-15 py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy">
        <div className="container flex flex-col md:flex-row gap-6 md:items-center  max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="md:w-1/2 order-2 md:order-first md:pr-14">
            <h2 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold mt-2 first:mt-0">
              Growth is at the core of our mentality
            </h2>
            <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-6 max-w-lg">
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                Our goal is to change the way that people succeed online, and
                we’re starting with how they achieve growth through their
                websites. But, for us, it doesn’t stop there.
              </p>
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                We grow through our own website. And even our internal culture
                encourages people to grow their careers by taking on new
                challenges.
              </p>
            </div>
            <nav className="flex items-center flex-wrap gap-4 mt-8" />
          </div>
          <figure className="md:w-1/2">
            <div className="border-2 border-gray-15 bg-gray-15 rounded-2xl overflow-hidden shadow-image-fix">
              <img
                alt="Picture of a team member in a coworking space"
                loading="lazy"
                width={1024}
                height={1024}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                srcSet="https://images.prismic.io/prismic-main/7170040e-e0b6-4fde-91f1-751be11c978d_aumary.jpg?auto=compress%2Cformat&rect=36%2C0%2C1152%2C1152&w=1080&fit=max 1x, https://images.prismic.io/prismic-main/7170040e-e0b6-4fde-91f1-751be11c978d_aumary.jpg?auto=compress%2Cformat&rect=36%2C0%2C1152%2C1152&w=2048&fit=max 2x"
                src="https://images.prismic.io/prismic-main/7170040e-e0b6-4fde-91f1-751be11c978d_aumary.jpg?auto=compress%2Cformat&rect=36%2C0%2C1152%2C1152&w=2048&fit=max"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="w-full text-gray-15 py-10 md:py-16 2xl:py-20 overflow-hidden dark-copy">
        <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="container md:grid md:grid-cols-12 md:gap-x-6">
            <div className="md:col-span-5 mb-10 md:mb-20 flex flex-col gap-6">
              <h2 className="font-headings tracking-tight scroll-mt-[120px] text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-title">
                Spend your time inventing, not reinventing
              </h2>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  Spend less time and budget on repetitive tasks and more on
                  creating exciting and bespoke solutions for your clients.
                  Whether it’s the initial website build or long-term
                  collaboration, Prismic helps you pack your offer with value
                  while building the work you’re proud of.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-7 md:mt-[35%] mb-10 md:-mb-32">
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted">
                <ul>
                  <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
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
                    Deliver beautiful websites and beautiful editing experiences
                    too
                  </li>
                  <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
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
                    Retain more clients with value-packed long-term
                    collaboration
                  </li>
                  <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple"
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
                    Increase word of mouth by giving your clients something to
                    talk about
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-12 gap-x-6">
              <img
                alt="Swile website"
                loading="lazy"
                width={816}
                height={768}
                decoding="async"
                data-nimg={1}
                className="rounded-2xl border-2 border-gray-15 relative z-10 bg-gray-15 shadow-image-fix col-span-4 col-start-2"
                srcSet="https://images.prismic.io/prismic-main/d6d716dd-ddb2-43be-a3f6-246b8be44837_www.swile.co_en.png?auto=compress%2Cformat&rect=0%2C0%2C1631%2C1535&w=828&fit=max 1x, https://images.prismic.io/prismic-main/d6d716dd-ddb2-43be-a3f6-246b8be44837_www.swile.co_en.png?auto=compress%2Cformat&rect=0%2C0%2C1631%2C1535&w=1920&fit=max 2x"
                src="https://images.prismic.io/prismic-main/d6d716dd-ddb2-43be-a3f6-246b8be44837_www.swile.co_en.png?auto=compress%2Cformat&rect=0%2C0%2C1631%2C1535&w=1920&fit=max"
                style={{ color: "transparent" }}
              />
              <div className="col-span-9 relative -mt-[9%]">
                <img
                  alt="Formations website"
                  loading="lazy"
                  width={1896}
                  height={1140}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-2xl border-2 border-gray-15 bg-gray-15 shadow-image-fix"
                  srcSet="https://images.prismic.io/prismic-main/9887494d-e037-48a3-9de5-595f79169ab1_formationscorp.com_.png?auto=compress%2Cformat&rect=0%2C0%2C3792%2C2280&w=1920&fit=max 1x, https://images.prismic.io/prismic-main/9887494d-e037-48a3-9de5-595f79169ab1_formationscorp.com_.png?auto=compress%2Cformat&rect=0%2C0%2C3792%2C2280&w=3840&fit=max 2x"
                  src="https://images.prismic.io/prismic-main/9887494d-e037-48a3-9de5-595f79169ab1_formationscorp.com_.png?auto=compress%2Cformat&rect=0%2C0%2C3792%2C2280&w=3840&fit=max"
                  style={{ color: "transparent" }}
                />
                <span className="font-headings block text-xs-flat font-medium text-gray-50 leading-4 mt-2 absolute max-w-[80%]">
                  Built by LORD, Studio Mega, and Hervé
                </span>
              </div>
              <img
                alt="KeepGrading website"
                loading="lazy"
                width={1030}
                height={1300}
                decoding="async"
                data-nimg={1}
                className="rounded-2xl border-2 border-gray-15 col-start-8 z-10 bg-gray-15 shadow-image-fix col-span-5 -mt-[78%]"
                srcSet="https://images.prismic.io/prismic-main/894fd838-946b-40ae-aee7-e70cbfc03bb8_www.keepgrading.com_+%281%29.png?auto=compress%2Cformat&rect=0%2C0%2C2060%2C2600&w=1080&fit=max 1x, https://images.prismic.io/prismic-main/894fd838-946b-40ae-aee7-e70cbfc03bb8_www.keepgrading.com_+%281%29.png?auto=compress%2Cformat&rect=0%2C0%2C2060%2C2600&w=3840&fit=max 2x"
                src="https://images.prismic.io/prismic-main/894fd838-946b-40ae-aee7-e70cbfc03bb8_www.keepgrading.com_+%281%29.png?auto=compress%2Cformat&rect=0%2C0%2C2060%2C2600&w=3840&fit=max"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-blackbgsection text-white py-10 md:py-16 2xl:py-20 overflow-hidden light-copy ">
        <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="text-center">
            <div className="">
              <h2 className="font-headings  tracking-tight scroll-mt-[120px] text-4xl lg:text-4xl 2xl:text-4xl font-bold mt-2 first:mt-0 title-limiter mx-auto">
                Lets build it together
              </h2>
            </div>
          </div>
          <div className="mt-8 2xl:mt-14 first:mt-0">
            <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 2xl:gap-6">
              <li className="row-span-1 col-span-1 order-1">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-1F text-white">
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
                      Follow progress
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        We’re always shipping new updates to Slice Machine. See
                        what’s new, what’s coming up, or submit an idea for a
                        new feature.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    rel="noreferrer"
                    href="https://prismic.io/progress"
                  >
                    Follow progress
                  </a>
                </div>
              </li>
              <li className="row-span-1 col-span-1 order-2 md:order-3">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-1F text-white">
                  <div>
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-primary-green mb-6"
                    >
                      <path
                        opacity="0.2"
                        d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.3176 25.3143C19.3176 21.6435 22.2927 18.6667 25.9634 18.6667C29.634 18.6667 32.6091 21.6435 32.6091 25.3143C32.6091 27.9712 31.0505 30.2646 28.7977 31.3287C30.057 31.4508 31.2392 31.8438 32.2829 32.4492C32.9199 32.8187 33.1368 33.6346 32.7674 34.2716C32.3979 34.9086 31.582 35.1254 30.945 34.756C30.067 34.2467 29.0473 33.9547 27.9555 33.9547H23.9712C20.6755 33.9547 18.0026 36.6264 18 39.9238H25.9634C26.6997 39.9238 27.2967 40.5207 27.2967 41.2571C27.2967 41.9935 26.6997 42.5904 25.9634 42.5904H17.9947C16.5246 42.5904 15.3333 41.3981 15.3333 39.9285C15.3333 35.4414 18.7532 31.7524 23.1286 31.3287C20.8759 30.2646 19.3176 27.9714 19.3176 25.3143ZM25.9634 21.3333C23.7663 21.3333 21.9843 23.1153 21.9843 25.3143C21.9843 27.5137 23.7659 29.2952 25.9634 29.2952C28.1604 29.2952 29.9424 27.5132 29.9424 25.3143C29.9424 23.1153 28.1604 21.3333 25.9634 21.3333Z"
                        fill="currentColor"
                      />
                      <path
                        d="M41.3621 36.4833H37.3778C33.3437 36.4833 30.0732 39.7549 30.0732 43.7904C30.0732 44.524 30.668 45.119 31.4013 45.119H47.3385C48.0719 45.119 48.6666 44.524 48.6666 43.7904C48.6666 39.7549 45.3962 36.4833 41.3621 36.4833ZM39.3699 34.4904C42.3038 34.4904 44.6823 32.111 44.6823 29.1761C44.6823 26.2412 42.3038 23.8619 39.3699 23.8619C36.4361 23.8619 34.0575 26.2412 34.0575 29.1761C34.0575 32.1114 36.4357 34.4904 39.3699 34.4904Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                      Share feedback
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Join our research panel and help shape Prismic directly.
                        Dive into usability tests, interviews, surveys, and
                        more.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    href="/research"
                  >
                    Join our research panel
                  </a>
                </div>
              </li>
              <li className="row-span-1 col-span-1 md:row-span-2 order-3 md:order-2">
                <div className="p-6 md:p-12 rounded-xl h-full flex flex-col bg-gray-1F text-white">
                  <div>
                    <div className="w-full mb-10 relative">
                      <svg viewBox="0 0 639 345" />
                      <img
                        loading="lazy"
                        width={639}
                        height={345}
                        decoding="async"
                        data-nimg={1}
                        className="scale-[1.2] h-auto w-full origin-bottom absolute bottom-0 left-0"
                        srcSet="https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=640 1x, https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=1920 2x"
                        src="https://prismic-main.cdn.prismic.io/prismic-main/37ae1a6e-e1a3-4057-b5a3-c18d1aac9de1_developers__community-scaled-down.svg?fit=max&w=1920"
                        style={{ color: "transparent" }}
                      />
                    </div>
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
                        d="M32 48C40.8375 48 48 40.8375 48 32C48 23.1625 40.8375 16 32 16C23.1625 16 16 23.1625 16 32C16 40.8375 23.1625 48 32 48ZM29.5 37H31V33H29.5C28.6688 33 28 32.3313 28 31.5C28 30.6688 28.6688 30 29.5 30H32.5C33.3313 30 34 30.6688 34 31.5V37H34.5C35.3313 37 36 37.6688 36 38.5C36 39.3313 35.3313 40 34.5 40H29.5C28.6688 40 28 39.3313 28 38.5C28 37.6688 28.6688 37 29.5 37ZM32 28C30.8938 28 30 27.1063 30 26C30 24.8938 30.8938 24 32 24C33.1063 24 34 24.8938 34 26C34 27.1063 33.1063 28 32 28Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h3 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
                      Build locally, connect globally
                    </h3>
                    <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-4">
                      <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                        Got questions? Have answers? Head over to our community
                        forum to meet developers from around the world. Learn
                        from them, help them with their projects, and start
                        building together.
                      </p>
                    </div>
                  </div>
                  <a
                    className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-white py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 mt-10 inline-block"
                    rel="noreferrer"
                    href="https://community.prismic.io/"
                  >
                    Join our community
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full text-white overflow-hidden light-copy my-8">
        <div className=" max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8">
          <div className="rounded-xl p-6 md:py-10 md:px-12 text-center bg-gray-1F">
            <div className="max-w-xl mx-auto">
              <h3 className="font-headings tracking-tight scroll-mt-[120px] text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium">
                Tight integrations with Next, Nuxt, and SvelteKit
              </h3>
              <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify copy-muted mt-6">
                <p className="my-6 first:mt-0 last:mb-0 print:my-2">
                  We offer an unmatched integration experience that goes beyond
                  simple data fetching. Slice Machine generates components and
                  data models within your projects environment, enabling you to
                  work more efficiently.
                </p>
              </div>
              <nav>
                <div className="flex gap-4 items-center justify-center mt-10">
                  <a
                    className="flex items-center gap-4 group rounded-xl font-bold overflow-hidden pr-5 bg-gray-30"
                    rel="noreferrer"
                    href="https://prismic.io/docs/nextjs"
                  >
                    <span className="h-12 w-12 sm:h-20 sm:w-20 block bg-gray-1F">
                      <span className="bg-opacity-20 h-12 w-12 sm:h-20 sm:w-20 p-3 sm:p-5 block bg-primary-blue">
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 sm:w-10 sm:h-10 transition-transform group-hover:scale-110"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M31.4837 36.3766C28.2338 38.6597 24.2734 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 25.9759 37.3791 31.3397 33.224 35.0045L28.2222 28.5615V11.9999H25.5557V25.1267L15.3653 11.9999H12.0003V27.9934H14.6923V15.4184L25.5557 29.4541V29.4999H25.5912L31.1113 36.6319C31.2364 36.5482 31.3605 36.4631 31.4837 36.3766Z"
                            fill="#59B5F8"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="flex items-center">
                      <span>Next.js</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-rotate-90 mt-0.5 w-6 h-6"
                      >
                        <path
                          d="m8 10 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-4 group rounded-xl font-bold overflow-hidden pr-5 bg-gray-30"
                    rel="noreferrer"
                    href="https://prismic.io/docs/nuxt"
                  >
                    <span className="h-12 w-12 sm:h-20 sm:w-20 block bg-gray-1F">
                      <span className="bg-opacity-20 h-12 w-12 sm:h-20 sm:w-20 p-3 sm:p-5 block bg-primary-green">
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 sm:w-10 sm:h-10 transition-transform group-hover:scale-110"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.6521 8.44526C16.5314 6.51826 13.7295 6.51823 12.6088 8.44526L0.394449 29.4469C-0.726294 31.3739 0.67463 33.7827 2.91611 33.7827H12.4513C11.4935 32.9456 11.1388 31.4975 11.8636 30.2551L21.1142 14.3981L17.6521 8.44526Z"
                            fill="#80EEC0"
                          />
                          <path
                            d="M25.3919 13.0516C26.3194 11.475 28.6382 11.475 29.5657 13.0516L39.6739 30.2347C40.6016 31.8114 39.4423 33.7822 37.5873 33.7822H17.3704C15.5154 33.7822 14.356 31.8114 15.2835 30.2347L25.3919 13.0516Z"
                            fill="#00DC82"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="flex items-center">
                      <span>Nuxt.js</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-rotate-90 mt-0.5 w-6 h-6"
                      >
                        <path
                          d="m8 10 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-4 group rounded-xl font-bold overflow-hidden pr-5 bg-gray-30"
                    rel="noreferrer"
                    href="https://prismic.io/docs/svelte"
                  >
                    <span className="h-12 w-12 sm:h-20 sm:w-20 block bg-gray-1F">
                      <span className="bg-opacity-20 h-12 w-12 sm:h-20 sm:w-20 p-3 sm:p-5 block bg-primary-pink">
                        <svg
                          width={200}
                          height={200}
                          viewBox="0 0 200 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 sm:w-10 sm:h-10 transition-transform group-hover:scale-110"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M91.3661 15.2591C115.852 -0.419746 149.718 6.88929 166.866 31.5512V31.6838C170.936 37.4107 173.827 43.8966 175.37 50.7612C176.913 57.6257 177.077 64.7313 175.852 71.6599C174.656 78.2731 172.143 84.5758 168.466 90.1895C173.838 100.482 175.643 112.281 173.593 123.719C172.365 130.495 169.748 136.94 165.911 142.646C162.074 148.353 157.099 153.194 151.302 156.867L108.3 184.296C83.8152 199.975 49.9481 192.666 32.8003 168.004C28.7279 162.279 25.8351 155.793 24.2919 148.928C22.7487 142.063 22.5862 134.957 23.8143 128.028C24.9974 121.414 27.5048 115.11 31.1845 109.498C25.8155 99.2001 24.0169 87.395 26.0732 75.9524C27.2922 69.1735 29.9042 62.7236 33.7426 57.0159C37.5809 51.3089 42.5612 46.4688 48.3654 42.8049L91.3661 15.2591ZM66.6885 169.346C73.246 171.792 80.3924 172.157 87.1627 170.39C90.2528 169.555 93.1994 168.254 95.9011 166.53L138.919 138.983C142.414 136.773 145.411 133.853 147.719 130.411C150.028 126.969 151.596 123.081 152.324 118.995C153.061 114.829 152.962 110.557 152.033 106.431C151.105 102.304 149.365 98.4047 146.915 94.9632C142.933 89.1875 137.282 84.7799 130.726 82.338C124.171 79.8949 117.028 79.5349 110.262 81.3063C107.167 82.1277 104.218 83.4303 101.523 85.1684L85.035 95.6758C84.2173 96.1891 83.3279 96.58 82.3976 96.8361C80.3701 97.3495 78.2362 97.232 76.278 96.4972C74.3197 95.7636 72.63 94.4474 71.4325 92.7254C70.694 91.6851 70.1683 90.5074 69.885 89.2617C69.6029 88.016 69.5683 86.7258 69.7835 85.4665C70.0062 84.2369 70.48 83.0679 71.1752 82.0325C71.8716 80.9971 72.7722 80.1175 73.8237 79.4495L116.842 51.9538C117.656 51.4335 118.546 51.0422 119.479 50.7936C121.497 50.2598 123.628 50.356 125.59 51.0696C127.551 51.7831 129.25 53.08 130.46 54.7878C131.78 56.6571 132.399 58.9345 132.208 61.2181L132.06 62.8757L133.709 63.3569C139.75 65.1952 145.438 68.054 150.526 71.8096L152.719 73.4672L153.545 70.9808C153.968 69.6609 154.309 68.315 154.566 66.953C155.305 62.7879 155.207 58.5152 154.278 54.3877C153.35 50.2603 151.609 46.3615 149.158 42.921C145.176 37.144 139.526 32.7349 132.971 30.2896C126.416 27.8442 119.272 27.4805 112.505 29.2475C109.437 30.0809 106.512 31.3774 103.832 33.0927L60.7643 60.6379C57.2697 62.8498 54.2723 65.7692 51.9641 69.2106C49.6559 72.6533 48.0876 76.5413 47.3595 80.6272C46.6156 84.7898 46.7064 89.0589 47.6266 93.1856C48.5468 97.3136 50.2779 101.214 52.7182 104.659C56.7008 110.421 62.344 114.82 68.8879 117.261C75.4318 119.703 82.5634 120.071 89.3225 118.316C92.4052 117.487 95.3481 116.19 98.0449 114.47L114.533 103.947C115.347 103.426 116.238 103.035 117.171 102.786C119.209 102.254 121.361 102.363 123.336 103.098C125.312 103.833 127.015 105.159 128.217 106.896C128.96 107.932 129.488 109.106 129.771 110.351C130.053 111.594 130.087 112.882 129.866 114.139C129.65 115.372 129.177 116.546 128.482 117.585C127.786 118.624 126.881 119.505 125.827 120.172L82.8912 147.718C82.0747 148.235 81.1853 148.626 80.2538 148.878C78.2152 149.41 76.0627 149.301 74.0884 148.565C72.1129 147.83 70.4095 146.506 69.2071 144.768C67.8859 142.916 67.2501 140.659 67.4097 138.387L67.5581 136.729L65.9091 136.248C59.8885 134.425 54.2188 131.589 49.1402 127.862L46.9309 126.205L46.123 128.691C45.6857 129.996 45.344 131.331 45.1007 132.685C44.3596 136.851 44.4547 141.122 45.3808 145.249C46.3067 149.377 48.0446 153.276 50.4923 156.717C54.4784 162.494 60.1322 166.902 66.6885 169.346Z"
                            fill="#FF3E00"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="flex items-center">
                      <span>SvelteKit</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-rotate-90 mt-0.5 w-6 h-6"
                      >
                        <path
                          d="m8 10 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mt-6">
                  <button className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 inline-block">
                    Notify me about new frameworks
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageAbout;
