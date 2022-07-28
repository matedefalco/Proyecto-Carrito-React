import React from "react";

import ComidasDisponibles from "./ComidasDisponibles/ComidasDisponibles";
import MenuComidas from "./MenuComidas/MenuComidas";
import Card from "../UI/Card";

const Comidas = () => {
  return (
    <React.Fragment>
      <MenuComidas />
      <Card>
        <ComidasDisponibles />
      </Card>
    </React.Fragment>
  );
};

export default Comidas;
