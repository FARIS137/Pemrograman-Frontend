import styled from "styled-components";

const StyledFooter = styled.div`


  background-color: #06d6a0;
  color: #fff;
  padding: 1rem;


footer {
  display: flex;
}
h2 {
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 25px;
}

p {
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 25px;
}
ul {
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  list-style: none;
}

li {
  margin-bottom: 1rem;
}

/* Medium Screen */
@media (min-width: 768px) {
  footer {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

 ul {
    flex-direction: row;
  }

  li {
    margin: 0 1rem;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
}
`

export default StyledFooter;
