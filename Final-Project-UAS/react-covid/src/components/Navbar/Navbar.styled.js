import styled from "styled-components";

const StyledNavbar = styled.div`
/* Small Screen */

    background-color: #06d6a0;
    color: #fff;
  
  
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 2rem;
    padding-left: 30px;
    padding-bottom: 25px;
    margin-top: 1rem;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: 25px;
   
  }
  
  li {
    margin-bottom: 1rem;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      max-width: 1200px;
      margin:auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
    }

    h1 {
      margin-bottom: 0;
    }
  
    li {
      margin: 0 1rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing TODO HERE.
     * We haven't styling Navbar.
     */
  }
  `;
  export default StyledNavbar;
  