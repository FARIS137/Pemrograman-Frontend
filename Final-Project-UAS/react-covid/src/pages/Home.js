import Global from "../components/Globals/Global";
import Regions from "../components/RegionsGlob/Regions";
import Hero from "../components/Hero/Hero";
import React, { useEffect, useState } from "react";
import ENDPOINTS from "../utils/constants/endpoint";


function Home() {
  const [regions, setRegions] = useState([]);
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    fetch(ENDPOINTS.Global)
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.regions);
        setGlobal(data.global);
      });
  }, []);

  return (
    <>
      <Hero />
      <Global global={global} />
      <Regions regions={regions} />
    </>
  );
}

export default Home;
