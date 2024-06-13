import ButtonArrowLeftBeige from "../Buttons/ButtonArrowLeftBeige";
import ButtonArrowRightBeige from "../Buttons/ButtonArrowRightBeige";
import ButtonSubmitRequest from "../Buttons/ButtonSubmitRequest";
import classes from "./AboutUsBlock.module.scss";

const AboutUsBlock = () => {
  const aboutUsText = [
    {
      id: 1,
      name: 'Чем занимается центр "Буквоешка"?',
      text: "“Буквоешка” - это место, где каждый ребенок получает индивидуальный подход и заботу. Основная цель  нашего центра - помочь детям научиться говорить правильно, свободно и без страха перед окружающими. Логопеды центра используют разнообразные методики и игры, чтобы сделать процесс обучения интересным и эффективным.",
    },
  ];
  const aboutUsList = aboutUsText.map((aboutUsText) => {
    return (
      <div key={aboutUsText.id} className={classes.containerText}>
        <p>{aboutUsText.name}</p>
        <span>{aboutUsText.text}</span>
      </div>
    );
  });
  return (
    <>
      <section className={classes.containerAboutUs}>
        <div className={classes.aboutUsImg}></div>
        <div className={classes.containerButtonLeft}>
          <ButtonArrowLeftBeige />
        </div>
        <div className={classes.containerAboutUsText}>
          <h2>О нас</h2>
          <div>{aboutUsList}</div>
          <div className={classes.containerButtonSubmitRequest}>
            <ButtonSubmitRequest />
          </div>
        </div>
        <div className={classes.containerButtonRight}>
          <ButtonArrowRightBeige />
        </div>
      </section>
    </>
  );
};

export default AboutUsBlock;
