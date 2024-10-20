import { general_technologies } from "@/shared/data/tech-data"
import TechList from "../../components/TechList"


const HeaderService = () => {
    return (
        <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8 py-0">
            <div className="flex flex-col lg:gap-8  lg:pt-0 justify-center mx-auto">
                <div className=" w-full text-center md:max-w-2xl mx-auto flex lg:items-center">
                    <div className="">
                        <div className="flex flex-col ">
                            <div className="inline-flex justify-center  px-1 py-1 gap-x-2 rounded-full border-gray-400 border-0 hover:border-green-500 items-center text-sm font-semibold text-gray-600 space-x-1 w-auto">
                                <span className="bg-green-100 flex items-center justify-center gap-2 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded-full  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-green-400"
                                    >
                                        <path d="m3 11 18-5v12L3 14v-3z" />
                                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                                    </svg>

                                    Servicios
                                </span>


                            </div>
                            <h1 className="mb-5 leading-title text-center mt-5 md:mt-0 w-full text-3xl sm:text-4xl font-bold md:text-5xl lg:text-5xl">
                                <p className="sm:block">Desarrollo de software </p>
                                <span className="text-zinc-500 md:block">multiplataforma, eficiente</span>
                                <p className="text-green-600 md:block">y adaptable.</p>
                            </h1>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <a href="https://wa.me/954399179?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollo" target="_blank" rel="noopener noreferrer">

                                <button className="gap-2 inline-flex rounded-full items-center text-white bg-green-500 justify-center  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">

                                    <span>
                                        Escribeme mi contacto
                                    </span>
                                    <span >
                                        <img className="w-5 h-5" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png" alt="" />
                                    </span>
                                </button>                            </a>

                        </div>
                    </div>

                </div>
                <div className="mx-auto">
                    <TechList tools={general_technologies} />
                </div>

            </div>
        </div>

    )
}

export default HeaderService
