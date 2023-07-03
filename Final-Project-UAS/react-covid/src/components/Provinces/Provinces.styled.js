import styled from "styled-components";

const StyledProvinces = styled.div`


  margin: 2rem 0;
  padding: 1rem;


section {
  text-align: center;
  justify-content: center;
}

h1 {
  color: #06d6a0;
  font-size: 2.44rem;
}

p{
  color: #118ab2;
}

table {
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
}

.group {
  overflow-x: auto;
}

th {
  color: #06d6a0;
}

table,
td,
th {
  border: 1px solid #64748b;
  padding: 0.25rem;
  white-space: nowrap;
}

/* Medium Scren */
@media (min-width: 768px) {
 table {
    margin: auto;
    margin-top: 2rem;
    width: 70%;
    border-collapse: collapse;
  }
}
`;
export default StyledProvinces;
