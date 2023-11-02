import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import logotext from "../../assets/logo-text.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/" className={style.logo}>
        <img src={logo} alt="SportSee Logo" />
        <img src={logotext} alt="SportSee" />
      </Link>
			<ul>
				<li><NavLink to="/"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					Accueil
				</NavLink></li>
				<li><NavLink to="/"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					Profil
				</NavLink></li>
        <li><NavLink to="/"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					Réglage
				</NavLink></li>
        <li><NavLink to="/"
				className={({ isActive }) => isActive ? "active" : "inactive"}>
					Communauté
				</NavLink></li>
			</ul>
		</header>
	);
}