"use client"

import Link from "next/link";
import TextChange from "./(pages)/about/components/TextChange";

const PresentationPortfolio = () => {
  return (
    <section>
      <div className="relative z-20 w-full  mt-10 sm:mt-0 md:mt-12 mb-12   xl:px-0 ">
        <div className="flex  flex-col-reverse items-center md:flex-row justify-between  ">
          <div className="relative w-full md:w-1/2 lg:w-3/4">

            <h1 className="mb-5 leading-title text-center md:text-left mt-5 md:mt-0 w-full text-3xl sm:text-4xl font-bold md:text-5xl lg:text-5xl dark:text-white">
              Hola 👋, soy{" "}
              <span className="relative">
                <svg
                  className="absolute -top-6 left-0 h-8 transform -rotate-12"
                  viewBox="0 0 244 243"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M240.74 62.55a5.623 5.623 0 0 0-2.36-1.67 7.29 7.29 0 0 0-2.7-1.43 12.07 12.07 0 0 0-13.81 6 11.54 11.54 0 0 0-.66 8.74 298.468 298.468 0 0 0-62.32 40.89 519.522 519.522 0 0 1-21-92.64 8.106 8.106 0 0 0-.72-2.47c.23-.2.46-.4.68-.62 5.31-5.44 3.46-14.51-2.7-18.36a7.5 7.5 0 0 0-8.53.77 3.021 3.021 0 0 0-.32.09 11.325 11.325 0 0 0-7.11 7.06 10.25 10.25 0 0 0 2.32 10c.51.57 1.08 1.083 1.7 1.53a706.029 706.029 0 0 0-46.9 98.16 247.303 247.303 0 0 1-49.76-32.85c1.37-3 1.534-6.412.46-9.53-1.59-4.63-6-8.14-11-7.89a13.08 13.08 0 0 1-4.52-.12c-8.14.71-13 8.6-11.08 16.34A13.25 13.25 0 0 0 12.9 94.4l21.18 79.67c2.43 9.14 16.63 5.27 14.19-3.91l-16.38-61.53A258.06 258.06 0 0 0 76.63 135c4.57 2.1 9 .35 10.8-4.4a679.583 679.583 0 0 1 39.12-86 535.947 535.947 0 0 0 21.77 85.25 7.447 7.447 0 0 0 9.002 5.073 7.448 7.448 0 0 0 3.288-1.833 284.916 284.916 0 0 1 56.09-40.06 783.367 783.367 0 0 0-20.27 82.15A285.825 285.825 0 0 0 56.82 179c-6.51 1.83-7.49 13 0 14.18 21.33 3.48 43 7 63.76 13.17a505.4 505.4 0 0 0-110 20.43c-7.85 2.39-6.49 14.4 2 14.44l193 1c9.47.05 9.48-14.66 0-14.71l-131.47-.69a491.019 491.019 0 0 1 82.26-7.13c7 0 10.44-10.36 3.71-13.7-20-9.92-41.2-15.94-62.83-20.45a270.142 270.142 0 0 1 103.07 5.63c3.59.91 8.33-1.15 9-5.13a783.243 783.243 0 0 1 26.34-104.27 11.67 11.67 0 0 0 5.75-4 12.001 12.001 0 0 0 2.48-7.31 12.26 12.26 0 0 0-3.15-7.91ZM132.45 9a1.573 1.573 0 0 1-.2-.2c.13.14.22.2.2.2Z"
                    fill="currentColor"
                  />
                </svg>
                Gonzalo Axel
              </span>{" "}
              desarrollador de software <br />
              <span className="relative inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#3a3a3a]  to-[#d3d3d3] dark:to-[#ffffff]">
                <TextChange />
                <span
                  className="absolute top-13 right-0"
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
            </h1>




            <p className="mb-6 text-md text-neutral-600  text-center md:text-left dark:text-neutral-400">
              Fullstack Developer con experiencia en desarrollo de aplicaciones web, móviles y de escritorio.
              <br className="hidden lg:block" />
              Especialista en React JS y tecnologías modernas de frontend y backend.
            </p>

            <div className="flex gap-2 justify-center md:justify-normal lg:justify-normal">

              <button className="shiny-cta2">
                <Link
                  href="/blog"
                >
                  <span>Sigue mi blog</span>
                </Link>

              </button>


              <button className="shiny-cta">
                <Link href="/CVProfesional2.pdf" target="_blank">
                  <span>Descargar mi CV</span>
                </Link>

              </button>

            </div>
          </div>


          <div className="py-5 p-1  mx-auto lg:m-auto lg:mt-0 lg:ml-0">
            <div className="d-flex justify-content-center ">
              <div className="">

                <div className="">
                  <div className="wrap">
                    <div className="circle">
                      <img
                        src="https://res.cloudinary.com/ddksrkond/image/upload/v1726626928/me_yb8gfc_u_image_upload_mo34ahsr8fu71_bcysnc_c_thumb_w_1.0_h_1.0_fl_relative.layer_apply-fotor-20240917213026_ekk4jr.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default PresentationPortfolio
