
"use client"
import BlobDark from "@/shared/components/BlobsRotate/BlobDark"
import BlobLight from "@/shared/components/BlobsRotate/BlobLight"
import Footer from "@/shared/components/Footer/Footer"
import Header from "@/shared/components/Header"
import Subheader from "@/shared/components/Header/Subheader"
import GlobalProviders from "../providers"

const Layoutclient = ({ children }) => {

    return (
        <body
            id="body-id"
            className={`body overflow-x-hidden dark:text-white text-gray-15  antialiased selection:bg-primary-purple relative bg-white dark:bg-[#222222] `}
        >
            <GlobalProviders>
                <BlobDark />
                <BlobLight />
                <div className="relative w-full dark:text-white text-gray-15  ">
                    <Header />
                    <Subheader />
                    <div className="">{children}</div>
                    <Footer />
                </div>
            </GlobalProviders>
        </body>
    )
}

export default Layoutclient