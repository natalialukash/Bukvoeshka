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
          <div>О нас</div>
          <div>Программы</div>
          <div>Преподаватели</div>
          <div>Отзывы</div>
          <div>Контакты</div>
          <div>+7(499) 377-37-37</div>
        </div>
      </header>
    </>
  );
};

export default Header;
