import styles from "./Hero.module.css";
function Hello() {

    return (
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h1 className={styles.hero__title}>Covid ID</h1>
            <p className={styles.hero__genre}>
              Monitoring Perkembangan Covid
            </p>
            <p className={styles.hero__description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              cum accusamus quisquam earum velit ea nobis maiores exercitationem
              nam temporibus.
            </p>
            <button className={styles.hero__button}>Vaccine</button>
          </div>
          <div className="hero__right">
            <img
              className={styles.hero__image}
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhy3BW-bvu7Vlc2lT0OFRAKERTVMfDzORVkwSyfELwOQGdHhn4"
              alt=""
            />
          </div>
        </section>
      </div>
    );
}

export default Hello;
