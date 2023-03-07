import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Ingreso = () => {
  return (
    <>
      <h1 className="mb-5 color-letra-titulos">Ingreso a la Provincia</h1>
      <h2 className="mb-4 color-letra-titulos">Elija que desea calcular</h2>
      <Link to={"/anticipo"}>
        <Button className="ov-btn-grow-ellipse  mt-4 w-25">
          Anticipo IIBB SR-341
        </Button>
      </Link>
      <br />
      <Link to={"/tasaforestal"}>
        <Button className="ov-btn-grow-ellipse  mt-4 w-25">
          Tasa Forestal
        </Button>
      </Link>
      <br />
      <Link to={"/"}>
        <button className=" ov-btn-grow-ellipse  m-3">Volver</button>
      </Link>
    </>
  );
}

export default Ingreso