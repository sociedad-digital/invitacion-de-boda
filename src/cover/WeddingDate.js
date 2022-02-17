// import './WeddingBanner.css'
import pareja from '../data/pareja.json';

function WeddingDate(props){
  var date = pareja.fecha;
  return (
    <h2 className={props.className}>{date}</h2>
  );
}

export default WeddingDate;
