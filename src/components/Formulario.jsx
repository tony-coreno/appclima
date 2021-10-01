import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({
  busqueda,
  guardarBusqueda,
  guardarConsulta,
}) => {
  //Form's State

  const [error, guardarError] = useState(false);

  //destructuring
  const { ciudad, pais } = busqueda;

  // Reading state
  const handleChange = (e) => {
    //Update State
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    //to Validate
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return null;
    }

    guardarError(false);

    //Send it to main component

    guardarConsulta(true);
  };

  const limpiar = (e) => {
    guardarBusqueda({
      ciudad: "",
      [e.target.name]: "",
    });
    window.location.href = "/";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="Complete todos los campos" /> : null}
        <div className="input-field col s12">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad: </label>
        </div>
        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">-- Seleccione un País --</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="BE">Bélgica</option>
            <option value="BO">Bolivia</option>
            <option value="BR">Brásil</option>
            <option value="CA">Canadá</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="PE">Perú</option>

          </select>
          <label htmlFor="pais">País: </label>
        </div>

        <div className="input-field col s12">
          <input
            type="submit"
            value="Buscar Clima"
            className="waves-effect waves-light btn-large btn-block dark accent-4"
          />
        </div>
      </form>
      <div className="input-field col l6 s12">
        <input
          type="submit"
          value="Limpiar"
          className="waves-effect waves-light btn-large btn-block orange accent-4"
          onClick={(e) => limpiar(e)}
        />
      </div>
    </>
  );
};

export default Formulario;
