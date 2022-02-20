import './WeddingFrame.css';
import CoupleInitials from './CoupleInitials';

function WeddingFrame(props){
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default WeddingFrame;
