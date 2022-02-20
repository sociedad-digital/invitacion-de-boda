import React from 'react';
import './WeddingPassportBack.css';
import './WeddingEventLogo.css';
import WeddingEventLogo from './WeddingEventLogo';

const WeddingPassportBack = React.forwardRef((props, ref) => {
  return (
    <div  className={props.className} ref={ref}>
      <div className="centered-container">
        <WeddingEventLogo />
        <h6>¡Mesa de regalos en la cocina!</h6>
        <h6>¡Regálanos una receta!</h6>
      </div>
    </div>
  );
});

export default WeddingPassportBack;
