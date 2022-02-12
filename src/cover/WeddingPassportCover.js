import './WeddingPassportCover.css';
import WeddingEventLogo from './WeddingEventLogo';
import novio from '../data/novio.json';
import novia from '../data/novia.json';
import React from 'react';

const WeddingPassportCover = React.forwardRef((props, ref) => {

  return (
    <div className="WeddingPassport-cover" ref={ref} >
    <h1 className="passport">PASAP♥RTE</h1>
      <WeddingEventLogo />
    <h6>A nuestra boda</h6>
    <h1 className="couple">{novio.nombre} & {novia.nombre}</h1>
    </div>
  )
});

export default WeddingPassportCover;
