import './WeddingFrame.css';
import CoupleInitials from './CoupleInitials';

function WeddingFrame(props){
  return (
    <div className="WeddingFrame">
      <CoupleInitials className="fancy-font logo-component"/>
    </div>
  );
}

export default WeddingFrame;
