import ListOfTechnologies from "@/shared/components/ListOfTechnologies"
import { samusystem_technologies, trackingapp_technologies } from "@/shared/data/tech-data"

const ExperienceSection = () => {
    return (
        <section>
            <div className="py-10">
                <div className="mb-16">
                    <h2
                        className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight"
                        style={{ maxWidth: 500 }}
                    >
                        Experiencia en{" "}
                        <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
                            {" "}
                            desarrollo
                            <span
                                className="absolute -top-3 right-0"
                                style={{ display: "inline-block", verticalAlign: "top" }}
                            >
                                <svg
                                    viewBox="0 0 24 23"
                                    style={{
                                        width: 26,
                                        height: 26,
                                        display: "block",

                                        flexShrink: 0,
                                    }}
                                    className="fill-black dark:fill-white "
                                >
                                    <g>
                                        <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z" />
                                        <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z" />
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </h2>
                    <p
                        className="w-full text-base font-normal leading-relaxed text-body-color"
                        style={{ maxWidth: 600 }}
                    >
                        Mi experiencia como desarrollador de software.
                    </p>
                </div>
                <div className="pb-10 ml-6 border-l border-gray-200 dark:border-neutral-700 gap-8 flex flex-col ">
                    <div className="relative flex flex-col justify-start pl-12 ">
                        <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 dark:border-neutral-700">
                            <img
                                src="https://res.cloudinary.com/ddksrkond/image/upload/v1686753544/samu/logosamuhd_a8atbw.png"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                        <p className="text-xs uppercase dark:text-neutral-100 text-neutral-500 trackign-widest">
                            Abril 2023 · Julio 2023
                        </p>
                        <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                            Software developer
                        </h3>
                        <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                            SAMU (MINSA) - Servicio de Atención Móvil de Urgencias ( ILO
                            MOQUEGUA)
                        </p>
                        <p className="text-sm font-light text-neutral-600 max-w-[400px] dark:text-neutral-400">
                            Desarrolle un sistema para el manejo de datos de pacientes como
                            el registro, reportes, indicadores de fallos, graficos, manejo
                            mas de 300 000 registros.
                        </p>
                        <p className="my-3">Use las siguientes tecnologias: </p>

                        <ListOfTechnologies technologies={samusystem_technologies} />
                    </div>
                    <div className="relative flex flex-col justify-start pl-12">
                        <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full  w-14 h-14 border-neutral-300 dark:border-neutral-700">
                            <img
                                src="https://res.cloudinary.com/ddksrkond/image/upload/v1700192103/Capture-removebg-preview_xtbln0.png"
                                alt=""
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <p className="text-xs uppercase dark:text-neutral-100 text-neutral-500 trackign-widest">
                            Junio 2024 · Octubre 2024
                        </p>
                        <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                            Software Developer / React Native Developer
                        </h3>
                        <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                            Freelance
                        </p>
                        <p className="text-sm font-light text-neutral-600 max-w-[400px] dark:text-neutral-400">
                            Desarrolle un aplicativo movil para el control de rutas de transporte publico, integrando geolocalizacion en tiempo
                            real, use clouflare workers para el despliegue y react native para la aplicacion.
                        </p>
                        <p className="my-3">Use las siguientes tecnologias: </p>
                        <ListOfTechnologies technologies={trackingapp_technologies} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ExperienceSection