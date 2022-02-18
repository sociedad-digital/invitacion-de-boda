import React from 'react';
import boda from '../data/pareja.json';
import './WeddingReception.css';
// import foto from '../data/featuring-wedding-photo.jpeg';
import FeaturingPhoto from './FeaturingPhoto';

const WeddingReception = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.className}>
      <div className="horizontal-content">
        <h2>Pasaporte de boda</h2>
        <div>
          <FeaturingPhoto className="featuring-photo"  src={boda.featuring_photo}/>
          <span className="event-details">
            <div className="row">
              <span className="Type">Recepción</span>
              <span className="Code">{boda.recepcion_lugar}</span>
              <span className="PassportID">{boda.recepcion_pase}</span>
            </div>
            <div className="row">
              <span className="Name">{boda.novia.nombre} & {boda.novio.nombre}</span>
            </div>
            <div className="row">
              <span className="Date">{boda.fecha_recepción}</span>
            </div>
            <div className="row">
              <span className="Time">{boda.recepcion_hora}</span>
            </div>
            <div className="row">
              <span className="Location">{boda.recepcion_lugar}</span>
            </div>
          </span>
        </div>

        <img src="heart-stamp.jpg" />

        <div className="arrivalCode">
          <p>¡Buenaventura a la feliz pareja!</p>
          <p>¡Apreciamos vuestra asistencia!</p>
        </div>
      </div>
    </div>
  );
});

export default WeddingReception;
