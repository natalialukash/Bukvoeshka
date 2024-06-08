import ButtonArrowLeftGray from "../Buttons/ButtonArrowLeftGray";
import ButtonArrowRightGray from "../Buttons/ButtonArowRightGray";
import classes from "./TeachersBlock.module.scss";

const TeachersBlock = () => {
  const teachers = [
    {
      id: 1,
      imageUrl: "../public/assets/images/1teacher_Il'ina.png",
      name: "Ильина Алёна Викторовна",
      position: "Логопед",
    },
    {
      id: 2,
      imageUrl: "../public/assets/images/2teacher_Vysotckaya.png",
      name: "Высоцкая Анна Александровна",
      position: "Психолог",
    },
    {
      id: 3,
      imageUrl: "../public/assets/images/3teacher_Goryunova.png",
      name: "Горюнова Ульяна Ильинична",
      position: "Педагог по рисованию",
    },
  ];
  const teachersList = teachers.map((teachers) => {
    return (
      <div key={teachers.id} className={classes.containerTeacher}>
        <img src={`${teachers.imageUrl}`} width={382} height={502}></img>
        <span>{teachers.name}</span>
        <span>{teachers.position}</span>
      </div>
    );
  });
  return (
    <>
      <div className={classes.containerButtonLeft}><ButtonArrowLeftGray/></div>
      <div className={classes.containerTeachers}>{teachersList}</div>
      <div className={classes.containerButtonRight}><ButtonArrowRightGray/></div>
    </>
  );
};

export default TeachersBlock;
