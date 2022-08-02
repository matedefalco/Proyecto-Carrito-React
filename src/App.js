import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Comidas from "./components/Comidas/Comidas";
import Carrito from "./components/Carrito/Carrito";

function App() {
  const [carritoEsMostrado, setCarritoEsMostrado] = useState(false);

  const mostrarCarritoHandler = () => {
    setCarritoEsMostrado(true);
  };

  const ocultarCarritoHandler = () => {
    setCarritoEsMostrado(false);
  };

  return (
    <React.Fragment>
      {carritoEsMostrado && <Carrito onClose={ocultarCarritoHandler}/>}
      <Header onMostrarCarrito={mostrarCarritoHandler} />
      <main>
        <Comidas />
      </main>
    </React.Fragment>
  );
}

export default App;
