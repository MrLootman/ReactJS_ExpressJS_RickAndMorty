import { NavLink } from "react-router-dom";
import Logo from "../../assets/rick_logo.png";
import ToggleTheme from "../ToggleTheme";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Rick and Morty logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/login">Connexion</NavLink>
        <ToggleTheme />
      </nav>
    </header>
  )
}

export default Header;