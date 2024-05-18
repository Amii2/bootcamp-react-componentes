import React from "react";
import Persona from "./Persona.jsx";
import data from "../MOCK_DATA.json";

const Empleados = () => {
  return (
    <>
      {data.map((e) => (
        <Persona
          key={e.id}
          id={e.id}
          nombre={e.first_name + " " + e.last_name}
          edad={e.age}
          correo={e.email}
          color={e.color}
          perfil={e.profile}
          genero={e.gender}
        />
      ))}
    </>
  );
};

export default Empleados;
