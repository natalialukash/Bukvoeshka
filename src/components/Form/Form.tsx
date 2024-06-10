import { useState } from "react";
import ButtonSend from "../Buttons/ButtonSend";
import classes from "./Form.module.scss";

export const Form = () => {
  const [state, setState] = useState({
    name: "",
    telephone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className={classes.containerForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={state.name}
            className={classes.formControl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            name="telephone"
            placeholder="Телефон"
            value={state.telephone}
            className={classes.formControl}
            onChange={handleInputChange}
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
