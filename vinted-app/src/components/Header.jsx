import Logo from "../assets/img/logo-vinted.png";
import "./Header.css";

const Header = ({ Link }) => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo-vinted" />
        </Link>
        <input type="text" placeholder="Search..." />
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
    </>
  );
};

export default Header;
