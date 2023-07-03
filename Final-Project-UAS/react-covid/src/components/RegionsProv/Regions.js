import React, { useEffect, useState } from "react";
import StyledRegionsprov from "./Regions.styled.js";
import Region from "../RegionProv/Region";

function Regions() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch(`https://covid-fe-2023.vercel.app/api/indonesia.json`)
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.regions);
      });
  }, []);

  return (
    <StyledRegionsprov>
    <div>
      <section>
        <h2 >Situation by Provinces</h2>
        <p>
          Data Covid Berdasarkan Provinsi
        </p>
        <div className="Group">
          <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>    
              <th>Sembuh</th>
              <th>Meninggal</th>
              <th>Dirawat</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region, index) => (
              <Region key={index} region={region} index={index}/>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </div>
    </StyledRegionsprov>
  );
}

export default Regions;

