// Import Navbar, Hero, Movies, Footer Component
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieFrom from "../components/AddMovieFrom/AddMovieForm";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
    return (
        <main>
        <Hero />
        <Movies />
        <AddMovieFrom />
        </main>
    );
}


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Main/>
      <Footer />
      
    </>
  );
}

export default Home;
