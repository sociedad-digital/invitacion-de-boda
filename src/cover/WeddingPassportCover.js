import './WeddingPassportCover.css';
import WeddingEventLogo from './WeddingEventLogo';
import pareja from '../data/pareja.json';
import React from 'react';

const WeddingPassportCover = React.forwardRef((props, ref) => {

  return (
    <div className="WeddingPassport-cover" ref={ref} >
      <div className="centered-container" >
        <h1 className="passport">PASAP♥RTE</h1>
        <WeddingEventLogo />
        <h5>A nuestra boda</h5>
        <h1 className="couple">{pareja.novio.nombre} & {pareja.novia.nombre}</h1>
      </div>
    </div>
  )
});

export default WeddingPassportCover;
