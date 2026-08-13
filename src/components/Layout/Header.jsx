import { Link } from "react-router-dom";
import logo from "../Logo/LOGO.png";   // chemin correct
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />

      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}

