import classes from "./ButtonArrow.module.scss";

const ButtonArrowLeftGray = () => {
  return (
    <>
      <button className={classes.circleGray}>
        <span className={classes.leftArrowGray}></span>
      </button>
    </>
  );
};

export default ButtonArrowLeftGray;
