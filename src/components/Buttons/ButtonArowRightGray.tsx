import classes from "./ButtonArrow.module.scss";


const ButtonArrowRightGray = () => {

  return (
    <>
      <button className={classes.circleGray}>
        <span className={classes.rightArrowGray}></span>
      </button>
    </>
  );
};

export default ButtonArrowRightGray;