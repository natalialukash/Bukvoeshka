import Logo from "../Logo/Logo";
import classes from "./Header.module.scss";


const Header = () => {
  return (
    <>
      <header>
        <div>
          <Logo />
        </div>
        <div className={classes.containerNav}>
          <div><a href="#aboutUs">О нас</a></div>
          <div><a href="#programmsList">Программы</a></div>
          <div><a href="#teachersBlock">Преподаватели</a></div>
          <div><a href="#reviewsBlock">Отзывы</a></div>
          <div><a href="#contactsBlock">Контакты</a></div>
          <div>+7(499) 377-37-37</div>
        </div>
      </header>
    </>
  );
};

export default Header;
