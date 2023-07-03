import { useSelector } from "react-redux";
import StyledProvinces from "./Provinces.styled.js";
import Province from "../Province/Province";

function Provinces() {
  const provinces = useSelector((store) => store.provinces.provinces);

  return (
    <StyledProvinces>
      <div>
        <section>
          <h1>Province</h1>
          <p>Data Covid Berdasarkan Provinsi</p>
          <div className="group">
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
                {provinces.map((province, index) => (
                  <Province key={index} province={province} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </StyledProvinces>
  );
}

export default Provinces;
