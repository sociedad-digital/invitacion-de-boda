import React from 'react';
import './WeddingPassportBack.css';
import CoupleInitials from './CoupleInitials';
import WeddingDate from './WeddingDate';
import './WeddingEventLogo.css';
const WeddingPassportBack = React.forwardRef((props, ref) => {
  return (
    <div  className="WeddingPassport-back" ref={ref}>
      <div className="back-logo">
        <CoupleInitials className="fancy-font logo-component"/>
        <WeddingDate className="fancy-font logo-component" />
      </div>
      <h6>¡Mesa de regalos en la cocina!</h6>
      <h6>¡Regalanos una receta!</h6>
    </div>
  );
});

export default WeddingPassportBack;
