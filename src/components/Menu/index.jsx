import style from "./Menu.module.scss";
import iconyoga from "../../assets/Menu/yoga.svg";
import iconswim from "../../assets/Menu/swim.svg";
import iconbike from "../../assets/Menu/bike.svg";
import iconbody from "../../assets/Menu/body.svg";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<div className={style.menu}>
			<div className={style.logos}>
        <Link to="/" className={style.logo}>
          <img src={iconyoga} alt="Yoga" />
        </Link>
        <Link to="#" className={style.logo}>
          <img src={iconswim} alt="Natation" />
        </Link>
        <Link to="#" className={style.logo}>
          <img src={iconbike} alt="Vélocyclette" />
        </Link>
        <Link to="#" className={style.logo}>
          <img src={iconbody} alt="Musculation" />
        </Link>
      </div>
			<p className={style.text}>Copyright, SportSee 2020</p>
		</div>
	);
}