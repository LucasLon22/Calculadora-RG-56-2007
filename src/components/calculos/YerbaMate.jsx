import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const YerbaMate = () => {
  const [calcular, setCalcular] = useState(0);

  const clear = (e) => {
    setCalcular(0);
  };
  return (
    <>
      <Link to={"/egreso"}>
        <button className="m-3">Volver</button>
      </Link>
      <h1 className="color-letra-titulos">Impuesto a la Yerba Mate</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCalcular(e.target.baseImponible.value * e.target.alicuota.value);
        }}
      >
        <label>Base Imponible</label>
        <br />
        <input
          className="text-center"
          type="number"
          step="0.01"
          name="base"
          id="baseImponible"
          max={999999999999}
          required
          min={100}
        />
        <br />
        <label>Alicuota</label>
        <br />
        {/* <input
          className="text-center"
          type="number"
          min={0}
          step="0.0001"
          name="alicuota"
          id="alicuota"
          value={0.02}
          readOnly
        /> */}
        <select name="alicuotas" id="alicuota">
          <option value={0.0285}>0.0285</option>
          <option value={0.0331}>0.0331</option>
          <option value={0.045}>0.045</option>
        </select>
        <br />
        <button className="mb-3 mt-3 me-2 ms-2" type="submit">
          Calcular
        </button>
        <button
          type="reset"
          className="mb-3 mt-3 me-2 ms-2"
          onSubmit={(e) => {
            e.target.baseImponible.reset();
          }}
          onClick={clear}
        >
          Limpiar
        </button>

        <br />

        {/* <Button onClick={() => setCont(cont + 1)}>
          Calcular
        </Button> */}
        {/* <h1>Your {cont}</h1> */}

        <h3> El impuesto a abonar es </h3>
        <h4 id="resultado">
          {new Intl.NumberFormat("es-AR", {
            currency: "ARS",
            style: "currency",
          }).format(calcular)}
        </h4>
        <br />
      </form>
    </>
  );
}

export default YerbaMate