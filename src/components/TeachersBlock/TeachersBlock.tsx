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
    {
      id: 4,
      imageUrl: "../public/assets/images/4teacher_Tihonova.png",
      name: "Тихонова Вера Дмитриевна",
      position: "Нейрологопед",
    },
    {
      id: 5,
      imageUrl: "../public/assets/images/5teacher_Kozyreva.png",
      name: "Козырева Мария Ивановна",
      position: "Логопед-психолог",
    },
    {
      id: 6,
      imageUrl: "../public/assets/images/6teacher_Tsareva.png",
      name: "Царева Анастасия Васильевна",
      position: "Логопед, руководитель центра",
    },
  ];

  return (
    <>
      <section className={classes.containerTeachers}>
        <h2>Преподаватели</h2>
        <div className={classes.containerTeachersBlock}>
          <div
            id="carouselExampleControls_2"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls_2"
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
                  <div className={classes.containerTeachersList}>
                    <div
                      key={teachers[0].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[0].imageUrl} alt="" />
                      <p>{teachers[0].name}</p>
                      <span>{teachers[0].position}</span>
                    </div>
                    <div
                      key={teachers[1].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[1].imageUrl} alt="" />
                      <p>{teachers[1].name}</p>
                      <span>{teachers[1].position}</span>
                    </div>
                    <div
                      key={teachers[2].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[2].imageUrl} alt="" />
                      <p>{teachers[2].name}</p>
                      <span>{teachers[2].position}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <div className={classes.containerTeachersList}>
                    <div
                      key={teachers[3].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[3].imageUrl} alt="" />
                      <p>{teachers[3].name}</p>
                      <span>{teachers[3].position}</span>
                    </div>
                    <div
                      key={teachers[4].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[4].imageUrl} alt="" />
                      <p>{teachers[4].name}</p>
                      <span>{teachers[4].position}</span>
                    </div>
                    <div
                      key={teachers[5].id}
                      className={classes.containerTeacher}
                    >
                      <img src={teachers[5].imageUrl} alt="" />
                      <p>{teachers[5].name}</p>
                      <span>{teachers[5].position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls_2"
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

export default TeachersBlock;
