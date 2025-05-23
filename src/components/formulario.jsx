import React from "react";
import "./css/Formulario.css";

const Formulario = () => {
  return (
    <form className="formulario">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Formulario;
