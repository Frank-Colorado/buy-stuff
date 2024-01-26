// React Router hooks
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;
