import { Form } from "../Form/Form";
import classes from "./FormBlock.module.scss";

const FormBlock = () => {
  return (
    <>
      <section>
        <div className={classes.containerFormh2}>
          <h2>Оставьте заявку на пробное занятие</h2>
          <p>Наш менеджер перезвонит и проконсультирует вас</p>
        </div>
        <div className={classes.containerForm}>
          <div className={classes.form}>
            <div className={classes.form1}>
              <Form />
            </div>
            <p>
              Нажимая кнопку, я даю свое согласие на обработку персональных
              данных
            </p>
          </div>
          <div className={classes.formImg}></div>
        </div>
      </section>
    </>
  );
};

export default FormBlock;
