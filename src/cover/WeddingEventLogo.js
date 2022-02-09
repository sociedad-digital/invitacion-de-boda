import WeddingBanner from './WeddingBanner';
import './WeddingEventLogo.css'

function WeddingEventLogo() {
  return (
    <div className="WeddingEventLogo">
      <img className="frame" src={process.env.PUBLIC_URL + "/assets/NicePng_gold-frame-border-png_5604780.png"} />
      <WeddingBanner/>
    </div>
  );
}

export default WeddingEventLogo
