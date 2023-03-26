import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h3 className={styles.hero__title}>Spiderman No way Home</h3>
          <h3 className={styles.hero__genre}>
            Genre: Thriller, Drama, Romance
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://cdn.antaranews.com/cache/800x533/2021/12/20/spiderman.jpeg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
