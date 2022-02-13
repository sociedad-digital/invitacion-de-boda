import './WeddingPassport.css';
import WeddingPassportCover from './cover/WeddingPassportCover';
import WeddingPassportBack from './WeddingPassportBack';
import WeddingReception from './WeddingReception';
import WeddingPresentation from './presentation/WeddingPresentation';
import HTMLFlipBook from "react-pageflip";

function WeddingPassport(this: any) {
  return (
    <HTMLFlipBook
      width={88}
      height={125}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="WeddingPassport"
    >
      <WeddingPassportCover />
      <WeddingPresentation />
      <WeddingReception />
      <WeddingPassportBack />
    </HTMLFlipBook>

  );
}

export default WeddingPassport;
