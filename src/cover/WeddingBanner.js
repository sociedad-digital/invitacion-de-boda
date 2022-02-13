import './WeddingBanner.css'
import pareja from '../data/pareja.json';

function WeddingBanner(){
  var date = pareja.fecha;
  return (
    <div className="banner">
      <h2>{date}</h2>
    </div>
  );
}

export default WeddingBanner;
