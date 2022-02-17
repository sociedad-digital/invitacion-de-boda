import pareja from '../data/pareja.json';
import './CoupleInitials.css';
function CoupleInitials(props){
  var couple = `${pareja.novio.nombre[0]} & ${pareja.novia.nombre[0]}`
  return(
    <h1 className={props.className}>{couple}</h1>
  );
}


export default CoupleInitials;
