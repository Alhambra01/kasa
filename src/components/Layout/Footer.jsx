import logo from "../Logo/LOGO.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

