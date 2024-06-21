import { Link } from "react-scroll";
import classes from "./Button.module.scss";
const ButtonSubmitRequest = () => {
  return (
    <>
      <button className={classes.buttonSubmitRequest}>
        <Link to="formBlock">Оставить заявку на пробное занятие</Link>
      </button>
    </>
  );
};

export default ButtonSubmitRequest;
