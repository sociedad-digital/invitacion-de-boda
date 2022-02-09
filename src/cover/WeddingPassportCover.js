import novia from '../data/novia.json' ;
import novio from '../data/novio.json' ;
import './WeddingPassportCover.css';
import WeddingEventLogo from './WeddingEventLogo';

function WeddingPassportCover() {
  return (
    <div className="WeddingPassport-cover">
      <h1>{novia.nombre} <br/>&<br/> {novio.nombre}</h1>
      <WeddingEventLogo />
      <p>PASAPORTE</p>
    </div>
  )
}

export default WeddingPassportCover
