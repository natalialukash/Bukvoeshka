import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.containerFooterText}>
          <p>ООО “Буквоешка”</p>
          <p>
            г. Казань, ул. Шоссейная, д.20, оф. 20 ОГРН 1241693762233, ИНН
            1657779723
          </p>
        </div>
        <div>
          <p>Все права защищены © 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
