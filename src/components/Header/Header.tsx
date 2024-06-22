import Logo from "../Logo/Logo";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Logo />
        </div>
        <div className={classes.containerNav}>
          <div>
            <Link to="aboutUs">О нас</Link>
          </div>
          <div>
            <Link to="programmsList">Программы</Link>
          </div>
          <div>
            <Link to="teachersBlock">Преподаватели</Link>
          </div>
          <div>
            <Link to="reviewsBlock">Отзывы</Link>
          </div>
          <div>
            <Link to="contactsBlock">Контакты</Link>
          </div>
          <div><a href="tel:+74993773737">+7 (499) 377-37-37</a></div>
        </div>
      </header>
    </>
  );
};

export default Header;
