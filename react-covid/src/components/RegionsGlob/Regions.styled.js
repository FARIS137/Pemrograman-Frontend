import styled from "styled-components";

const StyledRegionsGlob = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  flex-wrap: wrap;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #06d6a0;
  }

  h3 {
    font-size: 18px;
    color: #118ab2;
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    flex-basis: 100%;
    margin-bottom: 1.5rem;
    padding: 1rem;
    text-align: center;
  }

  h2 {
    font-size: 23px;
    font-family: poppins;
    margin: 1rem;
  }

  .group {
    margin: 0.5rem;
  }

  .group p {
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
  }

  .confirmed,
  .recovered,
  .death {
    font-size: 20px;
    font-weight: bold;
    align-items: center;
  }

  .confirmed {
    font-size: 25px;
    font-weight: bold;
    color: #06d6a0;
  }

  .confirmed img {
    width: 30px;
    height: 30px;
  }

  .recovered {
    font-size: 25px;
    font-weight: bold;
    color: #118ab2;
  }

  .death {
    font-size: 25px;
    font-weight: bold;
    color: #ff0000;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .card {
      flex-basis: 40%;
      width: 100%;
      margin: 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 100%;
    padding: 2rem;

    h2 {
      font-size: 19px;
      font-family: poppins;
      font-weight: bold;
      margin: 1rem;
    }

    .card {
      min-width: 28%;
      min-height: 100%;
      flex-basis: 20%;
    }
  }
`;
export default StyledRegionsGlob;
