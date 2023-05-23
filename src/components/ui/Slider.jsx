"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 14 },
    range: {
      min: -5,
      max: 5,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider my-20">
      <div className="keen-slider__slide">
        <img
          className="rounded h-full w-full object-cover"
          src="/atm-team.jpg"
        />
      </div>
      <div className="keen-slider__slide ">
        <img className="rounded " src="/atm-gl.jpg" />
      </div>
      <div className="keen-slider__slide ">
        <img className="rounded " src="/atm-sign.jpg" />
      </div>
      <div className="keen-slider__slide ">
        <img className="rounded " src="/atm-visit.jpg" />
      </div>
      <div className="keen-slider__slide ">
        {" "}
        <img className="rounded " src="/atm-gl1.jpg" />
      </div>
      <div className="keen-slider__slide ">
        {" "}
        <img className="rounded " src="/atm-office.jpg" />
      </div>
      {/* <div className="keen-slider__slide number-slide6">
        <img src={image} className="rounded w-10/12" />
      </div> */}
    </div>
  );
}
