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
        <WeddingEventLogo />
        <h6>También contamos con mesa de regalos virtual y en la cocina</h6>
        <h6>
          <a target="_mesa_1" href={boda.mesa_de_regalos[0].vinculo}>{boda.mesa_de_regalos[0].proveedor}<br/>{boda.mesa_de_regalos[0].evento}</a>
          <a target="_mesa_2" href={boda.mesa_de_regalos[1].vinculo}>{boda.mesa_de_regalos[1].proveedor}<br/>{boda.mesa_de_regalos[1].evento}</a>
        </h6>
      </div>
    </div>
  );
});

export default WeddingPassportBack;
