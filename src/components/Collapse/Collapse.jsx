import { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, content, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>

        {/* Flèche dynamique */}
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          {/* SVG minimaliste */}
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className="collapse__content">
          {content}
        </div>
      )}
    </div>
  );
}
