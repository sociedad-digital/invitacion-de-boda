import WeddingBanner from './WeddingBanner';
import WeddingFrame from './WeddingFrame';
import './WeddingEventLogo.css'

function WeddingEventLogo() {
  return (
    <div className="WeddingEventLogo">
      <WeddingFrame />
      <WeddingBanner />
    </div>
  );
}

export default WeddingEventLogo
