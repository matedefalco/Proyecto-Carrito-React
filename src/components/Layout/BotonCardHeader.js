import React from "react";
import classes from "./BotonCardHeader.module.css";
import IconoCarrito from "../Carrito/IconoCarrito";

const BotonCardHeader = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <IconoCarrito />
      </span>
      <span>Tu carrito</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default BotonCardHeader;
