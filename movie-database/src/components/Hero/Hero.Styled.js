import styled from "styled-components";

const StyledHero = styled.div`

/* Small Screen */

  margin: 5rem auto;
  padding: 1rem;


section {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.left {
  margin-bottom: 1rem;
}

\
h2 {
  color: #000000;
  margin-bottom: 1rem;
  font-size: 2.44rem;
}

h3 {
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 1.59rem 100%;
}
a {
  text-decoration: none;
  color: #fff;
}

/* Medium Screen */
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
}

/* Large Screen */
@media (min-width: 992px) {
    max-width: 1200px;

    section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .left {
    flex-basis: 40%;
  }

  
}
`;
export default StyledHero;
