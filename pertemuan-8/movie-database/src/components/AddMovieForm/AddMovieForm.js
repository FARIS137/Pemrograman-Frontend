import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    poster: "",
    type: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    year: false,
    poster: false,
    type: false,
  });
  
  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const validate = () => {
    let isvalid = true;
    let newAlert = { ...isAlert };

    for (const key in formData) {
      if (formData[key] === "") {
        newAlert[key] = true;
        isvalid = false;
      } else {
        newAlert[key] = false;
      }
    }
    setIsAlert(newAlert);
    return isvalid;
  };

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: formData.title,
      year: formData.year,
      type: formData.type,
      poster: formData.poster,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }
  const { title, year, poster, type } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isAlert.title && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="year" className={styles.form__label}>
                Date
              </label>
              <input
                id="year"
                className={styles.form__input}
                type="text"
                name="year"
                // Memberikan value input: date
                value={year}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isAlert.year && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              {isAlert.poster && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
              {isAlert.type && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
