import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import Logement from "../pages/Logement";
import Error from "../pages/Error";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />

        {/* Route 404 */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
