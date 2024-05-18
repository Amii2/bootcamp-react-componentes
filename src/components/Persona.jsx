import React from "react";

const Persona = (props) => {
  return (
    <div className="persona" style={{ background: props.color }}>
      <img src={props.perfil} alt={props.nombre} />
      <h1>{props.nombre}</h1>
      <h3>Id: {props.id}</h3>
      <p>Edad: {props.edad}</p>
      <p>Correo: {props.correo}</p>
      <p>Genero: {props.genero}</p>
    </div>
  );
};

export default Persona;
