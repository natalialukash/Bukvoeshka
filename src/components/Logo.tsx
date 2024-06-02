import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <>
      <div className={classes.containerLogo}>
        <div>Букво</div>
        <img src="./assets/icons/letter_e_logo.svg" alt="Logo" className={classes.imgLogo} />
        <div>шка</div>
      </div>
    </>
  );
};

export default Logo;
