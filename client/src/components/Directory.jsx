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
        <div
          style={{
            backgroundImage: `url(${FoodPhoto})`,
            width: '50%',
            height: '100%',
            float: 'left',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <a> Shop Food </a>
        </div>
        <div
          style={{
            backgroundImage: `url(${BeveragePhoto})`,
            width: '50%',
            height: '100%',
            float: 'left',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <a> Shop Beverages </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
