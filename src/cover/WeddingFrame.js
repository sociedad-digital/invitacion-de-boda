import './WeddingFrame.css';
import novia from '../data/novia.json';
import novio from '../data/novio.json';


function WeddingFrame(){
  var couple = `${novio.nombre[0]} & ${novia.nombre[0]}`
  return (
    <div className="frame">
      <h1>{couple}</h1>
    </div>
  );
}

export default WeddingFrame;
