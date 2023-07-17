import StyledRegionsprov from "./Regions.styled.js";
import Region from "../RegionProv/Region";

function Regions(props) {
  const { regions } = props;

  return (
    <StyledRegionsprov>
      <div>
        <section>
          <h2>Situation by Provinces</h2>
          <p>Data Covid Berdasarkan Provinsi</p>
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
                  <Region key={index} region={region} index={index} />
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
