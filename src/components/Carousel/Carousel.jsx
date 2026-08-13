import { useState } from "react";
import "./Carousel.scss";

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[index]}
        alt="Logement"
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={prev}>
            ‹
          </button>

          <button className="carousel__arrow carousel__arrow--right" onClick={next}>
            ›
          </button>

          <p className="carousel__counter">
            {index + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
}
