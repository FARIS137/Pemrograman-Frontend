import styles from "./AddMovieForm.module.css"

function AddMovieForm(){
  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className="addmovieform__left">
          <img 
          className={styles.addmovieform__image}
          src="https://cdn.antaranews.com/cache/800x533/2021/12/20/spiderman.jpeg"
          alt=""
          />
        </div>
        <div className={styles.addmovieform__right}>
          <h4 className={styles.addmovieform__title}>Add Movie </h4>
          <form>
            <label>Title</label><br></br>
              <input  className={styles.addmovieform__text}
              type="text" name="title"></input><br></br>
            <label>Year</label><br></br>
            <input className={styles.addmovieform__text}
            type="text" name="year"></input><br></br>
              <button  submit="submit" className={styles.addmovieform__button}>Submit</button>
            
          </form>
        </div>
      </section>
    </div>
  )

}
export default AddMovieForm;