import ButtonSubmitRequest from "../Buttons/ButtonSubmitRequest";
import classes from "./AboutUsBlock.module.scss";

const AboutUsBlock = () => {
  return (
    <>
      <section className={classes.containerAboutUs}>
        <div className={classes.aboutUsImg}></div>
        <div className={classes.containerAboutUsText}>
          <h2>О нас</h2>
          <div
            id="carouselExampleControls_1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <button
              className={`carousel-control-prev ${classes.controlPrev}`}
              type="button"
              data-bs-target="#carouselExampleControls_1"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className={`d-block w-100 ${classes.containerText}`}>
                  <p>Чем занимается центр "Буквоешка"?</p>
                  <span>
                    "Буквоешка" - это место, где каждый ребенок получает
                    индивидуальный подход и заботу. Основная цель нашего центра
                    - помочь детям научиться говорить правильно, свободно и без
                    страха перед окружающими. Логопеды центра используют
                    разнообразные методики и игры, чтобы сделать процесс
                    обучения интересным и эффективным.
                  </span>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block w-100 ${classes.containerText}`}>
                  <p>Почему стоит выбрать наш центр?</p>
                  <span>
                    При выборе логопедического центра для своего ребенка важно
                    обращать внимание на репутацию учреждения, квалификацию
                    специалистов, методики работы и атмосферу, царящую в центре.
                    "Буквоешка" сочетает в себе все эти качества, делая его
                    отличным выбором для родителей, кто хочет помочь своему
                    ребенку в развитии речи.
                  </span>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block w-100 ${classes.containerText}`}>
                  <p>Преимущества обучения в центре</p>
                  <span>
                    Одним из главных преимуществ «Буквоешки» является опытный
                    и дружелюбный персонал. Логопеды центра обладают не только
                    профессиональными знаниями, но и умением находить подход
                    к каждому ребенку. Кроме того, «Буквоешка» предлагает гибкий
                    график занятий, что удобно как для детей, так и для
                    их родителей.
                  </span>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block w-100 ${classes.containerText}`}>
                  <p>Мы ждем вас!</p>
                  <span>
                    Детский логопедический центр "Буквоешка" - это не просто
                    место обучения, а настоящая поддержка и помощь детям в
                    развитии речи. Профессионализм, индивидуальный подход и
                    доброжелательная атмосфера делают "Буквоешку" идеальным
                    выбором для всех, кто ценит качество обучения своих детей.
                    Приходите к нам!
                  </span>
                </div>
              </div>
            </div>
            
            <button
              className={`carousel-control-next ${classes.controlNext}`}
              type="button"
              data-bs-target="#carouselExampleControls_1"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Следующий</span>
            </button>
            </div>
            <div className={classes.containerButtonSubmitRequest}>
          <ButtonSubmitRequest />
        </div>
          </div>

      </section>
    </>
  );
};

export default AboutUsBlock;
