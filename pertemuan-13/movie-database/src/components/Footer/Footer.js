/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledFooter from "./Footer.Styled.js";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <div>
      <footer>
        <h2>Movie App</h2>
        <p>Created by Muhammad Faris</p>
      </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
