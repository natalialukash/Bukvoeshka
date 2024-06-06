import classes from "./ButtonArrow.module.scss";

const ButtonArrowLeftBeige = () => {
  return (
    <>
      <button className={classes.circleBeige}>
        <span className={classes.leftArrowBeige}></span>
      </button>
    </>
  );
};

export default ButtonArrowLeftBeige;
