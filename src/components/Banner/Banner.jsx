// src/components/Banner/Banner.jsx
import "./Banner.scss";

export default function Banner({ image, text, className = ""  }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="banner" className="banner__image" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}
