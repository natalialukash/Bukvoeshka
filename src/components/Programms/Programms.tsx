import classes from "./Programms.module.scss";

const ProgrammsList = () => {
  const programmGroup = [
    {
      id: 1,
      name: "Развитие речи",
      imageUrl: "../public/assets/images/programm_group_1.png",
    },
    {
      id: 2,
      h2: "Групповые программы",
      name: "Подготовка к школе",
      imageUrl: "../public/assets/images/programm_group_2.png",
    },
    {
      id: 3,
      name: "Коммуникативная группа",
      imageUrl: "../public/assets/images/programm_group_3.png",
    },
    {
      id: 4,
      name: "Развитие речи",
      imageUrl: "../public/assets/images/programm_individual_1.png",
    },
    {
      id: 5,
      h2: "Индивидуальные программы",
      name: "Коррекция речи",
      imageUrl: "../public/assets/images/programm_individual_2.png",
    },
    {
      id: 6,
      name: "Индивидуальная подготовка к школе",
      imageUrl: "../public/assets/images/programm_individual_3.png",
    },
    {
      id: 7,
      name: "Нейропсихологические занятия",
      imageUrl: "../public/assets/images/programm_psychology_1.png",
    },
    {
      id: 8,
      h2: "Психологические направления",
      name: 'Нейро-класс "Буквоешка"',
      imageUrl: "../public/assets/images/programm_psychology_2.png",
    },
    {
      id: 9,
      name: "Песочная и арт-терапия",
      imageUrl: "../public/assets/images/programm_psychology_3.png",
    },
  ];
  const programmList = programmGroup.map((programmGroup) => {
    return (
      <div key={programmGroup.id} className={classes.programmgroup_container}>
        <h2 className={classes.h2}>{programmGroup.h2}</h2>
        <img src={`${programmGroup.imageUrl}`} width={520} height={360}></img>
        <span>{programmGroup.name}</span>
      </div>
    );
  });
  return <div className={classes.programm_container}>{programmList}</div>;
};

export default ProgrammsList;