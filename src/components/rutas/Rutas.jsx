import React from "react";
import { Routes, Route } from "react-router-dom";
import Ingreso from "../ingreso/Ingreso";
import Home from "../home/home";
import Egreso from "../egreso/Egreso";
import Anticipo from "../calculos/Anticipo";
import TasaForestal from "../calculos/TasaForestal";
import Flete from "../calculos/Flete";
import YerbaMate from "../calculos/YerbaMate"
import ConsultaATM from "../consultaATM/ConsultaATM";

const Rutas= () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingreso" element={<Ingreso />} />
        <Route path="/egreso" element={<Egreso />} />
        <Route path="/anticipo" element={<Anticipo />} />
        <Route path="/flete" element={<Flete />} />
        <Route path="/tasaforestal" element={<TasaForestal />} />
        <Route path="/yerbamate" element={<YerbaMate />} />
        <Route path="/consultaATM" element={<ConsultaATM />} />
      </Routes>
    </>
  );
};

export default Rutas;
