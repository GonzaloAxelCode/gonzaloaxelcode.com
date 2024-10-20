import { general_technologies } from "@/shared/data/tech-data"
import TechList from "./TechList"


const UsedTecnologies = () => {
    return (
        <section className="relative z-20 overflow-hidden my-10">
            <div className="mt-4">
                <div className="mb-16 mx-auto text-center">
                    <h2
                        className="mt-0 mb-3 text-3xl font-black leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight mx-auto"
                        style={{ maxWidth: 500 }}
                    >
                        Herramientas y
                        <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent   from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
                            {" "}
                            tecnologias{" "}
                            <span
                                className="absolute top-12 right-4"
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
                        className="w-full text-base font-normal leading-relaxed text-body-color mx-auto"
                        style={{ maxWidth: 600 }}
                    >
                        Te presento las tecnologias, frameworks, herramientas con las que
                        he trabajado desde que empeze.
                    </p>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <TechList tools={general_technologies} />
                </div>
            </div>
        </section>
    )
}

export default UsedTecnologies