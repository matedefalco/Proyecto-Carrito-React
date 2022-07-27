import React from 'react';

import fotoComidas from '../../assets/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
    return ( 
    <React.Fragment>
        <header className={classes.header}>
            <h1>Comidas React</h1>
            <button>Carrito</button>
        </header>
        <div className={classes['main-image']}>
            <img  src={fotoComidas} />
        </div>
    </React.Fragment>
    )
}

export default Header;