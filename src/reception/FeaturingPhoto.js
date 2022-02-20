import './FeaturingPhoto.css';
import featuredImage from '../data/featuring-wedding-photo.jpeg';

function FeaturingPhoto(props){
  return(
    <div className={props.className}>
      <svg viewBox="-6 -6 46 46">
      <defs>
        <pattern id="featuredImage" patternUnits="userSpaceOnUse" width="30" height="30">
          <image href={featuredImage} x="0" y="-1" width="30" height="30" />
        </pattern>
      </defs>

        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          fill="url(#featuredImage)"

        />
      </svg>
    </div>
  );
}

export default FeaturingPhoto;
