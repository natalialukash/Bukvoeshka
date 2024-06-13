import ButtonRegistration from "../Buttons/ButtonRegistration";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <>
    <section className={classes.containerBanner}>
        <div className={classes.containerBannerText}>
            <span>Поможем вашему ребенку
            <br/>открыть дверь в мир слов!</span>
            <span>Пробное занятие бесплатно</span>
            <ButtonRegistration/>
        </div>
        <div className={classes.bannerImg}><img src="../../../public/assets/icons/letter_e_for_girl.svg" alt="letter_e_for_girl" /></div>
        </section>
    </>
  );
};

export default Banner;