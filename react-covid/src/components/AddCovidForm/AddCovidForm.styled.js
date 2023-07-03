import styled from "styled-components";

const StyledForm = styled.div`

  margin: 2rem;


section {
  text-align: left;
  justify-content: center;
}
img {
  max-width: 85%;
  height: 300px;
  border-radius: 10px;
  margin-right: 5rem;
  margin-top: 3rem;
}

label{
  margin-top: 0.5rem;
}
select {
  height: 30px;
  border: 2px solid #06d6a0;
  width: 101%;
  border-radius: 8px;
}
input {
  height: 30px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #06d6a0;
}
h1 {
  color: #06d6a0;
  text-align: center;
  margin-top: 1rem;
  
}

button {
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #06d6a0;
  color: #fff;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
}

p {
  color: rgb(255, 0, 0);
  margin: auto;
}

@media (min-width: 768px) {
  section {
    display: flex;
  }
}

@media (min-width: 992px) {

    max-width: 100%;
    margin: 3rem auto;
  
  section {
    display: flex;
    text-align: left;
    justify-content: center;
  }

  .right {
    flex-basis: 20%;
  }

  .left {
    flex-basis: 40%;
  }
}
`;

export default StyledForm;
