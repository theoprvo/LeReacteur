// import Logo from "../../assets/img/Vinted_Logo_2022.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// isLoading

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-center">
        <nav className="container">
          <div className="margin d-flex align-items-center">
            <Link to="/">
              <img
                src="https://marketplace-web-assets.vinted.com/assets/web-logo/default/logo.svg"
                alt="logo-vinted"
              />
            </Link>
          </div>
          <div className="d-flex align-items-center searchbar margin">
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type="text" placeholder="Rechercher des articles" />
          </div>
          <ul>
            <li>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/signin">
                <button>Se connecter</button>
              </Link>
              <Link to="/">
                <button>Vends tes articles</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
