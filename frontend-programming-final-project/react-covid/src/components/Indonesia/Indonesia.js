import styles from "./Indonesia.module.css";
import data from "./../../utils/constants/indonesia";

function Indonesia() {
  const { indonesia } = data;
  
  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <h2 className={styles.indonesia__title}>Indonesia</h2>
        <p className={styles.indonesia__description}>Data Covid Berdasarkan Indonesia</p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Confirmed</h2>
            <p className={styles.cardDescription1}>{indonesia[0].total}</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Recorvered</h2>
            <p className={styles.cardDescription2}>{indonesia[1].total}</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Death</h2>
            <p className={styles.cardDescription3}>{indonesia[2].total}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indonesia;
