import styled from "styled-components";

const StyledMovies = styled.div` 
/* Small Screen */

  margin: 5rem auto;


section {
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #000000;
}

.container {
  display: flex;
  flex-direction: column;
}

/* Medium Screen */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Large Screen */
@media (min-width: 992px) {

    max-width: 1200px;
  
}
`;
export default StyledMovies;