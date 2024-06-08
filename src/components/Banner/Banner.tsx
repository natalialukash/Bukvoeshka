import ButtonRegistration from "../Buttons/ButtonRegistration";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <>
    <div className={classes.containerBanner}>
        <div className={classes.containerBannerText}>
            <span>Поможем вашему ребенку
            <br/>открыть дверь в мир слов!</span>
            <span>Пробное занятие бесплатно</span>
            <ButtonRegistration/>
        </div>
        <img src="./assets/icons/letter_e_for_girl.svg" alt="letter_e_for_girl" className={classes.logoImg}/>
        <img src="./assets/images/girl_banner.png" alt="girl_banner" className={classes.bannerImg}/>
        </div>
    </>
  );
};

export default Banner;