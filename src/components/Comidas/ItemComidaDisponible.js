import classes from './ItemComidaDisponible.module.css';

const ItemComidaDisponible = (props) => {
  return (
    <li>
      <div className={classes.itemTexto}>
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
      </div>
      <p className={classes.itemNumero}>${props.precio}</p>
    </li>
  );
};

export default ItemComidaDisponible;
