import styled from "styled-components";

const StyledIndonesia = styled.div`

  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;


h3 {
  font-size: 40px;
  font-weight: bold;
  color: #06d6a0;
}

p {
  font-size: 18px;
  color: #118ab2;
  
}

.Group {
  
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
  width: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

h2 {
  font-size: 35px;
  font-family: poppins;
}

.confirmed {
  font-size: 32px;
  font-weight: bold;
  color: #06d6a0;


}

.recovered {
  font-size: 32px;
  font-weight: bold;
  color: #118ab2;

}

.death {
  font-size: 32px;
  font-weight: bold;
  color: #ff0000;
}




/* Medium Screen */
@media (min-width: 768px) {
  .card {
    flex-basis: 20%;
    width: 100%;
    height: 100%;
    margin: 1rem;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  
    max-width: 100%;
    padding: 2rem;
  

  .Group {
    flex-wrap: nowrap;
  }

  .card {
    min-width: 220px;
    min-height: 200px;
    flex-basis: 30%;
    margin: 2rem;
  }
}
`;
export default StyledIndonesia;
