import WeddingBanner from './WeddingBanner';
import './WeddingEventLogo.css'
import frame from '../assets/NicePng_gold-frame-border-png_5604780.png';

function WeddingEventLogo() {
  return (
    <div className="WeddingEventLogo">
      <img className="frame" src={frame} />
      <WeddingBanner/>
    </div>
  );
}

export default WeddingEventLogo
