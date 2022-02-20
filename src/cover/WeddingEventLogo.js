import WeddingBanner from './WeddingBanner';
import WeddingFrame from './WeddingFrame';
import './WeddingEventLogo.css'

function WeddingEventLogo() {
  return (
    <div className="WeddingEventLogo">
      <WeddingFrame className="fancy-font"/>
      <WeddingBanner className="WeddingFrame" />
    </div>
  );
}

export default WeddingEventLogo
