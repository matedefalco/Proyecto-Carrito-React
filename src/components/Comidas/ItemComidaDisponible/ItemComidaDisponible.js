import FormItemComida from "../FormItemComida/FormItemComida";
import classes from "./ItemComidaDisponible.module.css";

const ItemComidaDisponible = (props) => {
  const precio = `$${props.precio.toFixed(2)}`;

  return (
    <li>
      <div className={classes.listaItems}>
        <div className={classes.item}>
          <h3>{props.nombre}</h3>
          <p>{props.descripcion}</p>
          <p>{precio}</p>
        </div>
        <FormItemComida />
      </div>
    </li>
  );
};

export default ItemComidaDisponible;
