import React from 'react'
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';

const ConsultaATM = () => {
  return (
    <>
      <h1 className="mb-4 color-letra-titulos">
        Escanee el codigo qr y dirijase a la pagina de ATM para consultas
      </h1>
      <QRCode value="https://www.dgr.misiones.gov.ar/" />
      <br />
      <Link to={"/"}>
        <button className="ov-btn-grow-ellipse  mt-4 m-3">Volver</button>
      </Link>
    </>
  );
}

export default ConsultaATM