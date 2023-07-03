import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .left {
    margin-bottom: 1rem;
  }

  h1 {
    color: #06d6a0;
    font-size: 2.44rem;
  }

  h2 {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
  }

  img {
    max-width: 100%;
    border-radius: 25px;
    height: 330px;
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
    margin: 3rem auto;

    section {
      margin: 0 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .left {
      flex-basis: 50%;
    }

    .right {
      flex-basis: 40%;
    }
  }
`;
export default StyledHero;
