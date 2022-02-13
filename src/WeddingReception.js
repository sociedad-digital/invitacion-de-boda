import React from 'react';
import boda from './data/pareja.json';

const WeddingReception = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="marriage-passport-details">
      <h2>Pasaporte de boda</h2>

      <img src="event-featuring-photo.jpg" />
      <div className="event-details">
        <div className="row">
          <span className="Type">Boda</span>
          <span className="Code">{boda.recepcion_lugar}</span>
          <span className="PassportID">{boda.recepcion_pase}</span>
        </div>
        <div className="row">
          <span className="Name">{boda.novia.nombre} & {boda.novio.nombre}</span>
        </div>
        <div className="row">
          <span className="Fecha">{boda.fecha}</span>
        </div>
        <div className="row">
          <span className="Fecha">{boda.recepcion_hora}</span>
        </div>
        <div className="row">
          <span className="Fecha">{boda.lugar_recepcion}</span>
        </div>
      </div>
    </div>
  );
});

export default WeddingReception;
