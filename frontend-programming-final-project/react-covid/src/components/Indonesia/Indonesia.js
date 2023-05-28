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
          {indonesia.map((data, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.cardTitle}>{data.status}</h2>
              <p className={styles.cardDescription}>{data.total}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  }

export default Indonesia;
