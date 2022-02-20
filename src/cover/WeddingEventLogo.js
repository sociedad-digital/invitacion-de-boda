import WeddingBanner from './WeddingBanner';
import WeddingFrame from './WeddingFrame';
import CoupleInitials from './CoupleInitials';
import './WeddingEventLogo.css'

function WeddingEventLogo() {
  return (
    <WeddingFrame className="WeddingEventLogo WeddingFrame fancy-font">
      <CoupleInitials  className="fancy-font logo-component"/>
      <WeddingBanner  className="fancy-font banner logo-component"/>
    </WeddingFrame>
  );
}

export default WeddingEventLogo
