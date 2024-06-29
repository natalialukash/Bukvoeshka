import classes from "./ReviewsBlock.module.scss";

const ReviewsBlock = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна И.",
      text: "Замечательный центр, педагоги профессионалы своего дела, вкладывают душу и уделяет каждому ребенку много внимания. Мы ходим в центр с большим удовольствием уже второй год.",
    },
    {
      id: 2,
      name: "Мария Т.",
      text: "Рекомендую этот центр всем родителям, чьи дети нуждаются в помощи специалистов. Отдельно хочется отметить уютную атмосферу и доброжелательное отношение персонала.",
    },
    {
      id: 3,
      name: "Илья Н.",
      text: "Хочется отметить профессионализм и опыт логопедов, их умение находить подход к каждому ребенку. Занятия проходили в игровой форме, что делало процесс обучения интересным для малыша.",
    },
    {
      id: 4,
      name: "Григорий К.",
      text: "Вежливый персонал, индивидуальный подход и быстрые результаты делают это место отличным выбором для родителей, желаюищх помочь своим детям с речевыми проблемами.",
    },
  ];
  return (
    <>
      <section className={classes.containerReviewsBlock}>
        <div>
          <h2>Отзывы родителей</h2>
        </div>
        <div className={classes.containerReviews}>
          <div
            id="carouselExampleControls_3"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <button
              className={`carousel-control-prev ${classes.controlPrev}`}
              type="button"
              data-bs-target="#carouselExampleControls_3"
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
                <div className="d-block w-100">
                  <div key={reviews[0].id} className={classes.containerReview}>
                    <p>{reviews[0].name}</p>
                    <div className={classes.reviewIcon}>
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                    </div>
                    <span>{reviews[0].text}</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <div key={reviews[1].id} className={classes.containerReview}>
                    <p>{reviews[1].name}</p>
                    <div className={classes.reviewIcon}>
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                    </div>
                    <span>{reviews[1].text}</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <div key={reviews[2].id} className={classes.containerReview}>
                    <p>{reviews[2].name}</p>
                    <div className={classes.reviewIcon}>
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                    </div>
                    <span>{reviews[2].text}</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <div key={reviews[3].id} className={classes.containerReview}>
                    <p>{reviews[3].name}</p>
                    <div className={classes.reviewIcon}>
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                      <img src={"../assets/icons/Star.svg"} alt="" />
                    </div>
                    <span>{reviews[3].text}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`carousel-control-next ${classes.controlNext}`}
              type="button"
              data-bs-target="#carouselExampleControls_3"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsBlock;
