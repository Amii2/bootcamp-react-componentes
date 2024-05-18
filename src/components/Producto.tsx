import React from "react";
import "../styles/Producto.css";

const productos = [
  {
    id: 1,
    nombre: "Fresa",
    precio: 2400,
    stock: 15,
  },
  {
    id: 2,
    nombre: "Guanabana",
    precio: 2000,
    stock: 10,
  },
  {
    id: 3,
    nombre: "Mora",
    precio: 1200,
    stock: 7,
  },
];

const Producto = ({ nombre, bgCol }: { nombre: string; bgCol?: string }) => {
  const prod = getData(nombre);
  if (!prod) return null;

  return (
    <div className="producto" style={bgCol ? { backgroundColor: bgCol } : {}}>
      <h1>{prod.nombre}</h1>
      <p>
        <b>Precio: {prod.precio}</b>
      </p>
      <p>Stock: {prod.stock}</p>
      <p>Id: {prod.id}</p>
    </div>
  );
};

function getData(prodNombre) {
  for (const prod of productos) {
    if (prodNombre === prod.nombre) return prod;
  }
  return null;
}

export default Producto;
