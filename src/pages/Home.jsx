import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import bannerHome from "../img/chez-vous-partout-et-ailleurs.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner
        image={bannerHome} className="banner--home" 
        text="Chez vous, partout et ailleurs"
      />

      <Gallery />
    </>
  );
}