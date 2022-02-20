import './WeddingBanner.css'
import WeddingDate from './WeddingDate';
import pareja from '../data/pareja.json';

function WeddingBanner(props){
  var date = pareja.fecha;
  return (
    <div className={props.className}>
      <WeddingDate />
    </div>
  );
}

export default WeddingBanner;
