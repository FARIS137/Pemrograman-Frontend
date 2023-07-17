import Hero from "../../components/Hero/Hero";
import Indonesian from "../../components/Indonesian/Indonesian";
import Regions from "../../components/RegionsProv/Regions";
import React, { useEffect, useState } from "react";

function Indonesiacovid() {
  const [regions, setRegions] = useState([]);
  const [indonesian, setIndonesian] = useState([]);

  useEffect(() => {
    fetch(`https://covid-fe-2023.vercel.app/api/indonesia.json`)
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
