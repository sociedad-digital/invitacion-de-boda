import React from 'react';
import './WeddingPassportBack.css';
import CoupleInitials from './CoupleInitials';
import WeddingDate from './WeddingDate';
import './WeddingEventLogo.css';
const WeddingPassportBack = React.forwardRef((props, ref) => {
  return (
    <div  className={props.className} ref={ref}>
      <div className="centered-container">
        <div className="back-logo">
          <CoupleInitials className="fancy-font logo-component"/>
          <WeddingDate className="fancy-font logo-component" />
        </div>
        <h6>¡Mesa de regalos en la cocina!</h6>
        <h6>¡Regálanos una receta!</h6>
      </div>
    </div>
  );
});

export default WeddingPassportBack;
