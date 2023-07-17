import Hero from "../../components/Hero/Hero";
import Indonesian from "../../components/Indonesian/Indonesian";
import Regions from "../../components/RegionsProv/Regions";
import React, { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";


function Indonesiacovid() {
  const [regions, setRegions] = useState([]);
  const [indonesian, setIndonesian] = useState([]);

  useEffect(() => {
    fetch(ENDPOINTS.Indonesia)
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.regions);
        setIndonesian(data.indonesia);
      });
  }, []);

  return (
    <>
      <Hero />
      <Indonesian indonesian={indonesian} />
      <Regions regions={regions} />
    </>
  );
}

export default Indonesiacovid;
