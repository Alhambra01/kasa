import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </>
  );
}
