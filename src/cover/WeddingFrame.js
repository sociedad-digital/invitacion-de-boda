import './WeddingFrame.css';
import pareja from '../data/pareja.json';

function WeddingFrame(){
  var couple = `${pareja.novio.nombre[0]} & ${pareja.novia.nombre[0]}`
  return (
    <div className="frame">
      <h1>{couple}</h1>
    </div>
  );
}

export default WeddingFrame;
