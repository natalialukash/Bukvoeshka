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
          <div className={classes.aboutUs}>О нас</div>
          <div className={classes.programms}>Программы</div>
          <div className={classes.teachers}>Преподаватели</div>
          <div className={classes.reviews}>Отзывы</div>
          <div className={classes.contacts}>Контакты</div>
          <div className={classes.telephone}>+7(499) 999-99-99</div>
        </div>
      </header>
    </>
  );
};

export default Header;
