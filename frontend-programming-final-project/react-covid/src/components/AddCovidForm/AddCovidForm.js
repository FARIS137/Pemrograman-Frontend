
import undraw_conceptual_idea from "./undraw_conceptual_idea.svg";
import { useState } from "react";
import styles from "./AddCovidForm.module.css";

function AddCovidForm(props) {
  const { provinces, setProvinces } = props;

  const [addData, setAddData] = useState({
    province: "",
    status: "",
    total: "",
  });

  const [alert, setAlert] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddData({
      ...addData,
      [name]: value,
    });
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

      setProvinces({ provinces: updatedProvinces });

      setAddData({
        province: "",
        status: "",
        total: "",
      });

      setAlert({});
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.addcovidform}>
        <div className="addmovieform__left">
          <img
            className={styles.form__image}
            src={undraw_conceptual_idea}
            alt={undraw_conceptual_idea}
          />
        </div>
        <div className={styles.addcovidform__right}>
          <h1 className={styles.addcovidform__title}>Form Covid </h1>

          <form onSubmit={handleSubmit}>
            <label>Provinsi</label>
            <br />
            <select
              className={styles.addcovidform__option}
              name="province"
              value={addData.province}
              onChange={handleChange}
            >
              <option value="">--Provinsi Type--</option>
              {provinces.map((province) => (
                <option value={province.kota} >
                  {province.kota}
                </option>
              ))}
            </select>
            {alert.province && (
                <p className={styles.alert}>Provinsi harus diisi</p>
              )}
            <br />
            <label>Status</label>
            <br />
            <select
              className={styles.addcovidform__option}
              name="status"
              value={addData.status}
              onChange={handleChange}
            
            >
              <option value="" >
                --Status Type--
              </option>
              <option value="kasus">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="meninggal">Meninggal</option>
              <option value="dirawat">Dirawat</option>
            </select>
            {alert.status && (
                <p className={styles.alert}>Status harus diisi</p>
              )}
            <br/>
            <label>Jumlah</label><br></br>
            <input className={styles.addcovidform__text}
             type="number" name="total" value={addData.total} onChange={handleChange}></input>
              {alert.total && (
                <p className={styles.alert}>
                  Total harus diisi
                  
                </p>
              )}
              <button className={styles.addcovidform__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
  };     
  
export default AddCovidForm;