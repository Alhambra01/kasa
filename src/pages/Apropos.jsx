import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";

import bannerApropos from "../img/unsplash.jpg";
import "./Apropos.scss";

export default function Apropos() {
  return (
    <div className="apropos">
      <Banner image={bannerApropos} className="banner--apropos"/>

      <div className="apropos__content">
        <Collapse
          className="collapse--large"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />

        <Collapse
          className="collapse--large"
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Collapse
          className="collapse--large"
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />

        <Collapse
          className="collapse--large"
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
