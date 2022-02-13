import React from 'react';
import boda from '../data/pareja.json';

const WeddingPresentation = React.forwardRef((props, ref) => {
  return (
    <div  ref={ref}>
      <p>Acompañanos en la boda de</p>
      <img src="assets/heart.png" />
      <h2>{boda.novia.nombre_completo}</h2>
      <h3>&</h3>
      <h2>{boda.novio.nombre_completo}</h2>

      <h3>19.03.22</h3>
      <p>Parroquia de la ciudad</p>

      <p>Al amanecer del quinto día</p>
      <button>Reserve Su Venida Porfa</button>
    </div>
  );
});

export default WeddingPresentation;
