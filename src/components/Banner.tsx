import ButtonRegistration from "./ButtonRegistration";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <>
    <div className={classes.containerBanner}>
        <div className={classes.containerBannerText}>
            <p>Поможем вашему ребенку</p>
            <p>открыть дверь в мир слов</p>
            <p>Пробное занятие бесплатно</p>
            <ButtonRegistration/>
        </div>
        <img src="./assets/images/girl_banner.png" alt="girl_banner" className={classes.bannerImg}/>
        </div>
    </>
  );
};

export default Banner;