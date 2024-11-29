import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/img/pokemon-logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">{<img src={Logo} alt="logo-pokemon" />}</Link>
        <ul>
          <li>
            <Link to="/pokedex">
              <span>Pokemons</span>
            </Link>
            <Link to="/typechart">
              <span>Types</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
