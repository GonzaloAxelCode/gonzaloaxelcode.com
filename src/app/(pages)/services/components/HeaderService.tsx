import MyTools from "../../about/components/MyTools"

const HeaderService = () => {
    return (

        <div className="max-w-[768px] lg:max-w-[1280px]  mx-auto  px-8 py-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div className="">
                        <div className="flex flex-col ">
                            <div
                                className="inline-flex px-1 py-1 gap-x-2 rounded-xl border border-gray-400 border-2 hover:border-orange-500 items-center text-sm font-semibold text-gray-600 space-x-1"

                            >
                                <span className="bg-orange-100 flex items-center justify-center gap-2 text-orange-800 text-sm font-semibold px-2.5 py-0.5 rounded-lg dark:bg-black dark:text-gray-100 ">
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
                                <span className="pr-3 dark:text-white font-normal">Contactame para empezar con el desarrollo</span>

                            </div>
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white  sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                <p className="sm:block">Desarrollo de software </p>
                                <span className="text-zinc-500 md:block">multiplataforma, eficiente</span>
                                <p className="text-green-600 md:block">y adaptable.</p>
                            </h1>
                        </div>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
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
                <div className=" ml-6 sm:mt-24 lg:mt-0 lg:col-span-6">


                    <MyTools />

                </div>
            </div>
        </div>

    )
}

export default HeaderService
