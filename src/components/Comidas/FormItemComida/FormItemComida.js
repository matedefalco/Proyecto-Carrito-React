import Input from "../../UI/Input/Input";
import classes from "./FormItemComida.module.css";

const FormItemComida = (props) => {
  return (
    <form id={props.id} className={classes.form}>
      <Input
        label="Cantidad"
        input={{
          id: "cantidad_"+ props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.botonForm}>+Sumar</button>
    </form>
  );
};

export default FormItemComida;
