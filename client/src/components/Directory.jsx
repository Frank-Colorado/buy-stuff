import DirectoryImage from './DirectoryImage.jsx';
import FoodPhoto from './../assets/foodstockphoto.jpg';
import BeveragePhoto from './../assets/beveragestockphoto.jpg';
import WomensPhoto from './../assets/shopWomens.jpg';
import MensPhoto from './../assets/shopMens.jpg';

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
        <DirectoryImage image={WomensPhoto} title="Food" />
        <DirectoryImage image={MensPhoto} title="Beverages" />
      </div>
    </div>
  );
};

export default Directory;
