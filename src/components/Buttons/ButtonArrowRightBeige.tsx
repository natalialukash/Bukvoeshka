import classes from "./ButtonArrow.module.scss";

const ButtonArrowRightBeige = () => {
  return (
    <>
      <button className={classes.circleBeige}>
        <span className={classes.rightArrowBeige}></span>
      </button>
    </>
  );
};

export default ButtonArrowRightBeige;
