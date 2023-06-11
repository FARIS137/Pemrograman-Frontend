import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import StyledForm from "./AddMovieForm.Styled.js";
import Image from "../ui/Button/Image/Image";
import Input from "../ui/Button/Input/Input";
import Select from "../ui/Button/Select/Select";
import Label  from "../ui/Button/Label/Label";

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

  const [isAlert, setIsAlert] = useState(false)
  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (formData.title === "") {
      setIsAlert({
        ...isAlert,
        title: true,
      });
        return false

    } else if (formData.year === "") {
      setIsAlert({
        ...isAlert,
        year:true,
      });
      return false;

    } else if (formData.poster === "") {
      setIsAlert({
       ...isAlert, 
       poster: true,
      });
      return false;

    } else if (formData.type === "") {
      setIsAlert({
        ...isAlert,
        type:true,
      });
      return false;

   } else {
      setIsAlert(false);
      return true;
    }
  }

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
    <StyledForm>
    <div>
      <section>
        <div class="left">
          <Image src="https://picsum.photos/536/354" alt=""/>
        </div>
        <div class="right">
          <h2>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div class="group">
              <Label htmlFor="title">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}/>
              {isAlert.title && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div class="group">
              <Label htmlFor="year">
                Date
              </Label>
              <Input
                id="year"
                type="text"
                name="year"
                value={year}
                onChange={handleChange}/>
              {isAlert.year && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div class="group">
              <Label htmlFor="poster" >
                Poster
              </Label>
              <Input
                onChange={handleChange}
                id="poster"
                name="poster"
                type="text"
                value={poster}/>
              {isAlert.poster && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div class="group">
              <Label htmlFor="type" >
                Type
              </Label>
              <Select
                id="type"
                name="type"
                value={type}
                onChange={handleChange}>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </Select>
              {isAlert.type && <Alert>Poster Wajib Diisi</Alert>}
            </div>
              <Button variant="primary" full>Add Movie</Button>
          </form>
        </div>
      </section>
    </div>
    </StyledForm>
  );
}

export default AddMovieForm;
