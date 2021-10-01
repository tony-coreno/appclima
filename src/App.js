import React, { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Error from "./components/Error";
//require('dotenv').config();
function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsulta] = useState(false);

  const [resultado, guardarResultado] = useState({});

  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appID = "2569f1e164bf9897a42f1bede6bb743e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsulta(false);

        //Detectar si hubo error en la consulta
        resultado.cod === "404" ? guardarError(true) : guardarError(false);
      }
    };

    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]); //When consultar true useEffect is active
  let componente;
  // let componente = (
  //   <img src="https://img.icons8.com/color/480/000000/windy-weather--v2.png" />
  // );

  error
    ? (componente = <Error mensaje="No hay resultados" />)
    : (componente = <Clima resultado={resultado} />);

  return (
    <>
      <Header titulo="Clima App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
                guardarResultado={guardarResultado}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="GIT"
        />
        <a href="https://github.com/tony-coreno" className="brand-logo">
          Jose Antonio Coreño
        </a>
      </div>
    </>
  );
}

export default App;
