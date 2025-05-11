import React from "react";

export default function Filtro() {
  return (
    <div className="filtros">
      <input
        type="text"
        placeholder="Buscar por nombre de tienda"
        className="input-filtro"
      />
      <input
        type="date"
        className="input-filtro"
      />
    </div>
  );
}
