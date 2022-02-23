import React from 'react';
import './WeddingPassportBack.css';
import './WeddingEventLogo.css';
import WeddingEventLogo from './WeddingEventLogo';
import boda from '../data/pareja.json';

const WeddingPassportBack = React.forwardRef((props, ref) => {
  return (
    <div  className={props.className} ref={ref}>
      <div className="centered-container">
        <h6>¡El mejor regalo es tu compañia!</h6>
        <h6>...o una receta de cocina</h6>
        <h6>¡Habrá un buzón en recepción para depositarla!</h6>
        <WeddingEventLogo />
        <h6>También contamos con mesa virtual de regalos</h6>
        {
        boda.mesa_de_regalos &&
          <h6>
            <a target="_mesa_1" href={boda.mesa_de_regalos[0].liga}>{boda.mesa_de_regalos[0].proveedor}<br/>{boda.mesa_de_regalos[0].nombre}</a>
            <a target="_mesa_2" href={boda.mesa_de_regalos[1].liga}>{boda.mesa_de_regalos[1].proveedor}<br/>{boda.mesa_de_regalos[1].nombre}</a>
          </h6>
        }
      </div>

      <div className="credits"><a href="mailto:emir.herrera@gmail.com">Servicios digitales por Emir Herrera González</a></div>
    </div>
  );
});

export default WeddingPassportBack;
