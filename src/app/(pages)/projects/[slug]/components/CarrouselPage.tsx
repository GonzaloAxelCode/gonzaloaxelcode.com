"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";

const CarrouselPage = ({ images = [] }) => {
  return (
    <div className="">
      <Splide
        hasTrack={false}
        options={{
          gap: "0.5rem",
          perPage: 1,
          rewind: true,
        }}
      >
        <div className="splide__arrows ">
          <div
            aria-label="Previous"
            className="splide__arrow splide__arrow--prev"
          ></div>
          <div
            aria-label="Next"
            className="splide__arrow splide__arrow--next"
          ></div>
        </div>

        <SplideTrack>
          {images.map((el: any, index: any) => {
            return (
              <SplideSlide key={index} className="">
                <img
                  className="object-contain mx-auto w-[90vw]"
                  src={el.urlImage}
                  alt=""
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CarrouselPage;
