import React from 'react';
import boda from '../data/pareja.json';
import './WeddingReception.css';
// import foto from '../data/featuring-wedding-photo.jpeg';
import FeaturingPhoto from './FeaturingPhoto';

const WeddingReception = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.className}>
      <div className="horizontal-content wedding-reception">
        <h2 className="title">Pasaporte de boda</h2>
        <div className="container">
          <FeaturingPhoto className="featuring-photo"  src={boda.featuring_photo}/>
          <span className="reception-details">
            <div className="general-data">
              <span className="field type">Boda</span>
              {boda.recepcion.codigo && <span className="field code">{boda.recepcion.codigo}</span>}
              {boda.recepcion.id && <span className="field passport-id">{boda.recepcion.id}</span>}
            </div>
            <div className="field name">
              {boda.novia.nombre} & {boda.novio.nombre}
            </div>
            <div className="field date">
              {boda.fecha}
            </div>
            <div className="field time">
              {boda.recepcion.hora}
            </div>
            <div className="field location">
              <a target="_reception_location" href={boda.recepcion.liga_mapa}>{boda.recepcion.nombre}</a>&nbsp;
              {boda.recepcion.calle}&nbsp;
              {boda.recepcion.referencia}&nbsp;
              {boda.recepcion.colonia}&nbsp;
              {boda.recepcion.localidad}&nbsp;
            </div>
          </span>
        </div>

        <div className="arrivalCode">
          <p> &lt;&lt;&lt;&lt;&lt; &lt;&lt;&lt;&lt;&lt; &lt;&lt;&lt;&lt;&lt; ¡Buenaventura a la feliz pareja! &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;</p>
          <p>&lt;&lt;&lt;&lt;&lt;  &gt;&gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt;&lt; ¡Apreciamos vuestra asistencia!&gt;&gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt;&lt;  &gt;&gt;&gt;&gt;&gt;</p>
        </div>
      </div>
    </div>
  );
});

export default WeddingReception;
