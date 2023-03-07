import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const TasaForestal = () => {
  //  const [cont, setCont] = useState(0)
  const [calcular, setCalcular] = useState(0)
  
  const clear = (e) => {
  setCalcular(0)
}

  // const clearing = (e) => {
  //   setLimpiar.
  // }


  return (
    <>
      <Link to={"/ingreso"}>
        <button className="m-3">Volver</button>
      </Link>
      <h1 className="color-letra-titulos">Tasa Forestal</h1>

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
        />
        <br />
        <label>Alicuota</label>
        <br />
        <input
          className="text-center"
          type="number"
          min={0}
          step="0.0001"
          name="alicuota"
          id="alicuota"
          value={0.02}
          readOnly
        />
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

export default TasaForestal