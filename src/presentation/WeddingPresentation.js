import React from 'react';
import boda from '../data/pareja.json';

const WeddingPresentation = React.forwardRef((props, ref) => {
  return (
    <div  ref={ref}>
      <p>Acompañanos a la ceremonia nupcial</p>
      <img src="assets/heart.png" />
      <h2>{boda.novia.nombre_completo}</h2>
      <h3>&</h3>
      <h2>{boda.novio.nombre_completo}</h2>

      <h3>{boda.fecha}</h3>
      <p>{boda.nupcias_lugar}</p>

      <p>Al amanecer del quinto día</p>

      <div>
        Huateque subsecuente
        <button type="button">
          Reserve Su Venida Porfa
        </button>
      </div>
    </div>
  );
});
// <div class="marriage-passport-identification">
//   <h1>Acompañanos a nuestro enlace político-religioso</h1>
//   <img src="cursi-loving-heart.png" />
//
//   <h3>{{boda.fecha}}</h3>
//   <p>{{boda.direccion}}</p>
//   <p>{{boda.hora}}</p>
//
//   <p> RSVP </p>
//
//   <p>Recepción de gala</p>
// </div>

export default WeddingPresentation;
