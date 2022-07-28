import React from "react";

import ComidasDisponibles from "./ComidasDisponibles";
import MenuComidas from "./MenuComidas";
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
