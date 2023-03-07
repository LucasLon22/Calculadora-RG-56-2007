import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";


const Flete = () => {
  const [calcular, setCalcular] = useState(0);

  const [calcularBIKM, setCalcularBIKM] = useState(0);

  const clear = (e) => {
    setCalcular(0);
  };

  const resultadoBIKM = parseInt(calcularBIKM);
  const resultadoConv = resultadoBIKM;
  return (
    <>
      <Link to={"/egreso"}>
        <button className="m-3">Volver</button>
      </Link>
      <h1 className="color-letra-titulos">Flete</h1>
      <form
        id="formularioKM"
        onSubmit={(e) => {
          e.preventDefault();
          setCalcularBIKM(e.target.kilometros.value * e.target.precioxKm.value);
        }}
      >
        <label>Ingrese los Km</label>
        <br />
        <input
          className="text-center"
          type="number"
          step="0.01"
          name="base"
          id="kilometros"
          max={999999999999}
          required
          min={100}
        />
        <br />
        <label>Precio flete por Km</label>
        <br />

        <select name="precioxKm" id="precioxKm">
          <option value={22.83}>22.83</option>
          <option value={28.19}>28.19</option>
          <option value={26.09}>26.09</option>
          <option value={21.74}>21.74</option>
          <option value={32.62}>32.62</option>
          <option value={35.31}>35.31</option>
          <option value={43.49}>43.49</option>
          <option value={40.23}>40.23</option>
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
      </form>

      <h3>La base Imponible es </h3>
      <h4 id="resultadoBIKM">
        {new Intl.NumberFormat("es-AR", {
          currency: "ARS",
          style: "currency",
        }).format(calcularBIKM)}
      </h4>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCalcular(resultadoConv * e.target.alicuota.value);
        }}
      >
        <br />
        <label>Alicuota</label>
        <br />
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

export default Flete