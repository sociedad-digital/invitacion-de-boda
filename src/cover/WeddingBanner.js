import './WeddingBanner.css'
import WeddingDate from './WeddingDate';
import pareja from '../data/pareja.json';

function WeddingBanner(){
  var date = pareja.fecha;
  return (
    <div className="banner">
      <WeddingDate />
    </div>
  );
}

export default WeddingBanner;
