import undraw_conceptual_idea from "./undraw_conceptual_idea.svg";
import { useState } from "react";
import StyledForm from "./AddCovidForm.styled.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProvince } from "../../Features/ProvincesSlice";

function AddCovidForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const provinces = useSelector((store) => store.provinces.provinces);
  const [addData, setAddData] = useState({
    province: "",
    status: "",
    total: "",
  });

  const [alert, setAlert] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { province, status, total } = addData;

    const newAlert = {
      province: !province,
      status: !status,
      total: !total,
    };
    setAlert(newAlert);

    if (Object.values(newAlert).every((alert) => !alert)) {
      const updatedProvinces = provinces.map((provinsi) => {
        if (provinsi.kota === province) {
          return {
            ...provinsi,
            [status]: provinsi[status] + parseInt(total),
          };
        } else {
          return provinsi;
        }
      });
     

      dispatch(addProvince(updatedProvinces));
      navigation("/covid/provinsi");

      setAddData({
        province: "",
        status: "",
        total: "",
      });

      setAlert({});
    }
  };

  return (
    <StyledForm>
      <div>
        <section>
          <div className="left">
            <img src={undraw_conceptual_idea} alt="Conceptual Idea" />
          </div>
          <div className="right">
            <h1>Form Covid</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Provinsi</label>
                <select
                  name="province"
                  value={addData.province}
                  onChange={handleChange}
                >
                  <option value="">--Pilih Provinsi--</option>
                  {provinces.map((province) => (
                    <option key={province.kota} value={province.kota}>
                      {province.kota}
                    </option>
                  ))}
                </select>
                {alert.province && <p>Provinsi harus diisi</p>}
              </div>
              <div>
                <label>Status</label>
                <select
                  name="status"
                  value={addData.status}
                  onChange={handleChange}
                >
                  <option value="">--Pilih Status--</option>
                  <option value="kasus">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="meninggal">Meninggal</option>
                  <option value="dirawat">Dirawat</option>
                </select>
                {alert.status && <p>Status harus diisi</p>}
              </div>
              <div>
                <label>Jumlah</label>
                <br />
                <input
                  type="number"
                  name="total"
                  value={addData.total}
                  onChange={handleChange}
                />
                {alert.total && <p>Total harus diisi</p>}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </StyledForm>
  );
}

export default AddCovidForm;
