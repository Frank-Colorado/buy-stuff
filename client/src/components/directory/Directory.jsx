import DirectoryImage from './DirectoryImage.jsx';
import WomensPhoto from './../../assets/shopWomens.jpg';
import MensPhoto from './../../assets/shopMen.jpg';

const Directory = () => {
  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          display: 'inline-block',
          width: '100%',
          height: '100%',
        }}
      >
        <DirectoryImage image={WomensPhoto} title="Womens" />
        <DirectoryImage image={MensPhoto} title="Mens" />
      </div>
    </div>
  );
};

export default Directory;
