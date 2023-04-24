import styles from "./Province.module.css";

function Province (props)  {
  const { provinces } = props;
  return (
    <div className={styles.container}>
      <section className={styles.province__container}>
        <h1 className={styles.province__title}>Province</h1>
        <p className={styles.province__description}> Data Covid Berdasarkan Provinsi</p>
        <div className={styles.table__container}>
          <table className={styles.province__table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {provinces.provinces.map((province, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{province.kota}</td>
                    <td>{province.kasus}</td>
                    <td>{province.sembuh}</td>
                    <td>{province.meninggal}</td>
                    <td>{province.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Province;
