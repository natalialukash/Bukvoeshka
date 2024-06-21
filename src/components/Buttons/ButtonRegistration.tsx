import { Link } from "react-scroll";
import classes from './Button.module.scss'


const ButtonRegistration = () => {
  return (
    <>
      <button className={classes.buttonRegistration}><Link to="formBlock">Записаться</Link></button>
    </>
  );
};

export default ButtonRegistration;
