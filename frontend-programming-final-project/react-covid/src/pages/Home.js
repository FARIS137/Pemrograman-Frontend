import Footer from "../components/Footer/Footer";
import Hero from "./../components/Hero/Hero";
import Navbar from "./../components/Navbar/Navbar";
import AddCovidForm from "./../components/AddCovidForm/AddCovidForm";
import Indonesia from "../components/Indonesia/Indonesia";
import Province from "../components/Province/Province";
import data from "./../utils/constants/provinces";
import { useState } from "react";


function Home() {
  const [provinces, setProvinces ] = useState(data);
  return (
    <>
      <Navbar />
      <Hero />
      <Indonesia />
      <Province provinces={provinces} setProvinces={setProvinces}  />
      <AddCovidForm provinces={provinces.provinces} setProvinces={setProvinces}  />
      <Footer />
    </>
  );
}

export default Home;
