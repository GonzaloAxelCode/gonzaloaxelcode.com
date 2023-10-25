import Span from "@/shared/UIComponents/Base/Span";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 2xl:py-20 print:hidden  w-full">
      <div className="container flex flex-col sm:grid sm:grid-cols-12 gap-4 gap-y-12 grid-rows-2 lg:grid-rows-1">
        <div className="col-span-6 lg:col-span-3 row-span-1 group">
          <div>
            <svg
              viewBox="0 0 109 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-auto mb-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m27.629 14.573-2.064-2.06a.869.869 0 0 1-.256-.616V9.376c0-2.33-.242-3.175-.699-4.026a4.753 4.753 0 0 0-1.98-1.976c-.853-.455-1.7-.698-4.033-.698h-3.339a.175.175 0 0 1-.123-.297l2.063-2.06a.877.877 0 0 1 .62-.256h1.16c3.112 0 4.24.323 5.378.93a6.337 6.337 0 0 1 2.64 2.635c.608 1.135.932 2.262.932 5.368v5.454a.175.175 0 0 1-.3.123ZM13.389 27.64l2.064-2.06a.876.876 0 0 1 .62-.256h2.524c2.334 0 3.18-.243 4.034-.698a4.754 4.754 0 0 0 1.979-1.976c.456-.851.7-1.696.7-4.026v-3.332a.174.174 0 0 1 .298-.123l2.064 2.06a.87.87 0 0 1 .255.616v1.159c0 3.106-.323 4.233-.932 5.368a6.338 6.338 0 0 1-2.64 2.634c-1.137.608-2.266.931-5.378.931h-5.464a.174.174 0 0 1-.124-.297ZM2.363 15.487l-2.064-2.06A.175.175 0 0 0 0 13.55v5.454c0 3.106.324 4.232.933 5.368a6.337 6.337 0 0 0 2.639 2.634c1.138.608 2.266.931 5.378.931h1.16a.877.877 0 0 0 .62-.256l2.063-2.06a.174.174 0 0 0-.124-.297H9.331c-2.334 0-3.18-.243-4.034-.698a4.753 4.753 0 0 1-1.98-1.976c-.456-.852-.699-1.696-.699-4.026v-2.522a.869.869 0 0 0-.255-.615ZM14.539.36l-2.064 2.06a.876.876 0 0 1-.62.256H9.332c-2.334 0-3.18.243-4.034.698a4.753 4.753 0 0 0-1.98 1.976c-.456.851-.699 1.696-.699 4.026v3.332a.175.175 0 0 1-.299.123L.256 10.77A.87.87 0 0 1 0 10.155V8.996C0 5.89.324 4.763.933 3.628A6.338 6.338 0 0 1 3.572.994C4.71.386 5.838.063 8.95.063h5.465a.175.175 0 0 1 .124.297Zm5.915 7.188 2.814 2.685a.175.175 0 0 0 .296-.126V7.902a3.488 3.488 0 0 0-3.491-3.484h-6.62a.877.877 0 0 0-.618.255l-2.066 2.06a.174.174 0 0 0 .124.298H19.2c.218 0 .426.04.617.112.233.084.45.22.637.405ZM17.737 23.29l2.69-2.81c.187-.186.322-.403.407-.635.072-.191.112-.399.112-.616v-8.291a.175.175 0 0 1 .299-.123l2.064 2.062a.87.87 0 0 1 .255.615v6.608a3.488 3.488 0 0 1-3.49 3.485h-2.21a.175.175 0 0 1-.127-.295ZM7.474 20.451 4.66 17.767a.175.175 0 0 0-.296.125v2.206a3.488 3.488 0 0 0 3.491 3.484h6.62a.876.876 0 0 0 .618-.256l2.066-2.06a.174.174 0 0 0-.124-.297H8.728c-.218 0-.426-.04-.618-.112a1.74 1.74 0 0 1-.636-.406Zm2.717-15.739-2.69 2.81a1.735 1.735 0 0 0-.406.635c-.073.192-.113.4-.113.616v8.292a.174.174 0 0 1-.299.122L4.62 15.127a.87.87 0 0 1-.255-.615V7.902a3.488 3.488 0 0 1 3.491-3.484h2.21a.175.175 0 0 1 .126.294ZM36.622 8.54h-.676c-.562 0-1.018.454-1.018 1.014v14.32c0 .561.456 1.015 1.018 1.015h.625c.563 0 1.019-.454 1.019-1.014V18.28c0-.037.03-.066.066-.066.134.184.304.373.51.565.208.193.46.374.755.543.296.17.636.308 1.02.416.385.107.829.161 1.332.161a4.823 4.823 0 0 0 3.716-1.685 5.737 5.737 0 0 0 1.053-1.848c.252-.708.377-1.47.377-2.286a7.17 7.17 0 0 0-.354-2.286 5.333 5.333 0 0 0-1.043-1.848 4.927 4.927 0 0 0-1.664-1.235c-.65-.3-1.383-.45-2.196-.45-.755 0-1.457.153-2.108.461-.65.308-1.168.8-1.553 1.478a.044.044 0 0 1-.044-.044V9.37a.833.833 0 0 0-.835-.831Zm6.925 4.295c.14.4.21.816.21 1.247 0 .431-.07.847-.21 1.247a3.102 3.102 0 0 1-1.608 1.801c-.385.185-.822.277-1.31.277a2.985 2.985 0 0 1-2.296-1.016 3.155 3.155 0 0 1-.621-1.062c-.14-.4-.21-.816-.21-1.247 0-.431.07-.847.21-1.247a3.101 3.101 0 0 1 1.608-1.801c.385-.185.821-.277 1.31-.277a2.984 2.984 0 0 1 2.295 1.016c.274.308.481.662.622 1.062Zm7.471-4.295h-.762c-.563 0-1.019.454-1.019 1.014v9.056c0 .56.456 1.014 1.019 1.014h.625c.562 0 1.018-.454 1.018-1.014v-4.92c0-.155.033-.386.1-.694.067-.307.2-.615.4-.923.2-.308.487-.581.865-.82.377-.239.876-.358 1.497-.358.207 0 .418.02.632.058a.555.555 0 0 0 .654-.545v-1.52a.59.59 0 0 0-.476-.58 2.448 2.448 0 0 0-.477-.045c-.71 0-1.339.177-1.886.53-.547.355-.969.855-1.264 1.502a.044.044 0 0 1-.045-.045v-.833a.88.88 0 0 0-.88-.877Zm8.87 0h-.625c-.563 0-1.019.454-1.019 1.014v9.056c0 .56.456 1.014 1.019 1.014h.625c.562 0 1.018-.454 1.018-1.014V9.553c0-.56-.456-1.014-1.018-1.014Zm-1.544-4.93c-.318.33-.477.719-.477 1.165 0 .447.159.836.477 1.167.318.33.721.496 1.21.496.487 0 .898-.158 1.23-.473.333-.316.5-.712.5-1.19a1.57 1.57 0 0 0-.5-1.189c-.332-.315-.743-.473-1.23-.473-.489 0-.892.165-1.21.496Zm9.55 6.87c.422 0 .903.197 1.443.593.396.29.943.257 1.301-.079l.332-.31a1.012 1.012 0 0 0-.059-1.53c-.31-.248-.59-.418-.842-.51a6.1 6.1 0 0 0-2.108-.381c-.532 0-1.057.069-1.575.207a4.093 4.093 0 0 0-1.375.647c-.4.292-.721.666-.965 1.12-.245.454-.366.99-.366 1.605 0 .708.14 1.262.421 1.663.281.4.636.712 1.065.935a5.23 5.23 0 0 0 1.386.485c.496.1.958.208 1.387.323.429.116.784.266 1.065.45.28.185.421.47.421.855a.976.976 0 0 1-.166.566c-.11.161-.255.296-.433.404-.177.108-.37.185-.576.23-.207.047-.407.07-.6.07-.561 0-1.038-.127-1.43-.381a3.795 3.795 0 0 1-.42-.328 1.022 1.022 0 0 0-1.386.037l-.276.27a1.012 1.012 0 0 0 .093 1.53c.38.29.707.484.98.58.694.247 1.456.37 2.284.37.548 0 1.095-.061 1.642-.184a4.618 4.618 0 0 0 1.475-.6 3.29 3.29 0 0 0 1.065-1.098c.274-.454.41-1.012.41-1.674 0-.724-.14-1.293-.42-1.709a3.077 3.077 0 0 0-1.066-.981 5.32 5.32 0 0 0-1.386-.531 82.131 82.131 0 0 1-1.387-.335 4.536 4.536 0 0 1-1.065-.393c-.28-.154-.421-.4-.421-.739 0-.415.17-.716.51-.9a2.16 2.16 0 0 1 1.043-.277Zm7.989-1.94h-.492c-.562 0-1.018.454-1.018 1.014v9.056c0 .56.456 1.014 1.018 1.014h.625c.563 0 1.019-.454 1.019-1.014v-5.036c0-.37.044-.724.133-1.062a2.52 2.52 0 0 1 .433-.901c.2-.262.45-.47.754-.623.303-.155.676-.231 1.12-.231.651 0 1.117.204 1.398.611.281.408.421.959.421 1.652v5.59c0 .56.457 1.014 1.02 1.014h.624c.563 0 1.019-.454 1.019-1.014v-4.99c0-.354.04-.704.122-1.05a2.71 2.71 0 0 1 .399-.924c.185-.27.422-.485.71-.647.288-.162.64-.242 1.054-.242.399 0 .724.069.976.207a1.6 1.6 0 0 1 .599.566c.148.239.251.516.31.832.06.315.09.642.09.981v5.267c0 .56.455 1.014 1.018 1.014h.625c.562 0 1.018-.454 1.018-1.014v-5.59c0-.662-.066-1.282-.2-1.86a4.265 4.265 0 0 0-.654-1.512 3.172 3.172 0 0 0-1.187-1.016c-.488-.246-1.087-.37-1.797-.37-.798 0-1.486.166-2.063.497-.577.331-1.057.85-1.442 1.559-.547-1.37-1.656-2.055-3.328-2.055-.887 0-1.593.204-2.118.611a4.342 4.342 0 0 0-1.187 1.398v-.718c0-.56-.456-1.014-1.019-1.014Zm19.922 0h-.625c-.562 0-1.018.454-1.018 1.014v9.056c0 .56.456 1.014 1.018 1.014h.625c.563 0 1.019-.454 1.019-1.014V9.553c0-.56-.456-1.014-1.019-1.014Zm-1.543-4.93c-.318.33-.477.719-.477 1.165 0 .447.159.836.477 1.167.318.33.72.496 1.209.496.488 0 .898-.158 1.23-.473.334-.316.5-.712.5-1.19a1.57 1.57 0 0 0-.5-1.189c-.332-.315-.742-.473-1.23-.473-.489 0-.891.165-1.21.496Zm12.257 7.447c.083.049.179.116.289.201.412.322 1.002.28 1.364-.097l.411-.429a1.012 1.012 0 0 0-.127-1.515c-.356-.264-.666-.448-.928-.55a5.591 5.591 0 0 0-2.052-.404c-.799 0-1.553.138-2.263.415-.71.277-1.323.67-1.841 1.178a5.588 5.588 0 0 0-1.231 1.836c-.303.716-.455 1.512-.455 2.39 0 .878.151 1.674.455 2.39a5.585 5.585 0 0 0 1.231 1.836c.518.508 1.131.9 1.841 1.178.71.277 1.464.415 2.263.415.237 0 .518-.027.843-.08a6.222 6.222 0 0 0 2.074-.75.964.964 0 0 0 .24-1.479l-.405-.453a1.022 1.022 0 0 0-1.365-.143c-.084.061-.161.11-.233.146a2.55 2.55 0 0 1-1.154.265c-.488 0-.924-.092-1.309-.277a3.11 3.11 0 0 1-1.608-1.801 3.724 3.724 0 0 1-.211-1.247c0-.431.07-.847.211-1.247a3.11 3.11 0 0 1 1.608-1.801 2.987 2.987 0 0 1 1.309-.277c.355 0 .703.1 1.043.3Z"
                fill="currentColor"
              />
            </svg>
            <div className="font-copy  font-medium print:text-[10px] print:text-justify text-[#eeeeee] opacity-75 text-base">
              <Span className="my-6 text-md first:mt-0 last:mb-0 print:my-2">
                All rights reserved
              </Span>
            </div>
            <nav className="flex gap-4 mt-6">
              <Link
                className="block focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm "
                rel="noreferrer"
                href="https://twitter.com/prismicio"
              >
                <Span>
                  <svg
                    width={32}
                    className="text-graydark dark:text-white"
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5331 11.7802C25.5483 11.9934 25.5483 12.2066 25.5483 12.4198C25.5483 18.9224 20.5991 26.4148 11.5533 26.4148C8.7665 26.4148 6.17768 25.6077 4 24.2067C4.39595 24.2524 4.77663 24.2676 5.18782 24.2676C7.48728 24.2676 9.60407 23.491 11.2944 22.1661C9.13199 22.1204 7.31979 20.7041 6.69542 18.7549C7.00001 18.8005 7.30456 18.831 7.62439 18.831C8.066 18.831 8.50766 18.7701 8.9188 18.6635C6.66499 18.2066 4.97458 16.2269 4.97458 13.8361V13.7752C5.62938 14.1407 6.39087 14.3691 7.19792 14.3995C5.87304 13.5162 5.00505 12.0086 5.00505 10.303C5.00505 9.38936 5.24866 8.55179 5.67508 7.82082C8.09642 10.8056 11.736 12.7548 15.8172 12.968C15.7411 12.6026 15.6954 12.2219 15.6954 11.8412C15.6954 9.13047 17.8883 6.92236 20.6142 6.92236C22.0304 6.92236 23.3096 7.51627 24.2081 8.47567C25.3198 8.26248 26.3858 7.85129 27.33 7.28785C26.9644 8.43001 26.1878 9.3894 25.1675 9.9985C26.1574 9.89195 27.1168 9.61778 28 9.23711C27.3301 10.2117 26.4924 11.0797 25.5331 11.7802Z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                </Span>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                className="block focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm "
                rel="noreferrer"
                href="https://youtube.com/@Prismic"
              >
                {" "}
                <Span>
                  <svg
                    className="text-graydark dark:text-white"
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.4985 11.5627C27.2225 10.5234 26.4092 9.7049 25.3766 9.42712C23.505 8.92236 16 8.92236 16 8.92236C16 8.92236 8.49503 8.92236 6.62336 9.42712C5.59077 9.70494 4.77752 10.5234 4.5015 11.5627C4 13.4465 4 17.3769 4 17.3769C4 17.3769 4 21.3073 4.5015 23.1911C4.77752 24.2304 5.59077 25.0148 6.62336 25.2926C8.49503 25.7973 16 25.7973 16 25.7973C16 25.7973 23.505 25.7973 25.3766 25.2926C26.4092 25.0148 27.2225 24.2304 27.4985 23.1911C28 21.3073 28 17.3769 28 17.3769C28 17.3769 28 13.4465 27.4985 11.5627ZM13.5454 20.9454V13.8084L19.8181 17.377L13.5454 20.9454Z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                </Span>
                <Span className="sr-only">YouTube</Span>
              </Link>
              <Link
                className="block focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm "
                rel="noreferrer"
                href="https://www.linkedin.com/company/prismic-io"
              >
                <Span>
                  <svg
                    width={32}
                    height={33}
                    className="text-graydark dark:text-white"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.37226 28.6353H4.39644V12.6117H9.37226V28.6353ZM6.88167 10.4259C5.29056 10.4259 4 9.10803 4 7.51693C4 6.75266 4.3036 6.01969 4.84402 5.47928C5.38444 4.93886 6.1174 4.63525 6.88167 4.63525C7.64594 4.63525 8.3789 4.93886 8.91932 5.47928C9.45974 6.01969 9.76334 6.75266 9.76334 7.51693C9.76334 9.10803 8.47224 10.4259 6.88167 10.4259ZM27.9952 28.6353H23.0301V20.8351C23.0301 18.9761 22.9926 16.5921 20.443 16.5921C17.856 16.5921 17.4596 18.6118 17.4596 20.7011V28.6353H12.4891V12.6117H17.2614V14.7974H17.331C17.9953 13.5385 19.618 12.2099 22.039 12.2099C27.0748 12.2099 28.0005 15.526 28.0005 19.8333V28.6353H27.9952Z"
                      fill="currentColor"
                    />
                  </svg>
                </Span>
                <Span className="sr-only">LinkedIn</Span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 row-span-1 group">
          <div>
            <Span className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium mb-8">
              Product
            </Span>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/developers"
            >
              <Span>Prismic for developers</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/marketers"
            >
              <Span>Prismic for marketers</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/agencies"
            >
              <Span>Prismic for agencies</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/slice-machine"
            >
              <Span>Slice Machine</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/page-builder"
            >
              <Span>Page Builder</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/pricing"
            >
              <Span>Pricing</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/reviews"
            >
              <Span>Reviews</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/progress"
            >
              <Span>Progress</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://status.prismic.io/"
            >
              <Span>Status</Span>
            </Link>
            <div className="hidden group-last:block text-gray-EE opacity-75 mt-4">
              <button>
                <Span>Cookie settings</Span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 row-span-1 group">
          <div>
            <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium">
              <Span>Resources</Span>
            </h2>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/customers/evri"
            >
              <Span>How Evri Cut Their Time to Ship</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/customers/pallyy"
            >
              <Span>How Pallyy Grew Daily Visitors</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/docs/"
            >
              <Span>Documentation</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/docs/guides"
            >
              <Span>Marketer guides</Span>
            </Link>
            <Link
              target=""
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/academy"
            >
              <Span>Academy</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/docs/help-center"
            >
              <Span>Help center</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/hire-a-developer"
            >
              <Span>Find a partner</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/partners"
            >
              <Span>Become a partner</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://community.prismic.io"
            >
              <Span>Community</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              rel="noreferrer"
              href="https://prismic.io/blog/"
            >
              <Span>Blog</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/shows"
            >
              <Span>Events</Span>
            </Link>
            <div className="hidden group-last:block text-gray-EE opacity-75 mt-4">
              <button>Cookie settings</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 row-span-1 group">
          <div>
            <h2 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium mb-8">
              <Span>Company</Span>
            </h2>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/about"
            >
              <Span>About</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/jobs"
            >
              <Span>Jobs</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/showcase"
            >
              <Span>Showcase</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/research"
            >
              <Span>Join our research panel</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/legal/terms-of-service"
            >
              <Span>Terms of service</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/legal/privacy"
            >
              <Span>Privacy</Span>
            </Link>
            <Link
              className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
              href="/legal/security"
            >
              <Span>Security</Span>
            </Link>
            <div className="hidden group-last:block text-gray-EE opacity-75 mt-4">
              <button>
                <Span>Cookie settings</Span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
