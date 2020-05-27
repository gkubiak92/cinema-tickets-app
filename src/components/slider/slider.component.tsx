import React, { useEffect } from "react";
import "./slider.styles.scss";

const Slider = () => {
  const images = [
    "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
    "https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71zaL8t0qgL._AC_SL1406_.jpg",
  ];

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
    }, 2000);
  };

  useEffect(() => {
    startSlider();
  }, []);

  return (
    <section className="slider-container">
      {images.map((img) => (
        <div
          key={img}
          className="slide"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </section>
  );
};

export default Slider;
