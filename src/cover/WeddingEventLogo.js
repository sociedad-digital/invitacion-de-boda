import WeddingBanner from './WeddingBanner';
import WeddingFrame from './WeddingFrame';
import './WeddingEventLogo.css'

function WeddingEventLogo() {
  return (
    <div className="WeddingEventLogo">
      <WeddingFrame className="fancy-font"/>
      <WeddingBanner  />
    </div>
  );
}

export default WeddingEventLogo
