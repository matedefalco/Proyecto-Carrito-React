import Modal from "../UI/Modal/Modal";
import classes from "./Carrito.module.css";

const Carrito = (props) => {
  const itemsCarrito = (
    <ul className={classes["items-carrito"]}>
      {[{ id: "c1", nombre: "Sushi", cantidad: 2, precio: 12.99 }].map(
        (item) => (
          <li>{item.nombre}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {itemsCarrito}
      <div className={classes.total}>
        <span>Cantidad total: </span>
        <span>35.62</span>
      </div>
      <div className={classes.ctas}>
        <button onClick={props.onClose} className={classes['button--alt']}>Cerrar</button>
        <button className={classes.button}>Ordenar</button>
      </div>
    </Modal>
  );
};

export default Carrito;
