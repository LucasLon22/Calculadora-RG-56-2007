import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Egreso = () => {
  return (
    <>
      <h1 className="color-letra-titulos">Egreso de la provincia</h1>
      <Link to={"/flete"}>
        <Button className=" ov-btn-grow-ellipse  mt-4 w-25">
          Anticipo IIBB Flete
        </Button>
      </Link>
      <br />
      <Link to={"/tasaforestal"}>
        <Button className=" ov-btn-grow-ellipse  mt-4 w-25">
          Tasa Forestal
        </Button>
      </Link>
      <br />
      <Link to={"/yerbamate"}>
        <Button className="ov-btn-grow-ellipse  mt-4 w-25">Yerba Mate</Button>
      </Link>
      <br />
      <Link to={"/"}>
        <button className="ov-btn-grow-ellipse  m-3">Volver</button>
      </Link>
    </>
  );
}

export default Egreso