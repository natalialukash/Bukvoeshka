import classes from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <div className={classes.containerAboutUs}>
        <img
          className={classes.aboutUsImg}
          src="./assets/images/girl_about_us.png"
          alt="girl_aboutUs"
        />
        <div>
          <div className={classes.h2}>
            <p>О нас</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutUs;
