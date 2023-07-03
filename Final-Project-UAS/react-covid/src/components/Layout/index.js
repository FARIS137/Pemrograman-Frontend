import Container from "../Container/index";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {/*
         * Menggunakan Component Container.
         * Konten dibungkus dengan Container.
         */}
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
