import React, { useEffect } from "react";
import "./slider.styles.scss";
import { ISliderProps } from "./types";

const Slider = ({ interval = 2000, slides }: ISliderProps) => {
  const images = [...slides];

  const startSlider = () => {
    const slides = document.querySelectorAll(".slide");
    let slideIndex = 0;
    slides[slideIndex].classList.add("active");
    slideIndex++;

    setInterval(() => {
      slides[slideIndex].classList.add("active");
      if (slideIndex === 0) {
        slides[slides.length - 1].classList.remove("active");
      } else if (slideIndex > 0) {
        slides[slideIndex - 1].classList.remove("active");
      }
      slideIndex++;
      if (slideIndex === slides.length) {
        slideIndex = 0;
      }
    }, interval);
  };

  useEffect(() => {
    startSlider();
  }, []);

  return (
    <section className="slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className="slide"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </section>
  );
};

export default Slider;
