
"use client"
import BackgroundEffect1 from "@/shared/backgroundEffects/BackgroundEffect1"
import BackgroundEffect2 from "@/shared/backgroundEffects/BackgroundEffect2"
import Footer from "@/shared/components/Footer/Footer"
import Header from "@/shared/components/Header"
import Subheader from "@/shared/components/Header/Subheader"
import useTheme from "@/shared/hooks/useTheme"
import GlobalProviders from "../providers"

const Layoutclient = ({ children }) => {
    const { darkSide } = useTheme()
    return (
        <body
            id="body-id"
            className={`body  ${darkSide ? "" : ""}  overflow-x-hidden dark:text-white text-gray-15  antialiased selection:bg-primary-purple relative bg-white dark:bg-[#222222] `}
        >

            <GlobalProviders>
                <BackgroundEffect2 />

                <BackgroundEffect1 />
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