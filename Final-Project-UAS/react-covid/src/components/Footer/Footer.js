import { Link } from "react-router-dom";
import StyledFooter from "./Footer.styled.js";

function Footer() {
  return (
    <StyledFooter>
    <div>
      <footer>
        <div>
          <h2>Covid ID</h2>
          <p>Develeped by Muhammad faris</p>
        </div>
        <div>
          <ul>
            <li >
              <Link to="/">Global</Link>
            </li>
            <li >
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li >
              <Link to="/covid/provinsi">Province</Link>
            </li>
            <li>
              <Link to="/covid/about">About</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </StyledFooter>
  );
}

export default Footer;
