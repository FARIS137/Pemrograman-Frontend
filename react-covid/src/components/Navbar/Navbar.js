
 import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled.js";
 
 function Navbar() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
    <StyledNavbar>
     <div>
       <nav >
         <div>
           <h1 >Covid ID</h1>
         </div>
         <div>
           {/*
            * Membuat Link/Navigasi.
            * Menggunakan Link Component dari React Router
            */}
           <ul >
             <li >
               <Link to="/">Global</Link>
             </li>
             <li >
               <Link to="/covid/indonesia">Indonesia</Link>
             </li>
             <li >
               <Link to="/covid/provinsi">Province</Link>
             </li>
             <li >
               <Link to="/covid/about">About</Link>
             </li>
            
           </ul>
         </div>
       </nav>
     </div>
     </StyledNavbar>
   );
 }
 
 export default Navbar;
 
