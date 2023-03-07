import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const home = () => {
    return (
      <>
        <h1 className="mt-4 color-letra-titulos">
          Bienvenido a la Calculadora del Anticipo RG 56/07
        </h1>
        <h2 className="color-letra-titulos">Elija un tipo de operación</h2>
        <Link to={"/ingreso"}>
          <Button className="ov-btn-grow-ellipse mt-4 me-3">
            Ingreso a la Provincia
          </Button>
        </Link>

        <Link to={"/egreso"}>
          <Button className=" ov-btn-grow-ellipse mt-4 ms-3">
            Egreso de la Provincia
          </Button>
        </Link>
        <Link to={"/consultaATM"}>
          <Button className="ov-btn-grow-ellipse mt-4 me-3 ms-3">
            Consulte la página de ATM
          </Button>
        </Link>
      </>
    );
}

export default home