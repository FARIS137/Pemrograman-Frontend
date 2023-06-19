import styled from "styled-components";

const StyledForm = styled.div`

/* Small Screen */
  margin: 5rem 1rem;
  padding: 1rem;


section {
  display: flex;
  flex-direction: column;
}

.left {
  display: none;
}


h2 {
  text-align: center;
  color: #000000;
  font-size: 2.22rem;
  margin-bottom: 1rem;
}

.group {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}


/* Large Screen */
@media (min-width: 992px) {

    max-width: 1200px;
    margin: 5rem auto;


  section{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .left {
    display: block;
    flex-basis: 60%;
  }

  .right {
    flex-basis: 40%;
  }
}
`;
export default StyledForm;
