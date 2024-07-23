import Title from "@/shared/UIComponents/Base/Title"

const HeaderService = () => {
    return (
        <div>
            <div className="slice-layout w-full text-white py-12 md:py-15 2xl:py-15 relative">
                <div className="container items-center relative z-10 md:py-[5vh] 2xl:py-[9vh]">
                    <div className="mx-auto text-center flex flex-col items-center relative z-10">
                        <span className="block font-bold text-base md:text-md text-primary-purple mb-4">
                            Servicios de software
                        </span>

                        <Title className="max-w-xl">


                            Creando software a medida y personalizado
                        </Title>


                        <div className="font-copy text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify mt-4 lg:mt-6">
                            <ul className="text-gray-A4 bg-white  dark:bg-blackbg flex flex-col md:flex-row gap-6 border-2  border-gray-100 dark:border-darkborder rounded-lg p-8 mt-8">
                                <li className="relative text-center md:max-w-[264px] flex items-center leading-5">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary-purple w-7 h-7 shrink-0 mr-4"
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
                                    <p className="text-sm font-bold-400 text-graydark dark:text-graywhite">

                                        Soluciones únicas para ti.


                                    </p>

                                </li>
                                <li className="relative text-center  md:max-w-[264px] flex items-center leading-5">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary-purple w-7 h-7 shrink-0 mr-4"
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




                                    <p className="text-sm font-bold-400 text-graydark dark:text-graywhite">


                                        Adaptado a tus necesidades
                                    </p>
                                    
                                        
                                </li>
                                <li className="relative text-center  md:max-w-[264px] flex items-center leading-5">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary-purple w-7 h-7 shrink-0 mr-4"
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
                                   
                                    <p className="text-sm font-bold-400 text-graydark dark:text-graywhite">


                                        Desarrollos personalizados
                                    </p>
                                    
                                 

                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center flex-wrap gap-4 mt-6 lg:mt-10">
                         
                                <button className="mx-auto rounded-full flex whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-blackbg dark:bg-white dark:text-gray-15 text-white px-6">
                               <span>Contactame</span>  <img className=" ml-3 w-[20px] object-contain h-[20px]"
                                 src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    alt=""
                    width={1140}
                    height={500}
                    className="absolute right-0 left-[70%] top-[10%] w-full hidden sm:block bottom-0"
                    src="https://www.hashstudioz.com/images/embedded_banner_pro.svg"
                    style={{ color: "transparent" }}
                />

                <img
                    alt=""
                    width={1140}
                    height={500}
                    className="absolute  left-[-70%] top-[10%] w-full hidden sm:block bottom-0"
                    src="https://www.hashstudioz.com/images/embedded_banner_pro.svg"
                    style={{ color: "transparent" }}
                />
            </div>

        <section className="grid grid-cols-1  sm:grid-cols-2 gap-5 lg:grid-cols-3  mx-[5%] md:mx-[10%]     justify-center flex-wrap">
                <div
                    className="shrink-0  relative"

                >
                    <div className="h-full px-2 2xl:px-3 transition-all">
                        <div className="border-2 rounded-xl flex flex-col h-full transition-colors group border-gray-15 bg-white text-gray-15 hover:bg-quaternary-purple">

                            <h2 className="p-4 2xl:p-6 bg-gray-15 rounded-t-[10px] text-white text-center  2xl:2xl-tight text-lg transition-colors group-hover:bg-primary-purple">


                                Pagina web basica
                            </h2>

                            <div className="p-4 2xl:p-6">
                                <p className="text-center">¡Lanza tu web en 10 días!.</p>
                                <div className="text-center mt-6">
                                    <span className="font-headings text-4xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight">
                                        <span className="text-sm">S/.</span>299
                                    </span>
                                    <span className="text-sm-flat 2xl:text-base-flat font-bold">

                                    </span>
                                </div>
                                <div className="text-base-flat mt-1 text-center font-medium flex justify-center items-center gap-2">
                                    1 Página Interna
                                    <button data-state="closed">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                        >
                                            <circle
                                                opacity="0.25"
                                                cx={12}
                                                cy={12}
                                                r={12}
                                                fill="#A4A4A4"
                                            />
                                            <path
                                                d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                                                fill="#A4A4A4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-center text-sm mt-4 opacity-50">
                                    Actualizacion por mes S/.19
                                </div>
                                <div className="mt-8  flex flex-col">
                                    <div className="mt-2 first:mt-0 flex">
                                        <a
                                            className="rounded-full  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white px-6 block text-center cursor-pointer grow"

                                        >
                                            Lo quiero
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 2xl:p-6 border-t-2 grow border-gray-15 text-gray-15">
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>10 Bloques o Secciones</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>1 correo profesional</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Soporte por 6 meses</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Dominio .XYZ + SSL* Gratis</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                    <div className="text-sm leading-normal text-gray-A4">

                                    </div>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Adaptable a móviles.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Formulario de contacto.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Enlaces a tus redes sociales.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>

                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Boton de whatsapp</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>

                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Diseño simple</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                    <div className="text-sm leading-normal text-gray-A4" />
                                    <div className="text-sm leading-normal text-gray-A4">
                                        Solo se acepta diseños simples
                                    </div>
                                </li>


                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="shrink-0  relative  "

                >
                    <div className="h-full px-2 2xl:px-3 transition-all">
                        <div className="border-2 rounded-xl flex flex-col h-full transition-colors group border-gray-15 bg-white text-gray-15 hover:bg-quaternary-purple">

                            <h2 className="p-4 2xl:p-6 bg-gray-15 rounded-t-[10px] text-white text-center  2xl:2xl-tight text-lg transition-colors group-hover:bg-primary-purple">


                                Pagina web Avanzada
                            </h2>


                            <div className="p-4 2xl:p-6">
                                <p className="text-center">¡Lanza tu web en 15 días!</p>
                                <div className="text-center mt-6">
                                    <span className="font-headings text-4xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight">
                                        <span className="text-sm">S/.</span>499
                                    </span>
                                    <span className="text-sm-flat 2xl:text-base-flat font-bold">

                                    </span>
                                </div>
                                <div className="text-base-flat mt-1 text-center font-medium flex justify-center items-center gap-2">
                                    1 Páginas Internas
                                    <button data-state="closed">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                        >
                                            <circle
                                                opacity="0.25"
                                                cx={12}
                                                cy={12}
                                                r={12}
                                                fill="#A4A4A4"
                                            />
                                            <path
                                                d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                                                fill="#A4A4A4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-center text-sm mt-4 opacity-50">
                                    Actualizacion por mes S/.19
                                </div>
                                <div className="mt-8  flex flex-col">
                                    <div className="mt-2 first:mt-0 flex">
                                        <a
                                            className="rounded-full  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white px-6 block text-center cursor-pointer grow"

                                        >
                                            Lo quiero
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 2xl:p-6 border-t-2 grow border-gray-15 text-gray-15">
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>15 Bloques o Secciones</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>1 correo profesional</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Soporte por 1 año</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Dominio .COM + SSL* Gratis por 1 Año</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                    <div className="text-sm leading-normal text-gray-A4">
                                        Incluye subdominio .store y .online por un año uso libre
                                    </div>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Adaptable a móviles.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Formulario de contacto.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Enlaces a tus redes sociales.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Google Maps Interactivo.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>

                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Integrado con SEO Basico</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Botón de llamada directa.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Diseño limpio y moderno.</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Propuesta de plantillas web </p>
                                    <div className="text-sm leading-normal text-gray-A4" />

                                    <div className="text-sm leading-normal text-gray-A4">
                                        Si el usuario quiere un diseño exacto en particular
                                    </div>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="shrink-0 relative "

                >
                    <div className="h-full px-2 2xl:px-3 transition-all">
                        <div className="border-2 rounded-xl flex flex-col h-full transition-colors group border-gray-15 bg-white text-gray-15 hover:bg-quaternary-purple">
                        


                            <h2 className="p-4 2xl:p-6 bg-gray-15 rounded-t-[10px] text-white text-center  2xl:2xl-tight text-lg transition-colors group-hover:bg-primary-purple">

                                Personalizado
                            </h2>
                            <div className="p-4 2xl:p-6">
                                <p className="text-center">Pagina web a medida</p>
                                <div className="text-center mt-6">
                                    <span className="font-headings text-4xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight">
                                        <span className="text-sm"></span>Custom
                                    </span>
                                    <span className="text-sm-flat 2xl:text-base-flat font-bold">

                                    </span>
                                </div>
                                <div className="text-base-flat mt-1 text-center font-medium flex justify-center items-center gap-2">
                                    +2 Páginas Internas
                                    <button data-state="closed">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                        >
                                            <circle
                                                opacity="0.25"
                                                cx={12}
                                                cy={12}
                                                r={12}
                                                fill="#A4A4A4"
                                            />
                                            <path
                                                d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                                                fill="#A4A4A4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-center text-sm mt-4 opacity-50">
                                    Actualizacion por mes + S/.19
                                </div>
                                <div className="mt-8  flex flex-col">
                                    <div className="mt-2 first:mt-0 flex">
                                        <a
                                            className="rounded-full  whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white px-6 block text-center cursor-pointer grow"

                                        >
                                            Lo quiero
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 2xl:p-6 border-t-2 grow border-gray-15 text-gray-15">
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>+15 Bloques o Secciones</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>+1 correo profesional</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>Soporte por +1 año</p>

                                </li>
                                <li className="my-3 first:mt-0 last:mb-0 pl-6 relative text-base text-gray-50">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-0 top-1 w-4 h-4 text-gray-50"
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
                                    <p>+ Incluye todos los requerimientos del usuario</p>
                                    <div className="text-sm leading-normal text-gray-A4" />
                                    <div className="text-sm leading-normal text-gray-A4">

                                    </div>

                                </li>


                            </div>

                        </div>
                    </div>
                </div>
             

            </section>

   <div className=" border-2 rounded-xl mt-4 first:mt-0 overflow-hidden mx-[5%] md:mx-[10%]   border-darkborder bg-white  dark:bg-blackbg ">
  <header className="p-4 text-center bg-[#42bd75] text-white">
  

                            <h2 className="2xl:p-6 text-black rounded-t-[10px] text-white text-center  2xl:2xl-tight text-lg transition-colors group-hover:bg-primary-purple">


        Software a medida
                            </h2>
                            
                            
  </header>
  <div className="p-6">
    <div className="text-center">
      <span className="font-headings text-6xl font-semibold tracking-tight">
              Aplicaciones / Sistemas

      </span>
      <span className="text-base-flat font-bold" />
    </div>
    <div className="text-base-flat mt-1 text-center font-medium flex justify-center items-center gap-2">
      Aplicacion web / Aplicacion movil
      <button data-state="closed">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
          <path
            d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
            fill="#A4A4A4"
          />
        </svg>
      </button>
    </div>
    <div className="text-center text-sm mt-2 opacity-50">0 costo desarrollo, solo pagos mensuales</div>
  </div>
  <div className="w-full flex justify-center max-w-xs mx-auto px-6">
  
       <button className="mx-auto rounded-full flex whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-white py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-blackbg dark:bg-white dark:text-gray-15 text-white px-6">
                               <span>Contactame</span>  <img className=" ml-3 w-[20px] object-contain h-[20px]"
                                 src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png" alt="" />
                            </button>
                            
  </div>
  <div className="mt-4">
    <div
      className="flex items-center justify-center w-full max-w-xs mx-auto mb-4 px-6"
      id="headlessui-disclosure-button-:rjf:"
      
      
    >
      <button className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group underline underline-offset-8 focus:ring-4 hover:underline-offset-4 border-gray-15 py-3 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 -mx-2.5 px-2.5 text-center cursor-pointer w-full flex justify-center text-base-flat">
        <span>Mostrar  tipos de apps disponibles</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 shrink-0 -mr-6 transform rotate-180"
        >
          <path
            d="m8 10 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </button>
    </div>
    <div
      className="flex flex-col gap-6 py-6 border-t-0 border-gray-15"
      id="headlessui-disclosure-panel-:rjg:"
      data-headlessui-state="open"
    >
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
         Sistemas de inventario
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Unlimited documents
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Unlimited slices
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Unlimited types
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Unlimited assets
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
          Aplicaciones moviles con mapas
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  API calls/month<span>: Custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Built-in CDN
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  CDN bandwidth/month<span>: Custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Bandwidth consumption<span>: Custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Image processing and optimization
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
          Blog Personalizado
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Users<span>: Unlimited</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  User roles
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Roles per locale
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Team spaces<span>: Custom</span>
                </span>
                <span className="text-xs font-bold inline-block py-0.5 px-2 rounded-full whitespace-nowrap text-white first-letter:capitalize bg-primary-green">
                  coming soon
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
         Sistemas academicos
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Locales<span>: Custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Localization workflow
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
   
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
         Ecomerce basico
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Slice Machine
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Development environment<span>: 2 + custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
         Servicios ApiRest
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Migration API
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Document API
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  GraphQL
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Webhooks
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Integration
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  SKUs<span>: Custom</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
        Sistemas con factura electronica (SUNAT)
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  SLA
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Backups
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Restoring capabilities
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  SSO
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  InfoSec and legal review
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h4 className="font-headings tracking-tight scroll-mt-[120px] text-xl-tight 2xl:2xl-tight font-medium wrap-balance">
        Aplicaciones moviles 
        </h4>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Support level<span>: Priority/Premium</span>
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Customer Success Manager and Solution Engineer
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 shrink-0 text-primary-green"
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
              <span className="flex flex-wrap gap-2">
                <span className="">
                  Custom training sessions
                  <span />
                </span>
              </span>
            </span>
            <button data-state="closed">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <circle opacity="0.25" cx={12} cy={12} r={12} fill="#A4A4A4" />
                <path
                  d="M7.96 7.748A2.63 2.63 0 0 1 10.433 6h2.733a2.958 2.958 0 0 1 2.958 2.958c0 1.06-.567 2.039-1.486 2.569l-1.514.867c-.01.61-.51 1.106-1.125 1.106a1.122 1.122 0 0 1-1.125-1.125v-.633c0-.403.216-.773.567-.975l2.077-1.19a.709.709 0 0 0-.352-1.322h-2.733a.37.37 0 0 0-.351.248l-.019.056c-.206.586-.853.891-1.434.685a1.129 1.129 0 0 1-.685-1.435l.02-.056-.006-.005ZM13.5 16.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</div>

        </div>
    )
}

export default HeaderService  