import React from "react";
import Header from "./components/Layout/Header";
import Comidas from "./components/Comidas/Comidas";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Comidas />
      </main>
    </React.Fragment>
  );
}

export default App;
