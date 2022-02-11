import './WeddingPassportCover.css';
import WeddingEventLogo from './WeddingEventLogo';
import novio from '../data/novio.json';
import novia from '../data/novia.json';

function WeddingPassportCover() {

  return (
    <div className="WeddingPassport-cover">
    <h1 className="passport">PASAP♥RTE</h1>
      <WeddingEventLogo />
    <h6>A nuestra boda</h6>
    <h1 className="couple">{novio.nombre} & {novia.nombre}</h1>
    </div>
  )
}

export default WeddingPassportCover;
