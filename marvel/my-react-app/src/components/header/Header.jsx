import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="padding">
              <Link to="/">
                <img src="src\assets\img\marvel-logo.svg" alt="" />
              </Link>
            </li>
            <li className="padding link-menu">
              <Link to="/characters">
                <div className="roboto-medium">CHARACTERS</div>
              </Link>
            </li>
            <li className="padding link-menu">
              <Link to="/comics">
                <div className="roboto-medium">COMICS</div>
              </Link>
            </li>

            <li className="login">
              <Link to="/signup">
                <div className="roboto-medium">JOIN</div>
              </Link>
              <div className="separator">|</div>
              <Link to="/login">
                <div className="roboto-medium">LOGIN</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
