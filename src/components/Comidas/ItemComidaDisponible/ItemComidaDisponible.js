import classes from './ItemComidaDisponible.module.css';

const ItemComidaDisponible = (props) => {
  return (
    <li className={classes.listaItems}>
      <div className={classes.itemTexto}>
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
      </div>
      <div className={classes.itemNumero}>
      <p>${props.precio}</p>
      </div>
    </li>
  );
};

export default ItemComidaDisponible;
