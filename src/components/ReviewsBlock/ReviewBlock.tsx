import ButtonArrowLeftBeige from "../Buttons/ButtonArrowLeftBeige";
import ButtonArrowRightBeige from "../Buttons/ButtonArrowRightBeige";
import classes from "./ReviewsBlock.module.scss";

const ReviewsBlock = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна И.",
      icon: "../public/assets/icons/star.svg",
      text: "Замечательный центр, педагоги профессионалы своего дела, вкладывают душу и уделяет каждому ребенку много внимания даже на групповых занятиях. Мы ходим в центр с большим удовольсвтием уже второй год и не планируем прекращать.",
    },
  ];
  const reviewsList = reviews.map((reviews) => {
    return (
      <div key={reviews.id} className={classes.containerReviews}>
        <span>{reviews.name}</span>
        <img
          src={`${reviews.icon}`}
          className={classes.containerIcon}
          alt="star_icon"
        ></img>
        <img
          src={`${reviews.icon}`}
          className={classes.containerIcon}
          alt="star_icon"
        ></img>
        <img
          src={`${reviews.icon}`}
          className={classes.containerIcon}
          alt="star_icon"
        ></img>
        <img
          src={`${reviews.icon}`}
          className={classes.containerIcon}
          alt="star_icon"
        ></img>
        <img
          src={`${reviews.icon}`}
          className={classes.containerIcon}
          alt="star_icon"
        ></img>
        <span>{reviews.text}</span>
      </div>
    );
  });
  return (
    <>
      <div>
        <h2>Отзывы родителей</h2>
      </div>
      <div className={classes.containerReviews}>
        <ButtonArrowLeftBeige />
        <div className={classes.containerReview}>{reviewsList}</div>
        <ButtonArrowRightBeige />
      </div>
    </>
  );
};

export default ReviewsBlock;
