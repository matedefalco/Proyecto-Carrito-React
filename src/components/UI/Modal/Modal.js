import { Fragment } from "react";
import ReactDOM from 'react-dom';

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.contenido}>{props.children}</div>
    </div>
  );
};


const elementoPortal = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, elementoPortal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, elementoPortal)}
        </Fragment>
    );
  };

export default Modal;
