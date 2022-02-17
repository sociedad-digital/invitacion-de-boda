import React from 'react';
import './WeddingPassportBack.css';
import CoupleInitials from './CoupleInitials';
import WeddingDate from './WeddingDate';
const WeddingPassportBack = React.forwardRef((props, ref) => {
  return (
    <div  className="WeddingPassport-back" ref={ref}>
      <h3>¡No olvides reservar tu platillo!</h3>
      <div className="back-logo">
        <CoupleInitials />
        <WeddingDate />
      </div>
      <h4>Mesa de regalos, ¡En la cocina!</h4>
      <h4>¡Regalanos una receta!</h4>
    </div>
  );
});

export default WeddingPassportBack;
