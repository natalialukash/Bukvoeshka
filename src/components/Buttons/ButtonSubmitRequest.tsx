import classes from "./Button.module.scss";
const ButtonSubmitRequest = () => {
  return (
    <>
      <button className={classes.buttonSubmitRequest}>
        <a href="#formBlock">Оставить заявку на пробное занятие</a>
      </button>
    </>
  );
};

export default ButtonSubmitRequest;
