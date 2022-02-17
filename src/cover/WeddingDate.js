// import './WeddingBanner.css'
import pareja from '../data/pareja.json';

function WeddingDate(){
  var date = pareja.fecha;
  return (
    <h2>{date}</h2>
  );
}

export default WeddingDate;
