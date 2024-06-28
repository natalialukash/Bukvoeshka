import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <>
      <div className={classes.containerLogo}>
        <div>Букво</div>
        <img src="../../../public/assets/icons/letter_e_logo.svg" alt="Logo"/>
        <div>шка</div>
      </div>
    </>
  );
};

export default Logo;
