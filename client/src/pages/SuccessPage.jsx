// React hooks
import { useEffect } from 'react';

const SuccessPage = () => {
  // useEffect hook to handle adding an order after a successful payment
  useEffect(() => {
    // Save the order to the database
    const saveOrder = async () => {
      try {
        // Get the user's cart from localStorage
        const cart = JSON.parse(localStorage.getItem('userCart'));
        // Create a products array to hold the cart items
        const products = cart.map((item) => {
          return {
            productId: item.id,
            selectedSize: item.size,
            quantity: item.quantity,
          };
        });
        // If the cart is not empty, create an order
        if (cart.length > 0) {
          // Add the order to the database
          const { data } = await addOrder({
            variables: {
              products,
            },
          });
        }
        // Clear the cart in localStorage
        localStorage.removeItem('userCart');
      } catch (error) {
        console.error('Error saving order: ', error);
      }
    };
    // Call the saveOrder function
    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was successful</p>
    </div>
  );
};

export default SuccessPage;
