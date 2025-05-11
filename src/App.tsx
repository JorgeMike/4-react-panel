import React from "react";
import ItemResumen from "./components/item-resumen";
import Sidebar from "./components/sidebar";
import CardComentario from "./components/card-comentario";
import Filtro from "./components/filtro";

const sections = [
  {
    title: "General",
    items: ["Dashboard", "Perfil", "Notificaciones", "Comentarios"],
  },
  {
    title: "Gestión",
    items: ["Usuarios", "Roles y permisos"],
  },
  {
    title: "Configuración",
    items: ["Preferencias", "Seguridad", "Integraciones", "Soporte"],
  },
];

const resumen = [
  { label: "Ventas", value: 1902 },
  { label: "Nuevos usuarios", value: 134 },
  { label: "Órdenes pendientes", value: 5 },
];

export default function App() {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div className="parent">
          <header className="div1 header">
            <h1>MyPanel.com</h1>
            <p className="text-muted-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              dignissimos! Molestiae excepturi enim animi voluptas.
            </p>
          </header>

          <div className="div2">
            <Sidebar sections={sections} />
          </div>

          <div className="div3">
            <h1 className="text-muted-dark" style={{ marginBottom: "1rem" }}>
              Mayo
            </h1>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {resumen.map((item, index) => (
                <ItemResumen
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
            <h1 className="text-muted-dark" style={{ marginBottom: "1rem" }}>
              Comentarios
            </h1>

            <Filtro />

            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                <CardComentario />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
