// Filter the products based on the category and type
const filterProducts = (products, category, type) => {
  // First filter by category
  let filteredProducts = products.filter((product) => {
    if (category === 'All') {
      return products;
    } else {
      return product.category === category;
    }
  });
  // Then filter by type
  filteredProducts = filteredProducts.filter((product) => {
    if (type === 'All') {
      return filteredProducts;
    } else {
      return product.subtype === type;
    }
  });
  return filteredProducts;
};

export default filterProducts;
