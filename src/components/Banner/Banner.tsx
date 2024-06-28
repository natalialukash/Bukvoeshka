import ButtonRegistration from "../Buttons/ButtonRegistration";
import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <>
    <section className={classes.containerBanner}>
        <div className={classes.containerBannerText}>
            <span>Поможем вашему ребенку
            <br/>открыть дверь в мир слов!</span>
            <ButtonRegistration/>
            <span>Пробное занятие бесплатно</span>
        </div>
        <div className={classes.bannerImg}><img src={"../assets/icons/letter_e_for_girl.svg"} alt="letter_e_for_girl" /></div>
        </section>
    </>
  );
};

export default Banner;