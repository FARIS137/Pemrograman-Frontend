/**
 * Import CSS Module Navbar.
 * Disimpan di object styles
 */

// Import Link dari React Router

import StyledNavbar from "./Navbar.Styled.js";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
    <div >
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movie/create">Add Movie</a>
            </li>
            <li>
              <a href="/movie/popular">Popular</a>
            </li>
            <li >
              <a href="/movie/now">Now Playing</a>
            </li>
            <li >
              <a href="/movie/top">Top Rated</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </StyledNavbar>
  );
}

export default Navbar;
