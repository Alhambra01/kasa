import Card from "../Card/Card";
import "./Gallery.scss";
import data from "../../data/logements.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {data.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
}
