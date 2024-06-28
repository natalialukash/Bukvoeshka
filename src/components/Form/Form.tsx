import { useState } from "react";
import classes from "./Form.module.scss";
import ButtonSend from "../Buttons/ButtonSend";

export const Form = () => {
  const initialFormState = {
    name: "",
    telephone: "",
  };
  const [enteredForm, setEnteredForm] = useState(initialFormState);

  const formChangeHandler = (name, value) => {
    setEnteredForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredForm(initialFormState);
  };

  return (
    <div className={classes.containerForm}>
      <form onSubmit={submitHandler}>
        <div>
          <label></label>
          <input
            value={enteredForm.name}
            onChange={(e) => formChangeHandler("name", e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Ваше имя"
            className={classes.formControl}
          />
        </div>
        <div>
          <label></label>
          <input
            value={enteredForm.telephone}
            onChange={(e) => formChangeHandler("telephone", e.target.value)}
            type="text"
            name="telephone"
            id="telehone"
            placeholder="Телефон"
            className={classes.formControl}
          />
        </div>
        <div>
          <label></label>
          <ButtonSend />
        </div>
      </form>
    </div>
  );
};
