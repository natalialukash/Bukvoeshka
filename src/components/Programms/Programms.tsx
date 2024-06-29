import classes from "./Programms.module.scss";

const ProgrammsList = () => {
  const programmGroup = [
    {
      id: 1,
      h2: "Групповые программы",
      name: "Развитие речи",
      imageUrl: "../assets/images/programm_group_1.png",
    },
    {
      id: 2,
      name: "Подготовка к школе",
      imageUrl: "../assets/images/programm_group_2.png",
    },
    {
      id: 3,
      name: "Коммуникативная группа",

      imageUrl: "../assets/images/programm_group_3.png",
    },
    {
      id: 4,
      h2: "Индивидуальные программы",
      name: "Развитие речи",
      imageUrl: "..//assets/images/programm_individual_1.png",
    },
    {
      id: 5,
      name: "Коррекция речи",
      imageUrl: "../assets/images/programm_individual_2.png",
    },
    {
      id: 6,
      name: "Индивидуальная подготовка к школе",
      imageUrl: "../assets/images/programm_individual_3.png",
    },
    {
      id: 7,
      h2: "Психологические направления",
      name: "Нейропсихологические занятия",
      imageUrl: "../assets/images/programm_psychology_1.png",
    },
    {
      id: 8,
      name: 'Нейро-класс "Буквоешка"',
      imageUrl: "../assets/images/programm_psychology_2.png",
    },
    {
      id: 9,
      name: "Песочная и арт-терапия",
      imageUrl: "../assets/images/programm_psychology_3.png",
    },
  ];
  const programmList = programmGroup.map((programmGroup) => {
    return (
      <div key={programmGroup.id} className={classes.programmgroup_container}>
        <h2>{programmGroup.h2}</h2>
        <img src={`${programmGroup.imageUrl}`} width={300} height={200}></img>
        <span>{programmGroup.name}</span>
      </div>
    );
  });
  return (
    <section className={classes.programm_container}>{programmList}</section>
  );
};

export default ProgrammsList;
