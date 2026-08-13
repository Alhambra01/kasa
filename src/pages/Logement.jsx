// src/pages/Logement.jsx
import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";

import Carousel from "../components/Carousel/Carousel";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import Collapse from "../components/Collapse/Collapse";

import "./Logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement__header">
        <div className="logement__info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="logement__side">
          <div className="logement__host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse
          className="collapse"
          title="Description"
          content={logement.description}
        />

        <Collapse
          className="collapse"
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
