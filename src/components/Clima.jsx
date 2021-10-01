import React from "react";

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (!name) {
    return null;
  }

  //Grados Kelvin
  let temperatura = "card-panel blue col s12";
  let img = "https://img.icons8.com/office/80/000000/bright-moon.png";
  const kelvin = 273.15;
  const grados = parseFloat(main.temp - kelvin, 10).toFixed(1);
  if (grados >= 29) {
    temperatura = "card-panel orange col s12";
    img = "https://img.icons8.com/fluency/96/000000/sun.png";
  }
  if (grados > 19 && grados < 29) {
    temperatura = "card-panel light-blue darken-4 col s12";
    img = "https://img.icons8.com/color-glass/96/000000/clouds.png";
  }

  return (
    <div className={temperatura}>
      <div className="white-text">
        <img src={img} alt="Weather" />
        <h2>El clima de {name}</h2>
        <p className="temperatura">
          {grados} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Máxima:{" "}
          {parseFloat(main.temp_max - kelvin, 10).toFixed(1)}{" "}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Mínima:{" "}
          {parseFloat(main.temp_min - kelvin, 10).toFixed(1)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Clima;
