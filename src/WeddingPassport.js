import './WeddingPassport.css';
import novia from './data/novia.json' ;
import novio from './data/novio.json' ;

function WeddingPassport() {

  return (
    <div className="WeddingPassport">
      <div className="WeddingPassport-cover">
        <h1>{novia.nombre} & {novio.nombre}</h1>
        <p>PASAPORTE</p>
      </div>
    </div>
  );
}

export default WeddingPassport;
