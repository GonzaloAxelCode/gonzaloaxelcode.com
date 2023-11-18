"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";

const CarrouselMovil = ({ images }: any) => {
  return (
    <div>
      <Splide
        hasTrack={false}
        options={{
          gap: "0.5rem",
          loop: true,

          autoplay: true,
          drag: true,
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
              <SplideSlide key={index}>
                <img
                  key={index}
                  alt=""
                  width={1640}
                  height={2360}
                  className="object-contain cursor-grabbing"
                  src={el?.external?.url}
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CarrouselMovil;
