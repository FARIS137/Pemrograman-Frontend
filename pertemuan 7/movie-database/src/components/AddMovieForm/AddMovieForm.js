import { useState } from "react";
import {nanoid} from "nanoid";
import styles from "./AddMovieForm.module.css";
import Error from "../Error/Error";


function AddMovieForm(props){

const {movies, setMovies} = props;
const [title,setTitle] = useState("");
const [date,setDate] = useState("");
const [type,setType] = useState("");
const [link, setLink] = useState("");
const [isTitleError, SetIsTitleError] = useState(false);
const [isDateError, SetIsDateError] = useState(false);
const [isLinkError, SetIsLinkError] = useState(false);
const [isTypeError, SetIsTypeError] = useState(false);

function handleInputTitle(event) {
  setTitle(event.target.value);
}

function handleInputDate(event) {
  setDate(event.target.value);

}
function handleInputType(event) {
  setType(event.target.value);
}

function handleLink(event){
  setLink(event.target.value);
}



function handleSubmit(event) {
  event.preventDefault();
  if (title === "") {
    SetIsTitleError(true);
   
  } 
  else if (date === "") {
    SetIsDateError(true);
    
  }
  else if (link === "") {
    SetIsLinkError(true);
  }
  else if (type === "") {
    SetIsTypeError(true);
  }
else {
  const newMovie = {
    id: nanoid(),
    title: title,
    year: date,
    type: type,
    poster: link,
  };

  setMovies([...movies, newMovie])
  SetIsDateError(false);
  SetIsTitleError(false);
  SetIsLinkError(false);
  SetIsTypeError(false);
}
}


  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className="addmovieform__left">
          <img 
          className={styles.addmovieform__image}
          src="https://picsum.photos/536/354"
          alt=""
          />
        </div>
        <div className={styles.addmovieform__right}>
          <h2 className={styles.addmovieform__title}>Add Movie </h2>
          <form onSubmit={handleSubmit}>
            <label>Title</label><br></br>
              <input  className={styles.addmovieform__text}
              type="text" name="title" value={title} onChange={handleInputTitle}></input>
              {isTitleError ? <Error>Title Wajib diisi</Error>: ""}
              <br></br>
            <label>Year</label><br></br>

            <input className={styles.addmovieform__text}
            type="text" name="year" value={date} onChange={handleInputDate}>
            </input>
              {isDateError ? <Error>Title Wajib diisi</Error>: ""}<br/>
            <label>Link</label><br></br>
            <input className={styles.addmovieform__text}
             type="text" name="link" value={link} onChange={handleLink}></input>
            {isLinkError ? <Error>Link Wajib diisi</Error>: ""}
            {}
            <br></br>
            <label>Type</label><br></br>
            <select name="" id=""  onChange={handleInputType} value={type}>  
            <option value="" selection disabled> --movies Type--</option>
              <option value="action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              {isTypeError ? <Error>Type Wajib diisi</Error>: ""}
            
            </select>
            
            
            <br></br>
              <button  submit="submit" className={styles.addmovieform__button}>Submit</button>
            
          </form>
        </div>
      </section>
    </div>
  )

}
export default AddMovieForm;