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
      maxShadowOpacity={0.5}
      showCover={true}
      // usePortrait={false}
      mobileScrollSupport={true}
      className="WeddingPassport"
    >
      <WeddingPassportCover />
      <WeddingPresentation className="inside-left-page page"/>
      <WeddingReception className="inside-right-page page"/>
      <WeddingPassportBack />
    </HTMLFlipBook>

  );
}

export default WeddingPassport;
