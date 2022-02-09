import novia from './data/novia.json' ;
import novio from './data/novio.json' ;

function WeddingPassportCover() {
  return (
    <div className="WeddingPassport-cover">
      <h1>{novia.nombre} & {novio.nombre}</h1>
      <p>PASAPORTE</p>
    </div>
  )
}

export default WeddingPassportCover
