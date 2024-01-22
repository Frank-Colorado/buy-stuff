import DirectoryImage from './DirectoryImage.jsx';
import FoodPhoto from './../assets/foodstockphoto.jpg';
import BeveragePhoto from './../assets/beveragestockphoto.jpg';

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
        <DirectoryImage image={FoodPhoto} title="Food" />
        <DirectoryImage image={BeveragePhoto} title="Beverages" />
      </div>
    </div>
  );
};

export default Directory;
