import Logo from "./Logo.tsx";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={classes.containerHeader}>
        <div>
          <Logo />
        </div>
        <div className={classes.containerNav}>
          <div>О нас</div>
          <div>Программы</div>
          <div>Преподаватели</div>
          <div>Отзывы</div>
          <div>Контакты</div>
          <div>+7(499) 999-99-99</div>
        </div>
      </header>
    </>
  );
};

export default Header;
