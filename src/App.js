import React from "react";
import Header from "./components/Layout/Header";
import Comidas from "./components/Comidas/Comidas";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <React.Fragment>
      <Carrito />
      <Header />
      <main>
        <Comidas />
      </main>
    </React.Fragment>
  );
}

export default App;
