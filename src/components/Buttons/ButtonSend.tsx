import classes from "./Button.module.scss"

const ButtonSend = () => {
    return (
      <>
        <button type="submit" className={classes.buttonSend}>Отправить</button>
      </>
    );
  };
  
  export default ButtonSend;