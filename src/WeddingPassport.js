import './WeddingPassport.css';
import WeddingPassportCover from './cover/WeddingPassportCover';
import WeddingPassportBack from './cover/WeddingPassportBack';
import WeddingReception from './reception/WeddingReception';
import WeddingPresentation from './presentation/WeddingPresentation';
import HTMLFlipBook from "react-pageflip";

function WeddingPassport(this: any) {
  return (
    <HTMLFlipBook
      width={88}
      height={125}
      size="stretch"
      minWidth={320}
      minHeight={500}
      maxWidth={660}
      maxHeight={875}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="WeddingPassport"
    >
      <WeddingPassportCover className="WeddingPassport-cover"/>
      <WeddingPresentation className="inside-left-page page"/>
      <WeddingReception className="inside-right-page page"/>
      <WeddingPassportBack className="wedding-passport-back"/>
    </HTMLFlipBook>

  );
}

export default WeddingPassport;
